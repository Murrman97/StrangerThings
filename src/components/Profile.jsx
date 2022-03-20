import React from "react";
import { useState, useEffect } from "react";
import Message from "./Message";
const Profile = (props) => {
  const { isLoggedIn, userObj, posts } = props;
  console.log(userObj);

  const messages = userObj.messages.map((message) => {


    return (<div>
      <h3>From: {message.fromUser.username}</h3>
      <h3>{message.post.title}</h3>
      <p>{message.content}</p>

    </div>);
  });

  return <div className="Message">{messages}</div>;
};

export default Profile;