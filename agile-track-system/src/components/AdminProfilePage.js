import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Import external stylesheet

function AdminProfilePage() {
  const { users, deleteUser } = useContext(UserContext);
  const [showHistory, setShowHistory] = useState(null);
  const navigate = useNavigate();

  const employeeHistory = {
    "Employee One": [
      { title: "Task One", description: "Description for Task One", status: "In Progress" },
     
    ],
    "Employee Two": [{ title: "Task Three", description: "Description for Task Three", status: "To Do" }],
    "Employee Three": [{ title: "Task Two", description: "Description for Task Two", status: "In Progress" }]
  };

  return (
    <div className="admin-profile-container">
      <h1>User Profiles</h1>
      <button className="add-user-button" onClick={() => navigate("/add-user")}>Add New User</button>
      
      {users.map((user, index) => (
        <div key={index} className="user-card">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button className="history-button" onClick={() => setShowHistory(user.name)}>Get History</button>
          <button className="delete-button" onClick={() => deleteUser(user.email)}>Delete</button>
        </div>
      ))}
      
      {showHistory && (
        <div className="history-container">
          <h2>Tasks Worked By {showHistory}</h2>
          {employeeHistory[showHistory]?.map((task, idx) => (
            <div key={idx} className="task-item">
              <p><strong>Title:</strong> {task.title}</p>
              <p><strong>Description:</strong> {task.description}</p>
              <p><strong>Status:</strong> {task.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminProfilePage;





