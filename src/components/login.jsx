import React, { useState } from "react";

function Login({ setActiveTab }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    //  Get the ARRAY of users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    //  Find the specific user in that array
    const userFound = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (userFound) {
      alert(`Welcome back, ${userFound.name}!`);

      setActiveTab("auth");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <form className="form" onSubmit={handleLogin}>
      <h1>Sign In</h1>

      <input
        type="email"
        placeholder="Email Address"
        className="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="sign-in">
        Login
      </button>
    </form>
  );
}

export default Login;
