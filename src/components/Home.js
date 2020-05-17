import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = ({ curUser }) => {
  const history = useHistory();

  useEffect(() => {
    if (curUser !== null) {
      return;
    } else {
      alert("You are not logged in");
      setTimeout(() => {
        history.push("/login");
      }, 100);
    }
  });
  return <div>{curUser !== null ? <h1>Home</h1> : null}</div>;
};

export default Home;
