import React from 'react';
import ExpCard from '../components/ExpCard.jsx';

export default function Experience({ experiences }) {
  return (
    <div id="experience">
      <span className="mobile-header">EXPERIENCE</span>
      {experiences.map((exp) => <ExpCard exp={exp} key={exp.title} />)}
    </div>
  );
}
