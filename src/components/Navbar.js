import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#333', color: '#fff', zIndex: 1000 }}>
      <ul style={{ display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
        <li><Link to="intro" smooth={true} duration={500}>Introduction</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="game-room" smooth={true} duration={500}>Game Room</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
