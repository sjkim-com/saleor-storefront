import * as React from "react";
import { useIntl } from "react-intl";
import { RouteComponentProps } from "react-router";

import { prodListHeaderCommonMsg } from "@temp/intl";
import { ISearchFilters } from "@types";
import { StringParam, useQueryParam } from "use-query-params";
import { eciHost, eciAccount, eciDebug } from "@temp/constants";
import { Loader } from "@components/atoms";
import { NotFound, OfflinePlaceholder } from "../../components";
import NetworkStatus from "../../components/NetworkStatus";
import { PRODUCTS_PER_PAGE, SEARCH_FILTER } from "../../core/config";
import {
  convertSortByFromString,
  convertToAttributeScalar,
  getGraphqlIdFromDBId,
  maybe,
  eciCallApi,
} from "../../core/utils";
import Page from "./Page";
import { DH_CHECK_P_NOT_SAFE_PRIME } from "constants";

type ViewProps = RouteComponentProps<{
  id: string;
}>;

export const FilterQuerySet = {
  encode(valueObj) {
    const str = [];
    Object.keys(valueObj).forEach(value => {
      // str.push(`${value}_${valueObj[value].join("_")}`);
      str.push(`${value}-${valueObj[value].join("-")}`);
    });
    return str.join(":");
  },

  decode(strValue) {
    const obj = {};
    const propsWithValues = strValue.split(":").filter(n => n);
    propsWithValues.map(value => {
      // const propWithValues = value.split("_").filter(n => n);
      const propWithValues = value.split("-").filter(n => n);
      obj[propWithValues[0]] = propWithValues.slice(1);
    });
    return obj;
  },
};

export const View: React.FC<ViewProps> = ({ match }) => {
  const [sort, setSort] = useQueryParam("sortBy", StringParam);
  const [price, setPrice] = useQueryParam("price", StringParam);
  const [search, setSearch] = useQueryParam("q", StringParam);
  const [attributeFilters, setAttributeFilters] = useQueryParam(
    "filters",
    FilterQuerySet
  );
  const intl = useIntl();

  const [searchData, setSearchData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const [allSearchData, setAllSearchData] = React.useState(null);

  React.useEffect(() => {
    window._scq.push(["_setDebug", eciDebug]);
    window._scq.push(["_trackPageview"]);
  }, []);

  React.useEffect(() => {
    callApi();
  }, [setSearch, setAttributeFilters]);

  const data = {
    attributes: {
      edges: [],
    },
    products: {
      edges: [],
      pageInfo: {
        endCursor: 0,
        hasNextPage: false,
        currentPage: 0,
      },
      totalCount: 0,
    },
    init: false,
  };

  const filters: ISearchFilters = {
    attributes: attributeFilters,
    pageSize: PRODUCTS_PER_PAGE,
    priceGte: null,
    priceLte: null,
    sortBy: sort || null,
    price: price || null,
  };

  // const variables = {
  //   ...filters,
  //   attributes: filters.attributes
  //     ? convertToAttributeScalar(filters.attributes)
  //     : {},
  //   id: getGraphqlIdFromDBId(match.params.id, "Category"),
  //   query: search || null,
  //   sortBy: convertSortByFromString(filters.sortBy),
  // };

  const sortOptions = [
    {
      label: intl.formatMessage(prodListHeaderCommonMsg.sortOptionsClear),
      value: null,
    },
    {
      label: intl.formatMessage(prodListHeaderCommonMsg.sortOptionsPrice),
      value: "price-asc",
    },
    {
      label: intl.formatMessage(prodListHeaderCommonMsg.sortOptionsPriceDsc),
      value: "price-desc",
    },
    // {
    //   label: intl.formatMessage(prodListHeaderCommonMsg.sortOptionsName),
    //   value: "name",
    // },
    // {
    //   label: intl.formatMessage(prodListHeaderCommonMsg.sortOptionsNameDsc),
    //   value: "-name",
    // },
    {
      label: intl.formatMessage(prodListHeaderCommonMsg.sortOptionsUpdatedAt),
      value: "date-desc",
    },
    {
      label: intl.formatMessage(
        prodListHeaderCommonMsg.sortOptionsUpdatedAtDsc
      ),
      value: "date-asc",
    },
    // {
    //   label: intl.formatMessage(
    //     prodListHeaderCommonMsg.sortOptionsUpdatedAtDsc
    //   ),
    //   value: "data-asc",
    // },
    // {
    //   label: "",
    //   value: "",
    // },
    // {
    //   label: "",
    //   value: "",
    // },
  ];

  const priceOptions = [
    {
      label: intl.formatMessage(prodListHeaderCommonMsg.sortOptionsClear),
      value: null,
    },
  ];

  const callApi = async (page = 1, more = false) => {
    setLoading(true);
    let url = `//${eciHost}/search?aid=${eciAccount}&t=json`;
    if (filters.pageSize) {
      url += `&pl=${filters.pageSize}`;
    }
    if (search) {
      url += `&q=${search}`;
    }
    if (page) {
      url += `&p=${page}`;
    }

    if (sort) {
      url += `&s=${sort}`;
    }

    const allData = await eciCallApi(url);
    setAllSearchData(allData);

    if (price) {
      const priceValues = price.split("-");
      url += `&min=${priceValues[0]}&max=${priceValues[1]}`;
    }

    if (attributeFilters) {
      Object.keys(attributeFilters).forEach(key => {
        attributeFilters[key].map(attribute => {
          url += `&${key}=${attribute}`;
        });
      });
    }

    const resultData = await eciCallApi(url);

    if (more) {
      resultData.index.asp.itemList = [
        ...searchData.index.asp.itemList,
        ...resultData.index.asp.itemList,
      ];
    }

    setSearchData(resultData);
    setLoading(false);
  };

  const clearFilters = () => {
    setAttributeFilters({});
  };

  const onFiltersChange = (name, value) => {
    if (attributeFilters && attributeFilters.hasOwnProperty(name)) {
      if (attributeFilters[name].includes(value)) {
        if (filters.attributes[`${name}`].length === 1) {
          const att = { ...attributeFilters };
          delete att[`${name}`];
          setAttributeFilters({
            ...att,
          });
        } else {
          setAttributeFilters({
            ...attributeFilters,
            [`${name}`]: attributeFilters[`${name}`].filter(
              item => item !== value
            ),
          });
        }
      } else {
        setAttributeFilters({
          ...attributeFilters,
          [`${name}`]: [...attributeFilters[`${name}`], value],
        });
      }
    } else {
      setAttributeFilters({ ...attributeFilters, [`${name}`]: [value] });
    }
  };

  const handleLoadMore = () => {
    const nextPage = data.products.pageInfo.currentPage + 1;
    callApi(nextPage, true);
  };

  if (searchData) {
    const asp = searchData?.index.asp || {};
    const allAsp = allSearchData?.index.asp || {};

    const { itemList, pageNavi } = asp;
    const { facetList, categoryList } = allAsp;

    if (categoryList.root.list.length > 0) {
      const categoryObj = {
        node: {
          attribute_id: "category",
          id: "category",
          name: SEARCH_FILTER.category,
          pms_attributevalues: [],
        },
      };
      categoryList.root.list.map((category, index) => {
        if (index % 3 === 0) {
          const value = {
            attribute_id: "category",
            attribute_value: category,
            name: category,
          };
          categoryObj.node.pms_attributevalues.push(value);
        }
      });
      data.attributes.edges.push(categoryObj);
    }

    // オプション生成
    Object.keys(facetList).forEach(key => {
      const { list } = facetList[key];
      if (list.length > 0 && SEARCH_FILTER[key]) {
        const obj = {
          node: {
            attribute_id: key,
            id: key,
            name: SEARCH_FILTER[key],
            pms_attributevalues: [],
          },
        };
        list.map((option, index) => {
          if (index % 2 === 0) {
            const value = {
              attribute_id: key,
              attribute_value: option,
              name: option,
            };
            obj.node.pms_attributevalues.push(value);
          }
        });
        data.attributes.edges.push(obj);
      }

      if (key === "price" && priceOptions.length <= 1) {
        list.map((option, index) => {
          if (index % 2 === 0) {
            const obj = {
              label: option,
              value: option,
            };
            priceOptions.push(obj);
          }
        });
      }
    });

    // 検索結果
    if (itemList.length > 0) {
      itemList.map(item => {
        const obj = {
          node: {
            pms_product: {
              id: item.id,
              name: item.title,
              product_id: item.id,
              sale_price: parseInt(item.price, 10),
              pms_productimgs: [
                {
                  id: "",
                  img: item.img_url,
                },
              ],
            },
          },
        };
        data.products.edges.push(obj);
      });
    }
    // ページ情報
    data.products.pageInfo.endCursor = parseInt(pageNavi.endHit, 10);
    data.products.pageInfo.hasNextPage =
      parseInt(pageNavi.endHit, 10) !== parseInt(pageNavi.totalHit, 10);
    data.products.totalCount = parseInt(pageNavi.totalHit, 10);
    data.products.pageInfo.currentPage = parseInt(pageNavi.currentPage, 10);
    data.init = true;
  }

  return (
    <NetworkStatus>
      {isOnline => {
        if (data && data.products !== null) {
          return (
            <>
              {data.init ? (
                <Page
                  clearFilters={clearFilters}
                  attributes={data.attributes.edges.map(edge => edge.node)}
                  displayLoader={loading}
                  hasNextPage={maybe(
                    () => data.products.pageInfo.hasNextPage,
                    false
                  )}
                  sortOptions={sortOptions}
                  priceOptions={priceOptions}
                  setSearch={setSearch}
                  search={search}
                  activeSortOption={filters.sortBy}
                  activePriceOption={filters.price}
                  filters={filters}
                  products={data.products}
                  onAttributeFiltersChange={onFiltersChange}
                  onLoadMore={handleLoadMore}
                  activeFilters={
                    filters!.attributes
                      ? Object.keys(filters!.attributes).length
                      : 0
                  }
                  onOrder={(value, tag) => {
                    if (tag === "price") {
                      setPrice(value.value);
                      return;
                    }
                    setSort(value.value);
                  }}
                />
              ) : (
                <Loader />
              )}
            </>
          );
        }

        if (data && data.products === null) {
          return <NotFound />;
        }

        if (!isOnline) {
          return <OfflinePlaceholder />;
        }
      }}
    </NetworkStatus>
  );
};

export default View;
