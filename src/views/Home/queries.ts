// import gql from "graphql-tag";

// import { TypedQuery } from "../../core/queries";
// import { ProductsList } from "./gqlTypes/ProductsList";

// export const homePageQuery = gql`
//   query ProductsList {
//     shop {
//       description
//       name
//       homepageCollection {
//         id
//         backgroundImage {
//           url
//         }
//         name
//       }
//     }
//     categories(level: 0, first: 4) {
//       edges {
//         node {
//           id
//           name
//           backgroundImage {
//             url
//           }
//         }
//       }
//     }
//   }
// `;

// export const TypedHomePageQuery = TypedQuery<ProductsList, {}>(homePageQuery);

import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import { ProductsList } from "./gqlTypes/ProductsList";

export const homePageQuery = gql`
  query ProductsList {
    site_sitesettings_connection {
      edges {
        node {
          site_id
          description
          homepage_collection_id
          django_site {
            id
            name
          }
          product_collection {
            id
            name
            background_image
            background_image_alt
            description
          }
        }
      }
    }
    product_category_connection(where: { level: { _eq: 0 } }, first: 4) {
      edges {
        node {
          id
          name
          background_image
          background_image_alt
        }
      }
    }
  }
`;

export const TypedHomePageQuery = TypedQuery<ProductsList, {}>(homePageQuery);
