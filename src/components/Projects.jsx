import React from 'react';
import ProjectCard from './ProjectCard.jsx';

export default function Projects({ projects }) {
  return (
    <div id="projects">
      <span className="mobile-header">PROJECTS</span>
      {projects.map((project) => <ProjectCard project={project} key={project.title} />)}
    </div>
  );
}
