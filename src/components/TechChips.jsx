import React from 'react';

export default function TechChips({ tech }) {
  let counter = 1;
  return (
    <div className="tech-chip-container">
      {tech.map((t) => <span className="tech-chip" key={counter++}>{t}</span>)}
    </div>
  );
}
