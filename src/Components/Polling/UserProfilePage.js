import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withAuth} from '../../Common/Utility'

class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2 className="mb-5 welcome-title">Welcome Back, Nick</h2>

        <input className="input" type="text" placeholder="Department" />
        
          <button className="button is-info mt-1">Save</button>
          
        
        <h4>
          {' '}
          <Link href="#">Current</Link> Poll
        </h4>
        <h4>
          <Link href="#">Completed Polls</Link> Results
        </h4>
      </div>
    );
  }
}

export default (UserProfilePage);
