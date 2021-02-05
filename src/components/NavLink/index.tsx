import * as React from "react";
import { Link } from "react-router-dom";

import {
  generateCategoryUrl,
  generateCollectionUrl,
  generatePageUrl,
} from "../../core/utils";
import {
  SecondaryMenu_shop_navigation_secondary_items,
  SecondaryMenu_shop_navigation_secondary_items_children,
} from "../Footer/gqlTypes/SecondaryMenu";
// import { MainMenu_shop_navigation_main_items } from "../MainMenu/gqlTypes/MainMenu";
// import { MainMenuSubItem } from "../MainMenu/gqlTypes/MainMenuSubItem";
import { MainMenu_dms_displaycategory } from "../MainMenu/gqlTypes/MainMenu";
import { SubMenu_dms_displaycategory } from "../MainMenu/gqlTypes/SubMenu";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  item:
    // | MainMenu_shop_navigation_main_items
    // | MainMenuSubItem
    | MainMenu_dms_displaycategory
    | SubMenu_dms_displaycategory
    | SecondaryMenu_shop_navigation_secondary_items
    | SecondaryMenu_shop_navigation_secondary_items_children;
}
export const NavLink: React.FC<NavLinkProps> = ({ item, ...props }) => {
  // const { name, url, category, collection, page } = item;
  // const link = (url: string) => (
  //   <Link to={url} {...props}>
  //     {name}
  //   </Link>
  // );

  // if (url) {
  //   return (
  //     <a href={url} {...props}>
  //       {name}
  //     </a>
  //   );
  // }
  // if (category) {
  //   return link(generateCategoryUrl(category.id, category.name));
  // }
  // if (collection) {
  //   return link(generateCollectionUrl(collection.id, collection.name));
  // }
  // if (page) {
  //   return link(generatePageUrl(page.slug));
  // }

  // return <span {...props}>{name}</span>;

  const { name, url } = item;
  const category = item.display_category_id
    ? {
        id: item.display_category_id,
        name: item.name,
      }
    : null;
  const collection = item.collection_id
    ? {
        id: item.collection_id.toString(),
        name: item.name,
      }
    : null;
  const page = item.page_page ? item.page_page : null;

  const link = (url: string) => (
    <Link to={url} {...props}>
      {name}
    </Link>
  );

  if (url) {
    return (
      <a href={url} {...props}>
        {name}
      </a>
    );
  }
  if (category) {
    return link(`/category/${category.name}/${category.id}/`);
  }
  if (collection) {
    return link(generateCollectionUrl(collection.id, collection.name));
  }
  if (page) {
    return link(generatePageUrl(page.slug));
  }

  return <span {...props}>{name}</span>;
};
