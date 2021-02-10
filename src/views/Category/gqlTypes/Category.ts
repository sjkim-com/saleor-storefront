/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Category
// ====================================================

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_aggregate_aggregate {
  __typename: "dms_displaycategoryproduct_aggregate_fields";
  count: number | null;
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes_pms_attribute_pms_attributevalues {
  __typename: "pms_attributevalue";
  /**
   * 属性ID
   */
  attribute_id: string;
  /**
   * 属性値
   */
  attribute_value: string;
  /**
   * 作成日
   */
  ins_dt: any | null;
  /**
   * 作成者
   */
  ins_id: string | null;
  /**
   * 更新日
   */
  upd_dt: any | null;
  /**
   * 更新者
   */
  upd_id: string | null;
  /**
   * 追加した属性値||カラーチップコードなど
   */
  add_value: string | null;
  /**
   * 属性値名
   */
  name: string | null;
  /**
   * ソート順
   */
  sort_no: any | null;
  /**
   * 使用可否
   */
  use_yn: string | null;
  store_id: string;
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes_pms_attribute {
  __typename: "pms_attribute";
  /**
   * 属性ID
   */
  attribute_id: string;
  /**
   * 作成日
   */
  ins_dt: any | null;
  /**
   * 作成者
   */
  ins_id: string | null;
  /**
   * 更新日
   */
  upd_dt: any | null;
  /**
   * 更新者
   */
  upd_id: string | null;
  /**
   * 属性タイプコード
   */
  attribute_type_cd: string | null;
  /**
   * 属性名
   */
  name: string | null;
  /**
   * ソート順
   */
  sort_no: any | null;
  /**
   * 店舗ID
   */
  store_id: string;
  /**
   * 使用可否
   */
  use_yn: string | null;
  /**
   * An array relationship
   */
  pms_attributevalues: Category_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes_pms_attribute_pms_attributevalues[];
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes {
  __typename: "pms_categoryattribute";
  /**
   * An object relationship
   */
  pms_attribute: Category_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes_pms_attribute | null;
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category {
  __typename: "pms_category";
  /**
   * An array relationship
   */
  pms_categoryattributes: Category_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes[];
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_aggregate_nodes_pms_product {
  __typename: "pms_product";
  /**
   * An object relationship
   */
  pms_category: Category_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category | null;
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_aggregate_nodes {
  __typename: "dms_displaycategoryproduct";
  /**
   * An object relationship
   */
  pms_product: Category_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_aggregate_nodes_pms_product;
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_aggregate {
  __typename: "dms_displaycategoryproduct_aggregate";
  aggregate: Category_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_aggregate_aggregate | null;
  nodes: Category_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_aggregate_nodes[];
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategory_dms_displaycategoryproducts_aggregate_aggregate {
  __typename: "dms_displaycategoryproduct_aggregate_fields";
  count: number | null;
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategory_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes_pms_attribute_pms_attributevalues {
  __typename: "pms_attributevalue";
  /**
   * 属性ID
   */
  attribute_id: string;
  /**
   * 属性値
   */
  attribute_value: string;
  /**
   * 作成日
   */
  ins_dt: any | null;
  /**
   * 作成者
   */
  ins_id: string | null;
  /**
   * 更新日
   */
  upd_dt: any | null;
  /**
   * 更新者
   */
  upd_id: string | null;
  /**
   * 追加した属性値||カラーチップコードなど
   */
  add_value: string | null;
  /**
   * 属性値名
   */
  name: string | null;
  /**
   * ソート順
   */
  sort_no: any | null;
  /**
   * 使用可否
   */
  use_yn: string | null;
  store_id: string;
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategory_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes_pms_attribute {
  __typename: "pms_attribute";
  /**
   * 属性ID
   */
  attribute_id: string;
  /**
   * 作成日
   */
  ins_dt: any | null;
  /**
   * 作成者
   */
  ins_id: string | null;
  /**
   * 更新日
   */
  upd_dt: any | null;
  /**
   * 更新者
   */
  upd_id: string | null;
  /**
   * 属性タイプコード
   */
  attribute_type_cd: string | null;
  /**
   * 属性名
   */
  name: string | null;
  /**
   * ソート順
   */
  sort_no: any | null;
  /**
   * 店舗ID
   */
  store_id: string;
  /**
   * 使用可否
   */
  use_yn: string | null;
  /**
   * An array relationship
   */
  pms_attributevalues: Category_dms_displaycategory_connection_edges_node_dms_displaycategory_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes_pms_attribute_pms_attributevalues[];
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategory_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes {
  __typename: "pms_categoryattribute";
  /**
   * An object relationship
   */
  pms_attribute: Category_dms_displaycategory_connection_edges_node_dms_displaycategory_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes_pms_attribute | null;
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategory_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category {
  __typename: "pms_category";
  /**
   * An array relationship
   */
  pms_categoryattributes: Category_dms_displaycategory_connection_edges_node_dms_displaycategory_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes[];
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategory_dms_displaycategoryproducts_aggregate_nodes_pms_product {
  __typename: "pms_product";
  /**
   * An object relationship
   */
  pms_category: Category_dms_displaycategory_connection_edges_node_dms_displaycategory_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category | null;
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategory_dms_displaycategoryproducts_aggregate_nodes {
  __typename: "dms_displaycategoryproduct";
  /**
   * An object relationship
   */
  pms_product: Category_dms_displaycategory_connection_edges_node_dms_displaycategory_dms_displaycategoryproducts_aggregate_nodes_pms_product;
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategory_dms_displaycategoryproducts_aggregate {
  __typename: "dms_displaycategoryproduct_aggregate";
  aggregate: Category_dms_displaycategory_connection_edges_node_dms_displaycategory_dms_displaycategoryproducts_aggregate_aggregate | null;
  nodes: Category_dms_displaycategory_connection_edges_node_dms_displaycategory_dms_displaycategoryproducts_aggregate_nodes[];
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategory {
  __typename: "dms_displaycategory";
  id: string;
  /**
   * 展示会カテゴリーID
   */
  display_category_id: string;
  /**
   * 展示カテゴリ名
   */
  name: string | null;
  /**
   * An aggregated array relationship
   */
  dms_displaycategoryproducts_aggregate: Category_dms_displaycategory_connection_edges_node_dms_displaycategory_dms_displaycategoryproducts_aggregate;
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategoryproducts_aggregate_aggregate {
  __typename: "dms_displaycategoryproduct_aggregate_fields";
  count: number | null;
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes_pms_attribute_pms_attributevalues {
  __typename: "pms_attributevalue";
  /**
   * 属性ID
   */
  attribute_id: string;
  /**
   * 属性値
   */
  attribute_value: string;
  /**
   * 作成日
   */
  ins_dt: any | null;
  /**
   * 作成者
   */
  ins_id: string | null;
  /**
   * 更新日
   */
  upd_dt: any | null;
  /**
   * 更新者
   */
  upd_id: string | null;
  /**
   * 追加した属性値||カラーチップコードなど
   */
  add_value: string | null;
  /**
   * 属性値名
   */
  name: string | null;
  /**
   * ソート順
   */
  sort_no: any | null;
  /**
   * 使用可否
   */
  use_yn: string | null;
  store_id: string;
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes_pms_attribute {
  __typename: "pms_attribute";
  /**
   * 属性ID
   */
  attribute_id: string;
  /**
   * 作成日
   */
  ins_dt: any | null;
  /**
   * 作成者
   */
  ins_id: string | null;
  /**
   * 更新日
   */
  upd_dt: any | null;
  /**
   * 更新者
   */
  upd_id: string | null;
  /**
   * 属性タイプコード
   */
  attribute_type_cd: string | null;
  /**
   * 属性名
   */
  name: string | null;
  /**
   * ソート順
   */
  sort_no: any | null;
  /**
   * 店舗ID
   */
  store_id: string;
  /**
   * 使用可否
   */
  use_yn: string | null;
  /**
   * An array relationship
   */
  pms_attributevalues: Category_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes_pms_attribute_pms_attributevalues[];
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes {
  __typename: "pms_categoryattribute";
  /**
   * An object relationship
   */
  pms_attribute: Category_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes_pms_attribute | null;
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category {
  __typename: "pms_category";
  /**
   * An array relationship
   */
  pms_categoryattributes: Category_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category_pms_categoryattributes[];
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategoryproducts_aggregate_nodes_pms_product {
  __typename: "pms_product";
  /**
   * An object relationship
   */
  pms_category: Category_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategoryproducts_aggregate_nodes_pms_product_pms_category | null;
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategoryproducts_aggregate_nodes {
  __typename: "dms_displaycategoryproduct";
  /**
   * An object relationship
   */
  pms_product: Category_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategoryproducts_aggregate_nodes_pms_product;
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategoryproducts_aggregate {
  __typename: "dms_displaycategoryproduct_aggregate";
  aggregate: Category_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategoryproducts_aggregate_aggregate | null;
  nodes: Category_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategoryproducts_aggregate_nodes[];
}

export interface Category_dms_displaycategory_connection_edges_node_dms_displaycategories {
  __typename: "dms_displaycategory";
  /**
   * 展示会カテゴリーID
   */
  display_category_id: string;
  /**
   * 展示カテゴリ名
   */
  name: string | null;
  /**
   * An aggregated array relationship
   */
  dms_displaycategoryproducts_aggregate: Category_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategoryproducts_aggregate;
}

export interface Category_dms_displaycategory_connection_edges_node {
  __typename: "dms_displaycategory";
  id: string;
  /**
   * 展示会カテゴリーID
   */
  display_category_id: string;
  /**
   * 展示カテゴリ名
   */
  name: string | null;
  /**
   * An aggregated array relationship
   */
  dms_displaycategoryproducts_aggregate: Category_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_aggregate;
  /**
   * An object relationship
   */
  dms_displaycategory: Category_dms_displaycategory_connection_edges_node_dms_displaycategory | null;
  /**
   * An array relationship
   */
  dms_displaycategories: Category_dms_displaycategory_connection_edges_node_dms_displaycategories[];
}

export interface Category_dms_displaycategory_connection_edges {
  __typename: "dms_displaycategoryEdge";
  node: Category_dms_displaycategory_connection_edges_node;
}

export interface Category_dms_displaycategory_connection {
  __typename: "dms_displaycategoryConnection";
  edges: Category_dms_displaycategory_connection_edges[];
}

export interface Category_pms_attribute_connection_edges_node_pms_attributevalues {
  __typename: "pms_attributevalue";
  /**
   * 属性ID
   */
  attribute_id: string;
  /**
   * 属性値
   */
  attribute_value: string;
  /**
   * 作成日
   */
  ins_dt: any | null;
  /**
   * 作成者
   */
  ins_id: string | null;
  /**
   * 更新日
   */
  upd_dt: any | null;
  /**
   * 更新者
   */
  upd_id: string | null;
  /**
   * 追加した属性値||カラーチップコードなど
   */
  add_value: string | null;
  /**
   * 属性値名
   */
  name: string | null;
  /**
   * ソート順
   */
  sort_no: any | null;
  /**
   * 使用可否
   */
  use_yn: string | null;
  store_id: string;
}

export interface Category_pms_attribute_connection_edges_node {
  __typename: "pms_attribute";
  /**
   * 属性ID
   */
  attribute_id: string;
  /**
   * 作成日
   */
  ins_dt: any | null;
  /**
   * 作成者
   */
  ins_id: string | null;
  /**
   * 更新日
   */
  upd_dt: any | null;
  /**
   * 更新者
   */
  upd_id: string | null;
  /**
   * 属性タイプコード
   */
  attribute_type_cd: string | null;
  /**
   * 属性名
   */
  name: string | null;
  /**
   * ソート順
   */
  sort_no: any | null;
  /**
   * 店舗ID
   */
  store_id: string;
  /**
   * 使用可否
   */
  use_yn: string | null;
  /**
   * An array relationship
   */
  pms_attributevalues: Category_pms_attribute_connection_edges_node_pms_attributevalues[];
}

export interface Category_pms_attribute_connection_edges {
  __typename: "pms_attributeEdge";
  node: Category_pms_attribute_connection_edges_node;
}

export interface Category_pms_attribute_connection {
  __typename: "pms_attributeConnection";
  edges: Category_pms_attribute_connection_edges[];
}

export interface Category {
  /**
   * fetch data from the table: "dms_displaycategory"
   */
  dms_displaycategory_connection: Category_dms_displaycategory_connection;
  /**
   * fetch data from the table: "pms_attribute"
   */
  pms_attribute_connection: Category_pms_attribute_connection;
}

export interface CategoryVariables {
  id?: string | null;
}
