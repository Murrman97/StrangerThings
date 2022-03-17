import React from "react";

const View = (props) => {
  const { posts } = props;
  let url = window.location.pathname;

  const filterPost = posts.filter((post) => {
    if (url.includes(post._id)) {
      return true;
    }
  });

  return (
    <div className="SinglePost">
      {filterPost[0] ? (
        <div>
          <h2>{filterPost[0].title}</h2>
          <p>{filterPost[0].description}</p>
          <p>Price: {filterPost[0].price}</p>
          <p>Seller: {filterPost[0].author.username}</p>
          <p>Location: {filterPost[0].location}</p>
        </div>
      ) : null}
    </div>
  );
};

export default View;
