import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class AdminProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPoll: {},
      previousPoll: [{}],
      user: {},
    };
  }
  render() {
    return (
      <>
        <h5 className="mb-5">What would you like to do?</h5>
        <h4>
          View <Link href="#">Current</Link> Poll
        </h4>
        <h4>
          View <Link href="#">Previous Poll</Link> Results
        </h4>
        <h4>
          Edit <Link href="#">Account</Link>
        </h4>
        <h4>
          <Link>Create a poll</Link>
        </h4>
        <h4>
          <Link>Delete a poll</Link>
        </h4>
        <h4>
          <Link>Edit a poll</Link>
        </h4>
      </>
    );
  }
}

export default AdminProfilePage;
