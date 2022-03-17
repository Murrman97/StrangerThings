import React from 'react';
import Post from "./Post"
import Posts from "./Posts"

const Message = (props) => {
    const {posts}=props;
    let url=window.location.pathname;
    console.log("")
   
    return (
        <div className="SinglePost">
            { posts.filter((post)=>{
        if(url.includes(post._id)){
          return <div>
            <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>Price: {post.price}</p>
      <p>Seller: {post.author.username}</p>
      <p>Location: {post.location}</p>
      </div>
        }
    })}
        </div>
    );
};

export default Message;