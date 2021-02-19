// import gql from "graphql-tag";

// import { TypedQuery } from "../../core/queries";
// import {
//   basicProductFragment,
//   productPricingFragment,
// } from "../Product/queries";
// import { Category, CategoryVariables } from "./gqlTypes/Category";
// import {
//   CategoryProducts,
//   CategoryProductsVariables,
// } from "./gqlTypes/CategoryProducts";

// export const categoryProductsDataQuery = gql`
//   query Category($id: ID!) {
//     category(id: $id) {
//       seoDescription
//       seoTitle
//       id
//       name
//       backgroundImage {
//         url
//       }
//       ancestors(last: 5) {
//         edges {
//           node {
//             id
//             name
//           }
//         }
//       }
//     }
//     attributes(
//       filter: { inCategory: $id, filterableInStorefront: true }
//       first: 100
//     ) {
//       edges {
//         node {
//           id
//           name
//           slug
//           values {
//             id
//             name
//             slug
//           }
//         }
//       }
//     }
//   }
// `;

// export const TypedCategoryProductsDataQuery = TypedQuery<
//   Category,
//   CategoryVariables
// >(categoryProductsDataQuery);

// export const categoryProductsQuery = gql`
//   ${basicProductFragment}
//   ${productPricingFragment}
//   query CategoryProducts(
//     $id: ID!
//     $attributes: [AttributeInput]
//     $after: String
//     $pageSize: Int
//     $sortBy: ProductOrder
//     $priceLte: Float
//     $priceGte: Float
//   ) {
//     products(
//       after: $after
//       first: $pageSize
//       sortBy: $sortBy
//       filter: {
//         attributes: $attributes
//         categories: [$id]
//         minimalPrice: { gte: $priceGte, lte: $priceLte }
//       }
//     ) {
//       totalCount
//       edges {
//         node {
//           ...BasicProductFields
//           ...ProductPricingField
//           category {
//             id
//             name
//           }
//         }
//       }
//       pageInfo {
//         endCursor
//         hasNextPage
//         hasPreviousPage
//         startCursor
//       }
//     }
//   }
// `;

// export const TypedCategoryProductsQuery = TypedQuery<
//   CategoryProducts,
//   CategoryProductsVariables
// >(categoryProductsQuery);

import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import { Category, CategoryVariables } from "./gqlTypes/Category";
import {
  CategoryProducts,
  CategoryProductsVariables,
} from "./gqlTypes/CategoryProducts";
import {
  TotalCategoryProducts,
  TotalCategoryProductsVariables,
} from "./gqlTypes/TotalCategoryProducts";

export const categoryProductsDataQuery = gql`
  query Category($id: String) {
    dms_displaycategory_connection(
      where: { display_category_id: { _eq: $id } }
    ) {
      edges {
        node {
          id
          display_category_id
          name
          dms_displaycategoryproducts_aggregate {
            aggregate {
              count
            }
            nodes {
              pms_product {
                pms_category {
                  pms_categoryattributes(where: { use_yn: { _eq: "Y" } }) {
                    pms_attribute {
                      attribute_id
                      ins_dt
                      ins_id
                      upd_dt
                      upd_id
                      attribute_type_cd
                      name
                      sort_no
                      store_id
                      use_yn
                      pms_attributevalues(where: { use_yn: { _eq: "Y" } }) {
                        attribute_id
                        attribute_value
                        ins_dt
                        ins_id
                        upd_dt
                        upd_id
                        add_value
                        name
                        sort_no
                        use_yn
                        store_id
                      }
                    }
                  }
                }
              }
            }
          }
          dms_displaycategory {
            id
            display_category_id
            name
            dms_displaycategoryproducts_aggregate {
              aggregate {
                count
              }
              nodes {
                pms_product {
                  pms_category {
                    pms_categoryattributes(where: { use_yn: { _eq: "Y" } }) {
                      pms_attribute {
                        attribute_id
                        ins_dt
                        ins_id
                        upd_dt
                        upd_id
                        attribute_type_cd
                        name
                        sort_no
                        store_id
                        use_yn
                        pms_attributevalues(where: { use_yn: { _eq: "Y" } }) {
                          attribute_id
                          attribute_value
                          ins_dt
                          ins_id
                          upd_dt
                          upd_id
                          add_value
                          name
                          sort_no
                          use_yn
                          store_id
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          dms_displaycategories {
            display_category_id
            name
            dms_displaycategoryproducts_aggregate {
              aggregate {
                count
              }
              nodes {
                pms_product {
                  pms_category {
                    pms_categoryattributes(where: { use_yn: { _eq: "Y" } }) {
                      pms_attribute {
                        attribute_id
                        ins_dt
                        ins_id
                        upd_dt
                        upd_id
                        attribute_type_cd
                        name
                        sort_no
                        store_id
                        use_yn
                        pms_attributevalues(where: { use_yn: { _eq: "Y" } }) {
                          attribute_id
                          attribute_value
                          ins_dt
                          ins_id
                          upd_dt
                          upd_id
                          add_value
                          name
                          sort_no
                          use_yn
                          store_id
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    pms_attribute_connection(where: { use_yn: { _eq: "Y" } }) {
      edges {
        node {
          attribute_id
          ins_dt
          ins_id
          upd_dt
          upd_id
          attribute_type_cd
          name
          sort_no
          store_id
          use_yn
          pms_attributevalues(where: { use_yn: { _eq: "Y" } }) {
            attribute_id
            attribute_value
            ins_dt
            ins_id
            upd_dt
            upd_id
            add_value
            name
            sort_no
            use_yn
            store_id
          }
        }
      }
    }
  }
`;

export const TypedCategoryProductsDataQuery = TypedQuery<
  Category,
  CategoryVariables
>(categoryProductsDataQuery);

export const categoryProductsQuery = gql`
  query CategoryProducts(
    $displayCategoryIds: [String!]
    $first: Int = null
    $after: String = null
    $sale_price: order_by = null
    $name: order_by = null
    $upd_dt: order_by = null
    $pms_product: pms_product_bool_exp = {}
  ) {
    dms_displaycategoryproduct_connection(
      where: {
        display_category_id: { _in: $displayCategoryIds }
        pms_product: $pms_product
      }
      first: $first
      after: $after
      order_by: {
        pms_product: { sale_price: $sale_price, name: $name, upd_dt: $upd_dt }
      }
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          pms_product {
            id
            product_id
            ins_dt
            ins_id
            upd_dt
            upd_id
            ad_copy
            attribute1
            attribute2
            attribute3
            brand_id
            business_no
            business_product_id
            category_id
            claim_info
            commission_rate
            control_no
            delivery_fee_free_yn
            delivery_info
            delivery_policy_no
            detail
            display_yn
            erp_product_id
            fixed_delivery_yn
            gender_type_cd
            gift_yn
            global_ship_yn
            group1
            group2
            group3
            icon
            keyword
            list_price
            min_qty
            name
            notice_confirm_dt
            notice_confirm_id
            notice_confirm_yn
            offshop_img
            offshop_pickup_dc_rate
            offshop_pickup_yn
            online_payment_yn
            option_yn
            out_send_dt
            out_send_yn
            overseas_purchase_yn
            person_qty
            point_save_rate
            present_qty
            price_apply_dt
            product_notice_type_cd
            product_type_cd
            regular_delivery_fee_free_yn
            regular_delivery_max_cnt
            regular_delivery_max_qty
            regular_delivery_min_cnt
            regular_delivery_point_save_yn
            regular_delivery_price
            regular_delivery_yn
            reject_reason
            reserve_delivery_dt
            reserve_yn
            sale_end_dt
            sale_price
            sale_start_dt
            sale_state_cd
            search_exc_yn
            selling_point
            sizechart_no
            stock_control_type_cd
            store_id
            supply_price
            tax_type_cd
            theme_cd
            unit_qty
            use_yn
            wrap_volume
            wrap_yn
            custom_id
            design_saleproduct_id
            vat_rate
            pms_productimgs(
              where: { use_yn: { _eq: "Y" } }
              order_by: { sort_no: asc }
            ) {
              img
              id
            }
            pms_productlangs {
              lang_id
              ad_copy
              attribute1
              attribute2
              attribute3
              claim_info
              delivery_info
              detail
              group1
              group2
              group3
              icon
              keyword
              name
              selling_point
            }
            pms_productoptions {
              option_no
              product_id
              ins_dt
              ins_id
              upd_dt
              upd_id
              attribute_id
              option_name
              product_option_type_cd
              sort_no
              use_yn
              pms_productoptionvalues {
                option_no
                option_value_no
                product_id
                ins_dt
                ins_id
                upd_dt
                upd_id
                attribute_value
                option_value
                sort_no
                use_yn
              }
            }
          }
        }
      }
    }
  }
`;

export const TypedCategoryProductsQuery = TypedQuery<
  CategoryProducts,
  CategoryProductsVariables
>(categoryProductsQuery);

export const totalCategoryProducts = gql`
  query TotalCategoryProducts(
    $displayCategoryIds: [String!]
    $pms_product: pms_product_bool_exp = {}
  ) {
    dms_displaycategoryproduct_connection(
      where: {
        display_category_id: { _in: $displayCategoryIds }
        pms_product: $pms_product
      }
    ) {
      edges {
        node {
          pms_product {
            id
            product_id
          }
        }
      }
    }
  }
`;

export const TypedTotalCategoryProductsQuery = TypedQuery<
  TotalCategoryProducts,
  TotalCategoryProductsVariables
>(totalCategoryProducts);
