// AdminDashboard Component
import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function AdminDashboard() {
  const navigate = useNavigate();
  return (
    <div className="admin-dashboard-container">
      <header className="admin-header">
        <nav className="admin-nav">
          <button className="admin-nav-button" onClick={() => navigate("/admin-dashboard")}>Dashboard</button>
          <button className="admin-nav-button" onClick={() => navigate("/admin-profile")}>Profiles</button>
          <button className="admin-nav-button" onClick={() => navigate("/login")}>Logout</button>
        </nav>
      </header>
      <main className="admin-main">
        <div className="scrum-center-wrapper">
          <h1>Scrum Teams</h1>
          <div className="admin-scrum-container">
            {["A", "B", "C"].map(team => (
              <div key={team} className="scrum-team-box">
                <h3>Scrum Team {team}</h3>
                <button className="scrum-details-button" onClick={() => navigate(`/admin-scrum-details/Scrum Team ${team}`)}>Get Details</button>
              </div>
            ))}
          </div>
          
          <div className="button-wrapper">
            <button className="add-scrum-button" onClick={() => navigate("/create-scrum")}>Add New Scrum</button>
          </div>
        </div>
      </main>
      <div className="content-wrapper"></div>
    </div>
  );
}

export default AdminDashboard;

