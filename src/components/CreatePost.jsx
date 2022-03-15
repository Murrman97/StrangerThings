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
    </div>
  );
};

export default CreatePost;
