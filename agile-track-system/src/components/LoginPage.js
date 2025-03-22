// LoginPage Component
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "admin") {
      navigate("/admin-dashboard");
    } else if (email && password) {
      navigate("/user-home");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
      <label>Email ID</label>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="button">Login</button>
      </form>
      <button type="button" onClick={() => navigate("/signup")} className="button">Sign Up</button>
    </div>
  );
}

export default LoginPage;