import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
      <h1>Posts</h1>
      <input
        type="search"
        placeholder="search posts"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      ></input>
      <Link to="/CreatePost">add Post</Link>
      {posts
        .filter((post) => {
          if (searchTerm == "") {
            return post;
          } else if (
            post.location.includes(searchTerm) ||
            post.title.includes(searchTerm) ||
            post.price.includes(searchTerm) ||
            post.author.username.includes(searchTerm)
          ) {
            return post;
          }
        })
        .map((post, i) => {
          return <Post post={post} key={i} />;
        })}
    </div>
  );
};

export default Posts;
