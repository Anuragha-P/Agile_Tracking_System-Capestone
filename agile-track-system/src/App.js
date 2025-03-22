import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import AdminDashboard from "./components/AdminDashboard";
import ProfilePage from "./components/ProfilePage";
import AdminProfilePage from "./components/AdminProfilePage";
import UserHomePage from "./components/UserHomePage";
import ScrumDetailsPage from "./components/ScrumDetailsPage";
import AdminScrumDetailsPage from "./components/AdminScrumDetailsPage";
import CreateScrumPage from "./components/CreateScrumPage";
import AddUserPage from "./components/AddUserPage";
import { UserProvider } from "./components/UserContext"; // Import UserProvider

export const TaskContext = createContext();

function App() {
  const [tasks, setTasks] = useState([
    { title: "Task One", description: "Description for task one", status: "In Progress", assignedTo: "User 1" },
    { title: "Task Two", description: "Description for task two", status: "Completed", assignedTo: "User 2" },
    { title: "Task Three", description: "Description for task three", status: "To Do", assignedTo: "User 3" }
  ]);

  return (
    <UserProvider> {/* Wrap everything inside UserProvider */}
      <TaskContext.Provider value={{ tasks, setTasks }}>
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/user-profile" element={<ProfilePage />} />
            <Route path="/admin-profile" element={<AdminProfilePage />} />
            <Route path="/user-home" element={<UserHomePage />} />
            <Route path="/scrum-details/:teamName" element={<ScrumDetailsPage />} />
            <Route path="/admin-scrum-details/:teamName" element={<AdminScrumDetailsPage />} />
            <Route path="/create-scrum" element={<CreateScrumPage />} />
            <Route path="/add-user" element={<AddUserPage />} />
          </Routes>
        </Router>
      </TaskContext.Provider>
    </UserProvider>
  );
}

export default App;
