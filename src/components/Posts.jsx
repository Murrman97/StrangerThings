import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const[searchTerm,setSearchTerm]=useState("");
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

  return <div>
    <h1>Posts</h1>
    <input type="search" placeholder="search posts" onChange={(e)=>{
      setSearchTerm(e.target.value)
    }}></input>
    {posts.filter((post)=>{
      if(searchTerm==""){
      return post;}
      else if(post.location.includes(searchTerm)||post.title.includes(searchTerm)||post.price.includes(searchTerm)||post.author.username.includes(searchTerm)){
        return post;
      }
      })
    .map((post,i)=>{
      return (
        <div key={i}
        >
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>Price: {post.price}</p>
          <p>Seller: {post.author.username}</p>
          <p>Location: {post.location}</p>

        </div>
      )
    })}
  </div>;
};

export default Posts;
