import React from 'react';
import Nav from './components/Nav.jsx';
import Social from './components/Social.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import './App.scss';

import dummy from '../dummy';

const { experiences, projects } = dummy;

export default function App() {
  return (
    <div id="main">
      <div id="bio">
        <div id="info">
          <h1 id="name">Jerrod Varney</h1>
          <h2 id="tagline">Full Stack Software Engineer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus tempor.
          </p>
        </div>
        <Nav />
        <Social />
      </div>
      <div id="content">
        <div id="about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper libero nec neque volutpat, id tristique ante blandit. Fusce dignissim erat vitae augue interdum vestibulum. Pellentesque vel nunc vel purus tristique eleifend.
          <br />
          <br />
          In facilisis eros vel quam semper, sed egestas erat tincidunt. Donec bibendum sapien eu urna dapibus feugiat. Praesent et enim eget nulla volutpat sagittis a eget turpis. Sed auctor augue nec justo bibendum, nec sodales ligula tempor.

          <br />
          <br />
          In hac habitasse platea dictumst. Curabitur congue nisl vel justo tincidunt bibendum. Integer nec rhoncus urna. Curabitur non malesuada urna, ac feugiat ex. Vivamus vel orci id elit laoreet varius. Nullam a viverra purus.

        </div>
        <Projects projects={projects} />
        <Experience experiences={experiences} />
      </div>
    </div>
  );
}
