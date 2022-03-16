import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  let history = useHistory();

  return (
    <div className="NavBarClass">
      <div className="NavTitle">
        <h1>Stranger's Things</h1>
      </div>

      {isLoggedIn ? (
        <li>
          <Link to="/home">HOME</Link>
        </li>
      ) : null}

      {isLoggedIn ? (
        <li>
          <Link to="/posts">POSTS</Link>
        </li>
      ) : null}

      {isLoggedIn ? (
        <li>
          <Link to="/profile">PROFILE</Link>
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
            LOGOUT
          </Link>
        </li>
      ) : (
        <li>
          <Link to="/">LOGIN</Link>
        </li>
      )}
    </div>
  );
};

export default Navbar;
