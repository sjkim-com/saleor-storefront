/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CmgtFeaturedProducts
// ====================================================

export interface CmgtFeaturedProducts_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_pms_product_pms_productimgs {
  __typename: "pms_productimg";
  id: string;
  /**
   * 画像||商品ID_画像番号
   */
  img: string | null;
  /**
   * 代替テキスト
   */
  text: string | null;
  /**
   * ソート順
   */
  sort_no: any | null;
}

export interface CmgtFeaturedProducts_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_pms_product {
  __typename: "pms_product";
  id: string;
  /**
   * 商品番号
   */
  product_id: string;
  /**
   * 商品名
   */
  name: string | null;
  /**
   * 販売価
   */
  sale_price: any | null;
  /**
   * An array relationship
   */
  pms_productimgs: CmgtFeaturedProducts_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_pms_product_pms_productimgs[];
}

export interface CmgtFeaturedProducts_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts {
  __typename: "dms_displaycategoryproduct";
  id: string;
  /**
   * An object relationship
   */
  pms_product: CmgtFeaturedProducts_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts_pms_product;
}

export interface CmgtFeaturedProducts_dms_displaycategory_connection_edges_node {
  __typename: "dms_displaycategory";
  id: string;
  /**
   * 店舗ID
   */
  store_id: string | null;
  /**
   * 展示会カテゴリーID
   */
  display_category_id: string;
  /**
   * 展示カテゴリ名
   */
  name: string | null;
  /**
   * An array relationship
   */
  dms_displaycategoryproducts: CmgtFeaturedProducts_dms_displaycategory_connection_edges_node_dms_displaycategoryproducts[];
}

export interface CmgtFeaturedProducts_dms_displaycategory_connection_edges {
  __typename: "dms_displaycategoryEdge";
  node: CmgtFeaturedProducts_dms_displaycategory_connection_edges_node;
}

export interface CmgtFeaturedProducts_dms_displaycategory_connection {
  __typename: "dms_displaycategoryConnection";
  edges: CmgtFeaturedProducts_dms_displaycategory_connection_edges[];
}

export interface CmgtFeaturedProducts {
  /**
   * fetch data from the table: "dms_displaycategory"
   */
  dms_displaycategory_connection: CmgtFeaturedProducts_dms_displaycategory_connection;
}

export interface CmgtFeaturedProductsVariables {
  storeId?: string | null;
  displayCategoryId?: string | null;
}
