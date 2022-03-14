import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Switch, BrowserRouter as Router, Route, Link} from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";

const main = (props) => {
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
    <div >
      <Navbar />
      <Switch>
        <Route path="/users/register" ><SignUp /></Route>
        <Route exact path="/users/login"><Login /></Route>
        <Route path="/main"></Route>
      </Switch>
    </div>
  );
};

export default main;
