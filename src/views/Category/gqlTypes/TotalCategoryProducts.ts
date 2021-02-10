/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { pms_product_bool_exp } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: TotalCategoryProducts
// ====================================================

export interface TotalCategoryProducts_dms_displaycategoryproduct_connection_edges_node_pms_product {
  __typename: "pms_product";
  id: string;
  /**
   * 商品番号
   */
  product_id: string;
}

export interface TotalCategoryProducts_dms_displaycategoryproduct_connection_edges_node {
  __typename: "dms_displaycategoryproduct";
  /**
   * An object relationship
   */
  pms_product: TotalCategoryProducts_dms_displaycategoryproduct_connection_edges_node_pms_product;
}

export interface TotalCategoryProducts_dms_displaycategoryproduct_connection_edges {
  __typename: "dms_displaycategoryproductEdge";
  node: TotalCategoryProducts_dms_displaycategoryproduct_connection_edges_node;
}

export interface TotalCategoryProducts_dms_displaycategoryproduct_connection {
  __typename: "dms_displaycategoryproductConnection";
  edges: TotalCategoryProducts_dms_displaycategoryproduct_connection_edges[];
}

export interface TotalCategoryProducts {
  /**
   * fetch data from the table: "dms_displaycategoryproduct"
   */
  dms_displaycategoryproduct_connection: TotalCategoryProducts_dms_displaycategoryproduct_connection;
}

export interface TotalCategoryProductsVariables {
  displayCategoryIds?: string[] | null;
  pms_product?: pms_product_bool_exp | null;
}
