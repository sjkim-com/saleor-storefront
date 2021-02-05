/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MainMenu
// ====================================================

export interface MainMenu_dms_displaycategory_connection_edges_node_dms_displaycategorylangs {
  __typename: "dms_displaycategorylang";
  /**
   * 展示カテゴリ名
   */
  name: string | null;
  note: string | null;
  /**
   * 展示会カテゴリーID
   */
  display_category_id: string;
  /**
   * 言語ID
   */
  lang_id: string;
}

export interface MainMenu_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategorylangs {
  __typename: "dms_displaycategorylang";
  /**
   * 展示カテゴリ名
   */
  name: string | null;
  note: string | null;
  /**
   * 展示会カテゴリーID
   */
  display_category_id: string;
  /**
   * 言語ID
   */
  lang_id: string;
}

export interface MainMenu_dms_displaycategory_connection_edges_node_dms_displaycategories {
  __typename: "dms_displaycategory";
  /**
   * 展示カテゴリ名
   */
  name: string | null;
  /**
   * トップ展示カテゴリーID
   */
  upper_display_category_id: string | null;
  /**
   * 展示可否
   */
  display_yn: string | null;
  /**
   * リーフ可否
   */
  leaf_yn: string | null;
  /**
   * 説明
   */
  note: string | null;
  /**
   * ソート順
   */
  sort_no: any | null;
  /**
   * 店舗ID
   */
  store_id: string | null;
  /**
   * テンプレートID
   */
  template_id: string | null;
  /**
   * 更新日
   */
  upd_dt: any | null;
  /**
   * 更新者
   */
  upd_id: string | null;
  /**
   * 作成者
   */
  ins_id: string | null;
  /**
   * 作成日
   */
  ins_dt: any | null;
  /**
   * 展示会カテゴリーID
   */
  display_category_id: string;
  /**
   * An array relationship
   */
  dms_displaycategorylangs: MainMenu_dms_displaycategory_connection_edges_node_dms_displaycategories_dms_displaycategorylangs[];
}

export interface MainMenu_dms_displaycategory_connection_edges_node {
  __typename: "dms_displaycategory";
  /**
   * 展示カテゴリ名
   */
  name: string | null;
  /**
   * トップ展示カテゴリーID
   */
  upper_display_category_id: string | null;
  /**
   * 展示可否
   */
  display_yn: string | null;
  /**
   * リーフ可否
   */
  leaf_yn: string | null;
  /**
   * 説明
   */
  note: string | null;
  /**
   * ソート順
   */
  sort_no: any | null;
  /**
   * 店舗ID
   */
  store_id: string | null;
  /**
   * テンプレートID
   */
  template_id: string | null;
  /**
   * 更新日
   */
  upd_dt: any | null;
  /**
   * 更新者
   */
  upd_id: string | null;
  /**
   * 作成者
   */
  ins_id: string | null;
  /**
   * 作成日
   */
  ins_dt: any | null;
  /**
   * 展示会カテゴリーID
   */
  display_category_id: string;
  /**
   * An array relationship
   */
  dms_displaycategorylangs: MainMenu_dms_displaycategory_connection_edges_node_dms_displaycategorylangs[];
  /**
   * An array relationship
   */
  dms_displaycategories: MainMenu_dms_displaycategory_connection_edges_node_dms_displaycategories[];
}

export interface MainMenu_dms_displaycategory_connection_edges {
  __typename: "dms_displaycategoryEdge";
  node: MainMenu_dms_displaycategory_connection_edges_node;
}

export interface MainMenu_dms_displaycategory_connection {
  __typename: "dms_displaycategoryConnection";
  edges: MainMenu_dms_displaycategory_connection_edges[];
}

export interface MainMenu {
  /**
   * fetch data from the table: "dms_displaycategory"
   */
  dms_displaycategory_connection: MainMenu_dms_displaycategory_connection;
}
