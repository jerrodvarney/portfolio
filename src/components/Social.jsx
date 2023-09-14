import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Social() {
  return (
    <div id="social">
      <FaGithub className="social-icon" size="1.5rem" />
      <FaInstagram className="social-icon" size="1.5rem" />
      <FaLinkedin className="social-icon" size="1.5rem" />
    </div>
  );
}
