import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { loginUser } from "../api";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  async function handleClick(e) {
    e.preventDefault();
    await loginUser(username, password);

    setUsername("");
    setPassword("");
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
      history.push("/home");
    }
  }

  return (
    <div className="LoginClass">
      <form onSubmit={handleClick}>
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
