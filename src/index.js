import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Main />
    </div>
  );
};
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
/*
Things to do:
1) EditPost does not actually update a post
2) profile throws up an error Cannot read properties of undefined, when the app is refreshed or at first enter to profile tab
3) message css
4) when Loging out and loging in once again, userObj holds values for previous user(components: home and profile)

Notes:
1) Editing a post is possible from profile
*/