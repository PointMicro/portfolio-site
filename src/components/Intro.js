import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="intro">
      <h1>Welcome</h1>
      <p>About me teadsadsdasxtsdfsdffhfghghfdsf goes here.</p>
      <p>Feel free to explore or...</p>
      <Link to="/gameroom" className="game-room-link">Enter the Game Room!</Link>
    </div>
  );
};

export default Intro;
