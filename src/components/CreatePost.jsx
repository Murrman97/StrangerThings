import React, { useState } from "react";
import { newPost } from "../api";

const CreatePost = ({ token, posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [deliver, setDeliver] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postDetailsObj = { title, description, location, price, deliver };
    console.log(postDetailsObj);
    const response = await newPost(postDetailsObj, token);
    console.log(response.data.post, "data");
    const newPosts = [response.data.post, ...posts];
    setPosts(newPosts);
  };

  return (
    <div className="CreatePost">
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Price*"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        ></input>
        <br></br>
        <input
          type="checkbox"
          value={deliver}
          onChange={(e) => {
            setChecked(!checked);
            setDeliver(
              e.target.value === "false"
                ? (e.target.value = "true")
                : (e.target.value = "false")
            );
            console.log(deliver);
          }}
        ></input>
        <label>Willing to deliver?</label>
        <br></br>
        <button type="submit">Create post</button>
      </form>
    </div>
  );
};

export default CreatePost;
