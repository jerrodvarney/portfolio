import React from 'react';
import Nav from './components/Nav.jsx';
import Social from './sections/Social.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import './App.scss';

import myInfo from '../myInfo';

const { experiences, projects, about } = myInfo;

export default function App() {
  return (
    <>
      {/* <div id="gradient-layer" /> */}
      <div id="main">
        <div id="bio">
          <div id="info">
            <h1>Jerrod Varney</h1>
            <h2>Full Stack Software Engineer</h2>
            <p>
              Digital architect weaving code into technological symphonies, one line at a time.
            </p>
            <Nav />
          </div>
          <Social />
        </div>
        <div id="content">
          <About about={about} />
          <Projects projects={projects} />
          <Experience experiences={experiences} />
          <footer>
            Coded by yours truly in Visual Studio Code!
            Built with React and custom SCSS.
          </footer>
        </div>
      </div>
    </>
  );
}
