import "./Signup.css"
import React, { useState } from "react";
import { Button } from "reactstrap";
import {
  FaEnvelope,
  FaUserCircle,
  FaLock,
  FaGoogle,
  FaTwitter,
  FaLinkedinIn,
  FaFacebook,
} from "react-icons/fa";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const baseUrl = `/api/Account/Register`;

    const body = {
      username: username,
      email: email,
      password: password,
    };

    fetch(baseUrl, {
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
    <header className="sub-title">SignUp</header>
    <br />
    <div>
      <form className="signup">
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
        <i className="fa fa-envelope icon">
          {" "}
          <FaEnvelope />
        </i>
        <input
          className="input-field"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

            {/* <hr/> */}
            <p className="or">or</p>
            <p className="signbtn">Sign Up Using </p>
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
              <h6> Already Have An Account? </h6>
              <Button className="accountLink" onClick={handleSubmit}>
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
export default SignUp;
