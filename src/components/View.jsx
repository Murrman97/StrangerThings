import React from "react";
import { deletePost } from "../api";

const View = (props) => {
  const { posts, setPosts } = props;
  let url = window.location.pathname;

  const filterPost = posts.filter((post) => {
    if (url.includes(post._id)) {
      return true;
    }
  });

  const handleDelete = async (postId) => {
    const data = await deletePost(postId);
    const filteredPosts = posts.filter((post) => {
      return post._id !== postId;
    });
    setPosts(filteredPosts);
  };

  return (
    <div className="SinglePost">
      {filterPost[0] ? (
        <div>
          <h2>{filterPost[0].title}</h2>
          <p>{filterPost[0].description}</p>
          <p>Price: {filterPost[0].price}</p>
          <p>Seller: {filterPost[0].author.username}</p>
          <p>Location: {filterPost[0].location}</p>
          <button onClick={() => handleDelete(posts._id)}>Delete Post</button>
        </div>
      ) : null}
    </div>
  );
};

export default View;
