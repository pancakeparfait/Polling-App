import React, { Component } from 'react';
import { Button, Col, FormGroup, Label, Input } from 'reactstrap';
import { createAuthIdentity, getHomePage } from '../../Common/Utility';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInData: {
        email: '',
        password: '',
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //   const API_URL = `${Base_API_URL}/user/login`

    //     fetch(`${API_URL}`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             email: this.state.signInData.email,
    //             password: this.state.signInData.password,
    //         }),
    //         headers: new Headers({

    //             'Content-Type': 'application/json',
    //         })
    //     })

    //     .then((result) => result.json())
    //     .then((response) =>{
    //         console.log(response);
    //         const{ status, data } = response;
    //         if (status = 200){
    //             createAuthIdentity(data);
    //             this.props.history.replace(getHomePage());
    //         }

    //     })
  };

  handleChange = (event) => {
    const { currentTarget: targetElement } = event;
    const value = targetElement.value;
    const signInData = { ...this.state.signInData };
    signInData[targetElement.name] = value;
    this.setState({ signInData });
  };

  render() {
    const { signInData } = this.state;
    return (
      <React.Fragment>
          <p className="text-center">
          Polling App
        </p>
        <header className="sub-title">Sign In</header>
        <br />

        <div>
          <form>
            <Col>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                  value={this.state.signInData.email}
                  className="mb-2"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  className="mb-2"
                  placeholder="password"
                  value={signInData.password}
                />
              </FormGroup>
            </Col>
            <Label check>
              <Input
                type="checkbox"
                className="custom-control custom-checkbox mb-5"
                id="checkbox-3"
              />{' '}
              <span className="small-text p-3">Remember me</span>
            </Label>
            <br />

            <div class="container">
              <div class="row">
                <div class="col text-center">
                  <Button className="btn btn-default btn-lg btn-submit mb-2">Submit</Button>
                  <br />
                  <p>or</p>
                  <Button block className="btn btn-default btn-lg btn-register">Register</Button>
                </div>
              </div>
            </div>

            
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SignIn;
