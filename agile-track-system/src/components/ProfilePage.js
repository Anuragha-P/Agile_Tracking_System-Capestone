import React from "react";
import "./styles.css"; // Import external CSS file

function ProfilePage() {
  const employees = [
    {
      name: "Employee One",
      tasks: [
        { title: "Task One", description: "Description for Task One", status: "In Progress" },
        
      ]
    },
    {
      name: "Employee Two",
      tasks: [
        { title: "Task One", description: "Description for Task One", status: "To Do" },
        
      ]
    }
  ];

  return (
    <div className="profile-container">
      <h1 className="profile-header">USER PROFILES</h1>

      {employees.map((employee, index) => (
        <div key={index} className="employee-card">
          <h2>Tasks worked by {employee.name}</h2>
          <ul className="task-list">
            {employee.tasks.map((task, idx) => (
              <li key={idx}>
                <strong>Title:</strong> {task.title} <br />
                <strong>Description:</strong> {task.description} <br />
                <strong>Status:</strong> {task.status}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ProfilePage;

