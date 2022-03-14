import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { loginUser } from "../api";

const Login=()=>{
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    return(
        <div>
            <form onSubmit={async (e)=>{
                e.preventDefault();
                const result=await loginUser(username,password);
            }}>
               <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          value={password}
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit"
        onClick={(e)=>{
          if(!localStorage.getItem(result.data.token))
          console.log("success");
          }
          }>Log in</button>
            </form>
        </div>
    )
}

export default Login;