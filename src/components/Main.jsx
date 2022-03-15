import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Posts from "./Posts";

const main = (props) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const currentToken = localStorage.getItem("token");
    currentToken ? setToken(currentToken) : null;
  }, []);

  // console.log(token);

  return (
    <div className="MainClass">
      <Navbar token={token} />
      <Switch>
        <Route path="/users/register">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
      </Switch>
    </div>
  );
};

export default main;
