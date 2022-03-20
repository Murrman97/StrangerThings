import React from "react";
import { useState, useEffect } from "react";
import Message from "./Message";
const Profile = (props) => {
  const { isLoggedIn, userObj, posts } = props;

  const sentMessages = userObj.messages.map((message) => {
    if (userObj.username === message.fromUser.username) {
      return (
        <div className="Message">
          <h3 className="sentmsg">(Sent by Me)</h3>
          <h3>{message.post.title}</h3>
          <p>{message.content}</p>
        </div>
      );
    }
    // if (userObj.username !== message.fromUser.username) {
    //   return (
    //     <div className="Message">
    //       <h3>(Sent by me)</h3>
    //       <h3>{message.post.title}</h3>
    //       <p>{message.content}</p>
    //     </div>
    //   );
    // }
  });
  const receivedMessages = userObj.messages.map((message) => {
    if (userObj.username !== message.fromUser.username) {
      return (
        <div className="Message">
          <h3>From: {message.fromUser.username}</h3>
          <h3>{message.post.title}</h3>
          <p>{message.content}</p>
        </div>
      );
    }
  });
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
