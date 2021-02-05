import * as React from "react";

import { NavLink } from "..";
// import { MainMenuSubItem } from "./gqlTypes/MainMenuSubItem";
import { SubMenu_dms_displaycategory } from "./gqlTypes/SubMenu";

interface NavNestedItemProps extends SubMenu_dms_displaycategory {
// interface NavNestedItemProps extends MainMenuSubItem {
  children?: NavNestedItemProps[];
  hideOverlay?(): void;
}

const NavItem: React.FC<NavNestedItemProps> = ({
  hideOverlay,
  children,
  ...item
}) => {
  const content =
    children && children.length ? (
      <ul>
        {children.map((subItem, i) => (
          <NavItem key={i} {...subItem} />
        ))}
      </ul>
    ) : null;

  return (
    <li>
      <NavLink item={item} onClick={hideOverlay} />
      {content}
    </li>
  );
};

export default NavItem;
