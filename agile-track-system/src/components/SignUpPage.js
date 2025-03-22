// SignUpPage Component
import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function SignUpPage() {
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/user-home");
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp} className="signup-form">
        <label>Name</label>
        <input type="text" placeholder="Enter Your Name" required />
        <label>Email</label>
        <input type="email" placeholder="Enter Your Email" required />
        <label>Password</label>
        <input type="password" placeholder="Password" required />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;