import React from "react";
import { deletePost } from "../api";
import { Link } from "react-router-dom";

const View = (props) => {
  const { posts, setPosts, userObj, post } = props;
  let url = window.location.pathname;

  const filterPost = posts.filter((post) => {
    if (url.includes(post._id)) {
      return true;
    }
  });

  const handleDelete = async (postId) => {
    const token = localStorage.getItem("token");
    console.log(postId);
    const data = await deletePost(postId, token);
    const filteredPosts = posts.filter((post) => {
      return post._id !== postId;
    });
    setPosts(filteredPosts);
    alert("post deleted");
  };

  // const post = userObj.posts.map((post) => {
  //   return (
  //     <div className="SinglePost">
  //       <h2>{post.title}</h2>
  //       <p>{post.description}</p>
  //       <p>Price: {post.price}</p>
  //       <p>Seller: {userObj.username}</p>
  //       <p>Location: {post.location}</p>
  //       <Link to={{ pathname: "/EditPost", state: { post: post } }}>
  //         <button>Edit post</button>
  //       </Link>
  //     </div>
  //   );
  // });

  return (
    <div className="SinglePost">
      {filterPost[0] ? (
        <div>
          <h2>{filterPost[0].title}</h2>
          <p>{filterPost[0].description}</p>
          <p>Price: {filterPost[0].price}</p>
          <p>Seller: {filterPost[0].author.username}</p>
          <p>Location: {filterPost[0].location}</p>
          <Link to="/posts">
            <button onClick={() => handleDelete(filterPost[0]._id)}>
              Delete Post
            </button>
          </Link>
          <Link to={{ pathname: "/EditPost", state: { post: filterPost[0] } }}>
            <button>Edit post</button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default View;
