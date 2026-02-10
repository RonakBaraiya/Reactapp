import React, { useEffect, useState } from "react";
import Edituser from "./edituser";

function Manage_Account({ setActiveTab }) {
  const [userList, setUserList] = useState([]);
  // Local state to hold the user i want to edit
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUserList(storedUsers);
  }, []);

  // Handle the update logic
  const handleUpdate = (oldEmail, newName, newEmail) => {
    const updatedUsers = userList.map((u) =>
      u.email === oldEmail ? { ...u, name: newName, email: newEmail } : u,
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUserList(updatedUsers);
    setSelectedUser(null); // Switch back to the list view
  };
  // Handle the remove logic
  const handleRemove = (emailToRemove) => {
    if (window.confirm("Are you sure you want to remove this account?")) {
      const updatedUsers = userList.filter((u) => u.email !== emailToRemove);

      localStorage.setItem("users", JSON.stringify(updatedUsers));

      // Update the UI state
      setUserList(updatedUsers);
    }
  };

  if (selectedUser) {
    return (
      <Edituser
        user={selectedUser}
        onUpdate={handleUpdate}
        onCancel={() => setSelectedUser(null)}
      />
    );
  }

  return (
    <div className="user-vertical-stack">
      <div className="manage-wrapper">
        <button className="back-link" onClick={() => setActiveTab("auth")}>
          ← Back
        </button>
        <h1>Registered Users</h1>
        {userList.map((user, index) => (
          <div key={index} className="user-row-card">
            <span className="user-display-name">{user.name}</span>
            <div className="action-buttons">
              <button
                className="managebtn-small"
                onClick={() => setSelectedUser(user)}
              >
                Edit
              </button>
              <button
                className="removebtn"
                onClick={() => handleRemove(user.email)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Manage_Account;
