import React, { useState } from "react";
import "./Login.css";
import logo from "./img/logo.png";
import ved from "./vedio/bgved.mp4";
import Navbar from './Navbar';
import Footer from './Footer';

const Login = ({ onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:1234/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Login successful!");
        console.log("Token:", result.token); // Save the token in localStorage/sessionStorage as needed
      } else {
        setMessage(result.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <video src={ved} autoPlay loop muted className="background-video" />
      <div className="login-box">
      <img src={logo} alt="Agro Logo" className="logo" />
        <div className="login-icon">
          <i className="fas fa-user-circle"></i>
        </div>
        <h2>User Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="*******"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
        {message && <p className="message">{message}</p>}
        <div className="create-account-text">
          Don't have an account?{" "}
          <a href="/Register" className="create-account-link" onClick={onSwitchToRegister}>
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
