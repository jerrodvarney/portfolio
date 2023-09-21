import React from 'react';

// need to build in more logic, revisit.
const changeNavSelect = (event) => {
  const closest = event.target.closest('.nav-link');
  closest.classList.add('nav-select');
};

export default function Nav() {
  return (
    <div id="nav">
      <a id="about-nav" href="#about" className="nav-link nav-select" onClick={changeNavSelect}>
        <span className="nav-line" />
        <span className="nav-text">ABOUT</span>
      </a>
      <a id="projects-nav" href="#projects" className="nav-link" onClick={changeNavSelect}>
        <span className="nav-line" />
        <span className="nav-text">PROJECTS</span>
      </a>
      <a id="experience-nav" href="#experience" className="nav-link" onClick={changeNavSelect}>
        <span className="nav-line" />
        <span className="nav-text">EXPERIENCE</span>
      </a>
    </div>
  );
}
