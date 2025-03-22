import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TaskContext } from "../App";
import "./styles.css";  // Import the external CSS file

function ScrumDetailsPage() {
  const { teamName } = useParams();
  const { tasks } = useContext(TaskContext);

  const users = [
    { name: "Employee One", email: "employee1@example.com" },
    { name: "Employee Two", email: "employee2@example.com" }
  ];

  return (
    <div className="scrum-container">
      <h1>Scrum Details for {teamName}</h1>

      <h2>Tasks</h2>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.title}</strong> {task.description} - {task.status}
          </li>
        ))}
      </ul>

      <h2>Users</h2>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScrumDetailsPage;
