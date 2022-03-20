import React from "react";
import { useState, useEffect } from "react";
import Message from "./Message";
const Profile = (props) => {
  const { isLoggedIn, userObj, posts } = props;

  const sentMessages = userObj.messages
    ? userObj.messages.map((message, i) => {
        if (userObj.username === message.fromUser.username) {
          return (
            <div key={i} className="Message">
              <h3 className="sentmsg">(Sent by Me)</h3>
              <h3>{message.post.title}</h3>
              <p>{message.content}</p>
            </div>
          );
        }
      })
    : null;
  const receivedMessages = userObj.messages
    ? userObj.messages.map((message, i) => {
        if (userObj.username !== message.fromUser.username) {
          return (
            <div key={i} className="Message">
              <h3>From: {message.fromUser.username}</h3>
              <h3>{message.post.title}</h3>
              <p>{message.content}</p>
            </div>
          );
        }
      })
    : null;
  return (
    <div>
      <h3>Messages From Me</h3>
      {sentMessages}
      <div>
        <h3>Messages To Me</h3>
        {receivedMessages}
      </div>
    </div>
  );
};

export default Profile;
