import React, { useState } from "react";
import axios from "axios";
import "./styles.css"; 
import vector from "./vector.png";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);
      alert(response.data.message);
    } catch (error) {
      console.error(error.response.data);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="leftPanel">
        <div className="loginBox">
          <h2 className="heading">Login</h2>
          <p className="subheading">Enter your account details</p>
          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="inputGroup">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input"
                value={formData.password}
                onChange={handleChange}
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
