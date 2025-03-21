import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/skills">Technologies</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/gameroom">Game Room</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
