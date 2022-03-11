import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components";

/* 
CRUD Application
C - Create
R - Read
U - Update
D - Delete/Destroy
*/

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById("app")
);
