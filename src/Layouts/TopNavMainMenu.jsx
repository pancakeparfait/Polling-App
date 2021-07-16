import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';

const TopNavMainMenu = (props) => {
  return (
    <>
      <NavItem>
        <NavLink className="nav-link" to="/" exact>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/profile" exact>
          Profile
        </NavLink>
      </NavItem>
    </>
  );
};

export default TopNavMainMenu;
