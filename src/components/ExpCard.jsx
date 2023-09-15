import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import TechChip from './TechChip.jsx';

export default function ExpCard({ exp }) {
  return (
    <div className="exp-card">
      <div>
        <span>
          {exp.startDate}
          -
          {exp.endDate}
        </span>
      </div>
      <div>
        <h3>
          {exp.title}
          <FaExternalLinkAlt />
        </h3>
        <p>{exp.description}</p>
        {exp.technologies.map((tech) => <TechChip tech={tech} />)}
      </div>
    </div>
  );
}
