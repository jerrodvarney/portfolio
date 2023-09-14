import React from 'react';
import ProjectCard from './ProjectCard.jsx';

export default function Projects({ projects }) {
  return (
    <div>
      {projects.map((project) => <ProjectCard project={project} key={project.title} />)}
    </div>
  );
}
