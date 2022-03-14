import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";

const main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/posts`
      );
      const data = await response.json();
      setPosts(data.data.posts);
    };
    fetchPost();
  }, []);
  console.log(posts);
  return (
    <div>
      <Router>
        <Navbar></Navbar>
      <Switch>
        <Route path="./users/register" component={SignUp} ></Route>
        <Route path="./users/login" component={Login}></Route>
        <Route path="./main"></Route>
      </Switch>
      </Router>
    </div>
  );
};

export default main;
