import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./styles.css"; // Import the external CSS

function AddUserPage() {
  const navigate = useNavigate();
  const { addUser } = useContext(UserContext);
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "", role: "Developer" });

  const handleSubmit = () => {
    if (newUser.name && newUser.email) {
      addUser(newUser);
      navigate("/admin-profile"); // Redirect back to Admin Profile Page
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="add-user-container">
      <h1>Add New User</h1>
      <div className="add-user-form">
        <label>
          Name:
          <input type="text" onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
        </label>
        <label>
          Email:
          <input type="email" onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
        </label>
        <label>
          Password:
          <input type="password" onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
        </label>
        <label>
          Role:
          <select onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
            <option value="Developer">Developer</option>
            <option value="Tester">Tester</option>
          </select>
        </label>
        <div className="add-user-buttons">
          <button onClick={handleSubmit}>Create User</button>
          <button onClick={() => navigate("/admin-profile")}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddUserPage;



