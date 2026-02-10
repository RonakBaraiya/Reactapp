import React, { useState } from "react";

function Edituser({ user, onUpdate, onCancel }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  return (
    <div className="user-vertical-stack">
      {" "}
      <div className="manage-wrapper">
        <h1>Edit User</h1>
        <div className="input-group">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="action-buttons" style={{ marginTop: "20px" }}>
          <button
            className="managebtn-small"
            onClick={() => onUpdate(user.email, name, email)}
          >
            Update
          </button>
          <button className="removebtn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edituser;
