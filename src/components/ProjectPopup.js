import React from 'react';
import { Typography, makeStyles, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
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
}));

function ProjectPopup({ project, onClose }) {
  const classes = useStyles();

  return (
    <div id="project-popup" className={classes.projectPopup}>
      <div className={classes.popupContent}>
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h4" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {project.description}
        </Typography>
        {/* Add additional project details */}
      </div>
    </div>
  );
}

export default ProjectPopup;
