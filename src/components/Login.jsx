import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { loginUser } from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="LoginClass">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginUser(username, password);
          setUsername("");
          setPassword("");
        }}
      >
        <input
          value={username}
          type="text"
          placeholder="Username*"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          value={password}
          type="text"
          placeholder="Password*"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Log in</button>
      </form>
      <p>
        Don't have an account?
        <Link className="Sign" to="/users/register">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
