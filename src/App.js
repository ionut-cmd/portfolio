import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import HuggingFaceProject from './components/HuggingFaceProject';
import projects from './data/projects';

function App() {
  return (
    <div>
      <Header />
      {projects.map(project => {
        if (project.id === 'huggingface') {
          return <HuggingFaceProject key={project.id} project={project} />;
        } else {
          return <Project key={project.id} project={project} />;
        }
      })}
      <Footer />
    </div>
  );
}

export default App;
