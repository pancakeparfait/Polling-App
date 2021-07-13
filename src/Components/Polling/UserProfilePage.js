import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2 className="mb-5 welcome-title">Welcome Back, Nick</h2>

        <input class="input" type="text" placeholder="Department" />
        <div class="buttons">
          <button class="button is-primary">Primary</button>
          
        </div>
        {/* <p> </p>
            <p> </p> */}

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

export default UserProfilePage;
