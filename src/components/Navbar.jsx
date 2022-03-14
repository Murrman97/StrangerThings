import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="NavBarClass">
      <Link to="/users/register"></Link>
      <li>
        <Link to="/users/login">Login</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
    </div>
  );
};

export default Navbar;
