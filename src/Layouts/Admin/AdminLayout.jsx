import React, { Component } from 'react';
import Body from './Body';
import PageContent from './PageContent';
import SideBar from './SideBar';
import TopNav from '../TopNav';
import { withAuth } from '../../Common/Utility';

class AdminLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <TopNav
          collapsed={this.state.collapsed}
          toggleNavbar={this.toggleNavbar}
        ></TopNav>
        <Body>
          <SideBar collapsed={this.state.collapsed} />
          <PageContent>{this.props.children}</PageContent>
        </Body>
      </div>
    );
  }
}

export default withAuth(AdminLayout);
