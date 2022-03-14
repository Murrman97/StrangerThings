import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Main, Navbar,SignUp,Login } from "./components";

/* 
CRUD Application
C - Create
R - Read
U - Update
D - Delete/Destroy
*/
const App=()=>{
  return<div className="app">
    <Main />
    <Navbar />
  </div>
}
ReactDOM.render(<App/>,document.getElementById("app"));
