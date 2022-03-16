import React from "react";

const Post = ({ post }) => {
  return (
    <div className="SinglePost" key={post._id}>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>Price: {post.price}</p>
      <p>Seller: {post.author.username}</p>
      <p>Location: {post.location}</p>
    </div>
  );
};

export default Post;
