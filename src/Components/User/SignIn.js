import React, { useState } from "react";
import "./SignIn.css";
import SignUp from "./SignUp";
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
    <div className="mainDiv">
      <header className="sub-title">Login</header>
      <br />
      <div>
        <form className="signin">
          {/* <h2>Register Form</h2> */}

          <div class="input-container">
            <i class="fa fa-user icon">
              {" "}
              <FaUserCircle />
            </i>
            <input
              class="input-field"
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div class="input-container">
            <i class="fa fa-key icon">
              {" "}
              <FaLock />
            </i>
            <input
              class="input-field"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex-containerone">
            <form className="checkbox">
              <input type="checkbox" id="checkbox" name="checkbox" value="" />
              <label for="checkbox"> Remember Me</label>
              <span className="forgotPass">
                <a href="#">FORGOT PASSWORD?</a>
              </span>
            </form>
          </div>
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
