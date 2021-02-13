import "./scss/index.scss";

import * as React from "react";
import { useIntl } from "react-intl";

import { commonMessages } from "@temp/intl";
import { IFilterAttributes, IFilters } from "@types";
import {
  Breadcrumbs,
  extractBreadcrumbs,
  ProductsFeatured,
} from "../../components";

import { ProductListHeader } from "../../@next/components/molecules";
import { ProductList } from "../../@next/components/organisms";
import { FilterSidebar } from "../../@next/components/organisms/FilterSidebar";

import { maybe } from "../../core/utils";

// import { Category_category } from "./gqlTypes/Category";
// import { CategoryProducts_products } from "./gqlTypes/CategoryProducts";
import { Category_dms_displaycategory_connection_edges_node } from "./gqlTypes/Category";
import { CategoryProducts_dms_displaycategoryproduct_connection_edges } from "./gqlTypes/CategoryProducts";

interface CategoryProducts_products {
  totalCount: number;
  edges: CategoryProducts_dms_displaycategoryproduct_connection_edges[];
}

interface SortItem {
  label: string;
  value?: string;
}

interface SortOptions extends Array<SortItem> {}

interface PageProps {
  activeFilters: number;
  attributes: IFilterAttributes[];
  activeSortOption: string;
  // category: Category_category;
  category: Category_dms_displaycategory_connection_edges_node;
  displayLoader: boolean;
  filters: IFilters;
  hasNextPage: boolean;
  products: CategoryProducts_products;
  sortOptions: SortOptions;
  clearFilters: () => void;
  onLoadMore: () => void;
  // onAttributeFiltersChange: (attributeSlug: string, value: string) => void;
  onAttributeFiltersChange: (
    attributeId: string,
    attributeValue: string
  ) => void;
  onOrder: (order: { value?: string; label: string }) => void;
}

const Page: React.FC<PageProps> = ({
  activeFilters,
  activeSortOption,
  attributes,
  category,
  displayLoader,
  hasNextPage,
  clearFilters,
  onLoadMore,
  products,
  filters,
  onOrder,
  sortOptions,
  onAttributeFiltersChange,
}) => {
  // const canDisplayProducts = maybe(
  //   () => !!products.edges && products.totalCount !== undefined
  // );
  const canDisplayProducts = maybe(
    () => products.edges.length > 0 && products.totalCount !== 0
  );
  const hasProducts = canDisplayProducts && !!products.totalCount;
  const [showFilters, setShowFilters] = React.useState(false);
  const intl = useIntl();

  // const getAttribute = (attributeSlug: string, valueSlug: string) => {
  //   return {
  //     attributeSlug,
  //     valueName: attributes
  //       .find(({ slug }) => attributeSlug === slug)
  //       .values.find(({ slug }) => valueSlug === slug).name,
  //     valueSlug,
  //   };
  // };

  const getAttribute = (attributeId: string, attributeValue: string) => {
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
      <div className="container">
        <Breadcrumbs breadcrumbs={extractBreadcrumbs(category)} />
        <FilterSidebar
          show={showFilters}
          hide={() => setShowFilters(false)}
          onAttributeFiltersChange={onAttributeFiltersChange}
          attributes={attributes}
          filters={filters}
        />
        <ProductListHeader
          activeSortOption={activeSortOption}
          openFiltersMenu={() => setShowFilters(true)}
          numberOfProducts={products ? products.totalCount : 0}
          activeFilters={activeFilters}
          activeFiltersAttributes={activeFiltersAttributes}
          clearFilters={clearFilters}
          sortOptions={sortOptions}
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
