import React from "react";
import { Link } from "react-router-dom";
import LPCon from '../imgs/pc1.gif';
import GH from '../imgs/25231.png';
import LI from '../imgs/LI.png';



const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-text">
        <h1>Homepage</h1>
        <div className="intro-border">
          <p>
            My name is <strong>Gabriel A.</strong>, a passionate and detail-oriented <strong>Software Developer</strong> with a strong focus on creating secure, user-friendly, and innovative solutions. My expertise spans application security, mobile development, and full-stack development, where I use technical to deliver high-quality, scalable software.
          </p>

        </div>

        {/* Icons*/}
        <div className="icon-links">
  <a href="https://github.com/pointmicro" target="_blank" rel="noopener noreferrer" className="icon-box">
    <img src={GH} alt="GitHub Profile" className="icon-img" />
  </a>
  <a href="https://www.linkedin.com/in/gabriel-a-234913248/" target="_blank" rel="noopener noreferrer" className="icon-box">
    <img src={LI} alt="LinkedIn Profile" className="icon-img" />
  </a>
</div>

        {/* Contact me */}
        <div className="contact-section">
          <p>Contact me: <a href="mailto:gabe720a@gmail.com">gabe720a@gmail.com</a></p>
        </div>
      </div>

      <div className="image-stack">
      <img src={LPCon} alt="3D THING GOES IN HERE" className="stack-image" style={{ width: '500px', height: 'auto' }} />
      </div>
    </div>
  );
};

export default Intro;