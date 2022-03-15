import React, { useState } from "react";
import { registerUser } from "../api";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="SignUpClass">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registerUser(username, password);
          setUsername("");
          setPassword("");
        }}
      >
        <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          value={password}
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?
        <Link className="Sign" to="/">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
