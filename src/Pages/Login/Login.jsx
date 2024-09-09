import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import vector from "./vector.png";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isSigningUp, setIsSigningUp] = useState(false); // Toggle between login and sign-up

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let response;
      if (isSigningUp) {
        // Target the signup API endpoint
        response = await axios.post("http://localhost:5000/api/auth/signup", formData);
      } else {
        // Target the login API endpoint
        response = await axios.post("http://localhost:5000/api/auth/login", formData);
      }
      
      // Check if the response has data
      if (response && response.data && response.data.message) {
        alert(response.data.message);
      } else {
        alert("Unexpected response structure.");
      }
    } catch (error) {
      // Detailed error logging for debugging
      console.error("Error details:", error);
  
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
  
        if (error.response.data && error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert("An error occurred on the server.");
        }
      } else if (error.request) {
        console.error("Error request:", error.request);
        alert("No response was received from the server.");
      } else {
        console.error("Error message:", error.message);
        alert("An unexpected error occurred.");
      }
    }
  };
  
  

  const toggleSignUp = () => {
    setIsSigningUp(!isSigningUp); // Toggle the sign-up mode
  };

  return (
    <div className="container">
      <div className="leftPanel">
        <div className="loginBox">
          <h2 className="heading">{isSigningUp ? "Sign Up" : "Login"}</h2>
          <p className="subheading">{isSigningUp ? "Create your account" : "Enter your account details"}</p>
          <form onSubmit={handleSubmit}>
            {isSigningUp ? (
              <>
                <div className="inputGroup">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input"
                    value={formData.name || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputGroup">
                  <label>SAP ID</label>
                  <input
                    type="text"
                    name="sapId"
                    placeholder="SAP ID"
                    className="input"
                    value={formData.sapId || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputGroup">
                  <label>Course</label>
                  <input
                    type="text"
                    name="course"
                    placeholder="Course"
                    className="input"
                    value={formData.course || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputGroup">
                  <label>Year</label>
                  <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    className="input"
                    value={formData.year || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputGroup">
                  <label>Email ID</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID"
                    className="input"
                    value={formData.email || ""}
                    onChange={handleChange}
                  />
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
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
            {!isSigningUp && <p className="forgotPassword">Forgot Password?</p>}
            <button type="submit" className="loginButton">
              {isSigningUp ? "Sign Up" : "Login"}
            </button>
          </form>
          <div className="signupSection">
            {isSigningUp ? (
              <p>Already have an account?</p>
            ) : (
              <p>Don't have an account?</p>
            )}
            <button onClick={toggleSignUp} className="signupButton">
              {isSigningUp ? "Login" : "Sign up"}
            </button>
          </div>
        </div>
      </div>

      <div className="rightPanel">
        <div className="vectorContainer">
          <img src={vector} alt="Student illustration" className="vectorImage" />
        </div>
      </div>
    </div>
  );
};

export default Login;
