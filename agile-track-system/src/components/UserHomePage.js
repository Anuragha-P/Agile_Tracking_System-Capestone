// UserHomePage Component
import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function UserHomePage() {
  const navigate = useNavigate();

  return (
    <div className="user-home-container">
      <header className="user-home-header fixed-top">
        <nav className="user-home-nav">
          <button onClick={() => navigate("/user-home")} className="nav-button">Dashboard</button>
          <button onClick={() => navigate("/user-profile")} className="nav-button">Profiles</button>
          <button onClick={() => navigate("/login")} className="nav-button">Logout</button>
        </nav>
      </header>
      <main className="scrum-teams-section">
        <h1>Scrum Teams</h1>
        <div className="scrum-teams-container">
          {["A", "B", "C"].map(team => (
            <div key={team} className="scrum-team-card">
              <h2>Scrum Team {team}</h2>
              <button onClick={() => navigate(`/scrum-details/Scrum Team ${team}`)} className="details-button">Get Details</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default UserHomePage;