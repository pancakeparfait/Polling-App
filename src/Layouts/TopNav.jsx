import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap';
// import logo192 from './Assets/lo';

const TopNav = (props) => {
  return (
    <header>
      <Navbar color="dark" dark expand="lg">
        <NavLink className="navbar-brand" to="/">
          {/* <img src={logo192} alt="openMic" /> */}
        </NavLink>
        <NavbarToggler onClick={props.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!props.collapsed} navbar>
          <Nav className="ml-auto" navbar>
            {props.children}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default TopNav;
