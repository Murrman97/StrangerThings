import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Posts from "./Posts";
import CreatePost from "./CreatePost";
import { getMe } from "../api";

const Main = (props) => {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState({});

  useEffect(() => {
    const currentToken = localStorage.getItem("token");
    const userMe = async () => {
      const data = await getMe(currentToken);
      setUserObj(data.data);
    };

    if (currentToken) {
      setIsLoggedIn(true);
      setToken(currentToken);
      userMe();
    }
  }, []);
  console.log(userObj);
  // console.log(token);
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
        <Route path="/createPost">
          <CreatePost />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
