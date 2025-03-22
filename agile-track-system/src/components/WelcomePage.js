
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function WelcomePage() {
  return (
    <div className="container">
      <nav>
      <Link to="/" className="button">Dashboard</Link>
      <Link to="/login" className="button">Login</Link>
      </nav>
      <div className="welcome-text">
        <h2>Welcome to Dashboard !</h2>
      </div>
    </div>
  );
}

export default WelcomePage;