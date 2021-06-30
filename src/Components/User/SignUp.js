import SignIn from './SignIn';
import React, { Component } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpData: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  }
  render() {
      return(
      <React.Fragment>
          <p className="text-center">
          Polling App
        </p>
          <h4 className="sub-title">
              Register
          </h4>
          <br />
          <form>
          <FormGroup>
              <Input type="email" name="email" id="exampleEmail" placeholder="Name" className="mb-2" />
            </FormGroup>

            <FormGroup>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email" className="mb-2" />
            </FormGroup>

          <FormGroup>
              <Input type="email" name="email" id="exampleEmail" placeholder="Password" className="mb-2" />
            </FormGroup>

            <FormGroup>
              <Input type="email" name="email" id="exampleEmail" placeholder="Confirm Password" className="mb-5" />
            </FormGroup>

            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <Button className="btn btn-default btn-lg btn-submit mb-5">Submit</Button>
                  <br />
                  <p Link="/SignIn" className="small-text">Back to Sign In</p>
                </div>
              </div>
            </div>
          </form>
      </React.Fragment>
      )
  }
}

export default SignUp;
