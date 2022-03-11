import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../api";

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
      <h1>hello main</h1>
    </div>
  );
};

export default main;
