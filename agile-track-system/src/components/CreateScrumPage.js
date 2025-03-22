import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../App";
import "./styles.css";  // Import the styles

function CreateScrumPage() {
  const navigate = useNavigate();
  const { tasks, setTasks } = useContext(TaskContext);
  const [scrumName, setScrumName] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("To Do");
  const [assignedTo, setAssignedTo] = useState("User 1");

  const handleCreateScrum = () => {
    const newTask = { title: taskTitle, description: taskDescription, status: taskStatus, assignedTo };
    setTasks([...tasks, newTask]);
    navigate("/admin-dashboard");
  };

  return (
    <div className="create-scrum-container">
      <h1 className="create-scrum-heading">Create New Scrum</h1>
      <label>Scrum Name</label>
      <input type="text" value={scrumName} onChange={(e) => setScrumName(e.target.value)} className="create-scrum-input" /><br/>
      <label>Task Title</label>
      <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} className="create-scrum-input" /><br/>
      <label>Task Description</label>
      <input type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} className="create-scrum-input" /><br/>
      <label>Task Status</label>
      <select value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)} className="create-scrum-input">
        <option value="Completed">Completed</option>
        <option value="In Progress">In Progress</option>
        <option value="To Do">To Do</option>
      </select><br/>
      <label>Assign To</label>
      <select value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} className="create-scrum-input">
        <option value="User 1">User 1</option>
        <option value="User 2">User 2</option>
        <option value="User 3">User 3</option>
      </select><br/>
      <button onClick={handleCreateScrum} className="create-scrum-button">Create Scrum</button>
      <button onClick={() => navigate("/admin-dashboard")} className="cancel-button">Cancel</button>
    </div>
  );
}

export default CreateScrumPage;

