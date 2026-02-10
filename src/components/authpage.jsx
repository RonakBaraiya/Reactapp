import React, { useState } from "react";
import Login from "./login";
import Register from "./register";
import Manage_Account from "./manage";
function Auth() {
  // 'auth' is the main menu, others are login, register, and manage
  const [state, setState] = useState("auth");
  return (
    <>
      {state === "auth" && (
        <div className="lrbtn">
          <button className="login" onClick={() => setState("login")}>
            Login
          </button>
          <button className="register" onClick={() => setState("register")}>
            Register
          </button>
          <button className="managebtn" onClick={() => setState("manage")}>
            Manage Accounts
          </button>
        </div>
      )}
      {/* Conditional rendering for each section based on the 'state' value */}
      {state === "login" && <Login setActiveTab={setState} />}

      {state === "register" && <Register setActiveTab={setState} />}
      {state === "manage" && <Manage_Account setActiveTab={setState} />}
    </>
  );
}

export default Auth;
