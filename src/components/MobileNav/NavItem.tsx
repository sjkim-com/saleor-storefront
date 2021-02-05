import classNames from "classnames";
import * as React from "react";
import ReactSVG from "react-svg";

import { NavLink } from "..";
// import { MainMenuSubItem } from "../MainMenu/gqlTypes/MainMenuSubItem";
import { MainMenu_menu_menu_menu_menuitems_aggregate_nodes } from "../MainMenu/gqlTypes/MainMenu";
import subcategoriesImg from "../../images/subcategories.svg";

// export interface INavItem extends MainMenuSubItem {
  export interface INavItem extends MainMenu_menu_menu_menu_menuitems_aggregate_nodes {
  children?: INavItem[];
}

interface NavItemProps extends INavItem {
  hideOverlay(): void;
  showSubItems(item: INavItem): void;
}

const NavItem: React.FC<NavItemProps> = ({
  hideOverlay,
  showSubItems,
  ...item
}) => {
  // const hasSubNavigation = item.children && !!item.children.length;
  const hasSubNavigation = item.dms_displaycategories && !!item.dms_displaycategories.length;

  return (
    <li
      className={classNames({
        "side-nav__menu-item": true,
        "side-nav__menu-item--has-subnavigation": hasSubNavigation,
      })}
    >
      <NavLink
        item={item}
        className="side-nav__menu-item-link"
        onClick={hideOverlay}
      />
      {hasSubNavigation && (
        <ReactSVG
          path={subcategoriesImg}
          className="side-nav__menu-item-more"
          onClick={() => showSubItems(item)}
        />
      )}
    </li>
  );
};

export default NavItem;
