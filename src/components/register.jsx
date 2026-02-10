import React, { useState } from "react";

// Pass setActiveTab as a 'prop' will switch back to login
function Register({ setActiveTab }) {
  //  Declare State for inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    // get existing users or empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // check duplicate email to prevent redundancy
    const exists = users.find((u) => u.email === email);
    if (exists) {
      alert("Email already registered");
      return;
    }

    // add new user
    users.push({ name, email, password });

    // save back
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created!");
    setActiveTab("login");
  };

  return (
    <form className="form" onSubmit={handleRegister}>
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Name"
        className="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email Address"
        className="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="sign-up">
        Submit
      </button>
    </form>
  );
}

export default Register;
