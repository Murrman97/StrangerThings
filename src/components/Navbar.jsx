import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  <div>
    <p>Check</p>
    <Link to="/users/login">Login</Link>
    <Link to="/main">main</Link>

    {//<navlink to="./login">Login</navlink>
    }
    </div>
    );


};

export default Navbar;
