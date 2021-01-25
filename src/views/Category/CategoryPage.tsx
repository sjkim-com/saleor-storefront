import { useProductList } from "@saleor/sdk";
import { BaseCategory } from "@saleor/sdk/lib/fragments/gqlTypes/BaseCategory";
import { CategoryDetails } from "@saleor/sdk/lib/fragments/gqlTypes/CategoryDetails";
import { NextPage } from "next";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { StringParam, useQueryParam } from "use-query-params";

import { Loader, OfflinePlaceholder } from "@components/atoms";
import { Attribute } from "@graphql/gqlTypes/Attribute";
import { channelSlug } from "@temp/constants";
import { prodListHeaderCommonMsg } from "@temp/intl";
import { IFilters } from "@types";
import { FilterQuerySet } from "@utils/collections";

import { MetaWrapper, NotFound } from "../../components";
import NetworkStatus from "../../components/NetworkStatus";
import { PRODUCTS_PER_PAGE } from "../../core/config";
import {
  convertSortByFromString,
  convertToAttributeScalar,
  getGraphqlIdFromDBId,
} from "../../core/utils";
import Page from "./Page";
import {
  TypedCategoryProductsDataQuery,
  TypedCategoryProductsQuery,
} from "./queries";

export type CategoryPageProps = {
  params: { slug: string } | undefined;
  data:
    | {
        id: string;
        categoryDetails: CategoryDetails;
        ancestors: BaseCategory[];
        attributes: Attribute[];
      }
    | undefined
    | null;
};

export const CategoryPage: NextPage<CategoryPageProps> = ({ params, data }) => {
  console.log(params, data);

  // const [sort, setSort] = useQueryParam("sortBy", StringParam);
  // const [attributeFilters, setAttributeFilters] = useQueryParam(
  //   "filters",
  //   FilterQuerySet
  // );

  // const filters: IFilters = {
  //   attributes: attributeFilters,
  //   pageSize: PRODUCTS_PER_PAGE,
  //   priceGte: null,
  //   priceLte: null,
  //   sortBy: sort || null,
  // };
  // const variables = {
  //   ...filters,
  //   attributes: filters.attributes
  //     ? convertToAttributeScalar(filters.attributes)
  //     : {},
  //   channel: channelSlug,
  //   slug,
  //   sortBy: convertSortByFromString(filters.sortBy),
  // };

  // const clearFilters = () => {
  //   setAttributeFilters({});
  // };

  // const onFiltersChange = (name, value) => {
  //   if (attributeFilters && attributeFilters.hasOwnProperty(name)) {
  //     if (attributeFilters[name].includes(value)) {
  //       if (filters.attributes[`${name}`].length === 1) {
  //         const att = { ...attributeFilters };
  //         delete att[`${name}`];
  //         setAttributeFilters({
  //           ...att,
  //         });
  //       } else {
  //         setAttributeFilters({
  //           ...attributeFilters,
  //           [`${name}`]: attributeFilters[`${name}`].filter(
  //             item => item !== value
  //           ),
  //         });
  //       }
  //     } else {
  //       setAttributeFilters({
  //         ...attributeFilters,
  //         [`${name}`]: [...attributeFilters[`${name}`], value],
  //       });
  //     }
  //   } else {
  //     setAttributeFilters({ ...attributeFilters, [`${name}`]: [value] });
  //   }
  // };

  return (
    <NetworkStatus>
      {isOnline =>
        isOnline ? data ? <h1>Page</h1> : <NotFound /> : <NotFound />
      }
    </NetworkStatus>
  );
  // return (
  //   <NetworkStatus>
  //     {isOnline =>
  //       isOnline ? (
  //         <TypedCategoryProductsDataQuery
  //           variables={variables}
  //           errorPolicy="all"
  //           loaderFull
  //         >
  //           {categoryData => {
  //             if (categoryData.loading) {
  //               return <Loader />;
  //             }

  //             if (categoryData.data && categoryData.data.category === null) {
  //               return <NotFound />;
  //             }

  //             const canDisplayFilters =
  //               !!categoryData.data?.attributes?.edges &&
  //               !!categoryData.data?.category?.name;

  //             return (
  //               <TypedCategoryProductsQuery variables={variables}>
  //                 {categoryProducts => {
  //                   if (!canDisplayFilters && categoryProducts.loading) {
  //                     return <Loader />;
  //                   }

  //                   if (canDisplayFilters) {
  //                     const handleLoadMore = () =>
  //                       categoryProducts.loadMore(
  //                         (prev, next) => ({
  //                           ...prev,
  //                           products: {
  //                             ...prev.products,
  //                             edges: [
  //                               ...prev.products.edges,
  //                               ...next.products.edges,
  //                             ],
  //                             pageInfo: next.products.pageInfo,
  //                           },
  //                         }),
  //                         {
  //                           after:
  //                             categoryProducts.data.products.pageInfo.endCursor,
  //                         }
  //                       );

  //                     return (
  //                       <MetaWrapper
  //                         meta={{
  //                           description:
  //                             categoryData.data.category.seoDescription,
  //                           title: categoryData.data.category.seoTitle,
  //                           type: "product.category",
  //                         }}
  //                       >
  //                         <Page
  //                           clearFilters={clearFilters}
  //                           attributes={categoryData.data.attributes.edges.map(
  //                             edge => edge.node
  //                           )}
  //                           category={categoryData.data.category}
  //                           displayLoader={categoryData.loading}
  //                           hasNextPage={
  //                             categoryProducts.data?.products?.pageInfo
  //                               .hasNextPage
  //                           }
  //                           sortOptions={sortOptions}
  //                           activeSortOption={filters.sortBy}
  //                           filters={filters}
  //                           products={categoryProducts.data.products}
  //                           onAttributeFiltersChange={onFiltersChange}
  //                           onLoadMore={handleLoadMore}
  //                           activeFilters={
  //                             filters!.attributes
  //                               ? Object.keys(filters!.attributes).length
  //                               : 0
  //                           }
  //                           onOrder={value => {
  //                             setSort(value.value);
  //                           }}
  //                         />
  //                       </MetaWrapper>
  //                     );
  //                   }

  //                   return null;
  //                 }}
  //               </TypedCategoryProductsQuery>
  //             );
  //           }}
  //         </TypedCategoryProductsDataQuery>
  //       ) : (
  //         <OfflinePlaceholder />
  //       )
  //     }
  //   </NetworkStatus>
  // );
};
