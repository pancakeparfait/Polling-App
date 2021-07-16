import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';

const SideBarMainMenu = (props) => {
  return (
    <div className="position-sticky pt-3">
      <ul className="nav flex-column text-left pl-2">
        <NavItem>
          <NavLink className="nav-link" to="/" exact>
            <i className="fa fa-home mr-2" />
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/polls" exact>
            <i className="fa fa-flag mr-2" />
            Polls
          </NavLink>
        </NavItem>
      </ul>
      <hr />
    </div>
  );
};

export default SideBarMainMenu;
