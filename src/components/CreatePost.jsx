import React, { useState } from "react";
import { newPost } from "../api";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [deliver, setDeliver] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <div className="CreatePost">
      <h1>Create a Post</h1>
      <input type="text" placeholder="Title" id="title"></input><br></br>
      <input type="text" placeholder="Description"></input><br></br>
      <input type="text" placeholder="Price*"></input><br></br>
      <input type="text" placeholder="Location"></input><br></br>
      <input type="checkbox"></input><label>Willing to deliver?</label><br></br>
      <button >Create post</button>
    </div>
  );
};

export default CreatePost;
