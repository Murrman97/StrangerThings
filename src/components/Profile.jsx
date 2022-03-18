import React from "react";
import { useState, useEffect } from "react";
import Message from "./Message";
const Profile = (props) => {
  const { isLoggedIn, userObj, posts } = props;
  console.log(userObj.messages);

  const messages = userObj.messages.map((message) => {
    return message.content;
  });

  return <div className="Message">{messages}</div>;
};

export default Profile;
