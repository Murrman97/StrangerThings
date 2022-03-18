import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Posts from "./Posts";
import CreatePost from "./CreatePost";
import { getMe } from "../api";
import Home from "./Home";
import Message from "./Message";
import View from "./View";
import Profile from "./Profile";

/*
problem 1:
double check user verificiation to send message.
if one user create a post and another user logs in, the second user can view and delete 
the post of the first user.

probable cause: ?need to check conditions,when we render view/render buttons 
suggestion to fix: use posts.isAuthor

 Problem 2
render messages. Not sure how access message contentin profile component

*/




const Main = (props) => {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState({});
const [messages, setMessages]=useState([]);
  const [posts, setPosts] = useState([]);
  //const [searchTerm, setSearchTerm] = useState("");
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


  useEffect(() => {
    const currentToken = localStorage.getItem("token");

    const catchMe = async () => {
      const data = await getMe(currentToken);
      setUserObj(data.data);
    };

    if (currentToken) {
      setIsLoggedIn(true);
      setToken(currentToken);
      catchMe();
    }
  }, []);
  // console.log(userObj);
  /*  useEffect(()=>{
    localStorage.getItem("token") ? setToken(localStorage.getItem("token")) : null  
  },[])
  */
  // console.log(token);
  return (
    <div className="MainClass">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route path="/home">
          <Home setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/users/register">
          <SignUp setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/posts/:postid/messages">
          <Message posts={posts} />
        </Route>
        <Route path="/posts/view/:postid">
          <View posts={posts} setPosts={setPosts} />
        </Route>
        <Route path="/posts">
          <Posts
            userObj={userObj}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            posts={posts}
            setPosts={setPosts}
          />
        </Route>
        <Route path="/createPost">
          <CreatePost
            setIsLoggedIn={setIsLoggedIn}
            posts={posts}
            setPosts={setPosts}
          />
        </Route>
        <Route path="/profile">
          <Profile Message={messages} isLoggedIn={isLoggedIn} userObj={userObj} posts={posts}/>
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
