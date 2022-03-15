import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { gotToken } from "../api";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  let history = useHistory();

  return (
    <div className="NavBarClass">
      {isLoggedIn ? (
        <li>
          <Link to="/home">Home</Link>
        </li>
      ) : null}

      {isLoggedIn ? (
        <li>
          <Link
            to="/"
            onClick={() => {
              localStorage.removeItem("token");
              setIsLoggedIn(false);
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        <li>
          <Link to="/">Login</Link>
        </li>
      )}
      <li>
        <Link to="/users/register">Sign Up</Link>
      </li>
    </div>
  );
};

export default Navbar;
