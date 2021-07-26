import React, { useState } from "react";
import "./SignIn.css";
import { Button } from "reactstrap";
import {
  FaUserCircle,
  FaLock,
  FaFacebook,
  FaGoogle,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
// import { createAuthIdentity, getHomePage } from "../../Common/Utility";

const SignIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "";

    const body = {
      username: username,
      password: password,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((r) => r.json())
      .then((rObj) => props.updateToken(rObj.sessionToken, rObj.user.id));
  };

  return (
    <div className="mainDiv App-header">
      <header className="sub-title">Login</header>
      <br />
      <div>
        <form className="signin">
          {/* <h2>Register Form</h2> */}

          <div className="input-container">
            <i className="fa fa-user icon">
              {" "}
              <FaUserCircle />
            </i>
            <input
              className="input-field"
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <i className="fa fa-key icon">
              {" "}
              <FaLock />
            </i>
            <input
              className="input-field"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex-containerone">
            <div className="checkbox">
              <input type="checkbox" id="checkbox" name="checkbox" value="" />
              <label htmlFor="checkbox"> Remember Me</label>
              <span className="forgotPass">
                <a href="#">FORGOT PASSWORD?</a>
              </span>
            </div>
          </div>
          <br />

          <div className="container">
            <div className="row">
              <div className="col text-center">
                <Button
                  className="btn btn-default btn-lg btn-submit mb-2"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>
                <br />
                <div className = "flex-containertwo">
                  <div className = "lines">
                <p className="or">or</p>
                </div>
                </div>
                <p className="signbtn">Sign In Using </p>
                <span className="twittericon">
                  <FaTwitter />
                </span>
                <span className="linkicon">
                  <FaLinkedinIn />
                </span>
                <span className="facebookicon">
                  <FaFacebook />
                </span>
                <span className="googleicon">
                  <FaGoogle />
                </span>
                <div className="flex-container">
                  <h6> Don't Have An Account? </h6>
                  <Button className="accountLink" onClick = {handleSubmit}>
                    {" "}
                    Create Account
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
