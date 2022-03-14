import React, {useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Main} from "./components";

/* 
CRUD Application
C - Create
R - Read
U - Update
D - Delete/Destroy
*/
const App=()=>{
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  return(<div className="app">
    <Router>
    <Main setIsLoggedIn={setIsLoggedIn}/>
    </Router>
  </div>)
}
ReactDOM.render(<App/>,document.getElementById("app"));
