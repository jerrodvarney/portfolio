import React from 'react';

// need to build in more logic, revisit.
const changeNavSelect = (event) => {
  const prevSelect = document.querySelectorAll('.nav-select');
  prevSelect[0].classList.remove('nav-select');

  const closest = event.target.closest('.nav-link');
  closest.classList.add('nav-select');
};

export default function Nav() {
  return (
    <div id="nav">
      <a href="#about" className="nav-link nav-select" onClick={changeNavSelect}>
        <span className="nav-line" />
        <span className="nav-text">ABOUT</span>
      </a>
      <a href="#projects" className="nav-link" onClick={changeNavSelect}>
        <span className="nav-line" />
        <span className="nav-text">PROJECTS</span>
      </a>
      <a href="#experience" className="nav-link" onClick={changeNavSelect}>
        <span className="nav-line" />
        <span className="nav-text">EXPERIENCE</span>
      </a>
    </div>
  );
}
