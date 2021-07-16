import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  NavItem,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';

const UserMenu = (props) => {
  return (
    <>
      <NavItem>
        <UncontrolledDropdown nav inNavbar={props.inNavbar}>
          <DropdownToggle nav>
            <i className="fa fa-2x fa-user-circle" />
          </DropdownToggle>
          <DropdownMenu right className="bg-dark p-0">
            <DropdownItem className="bg-dark m-0 p-0 text-center">
              <NavLink className="nav-link " to="/profile">
                Profile
              </NavLink>
            </DropdownItem>
            <DropdownItem className="bg-dark m-0 p-0 text-center">
              <NavLink className="nav-link" to="/signout">
                Sign Out
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </NavItem>
    </>
  );
};

export default UserMenu;
