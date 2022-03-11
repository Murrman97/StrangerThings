import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../api";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";

const main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await fetch(`${API_KEY}`);
      const data = await response.json;
      console.log(data, "data");
    };
    fetch();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route path="/main">
          <h1>hello main</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default main;
