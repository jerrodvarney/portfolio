import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import TechChips from './TechChips.jsx';

export default function ExpCard({ exp }) {
  return (
    <a className="info-card-link" href={exp.companySite} target="_blank" rel="noreferrer">
      <div className="info-card-lowlight-box" />
      <div className="info-card">
        <div className="info-card-left exp-date-container">
          <span className="exp-dates">{`${exp.startDate} — ${exp.endDate}`}</span>
        </div>
        <div className="info-card-main">
          <h3>
            {`${exp.title} · ${exp.company}`}
            <FiArrowUpRight className="info-card-title-icon" />
          </h3>
          <p>{exp.description}</p>
          <TechChips tech={exp.technologies} />
        </div>
      </div>
    </a>
  );
}
