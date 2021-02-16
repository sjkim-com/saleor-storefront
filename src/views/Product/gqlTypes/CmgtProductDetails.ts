/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CmgtProductDetails
// ====================================================

export interface CmgtProductDetails_pms_product_connection_edges_node_pms_category {
  __typename: "pms_category";
  /**
   * 標準カテゴリーID
   */
  category_id: string;
  /**
   * 標準カテゴリー名
   */
  name: string | null;
}

export interface CmgtProductDetails_pms_product_connection_edges_node_dms_displaycategoryproducts_connection_edges_node_dms_displaycategory {
  __typename: "dms_displaycategory";
  id: string;
  /**
   * 展示会カテゴリーID
   */
  display_category_id: string;
  /**
   * トップ展示カテゴリーID
   */
  upper_display_category_id: string | null;
  /**
   * 展示カテゴリ名
   */
  name: string | null;
}

export interface CmgtProductDetails_pms_product_connection_edges_node_dms_displaycategoryproducts_connection_edges_node {
  __typename: "dms_displaycategoryproduct";
  /**
   * An object relationship
   */
  dms_displaycategory: CmgtProductDetails_pms_product_connection_edges_node_dms_displaycategoryproducts_connection_edges_node_dms_displaycategory;
}

export interface CmgtProductDetails_pms_product_connection_edges_node_dms_displaycategoryproducts_connection_edges {
  __typename: "dms_displaycategoryproductEdge";
  node: CmgtProductDetails_pms_product_connection_edges_node_dms_displaycategoryproducts_connection_edges_node;
}

export interface CmgtProductDetails_pms_product_connection_edges_node_dms_displaycategoryproducts_connection {
  __typename: "dms_displaycategoryproductConnection";
  edges: CmgtProductDetails_pms_product_connection_edges_node_dms_displaycategoryproducts_connection_edges[];
}

export interface CmgtProductDetails_pms_product_connection_edges_node_pms_productoptions_connection_edges_node_pms_productoptionvalues_connection_edges_node {
  __typename: "pms_productoptionvalue";
  option_no: number;
  option_value: string | null;
  option_value_no: number;
}

export interface CmgtProductDetails_pms_product_connection_edges_node_pms_productoptions_connection_edges_node_pms_productoptionvalues_connection_edges {
  __typename: "pms_productoptionvalueEdge";
  node: CmgtProductDetails_pms_product_connection_edges_node_pms_productoptions_connection_edges_node_pms_productoptionvalues_connection_edges_node;
}

export interface CmgtProductDetails_pms_product_connection_edges_node_pms_productoptions_connection_edges_node_pms_productoptionvalues_connection {
  __typename: "pms_productoptionvalueConnection";
  edges: CmgtProductDetails_pms_product_connection_edges_node_pms_productoptions_connection_edges_node_pms_productoptionvalues_connection_edges[];
}

export interface CmgtProductDetails_pms_product_connection_edges_node_pms_productoptions_connection_edges_node {
  __typename: "pms_productoption";
  option_no: number;
  /**
   * オプション名
   */
  option_name: string | null;
  /**
   * An array relationship connection
   */
  pms_productoptionvalues_connection: CmgtProductDetails_pms_product_connection_edges_node_pms_productoptions_connection_edges_node_pms_productoptionvalues_connection;
}

export interface CmgtProductDetails_pms_product_connection_edges_node_pms_productoptions_connection_edges {
  __typename: "pms_productoptionEdge";
  node: CmgtProductDetails_pms_product_connection_edges_node_pms_productoptions_connection_edges_node;
}

export interface CmgtProductDetails_pms_product_connection_edges_node_pms_productoptions_connection {
  __typename: "pms_productoptionConnection";
  edges: CmgtProductDetails_pms_product_connection_edges_node_pms_productoptions_connection_edges[];
}

export interface CmgtProductDetails_pms_product_connection_edges_node {
  __typename: "pms_product";
  id: string;
  /**
   * 店舗ID
   */
  store_id: string | null;
  /**
   * 商品番号
   */
  product_id: string;
  /**
   * 標準カテゴリーID
   */
  category_id: string | null;
  /**
   * 商品名
   */
  name: string | null;
  /**
   * 販売価
   */
  sale_price: any | null;
  /**
   * 詳細な説明
   */
  detail: string | null;
  /**
   * An object relationship
   */
  pms_category: CmgtProductDetails_pms_product_connection_edges_node_pms_category | null;
  /**
   * An array relationship connection
   */
  dms_displaycategoryproducts_connection: CmgtProductDetails_pms_product_connection_edges_node_dms_displaycategoryproducts_connection;
  /**
   * An array relationship connection
   */
  pms_productoptions_connection: CmgtProductDetails_pms_product_connection_edges_node_pms_productoptions_connection;
}

export interface CmgtProductDetails_pms_product_connection_edges {
  __typename: "pms_productEdge";
  node: CmgtProductDetails_pms_product_connection_edges_node;
}

export interface CmgtProductDetails_pms_product_connection {
  __typename: "pms_productConnection";
  edges: CmgtProductDetails_pms_product_connection_edges[];
}

export interface CmgtProductDetails_pms_saleproduct_connection_edges_node_pms_warehousestocks_connection_edges_node {
  __typename: "pms_warehousestock";
  id: string;
  location_id: string | null;
  safe_stock_qty: number;
  stock_qty: number;
  warehouse_id: string;
}

export interface CmgtProductDetails_pms_saleproduct_connection_edges_node_pms_warehousestocks_connection_edges {
  __typename: "pms_warehousestockEdge";
  node: CmgtProductDetails_pms_saleproduct_connection_edges_node_pms_warehousestocks_connection_edges_node;
}

export interface CmgtProductDetails_pms_saleproduct_connection_edges_node_pms_warehousestocks_connection {
  __typename: "pms_warehousestockConnection";
  edges: CmgtProductDetails_pms_saleproduct_connection_edges_node_pms_warehousestocks_connection_edges[];
}

export interface CmgtProductDetails_pms_saleproduct_connection_edges_node_pms_saleproductoptionvalues {
  __typename: "pms_saleproductoptionvalue";
  /**
   * オプション番号
   */
  option_no: number | null;
  option_value_no: number | null;
}

export interface CmgtProductDetails_pms_saleproduct_connection_edges_node {
  __typename: "pms_saleproduct";
  id: string;
  /**
   * 상점ID
   */
  store_id: string | null;
  /**
   * 商品ID
   */
  product_id: string | null;
  /**
   * 単品ID
   */
  saleproduct_id: string;
  /**
   * 単品名
   */
  name: string | null;
  /**
   * 単品の状態コード
   */
  saleproduct_state_cd: string | null;
  /**
   * An array relationship connection
   */
  pms_warehousestocks_connection: CmgtProductDetails_pms_saleproduct_connection_edges_node_pms_warehousestocks_connection;
  /**
   * An array relationship
   */
  pms_saleproductoptionvalues: CmgtProductDetails_pms_saleproduct_connection_edges_node_pms_saleproductoptionvalues[];
}

export interface CmgtProductDetails_pms_saleproduct_connection_edges {
  __typename: "pms_saleproductEdge";
  node: CmgtProductDetails_pms_saleproduct_connection_edges_node;
}

export interface CmgtProductDetails_pms_saleproduct_connection {
  __typename: "pms_saleproductConnection";
  edges: CmgtProductDetails_pms_saleproduct_connection_edges[];
}

export interface CmgtProductDetails_pms_productimg_connection_edges_node {
  __typename: "pms_productimg";
  id: string;
  saleproduct_id: string | null;
  /**
   * 画像||商品ID_画像番号
   */
  img: string | null;
  /**
   * 代替テキスト
   */
  text: string | null;
}

export interface CmgtProductDetails_pms_productimg_connection_edges {
  __typename: "pms_productimgEdge";
  node: CmgtProductDetails_pms_productimg_connection_edges_node;
}

export interface CmgtProductDetails_pms_productimg_connection {
  __typename: "pms_productimgConnection";
  edges: CmgtProductDetails_pms_productimg_connection_edges[];
}

export interface CmgtProductDetails_pms_productnotice_connection_edges_node {
  __typename: "pms_productnotice";
  id: string;
  /**
   * 商品ID
   */
  product_id: string;
  /**
   * 商品告示項目ID
   */
  product_notice_field_id: string;
  /**
   * 商品告示タイプコード
   */
  product_notice_type_cd: string;
  /**
   * 内容
   */
  detail: string | null;
}

export interface CmgtProductDetails_pms_productnotice_connection_edges {
  __typename: "pms_productnoticeEdge";
  node: CmgtProductDetails_pms_productnotice_connection_edges_node;
}

export interface CmgtProductDetails_pms_productnotice_connection {
  __typename: "pms_productnoticeConnection";
  edges: CmgtProductDetails_pms_productnotice_connection_edges[];
}

export interface CmgtProductDetails {
  /**
   * fetch data from the table: "pms_product"
   */
  pms_product_connection: CmgtProductDetails_pms_product_connection;
  /**
   * fetch data from the table: "pms_saleproduct"
   */
  pms_saleproduct_connection: CmgtProductDetails_pms_saleproduct_connection;
  /**
   * fetch data from the table: "pms_productimg"
   */
  pms_productimg_connection: CmgtProductDetails_pms_productimg_connection;
  /**
   * fetch data from the table: "pms_productnotice"
   */
  pms_productnotice_connection: CmgtProductDetails_pms_productnotice_connection;
}

export interface CmgtProductDetailsVariables {
  storeId?: string | null;
  productId?: string | null;
}
