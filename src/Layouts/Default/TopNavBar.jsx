import React from 'react';
import TopNav from '../TopNav';
import TopNavMainMenu from '../TopNavMainMenu';
import UserMenu from '../UserMenu';

const TopNavBar = (props) => {
  return (
    <TopNav>
      <TopNavMainMenu
        collapsed={props.collapsed}
        toggleNavbar={props.toggleNavbar}
      />
      <UserMenu inNavbar={true} />
    </TopNav>
  );
};

export default TopNavBar;
