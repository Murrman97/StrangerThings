import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Posts from "./Posts";

const Main = (props) => {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const currentToken = localStorage.getItem("token");
    currentToken ? setIsLoggedIn(true) : null;
  }, []);

  console.log(token);
  return (
    <div className="MainClass">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route path="/users/register">
          <SignUp setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
