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
import { FeaturedProducts } from "./gqlTypes/FeaturedProducts";

export const featuredProducts = gql`
  query FeaturedProducts {
    site_sitesettings_connection {
      edges {
        node {
          homepage_collection_id
          product_collection {
            id
            name
            product_collectionproducts(limit: 20) {
              id
              product_product {
                id
                name
                product_productvariant {
                  price_amount
                  currency
                }
                category_id
                product_category {
                  id
                  name
                }
                product_productimages {
                  id
                  image
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const TypedFeaturedProductsQuery = TypedQuery<FeaturedProducts, {}>(
  featuredProducts
);
