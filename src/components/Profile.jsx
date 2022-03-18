import React from "react";
import { useState ,useEffect} from "react";
import Message from "./Message";
const Profile = (props) => {
  const {isLoggedIn, userObj,messages,posts}=props
const [message,setMessages]=useState([]);
  return( <div className="Message">
    <h1>Messages</h1>
    {posts.filter((post)=>{
      if(post.author._id===userObj._id){
        return post.message;
      }

    })
    .map((message,i)=>{
      return(
        <div key={i}>{

          //Notsure about message.message. 
        }
          <p>{message.message}</p>
          </div>
      );
    })}
  </div>)
};

export default Profile;
