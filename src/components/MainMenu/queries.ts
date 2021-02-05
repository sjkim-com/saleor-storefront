// import gql from "graphql-tag";
// import { TypedQuery } from "../../core/queries";
// import { MainMenu } from "./gqlTypes/MainMenu";

// export const mainMenu = gql`
//   fragment MainMenuSubItem on MenuItem {
//     id
//     name
//     category {
//       id
//       name
//     }
//     url
//     collection {
//       id
//       name
//     }
//     page {
//       slug
//     }
//     parent {
//       id
//     }
//   }

//   query MainMenu {
//     shop {
//       navigation {
//         main {
//           id
//           items {
//             ...MainMenuSubItem
//             children {
//               ...MainMenuSubItem
//               children {
//                 ...MainMenuSubItem
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export const TypedMainMenuQuery = TypedQuery<MainMenu, {}>(mainMenu);


import gql from "graphql-tag";
import { TypedQuery } from "../../core/queries";
import { MainMenu } from "./gqlTypes/MainMenu";
import { SubMenu } from "./gqlTypes/SubMenu";

export const mainMenu = gql`
  query MainMenu {
    dms_displaycategory_connection(
      where: {
        display_yn: { _eq: "Y" }
        upper_display_category_id: { _eq: "navbar" }
      }
      order_by: { sort_no: asc }
    ) {
      edges {
        node {
          name
          upper_display_category_id
          display_yn
          leaf_yn
          note
          sort_no
          store_id
          template_id
          upd_dt
          upd_id
          ins_id
          ins_dt
          display_category_id
          dms_displaycategorylangs {
            name
            note
            display_category_id
            lang_id
          }
          dms_displaycategories {
            name
            upper_display_category_id
            display_yn
            leaf_yn
            note
            sort_no
            store_id
            template_id
            upd_dt
            upd_id
            ins_id
            ins_dt
            display_category_id
            dms_displaycategorylangs {
              name
              note
              display_category_id
              lang_id
            }
          }
        }
      }
    }
  }
`;

export const subMenu = gql`
  query SubMenu($upperDisplayCategoryId: String!) {
    dms_displaycategory_connection(
      where: {
        display_yn: { _eq: "Y" }
        upper_display_category_id: { _eq: $upperDisplayCategoryId }
      }
      order_by: { sort_no: asc }
    ) {
      edges {
        node {
          name
          upper_display_category_id
          display_yn
          leaf_yn
          note
          sort_no
          store_id
          template_id
          upd_dt
          upd_id
          ins_id
          ins_dt
          display_category_id
          dms_displaycategorylangs {
            name
            note
            display_category_id
            lang_id
          }
        }
      }
    }
  }
`;

export const TypedMainMenuQuery = TypedQuery<MainMenu, {}>(mainMenu);
export const TypedSubMenuQuery = TypedQuery<SubMenu, {}>(subMenu);
