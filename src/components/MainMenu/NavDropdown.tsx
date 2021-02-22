/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import classNames from "classnames";
import * as React from "react";

import { NavLink, OverlayContextInterface } from "..";
// import { MainMenu_shop_navigation_main_items } from "./gqlTypes/MainMenu";
import {
  SubMenu_dms_displaycategory_connection,
  SubMenu_dms_displaycategory_connection_edges,
} from "./gqlTypes/SubMenu";
import NavItem from "./NavItem";

import "./scss/index.scss";

class NavDropdown extends React.PureComponent<
  // MainMenu_shop_navigation_main_items & {
  SubMenu_dms_displaycategory_connection & {
    overlay: OverlayContextInterface;
    showDropdown: boolean;
    subMenu: SubMenu_dms_displaycategory_connection_edges[];
    onShowDropdown: () => void;
    onHideDropdown: () => void;
  }
> {
  render() {
    const {
      children,
      showDropdown,
      onShowDropdown,
      onHideDropdown,
      subMenu,
    } = this.props;

    return (
      <ul
        className={classNames({
          "main-menu__nav-dropdown": true,
          "main-menu__nav-dropdown--active": showDropdown,
        })}
        onMouseOver={onShowDropdown}
        onMouseLeave={onHideDropdown}
      >
        <li>
          <NavLink item={this.props} onClick={onHideDropdown} />
        </li>
        <li
          className={classNames({
            "main-menu__nav-dropdown__body": true,
            "main-menu__nav-dropdown__body--visible": showDropdown,
          })}
        >
          <ul>
            {/* {children.map((subItem, i) => (
              <NavItem key={i} hideOverlay={onHideDropdown} {...subItem} />
            ))} */}
            {subMenu.map((subItem, i) => (
              <NavItem key={i} hideOverlay={onHideDropdown} {...subItem.node} />
            ))}
          </ul>
        </li>
      </ul>
    );
  }
}

export default NavDropdown;
