import React, { useState } from 'react';
import { Container, makeStyles, Card, Typography, CardContent } from '@material-ui/core';
import ProjectPopup from './ProjectPopup';
import Final_CNN from '../assets/images/CNN.avif';

const useStyles = makeStyles((theme) => ({
  projectsContainer: {
    paddingTop: '70px',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: theme.spacing(4),
  },
  projectCard: {
    width: '300px',
    height: '200px',
    marginBottom: theme.spacing(2),
    cursor: 'pointer',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  projectCardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  projectPopup: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    padding: theme.spacing(2),
    zIndex: 999,
    display: 'none', // Hidden by default
  },
  popupContent: {
    height: '100%',
    overflow: 'auto',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  heading: {
    color: 'white',
  },
}));

function Projects() {
  const classes = useStyles();
  const [selectedProject, setSelectedProject] = useState(null);

  const project1 = {
    title: 'Image Classification with Convlutional Neural Network in TensorFlow',
    description: 'Project 1 description...',
    image: Final_CNN,
  };

  const project2 = {
    title: 'Project 2',
    description: 'Project 2 description...',
  };

  const project3 = {
    title: 'Project 3',
    description: 'Project 3 description...',
  };

  const project4 = {
    title: 'Project 4',
    description: 'Project 4 description...',
  };

  const project5 = {
    title: 'Project 5',
    description: 'Project 5 description...',
  };

  const project6 = {
    title: 'Project 6',
    description: 'Project 6 description...',
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <Container maxWidth="md">
        <Typography variant="h2" align="center" className={classes.heading} gutterBottom>
          Personal Projects
        </Typography>
        <div className={classes.projectsContainer}>
          <Card 
            className={classes.projectCard} 
            style={{ 
                backgroundImage: `url(${project1.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            onClick={() => handleCardClick(project1)}
            >
            <CardContent className={classes.projectCardContent}>
              <Typography variant="h6" style={{ color: '#1b263b'}} gutterBottom>
                {project1.title}
              </Typography>
              <Typography variant="body2" style={{ color: '#415a77' }}>
                {project1.description}
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.projectCard} onClick={() => handleCardClick(project2)}>
            <CardContent className={classes.projectCardContent}>
              <Typography variant="h6" style={{ color: '#1b263b'}} gutterBottom>
                {project2.title}
              </Typography>
              <Typography variant="body2" style={{ color: '#415a77' }}>
                {project2.description}
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.projectCard} onClick={() => handleCardClick(project2)}>
            <CardContent className={classes.projectCardContent}>
              <Typography variant="h6" style={{ color: '#1b263b'}} gutterBottom>
                {project3.title}
              </Typography>
              <Typography variant="body2" style={{ color: '#415a77' }}>
                {project3.description}
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.projectCard} onClick={() => handleCardClick(project2)}>
            <CardContent className={classes.projectCardContent}>
              <Typography variant="h6" style={{ color: '#1b263b'}} gutterBottom>
                {project4.title}
              </Typography>
              <Typography variant="body2" style={{ color: '#415a77' }}>
                {project4.description}
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.projectCard} onClick={() => handleCardClick(project2)}>
            <CardContent className={classes.projectCardContent}>
              <Typography variant="h6" style={{ color: '#1b263b'}} gutterBottom>
                {project5.title}
              </Typography>
              <Typography variant="body2" style={{ color: '#415a77' }}>
                {project5.description}
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.projectCard} onClick={() => handleCardClick(project2)}>
            <CardContent className={classes.projectCardContent}>
              <Typography variant="h6" style={{ color: '#1b263b'}} gutterBottom>
                {project6.title}
              </Typography>
              <Typography variant="body2" style={{ color: '#415a77' }}>
                {project6.description}
              </Typography>
            </CardContent>
          </Card>
        </div>
        {selectedProject && (
    <ProjectPopup project={selectedProject} onClose={closePopup} />
  )}
      </Container>
    </section>
  );
}

export default Projects;
