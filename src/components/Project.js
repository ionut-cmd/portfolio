import React from 'react';
import './Project.css';


function Project({ project }) {
  return (
    <section id={project.id}>
      <h2>{project.name}</h2>
      {/* You can add more project details here */}
    </section>
  );
}

export default Project;
