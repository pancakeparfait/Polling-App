import React, {Component} from 'react';
import TopNavBar from './TopNavBar';
import Footer from '../../Components/Footer';
import { withAuth } from '../../Common/Utility';

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }
  render() {
    return (
      <>
        <TopNavBar
          collapsed={this.state.collapsed}
          toggleNavbar={this.toggleNavbar}
        />
        {this.props.children}
        <Footer />
      </>
    );
  }
}

export default withAuth(DefaultLayout);
