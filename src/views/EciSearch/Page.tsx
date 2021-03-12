import "./scss/index.scss";

import * as React from "react";
import { useIntl } from "react-intl";

import { commonMessages } from "@temp/intl";
import { IFilterAttributes, ISearchFilters } from "@types";
import { DebounceChange, ProductsFeatured, TextField } from "../../components";

import { ProductListHeader } from "../../@next/components/molecules";
import { ProductList } from "../../@next/components/organisms";
import { FilterSidebar } from "../../@next/components/organisms/FilterSidebar";

import { maybe } from "../../core/utils";

interface SortItem {
  label: string;
  value?: string;
}

interface SortOptions extends Array<SortItem> {}
interface priceOptions extends Array<SortItem> {}

interface PageProps {
  activeFilters: number;
  attributes: IFilterAttributes[];
  activeSortOption: string;
  activePriceOption: string;
  displayLoader: boolean;
  filters: ISearchFilters;
  hasNextPage: boolean;
  search?: string;
  setSearch?: (
    newValue: string,
    updateType?: "replace" | "replaceIn" | "push" | "pushIn"
  ) => void;
  products: any;
  sortOptions: SortOptions;
  priceOptions: priceOptions;
  clearFilters: () => void;
  onLoadMore: () => void;
  onAttributeFiltersChange: (attributeSlug: string, value: string) => void;
  onOrder: (order: { value?: string; label: string }, tag) => void;
}

const Page: React.FC<PageProps> = ({
  activeFilters,
  activePriceOption,
  activeSortOption,
  attributes,
  search,
  setSearch,
  displayLoader,
  hasNextPage,
  clearFilters,
  onLoadMore,
  products,
  filters,
  onOrder,
  sortOptions,
  priceOptions,
  onAttributeFiltersChange,
}) => {
  const canDisplayProducts = maybe(
    () => !!products.edges && products.totalCount !== undefined
  );

  const hasProducts = canDisplayProducts && !!products.totalCount;
  const [showFilters, setShowFilters] = React.useState(false);
  const intl = useIntl();

  const getAttribute = (attributeId: string, attributeValue: string) => {
    console.log(attributeId, attributeValue);
    if (attributes.length > 0) {
      return {
        attributeId,
        valueName: attributes
          .find(({ attribute_id }) => attributeId === attribute_id)
          .pms_attributevalues.find(
            ({ attribute_value }) => attributeValue === attribute_value
          ).name,
        attributeValue,
      };
    }
  };

  const activeFiltersAttributes =
    filters &&
    filters.attributes &&
    Object.keys(filters.attributes).reduce(
      (acc, key) =>
        acc.concat(
          // filters.attributes[key].map(valueSlug => getAttribute(key, valueSlug))
          filters.attributes[key].map(attributeValue =>
            getAttribute(key, attributeValue)
          )
        ),
      []
    );

  return (
    <div className="category">
      <div className="search-page">
        <div className="search-page__header">
          <div className="search-page__header__input container">
            <DebounceChange
              debounce={evt =>
                setSearch((evt.target.value as string).toLowerCase())
              }
              value={search}
              time={500}
            >
              {({ change, value }) => {
                return (
                  <TextField
                    autoFocus
                    label={intl.formatMessage({
                      defaultMessage: "Search term:",
                    })}
                    onChange={change}
                    value={value}
                  />
                );
              }}
            </DebounceChange>
          </div>
        </div>
      </div>
      <div className="container">
        <FilterSidebar
          show={showFilters}
          hide={() => setShowFilters(false)}
          onAttributeFiltersChange={onAttributeFiltersChange}
          attributes={attributes}
          filters={filters}
        />
        <ProductListHeader
          activeSortOption={activeSortOption}
          activePriceOption={activePriceOption}
          openFiltersMenu={() => setShowFilters(true)}
          numberOfProducts={products ? products.totalCount : 0}
          activeFilters={activeFilters}
          activeFiltersAttributes={activeFiltersAttributes}
          clearFilters={clearFilters}
          sortOptions={sortOptions}
          priceOptions={priceOptions}
          onChange={onOrder}
          onCloseFilterAttribute={onAttributeFiltersChange}
        />
        {canDisplayProducts && (
          <ProductList
            products={products.edges.map(edge => edge.node)}
            canLoadMore={hasNextPage}
            loading={displayLoader}
            onLoadMore={onLoadMore}
          />
        )}
      </div>

      {!hasProducts && (
        <ProductsFeatured
          title={intl.formatMessage(commonMessages.youMightLike)}
        />
      )}
    </div>
  );
};

export default Page;
