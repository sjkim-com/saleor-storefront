// import gql from "graphql-tag";

// import { TypedQuery } from "../../core/queries";
// import {
//   basicProductFragment,
//   productPricingFragment,
// } from "../../views/Product/queries";
// import { FeaturedProducts } from "./gqlTypes/FeaturedProducts";

// export const featuredProducts = gql`
//   ${basicProductFragment}
//   ${productPricingFragment}
//   query FeaturedProducts {
//     shop {
//       homepageCollection {
//         id
//         products(first: 20) {
//           edges {
//             node {
//               ...BasicProductFields
//               ...ProductPricingField
//               category {
//                 id
//                 name
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export const TypedFeaturedProductsQuery = TypedQuery<FeaturedProducts, {}>(
//   featuredProducts
// );

import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import { CmgtFeaturedProducts } from "./gqlTypes/CmgtFeaturedProducts";

export const featuredProducts = gql`
  query CmgtFeaturedProducts(
    $storeId: String
    $displayCategoryId: String = "actus_featured"
  ) {
    dms_displaycategory_connection(
      where: {
        store_id: { _eq: $storeId }
        display_category_id: { _eq: $displayCategoryId }
      }
    ) {
      edges {
        node {
          id
          store_id
          display_category_id
          name
          dms_displaycategoryproducts {
            id
            pms_product {
              id
              product_id
              name
              sale_price
              pms_productimgs {
                id
                img
                text
                sort_no
              }
            }
          }
        }
      }
    }
  }
`;

export const TypedFeaturedProductsQuery = TypedQuery<CmgtFeaturedProducts, {}>(
  featuredProducts
);
