import React from 'react';

export default function TechChips({ tech }) {
  return (
    <div className="tech-chip-container">
      {tech.map((t) => <span className="tech-chip">{t}</span>)}
    </div>
  );
}
