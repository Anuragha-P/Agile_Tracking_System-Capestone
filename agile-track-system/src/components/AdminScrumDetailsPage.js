// AdminScrumDetails Component
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TaskContext } from "../App";
import "./styles.css";

function AdminScrumDetailsPage() {
  const { teamName } = useParams();
  const { tasks, setTasks } = useContext(TaskContext);

  const users = [
    { name: "Employee One", email: "employee1@example.com" },
    { name: "Employee Two", email: "employee2@example.com" }
  ];

  const limitedTasks = tasks.slice(0, 3);

  const handleStatusChange = (index, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = newStatus;
    setTasks(updatedTasks);
  };

  return (
    <div className="admin-scrum-details-container">
      <h1>Scrum Details for {teamName}</h1>
      <h2>Tasks</h2>
      <ul>
        {limitedTasks.map((task, index) => (
          <li key={index}>
            <strong>{task.title}</strong>: {task.description} -
            <select value={task.status} onChange={(e) => handleStatusChange(index, e.target.value)}>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="To Do">To Do</option>
            </select>
          </li>
        ))}
      </ul>
      <h2>Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}><strong>{user.name}</strong> ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminScrumDetailsPage;