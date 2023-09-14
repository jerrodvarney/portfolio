import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import TechChip from './TechChip.jsx';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div>
        <img className="project-pic" src={project.imageURL} alt="" />
      </div>
      <div>
        <h3>
          {project.title}
          <FaExternalLinkAlt />
        </h3>
        <p>{project.description}</p>
        {project.technologies.map((tech) => <TechChip tech={tech} />)}
      </div>
    </div>
  );
}
