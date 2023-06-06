import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import { shuffle } from 'lodash';

const useStyles = makeStyles((theme) => ({
  skillsContainer: {
    paddingTop: '70px',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: theme.spacing(4),
  },
  skill: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
  skillIcon: {
    width: '100px',
    height: '100px',
  },
  skillTitle: {
    marginTop: theme.spacing(1),
  },
}));
const skillsData = [
  { 
    name: 'Python', 
    description: 'Object-oriented programming...', 
    icon: '/icons/icons8-python-144.png', 
    link: "https://icons8.com/icon/13441/python"
  },
  { 
    name: 'Java', 
    description: 'Java is a class-based...', 
    icon: '/icons/icons8-java-144.png', 
    link: "https://icons8.com/icon/13679/java"
  },
  { 
    name: 'C++', 
    description: 'C++ is a class-based...', 
    icon: '/icons/icons8-c-144.png', 
    link: "https://icons8.com/icon/40669/c%2B%2B"
  },
  { 
    name: 'Pytorch', 
    description: 'C++ is a class-based...', 
    icon: '/icons/icons8-c-144.png', 
    link: "https://icons8.com/icon/40669/c%2B%2B"  // This seems to be the same link as the previous one
  },
  { 
    name: 'Tensorflow', 
    description: 'C++ is a class-based...', 
    icon: '/icons/icons8-tensorflow-144.png', 
    link: "https://icons8.com/icon/n3QRpDA7KZ7P/tensorflow"
  },
  { 
    name: 'HTML', 
    description: 'C++ is a class-based...', 
    icon: '/icons/icons8-html-144.png', 
    link: "https://icons8.com/icon/v8RpPQUwv0N8/html-5"
  },
  { 
    name: 'CSS', 
    description: 'C++ is a class-based...', 
    icon: '/icons/icons8-css-144.png', 
    link: "https://icons8.com/icon/21278/css3"
  },
  { 
    name: 'JS', 
    description: 'C++ is a class-based...', 
    icon: '/icons/icons8-js-128.png', 
    link: "https://icons8.com/icon/Nkym0Ujb8VGI/javascript"
  },
  { 
    name: 'MySql', 
    description: 'C++ is a class-based...', 
    icon: '/icons/icons8-mysql-144.png', 
    link: "https://icons8.com/icon/CgWei7hH4lGJ/mysql"
  },
  { 
    name: 'ARM Assembly', 
    description: 'C++ is a class-based...', 
    icon: '/icons/icons8-c-144.png', 
    link: "https://icons8.com/icon/40669/c%2B%2B"  // Same link again. 
  },
  { 
    name: 'Git', 
    description: 'C++ is a class-based...', 
    icon: '/icons/icons8-git-144.png', 
    link: "https://icons8.com/icon/CgWei7hH4lGJ/git"
  },
  { 
    name: 'Raspberry Pi', 
    description: 'C++ is a class-based...', 
    icon: '/icons/icons8-raspberry-pi-144.png', 
    link: "https://icons8.com/icon/13443/raspberry-pi"
  },
];


function Skills() {
  const classes = useStyles();
  const skills = shuffle(skillsData);

  return (
    <section id="skills">
      <Container maxWidth="md">
        <Typography variant="h2" align="center">Skills</Typography>
        <div className={classes.skillsContainer}>
          {skills.map((skill) => (
            <div key={skill.name} className={classes.skill}>
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                <img src={skill.icon} alt={skill.name} className={classes.skillIcon} />
              </a>
              <Typography variant="h6" className={classes.skillTitle}>
                {skill.name}
              </Typography>
              <Typography variant="body1">
                {skill.description}
              </Typography>
            </div>
          ))}
        </div>
        <Typography 
            variant="body2" 
            align="center" 
            style={{marginTop: '20px', fontSize: '0.75rem'}}  
        >
        Icons by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8</a>
        </Typography>

      </Container>
    </section>
  );
}

export default Skills;
