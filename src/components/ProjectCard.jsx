import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import TechChips from './TechChips.jsx';

export default function ProjectCard({ project }) {
  return (
    <a className="info-card-link" href={project.projectLink} target="_blank" rel="noreferrer">
      <div className="info-card-highlight-box">
        <div className="project-card info-card">
          <div className="info-card-left">
            <img className="project-pic" src={project.imageURL} alt="" />
          </div>
          <div className="info-card-main">
            <h3>
              {project.title}
              <FiArrowUpRight className="info-card-title-icon" />
            </h3>
            <p>{project.description}</p>
            <TechChips tech={project.technologies} />
          </div>
        </div>
      </div>
    </a>
  );
}
