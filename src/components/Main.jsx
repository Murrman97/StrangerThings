import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";

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
      <Navbar></Navbar>
      <Switch>
        <Route path="/users/register">{SignUp()}</Route>
        <Route path="/main">
          <h1>hello main</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default main;
