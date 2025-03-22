import React, { createContext, useState } from "react";

// Create UserContext
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Global state for users
  const [users, setUsers] = useState([
    { name: "Employee One", email: "employee1@example.com" },
    { name: "Employee Two", email: "employee2@example.com" },
    { name: "Employee Three", email: "employee3@example.com" }
  ]);

  // Function to add a new user
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  // Function to delete a user
  const deleteUser = (email) => {
    setUsers(users.filter((user) => user.email !== email));
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

