import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Social() {
  return (
    <div id="social">
      <a href="https://github.com/jerrodvarney" target="_blank" rel="noreferrer">
        <FaGithub className="social-icon" size="1.6rem" />
      </a>
      <a href="https://www.instagram.com/jerrod.nv" target="_blank" rel="noreferrer">
        <FaInstagram className="social-icon" size="1.6rem" />
      </a>
      <a href="https://www.linkedin.com/in/jerrodvarney/" target="_blank" rel="noreferrer">
        <FaLinkedin className="social-icon" size="1.6rem" />
      </a>
    </div>
  );
}
