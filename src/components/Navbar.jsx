import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="NavBarClass">
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/">Login</Link>
      </li>
      <li>
        <Link to="/users/register">Sign Up</Link>
      </li>
    </div>
  );
};

export default Navbar;
