import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect;

  return (
    <div className="HomePage">
      <h1>Welcome to Stranger's Things!</h1>
      <h2>Logged in as </h2>
      <Link className="ProfileLink" to="/profile">
        <button className="ProfileButton">VIEW PROFILE</button>
      </Link>
    </div>
  );
};

export default Home;

//{`${username}`}
