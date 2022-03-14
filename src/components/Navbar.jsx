import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  return (
  <div>
    <Link to="/users/register" >Register</Link>
    <Link to="/users/login">Login</Link>
    <Link to="/main">main</Link>
    </div>
    );


};

export default Navbar;
