import React from 'react';

const About = () => {
  return (
    <div>
      <div className="home-header">
        <h1>About!</h1>
        <p>My name is</p>
      </div>

      <div className="home-content">
        <p>
          Explore my projects, learn more about me, or get in touch with me through the links below.
        </p>
      </div>

      <div className="social-links">
        <a href="https://link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> Twitter
        </a>
      </div>
    </div>
  );
};

export default About;
