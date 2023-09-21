import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Projects({ projects }) {
  return (
    <section id="projects">
      <span className="mobile-header">PROJECTS</span>
      {projects.map((project) => <ProjectCard project={project} key={project.title} />)}
    </section>
  );
}
