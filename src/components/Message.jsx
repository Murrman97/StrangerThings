import React, { useState, useEffect } from "react";

import { newMessage } from "../api";

const Message = (props) => {
  const { posts } = props;
  const [myMessage, setMyMessage] = useState("");
  const [post, setPost] = useState(null);
  const [token, setToken] = useState(null);

  let url = window.location.pathname;
  //   console.log(posts);

  useEffect(() => {
    const filteredPost = posts.filter((post) => {
      if (url.includes(post._id)) {
        return true;
      }
    });
    setPost(filteredPost[0]);
  }, []);

  async function handleClick(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const response = await newMessage(myMessage, post._id, token);
    console.log("messageSent", response);
  }

  return (
    <div className="SinglePost">
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>Price: {post.price}</p>
          <p>Seller: {post.author.username}</p>
          <p>Location: {post.location}</p>
          <form onSubmit={handleClick}>
            <input
              type="text"
              placeholder="Send Message"
              onChange={(e) => {
                setMyMessage(e.target.value);
              }}
            ></input>
            <button className="sendMsg" type="submit">
              Send Message
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Message;
