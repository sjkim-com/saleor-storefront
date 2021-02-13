import {
  CategoryProducts_dms_displaycategoryproduct_connection_edges_node,
  CategoryProducts_dms_displaycategoryproduct_connection_edges_node_pms_product,
  CategoryProducts_dms_displaycategoryproduct_connection_edges_node_pms_product_pms_productimgs,
} from "src/views/Category/gqlTypes/CategoryProducts";

import { ProductDetails_product_category_products_edges } from "../gqlTypes/ProductDetails";

export const createCategoryProducts = (
  products: ProductDetails_product_category_products_edges[]
) => {
  const categoryProducts: CategoryProducts_dms_displaycategoryproduct_connection_edges_node[] = [];

  products.forEach(product => {
    const { node } = product;

    const pmsProductImage: CategoryProducts_dms_displaycategoryproduct_connection_edges_node_pms_product_pms_productimgs = {
      __typename: "pms_productimg",
      img: node.thumbnail.url,
      id: node.id,
    };

    const pmsProductImages: CategoryProducts_dms_displaycategoryproduct_connection_edges_node_pms_product_pms_productimgs[] = [];
    pmsProductImages.push(pmsProductImage);

    const pmsProduct: CategoryProducts_dms_displaycategoryproduct_connection_edges_node_pms_product = {
      __typename: "pms_product",
      id: node.id,
      /**
       * 商品番号
       */
      product_id: node.id,
      /**
       * 作成日
       */
      ins_dt: null,
      /**
       * 作成者
       */
      ins_id: null,
      /**
       * 更新日
       */
      upd_dt: null,
      /**
       * 更新者
       */
      upd_id: null,
      /**
       * 商品プロモーション文具
       */
      ad_copy: null,
      /**
       * 追加属性1
       */
      attribute1: null,
      /**
       * 追加属性2
       */
      attribute2: null,
      /**
       * 追加属性3
       */
      attribute3: null,
      /**
       * ブランドID
       */
      brand_id: null,
      /**
       * 供給業者番号
       */
      business_no: null,
      /**
       * 業者の商品ID
       */
      business_product_id: null,
      /**
       * 標準カテゴリーID
       */
      category_id: null,
      /**
       * 交換・返品・返金の案内
       */
      claim_info: null,
      /**
       * 手数料率
       */
      commission_rate: null,
      /**
       * 販売管理番号
       */
      control_no: null,
      /**
       * 送料無料
       */
      delivery_fee_free_yn: null,
      /**
       * 配送情報の案内
       */
      delivery_info: null,
      /**
       * 配送ポリシー番号
       */
      delivery_policy_no: null,
      /**
       * 詳細な説明
       */
      detail: null,
      /**
       * 展示可否
       */
      display_yn: null,
      /**
       * ERP商品ID
       */
      erp_product_id: null,
      /**
       * 指定日に配送可能可否
       */
      fixed_delivery_yn: null,
      /**
       * 性別タイプコード
       */
      gender_type_cd: null,
      /**
       * Gifticonの可能可否
       */
      gift_yn: null,
      global_ship_yn: null,
      /**
       * グループコード1
       */
      group1: null,
      /**
       * グループコード2
       */
      group2: null,
      /**
       * グループコード3
       */
      group3: null,
      /**
       * 商品アイコン||複数
       */
      icon: null,
      /**
       * キーワード||複数
       */
      keyword: null,
      /**
       * 通常価格
       */
      list_price: null,
      /**
       * 注文ができる最小数量
       */
      min_qty: null,
      /**
       * 商品名
       */
      name: node.name,
      /**
       * 品目情報の確認日時
       */
      notice_confirm_dt: null,
      /**
       * 品目情報の確認者
       */
      notice_confirm_id: null,
      /**
       * 品目情報を確認可否
       */
      notice_confirm_yn: null,
      /**
       * 店舗のイメージカット||商品ID_OFFSHOP
       */
      offshop_img: null,
      /**
       * 店舗ピックアップの割引率
       */
      offshop_pickup_dc_rate: null,
      /**
       * 店舗ピックアップの可能可否
       */
      offshop_pickup_yn: null,
      /**
       * オンライン決済可能可否
       */
      online_payment_yn: null,
      /**
       * オプション可否
       */
      option_yn: null,
      /**
       * Sabangnet伝送日時
       */
      out_send_dt: null,
      /**
       * Sabangnet伝送可否
       */
      out_send_yn: null,
      /**
       * 海外購買代行可否
       */
      overseas_purchase_yn: null,
      /**
       * 1人あたりの購入制限数量
       */
      person_qty: null,
      /**
       * ポイント積立率
       */
      point_save_rate: null,
      /**
       * ギフトの基本数量
       */
      present_qty: null,
      /**
       * 価格の適用日
       */
      price_apply_dt: null,
      /**
       * 商品告示タイプコード
       */
      product_notice_type_cd: null,
      /**
       * 商品タイプコード
       */
      product_type_cd: null,
      /**
       * 定期配送の無料配送可否
       */
      regular_delivery_fee_free_yn: null,
      /**
       * 定期配送の最大回数
       */
      regular_delivery_max_cnt: null,
      /**
       * 定期配送の最大数量
       */
      regular_delivery_max_qty: null,
      /**
       * 定期配送の最小回数
       */
      regular_delivery_min_cnt: null,
      /**
       * 定期配送のポイント積立可否
       */
      regular_delivery_point_save_yn: null,
      /**
       * 通常配送価格
       */
      regular_delivery_price: null,
      /**
       * 定期配送の可能可否
       */
      regular_delivery_yn: null,
      /**
       * 返戻の理由
       */
      reject_reason: null,
      /**
       * 予約配送が可能な日時
       */
      reserve_delivery_dt: null,
      /**
       * 予約販売可否
       */
      reserve_yn: null,
      /**
       * 販売終了日
       */
      sale_end_dt: null,
      /**
       * 販売価
       */
      // 通常価格・税抜き価格
      sale_price: node.pricing.priceRangeUndiscounted.start.net.amount,
      /**
       * 販売開始日
       */
      sale_start_dt: null,
      /**
       * 販売状況コード
       */
      sale_state_cd: null,
      /**
       * 検索除外可否
       */
      search_exc_yn: null,
      /**
       * セリングポイント
       */
      selling_point: null,
      /**
       * サイズ早見表番号
       */
      sizechart_no: null,
      /**
       * 在庫管理タイプコード
       */
      stock_control_type_cd: null,
      /**
       * 店舗ID
       */
      store_id: null,
      /**
       * 供給価格
       */
      supply_price: null,
      /**
       * 課稅分類コード
       */
      tax_type_cd: null,
      /**
       * テーマコード
       */
      theme_cd: null,
      /**
       * ―個数量
       */
      unit_qty: null,
      /**
       * 使用可否
       */
      use_yn: null,
      /**
       * ラッピングの広さ
       */
      wrap_volume: null,
      /**
       * ラッピング可能可否
       */
      wrap_yn: null,
      custom_id: null,
      design_saleproduct_id: null,
      /**
       * 부가가치세율
       */
      vat_rate: null,
      /**
       * An array relationship
       */
      pms_productimgs: pmsProductImages,
      /**
       * An array relationship
       */
      pms_productlangs: [],
      /**
       * An array relationship
       */
      pms_productoptions: [],
    };

    categoryProducts.push({
      __typename: "dms_displaycategoryproduct",
      pms_product: pmsProduct,
    });
  });

  return categoryProducts;
};
