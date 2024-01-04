import React, { useState, useEffect } from 'react';
import "./NavigationStyle.css";

const Navigation = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      document.querySelector('nav').classList.add('nav-scroll');
    } else {
      document.querySelector('nav').classList.remove('nav-scroll');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${clicked ? 'nav-active' : ''}`}>
      <a href="index.html">
        {/* Your SVG path here */}
      </a>
      <div>
        <ul id="navbar">
          <li><a className="active" href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/play">Play</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
      <div id="mobile" onClick={handleClick}>
        <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navigation;
