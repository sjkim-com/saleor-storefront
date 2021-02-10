/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { order_by, pms_product_bool_exp } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: CategoryProducts
// ====================================================

export interface CategoryProducts_dms_displaycategoryproduct_connection_pageInfo {
  __typename: "PageInfo";
  endCursor: string;
  hasNextPage: boolean;
}

export interface CategoryProducts_dms_displaycategoryproduct_connection_edges_node_pms_product_pms_productimgs {
  __typename: "pms_productimg";
  /**
   * 画像||商品ID_画像番号
   */
  img: string | null;
  id: string;
}

export interface CategoryProducts_dms_displaycategoryproduct_connection_edges_node_pms_product_pms_productlangs {
  __typename: "pms_productlang";
  /**
   * 言語ID
   */
  lang_id: string;
  /**
   * 商品プロモーション文具
   */
  ad_copy: string | null;
  /**
   * 追加の属性1
   */
  attribute1: string | null;
  /**
   * 追加の属性2
   */
  attribute2: string | null;
  /**
   * 追加の属性3
   */
  attribute3: string | null;
  claim_info: string | null;
  delivery_info: string | null;
  /**
   * 詳細な説明
   */
  detail: string | null;
  /**
   * グループコード1
   */
  group1: string | null;
  /**
   * グループコード2
   */
  group2: string | null;
  /**
   * グループコード3
   */
  group3: string | null;
  /**
   * 商品アイコン||複数
   */
  icon: string | null;
  /**
   * キーワード
   */
  keyword: string | null;
  /**
   * 商品名
   */
  name: string | null;
  selling_point: string | null;
}

export interface CategoryProducts_dms_displaycategoryproduct_connection_edges_node_pms_product_pms_productoptions_pms_productoptionvalues {
  __typename: "pms_productoptionvalue";
  option_no: number;
  option_value_no: number;
  product_id: string;
  ins_dt: any | null;
  ins_id: string | null;
  upd_dt: any | null;
  upd_id: string | null;
  attribute_value: string | null;
  option_value: string | null;
  sort_no: any | null;
  use_yn: string | null;
}

export interface CategoryProducts_dms_displaycategoryproduct_connection_edges_node_pms_product_pms_productoptions {
  __typename: "pms_productoption";
  option_no: number;
  /**
   * 商品ID
   */
  product_id: string;
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
  attribute_id: string | null;
  /**
   * オプション名
   */
  option_name: string | null;
  /**
   * 商品オプションタイプコード
   */
  product_option_type_cd: string | null;
  /**
   * ソート順
   */
  sort_no: any | null;
  use_yn: string | null;
  /**
   * An array relationship
   */
  pms_productoptionvalues: CategoryProducts_dms_displaycategoryproduct_connection_edges_node_pms_product_pms_productoptions_pms_productoptionvalues[];
}

export interface CategoryProducts_dms_displaycategoryproduct_connection_edges_node_pms_product {
  __typename: "pms_product";
  id: string;
  /**
   * 商品番号
   */
  product_id: string;
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
   * 商品プロモーション文具
   */
  ad_copy: string | null;
  /**
   * 追加属性1
   */
  attribute1: string | null;
  /**
   * 追加属性2
   */
  attribute2: string | null;
  /**
   * 追加属性3
   */
  attribute3: string | null;
  /**
   * ブランドID
   */
  brand_id: string | null;
  /**
   * 供給業者番号
   */
  business_no: number | null;
  /**
   * 業者の商品ID
   */
  business_product_id: string | null;
  /**
   * 標準カテゴリーID
   */
  category_id: string | null;
  /**
   * 交換・返品・返金の案内
   */
  claim_info: string | null;
  /**
   * 手数料率
   */
  commission_rate: any | null;
  /**
   * 販売管理番号
   */
  control_no: number | null;
  /**
   * 送料無料
   */
  delivery_fee_free_yn: string | null;
  /**
   * 配送情報の案内
   */
  delivery_info: string | null;
  /**
   * 配送ポリシー番号
   */
  delivery_policy_no: number | null;
  /**
   * 詳細な説明
   */
  detail: string | null;
  /**
   * 展示可否
   */
  display_yn: string | null;
  /**
   * ERP商品ID
   */
  erp_product_id: string | null;
  /**
   * 指定日に配送可能可否
   */
  fixed_delivery_yn: string | null;
  /**
   * 性別タイプコード
   */
  gender_type_cd: string | null;
  /**
   * Gifticonの可能可否
   */
  gift_yn: string | null;
  global_ship_yn: string | null;
  /**
   * グループコード1
   */
  group1: string | null;
  /**
   * グループコード2
   */
  group2: string | null;
  /**
   * グループコード3
   */
  group3: string | null;
  /**
   * 商品アイコン||複数
   */
  icon: string | null;
  /**
   * キーワード||複数
   */
  keyword: string | null;
  /**
   * 通常価格
   */
  list_price: any | null;
  /**
   * 注文ができる最小数量
   */
  min_qty: any | null;
  /**
   * 商品名
   */
  name: string | null;
  /**
   * 品目情報の確認日時
   */
  notice_confirm_dt: any | null;
  /**
   * 品目情報の確認者
   */
  notice_confirm_id: string | null;
  /**
   * 品目情報を確認可否
   */
  notice_confirm_yn: string | null;
  /**
   * 店舗のイメージカット||商品ID_OFFSHOP
   */
  offshop_img: string | null;
  /**
   * 店舗ピックアップの割引率
   */
  offshop_pickup_dc_rate: any | null;
  /**
   * 店舗ピックアップの可能可否
   */
  offshop_pickup_yn: string | null;
  /**
   * オンライン決済可能可否
   */
  online_payment_yn: string | null;
  /**
   * オプション可否
   */
  option_yn: string | null;
  /**
   * Sabangnet伝送日時
   */
  out_send_dt: any | null;
  /**
   * Sabangnet伝送可否
   */
  out_send_yn: string | null;
  /**
   * 海外購買代行可否
   */
  overseas_purchase_yn: string | null;
  /**
   * 1人あたりの購入制限数量
   */
  person_qty: any | null;
  /**
   * ポイント積立率
   */
  point_save_rate: any | null;
  /**
   * ギフトの基本数量
   */
  present_qty: any | null;
  /**
   * 価格の適用日
   */
  price_apply_dt: any | null;
  /**
   * 商品告示タイプコード
   */
  product_notice_type_cd: string | null;
  /**
   * 商品タイプコード
   */
  product_type_cd: string | null;
  /**
   * 定期配送の無料配送可否
   */
  regular_delivery_fee_free_yn: string | null;
  /**
   * 定期配送の最大回数
   */
  regular_delivery_max_cnt: number | null;
  /**
   * 定期配送の最大数量
   */
  regular_delivery_max_qty: any | null;
  /**
   * 定期配送の最小回数
   */
  regular_delivery_min_cnt: number | null;
  /**
   * 定期配送のポイント積立可否
   */
  regular_delivery_point_save_yn: string | null;
  /**
   * 通常配送価格
   */
  regular_delivery_price: any | null;
  /**
   * 定期配送の可能可否
   */
  regular_delivery_yn: string | null;
  /**
   * 返戻の理由
   */
  reject_reason: string | null;
  /**
   * 予約配送が可能な日時
   */
  reserve_delivery_dt: any | null;
  /**
   * 予約販売可否
   */
  reserve_yn: string | null;
  /**
   * 販売終了日
   */
  sale_end_dt: any | null;
  /**
   * 販売価
   */
  sale_price: any | null;
  /**
   * 販売開始日
   */
  sale_start_dt: any | null;
  /**
   * 販売状況コード
   */
  sale_state_cd: string | null;
  /**
   * 検索除外可否
   */
  search_exc_yn: string | null;
  /**
   * セリングポイント
   */
  selling_point: string | null;
  /**
   * サイズ早見表番号
   */
  sizechart_no: number | null;
  /**
   * 在庫管理タイプコード
   */
  stock_control_type_cd: string | null;
  /**
   * 店舗ID
   */
  store_id: string | null;
  /**
   * 供給価格
   */
  supply_price: any | null;
  /**
   * 課稅分類コード
   */
  tax_type_cd: string | null;
  /**
   * テーマコード
   */
  theme_cd: string | null;
  /**
   * ―個数量
   */
  unit_qty: any | null;
  /**
   * 使用可否
   */
  use_yn: string | null;
  /**
   * ラッピングの広さ
   */
  wrap_volume: any | null;
  /**
   * ラッピング可能可否
   */
  wrap_yn: string | null;
  custom_id: string | null;
  design_saleproduct_id: string | null;
  /**
   * 부가가치세율
   */
  vat_rate: any | null;
  /**
   * An array relationship
   */
  pms_productimgs: CategoryProducts_dms_displaycategoryproduct_connection_edges_node_pms_product_pms_productimgs[];
  /**
   * An array relationship
   */
  pms_productlangs: CategoryProducts_dms_displaycategoryproduct_connection_edges_node_pms_product_pms_productlangs[];
  /**
   * An array relationship
   */
  pms_productoptions: CategoryProducts_dms_displaycategoryproduct_connection_edges_node_pms_product_pms_productoptions[];
}

export interface CategoryProducts_dms_displaycategoryproduct_connection_edges_node {
  __typename: "dms_displaycategoryproduct";
  /**
   * An object relationship
   */
  pms_product: CategoryProducts_dms_displaycategoryproduct_connection_edges_node_pms_product;
}

export interface CategoryProducts_dms_displaycategoryproduct_connection_edges {
  __typename: "dms_displaycategoryproductEdge";
  node: CategoryProducts_dms_displaycategoryproduct_connection_edges_node;
}

export interface CategoryProducts_dms_displaycategoryproduct_connection {
  __typename: "dms_displaycategoryproductConnection";
  pageInfo: CategoryProducts_dms_displaycategoryproduct_connection_pageInfo;
  edges: CategoryProducts_dms_displaycategoryproduct_connection_edges[];
}

export interface CategoryProducts {
  /**
   * fetch data from the table: "dms_displaycategoryproduct"
   */
  dms_displaycategoryproduct_connection: CategoryProducts_dms_displaycategoryproduct_connection;
}

export interface CategoryProductsVariables {
  displayCategoryIds?: string[] | null;
  first?: number | null;
  after?: string | null;
  sale_price?: order_by | null;
  name?: order_by | null;
  upd_dt?: order_by | null;
  pms_product?: pms_product_bool_exp | null;
}
