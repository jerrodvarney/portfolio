import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import TechChip from './TechChip.jsx';

export default function ExpCard({ exp }) {
  return (
    <a className="exp-link" href={exp.companySite} target="_blank" rel="noreferrer">
      <div className="exp-card">
        <span>{`${exp.startDate} — ${exp.endDate}`}</span>
        <div className="exp-main">
          <h3>
            {`${exp.title} · ${exp.company}`}
            <FiArrowUpRight className="exp-title-icon" />
          </h3>
          <p>{exp.description}</p>
          {exp.technologies.map((tech) => <TechChip tech={tech} />)}
        </div>
      </div>
    </a>
  );
}
