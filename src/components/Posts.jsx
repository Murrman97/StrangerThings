import React, { useState, useEffect } from "react";

const Posts = () => {
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

  return <div></div>;
};

export default Posts;
