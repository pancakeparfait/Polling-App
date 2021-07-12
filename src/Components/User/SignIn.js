import React, { useState } from "react";
import { Button, Col, FormGroup, Label, Input } from "reactstrap";
import { createAuthIdentity, getHomePage } from "../../Common/Utility";

// class SignIn extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       signInData: {
//         email: '',
//         password: '',
//       },
//     };
//   }

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  

  const [login, setLogin] = useState(true);

  const loginToggle = () => {
    setLogin(!login)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `http:localhost:3000/user/${login ? "login" : "signup"}`;

    const body = {
      email: email,
      password: password,
      username: username
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(r => r.json())
      .then(rObj => 
        props.updateToken(rObj.sessionToken, rObj.user.id));
  }
      

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

  // handleChange = (event) => {
  //   const { currentTarget: targetElement } = event;
  //   const value = targetElement.value;
  //   const signInData = { ...this.state.signInData };
  //   signInData[targetElement.name] = value;
  //   this.setState({ signInData });
  // };

  // render() {
  //   const { signInData } = this.state;

  const signupField = () => {
    if (login) {
      return null;
    } else {
      return (
        <Col>
          <FormGroup>

            <Input
              type="username"
              className="mb-2"
              name="username"
              id="exampleUsername"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              
            />
          </FormGroup>
        </Col>
      )
    }
  }

  return (
    <div className = "mainDiv">
      <header className="sub-title">{login ? 'Login' : "Sign Up"}</header>
      <br />
      <div>
        <form>
          <Col>
            <FormGroup>
            
              <Input              
                type="email"
                name= "email" 
                id="exampleEmail"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}   
              />
              {signupField()}
            </FormGroup>
          </Col>
          
          <Label check>
            <Input
              type="checkbox"
              className="custom-control custom-checkbox mb-5"
              id="checkbox-3"
            />{" "}
            <span className="remeberMe">Remember me</span>
          </Label>
          <a href="#">Forgot Password?</a>
          <br />
        
         
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <Button
                  className="btn btn-default btn-lg btn-submit mb-2"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>
                <br />
                <p>or</p>
                <p className="signInUsing">Sign In Using</p>
              </div>
            </div>
          </div>
        </form>
        <a href = "#" onClick={loginToggle}>
          {login
            ? "Don't Have An Account? Sign Up Here"
            : "Already Have An Account? Log In Here"}
        </a>
        
      </div>
      </div>
  );
};


export default SignIn;
