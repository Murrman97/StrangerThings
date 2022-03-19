import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const { isLoggedIn, userObj, messages } = props;
  const posts = userObj.posts.map((post) => {
    return (
      <div className="SinglePost">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>Price: {post.price}</p>
        <p>Seller: {userObj.username}</p>
        <p>Location: {post.location}</p>
        <Link to={{ pathname: "/EditPost", state: { post: post } }}>
          <button>Edit post</button>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <div>
        <h1>Mesages</h1>
      </div>
      <div className="Message">
        {messages.map((message) => {
          return message.content;
        })}
      </div>
      <div>
        <h1>Posts</h1>
      </div>
      <div className="MainPosts">{posts}</div>
    </div>
  );
};

export default Profile;
