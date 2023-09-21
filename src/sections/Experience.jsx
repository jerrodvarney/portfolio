import React from 'react';
import ExpCard from '../components/ExpCard.jsx';

export default function Experience({ experiences }) {
  return (
    <section id="experience">
      <span className="mobile-header">EXPERIENCE</span>
      {experiences.map((exp) => <ExpCard exp={exp} key={exp.title} />)}
    </section>
  );
}
