/* eslint-disable prettier/prettier */

import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";

import {
  CmgtProductDetails,
  CmgtProductDetailsVariables,
} from "./gqlTypes/CmgtProductDetails";

import {
  CmgtDisplayCategoryProductDetails,
  CmgtDisplayCategoryProductDetailsVariables,
} from "./gqlTypes/CmgtDisplayCategoryProductDetails";

// -----> 削除予定
export const priceFragment = gql`
  fragment Price on TaxedMoney {
    gross {
      amount
      currency
    }
    net {
      amount
      currency
    }
  }
`;

export const basicProductFragment = gql`
  fragment BasicProductFields on Product {
    id
    name
    thumbnail {
      url
      alt
    }
    thumbnail2x: thumbnail(size: 510) {
      url
    }
  }
`;

export const productPricingFragment = gql`
  ${priceFragment}
  fragment ProductPricingField on Product {
    pricing {
      onSale
      priceRangeUndiscounted {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
      priceRange {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
    }
  }
`;

export const selectedAttributeFragment = gql`
  fragment SelectedAttributeFields on SelectedAttribute {
    attribute {
      id
      name
    }
    values {
      id
      name
    }
  }
`;

export const productVariantFragment = gql`
  ${priceFragment}
  fragment ProductVariantFields on ProductVariant {
    id
    sku
    name
    isAvailable
    quantityAvailable(countryCode: $countryCode)
    images {
      id
      url
      alt
    }
    pricing {
      onSale
      priceUndiscounted {
        ...Price
      }
      price {
        ...Price
      }
    }
    attributes {
      attribute {
        id
        name
        slug
      }
      values {
        id
        name
        value: name
      }
    }
  }
`;

export const productDetailsQuery = gql`
  query ProductDetails($id: Int!) {
    product_product(
      where: {
        id: {_eq: $id}
      }
    ) {
      id
      name
      is_published
      available_for_purchase
      description_json
      product_category {
        id
        name
      }
      product_producttype {
        id
        name
      }
      product_productimages {
        id
        alt
        image
      }
      product_productvariants {
        product_assignedvariantattributes {
          product_attributevariant {
            product_attribute {
              id
              name
            }
          }
          id
          product_productvariant {
            id
            name
            price_amount
            currency
          }
        }
      }
    }
  }
`;
// <----- 削除予定

export const CmgtProductDetailsQuery = gql`
  query CmgtProductDetails($storeId: String, $productId: String) {
    pms_product_connection(where: {product_id: {_eq: $productId}, store_id: {_eq: $storeId}, use_yn: {_eq: "Y"}}) {
      edges {
        node {
          id
          store_id
          product_id
          category_id
          name
          sale_price
          detail
          pms_category {
            category_id
            name
          }
          dms_displaycategoryproducts_connection {
            edges {
              node {
                dms_displaycategory {
                  id
                  display_category_id
                  upper_display_category_id
                  name
                }
              }
            }
          }
          pms_productoptions_connection {
            edges {
              node {
                option_no
                option_name
                pms_productoptionvalues_connection {
                  edges {
                    node {
                      option_no
                      option_value
                      option_value_no
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    pms_saleproduct_connection(where: {product_id: {_eq: $productId}, store_id: {_eq: $storeId}}, order_by: {saleproduct_id: asc}) {
      edges {
        node {
          id
          store_id
          product_id
          saleproduct_id
          name
          saleproduct_state_cd
          pms_warehousestocks_connection {
            edges {
              node {
                id
                location_id
                safe_stock_qty
                stock_qty
                warehouse_id
              }
            }
          }
          pms_saleproductoptionvalues(order_by: {option_no: asc}) {
            option_no
            option_value_no
          }
        }
      }
    }
    pms_productimg_connection(where: {product_id: {_eq: $productId}, use_yn: {_eq: "Y"}}) {
      edges {
        node {
          id
          saleproduct_id
          img
          text
        }
      }
    }
    pms_productnotice_connection(where: {product_id: {_eq: $productId}}, order_by: {product_notice_field_id: asc}) {
      edges {
        node {
          id
          product_id
          product_notice_field_id
          product_notice_type_cd
          detail
        }
      }
    }
  }
`;

export const CmgtDisplayCategoryProductDetailsQuery = gql`
  query CmgtDisplayCategoryProductDetails(
    $displayCategoryId: String
  ) {
    dms_displaycategoryproduct_connection(
      where: {
        display_category_id: { _eq: $displayCategoryId },
        display_yn: { _eq: "Y" }
      },
      order_by: {
        pms_product: { sale_price: asc }
      }
    ) {
      edges {
        node {
          pms_product {
            id
            product_id
            name
            sale_price
            pms_productimgs_connection {
              edges {
                node {
                  img
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const TypedProductDetailsQuery = TypedQuery<
  CmgtProductDetails,
  CmgtProductDetailsVariables
>(CmgtProductDetailsQuery);

export const TypedDisplayCategoryProductDetailsQuery = TypedQuery<
  CmgtDisplayCategoryProductDetails,
  CmgtDisplayCategoryProductDetailsVariables
>(CmgtDisplayCategoryProductDetailsQuery);
