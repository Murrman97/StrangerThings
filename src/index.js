import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components";
import "./index.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="app">
      <Router>
        <Main setIsLoggedIn={setIsLoggedIn} />
      </Router>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
