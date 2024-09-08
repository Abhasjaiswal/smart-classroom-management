import React from "react";
import "./styles.css"; 
import vector from "./vector.png";

const Login = () => {
  return (
    <div className="container">
      <div className="leftPanel">
        <div className="loginBox">
          <h2 className="heading">Login</h2>
          <p className="subheading">Enter your account details</p>
          <form>
            <div className="inputGroup">
              <label>Username</label>
              <input type="text" placeholder="Username" className="input" />
            </div>
            <div className="inputGroup">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                className="input"
              />
              <div className="eyeIcon">&#128065;</div>
            </div>
            <p className="forgotPassword">Forgot Password?</p>
            <button type="submit" className="loginButton">
              Login
            </button>
          </form>
          <div className="signupSection">
            <p>Don't have an account?</p>
            <button className="signupButton">Sign up</button>
          </div>
        </div>
      </div>

      <div className="rightPanel">
        {/* <div className="textContainer">
          <h1 className="welcomeText">Welcome to</h1>
          <h1 className="portalText">student portal</h1>
          <p className="subText">Login to access your account</p>
        </div> */}
        <div className="vectorContainer">
          <img
            src={vector}
            alt="Student illustration"
            className="vectorImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
