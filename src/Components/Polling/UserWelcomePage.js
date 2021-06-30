import React, { Component } from 'react';
import {Link} from "react-router-dom";

class UserWelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <h2 className="mb-5 welcome-title">Welcome Back, Nick</h2>
            <h5 className="mb-5">What would you like to do?</h5>
            <h4>View <Link href="#">Current</Link> Poll</h4>
            <h4>View <Link href="#">Previous Poll</Link> Results</h4>
            <h4>Edit <Link href="#">Account</Link></h4>

            </div>
         );
    }
}
 
export default UserWelcomePage;