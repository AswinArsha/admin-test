import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login actions here, if any
    // For example, authenticate user, set user session, etc.
    // After successful login, redirect to the dashboard home
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-container">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
