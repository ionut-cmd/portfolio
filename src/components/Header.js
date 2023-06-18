import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Box } from '@material-ui/core';
import eu from "../assets/images/eu.png";
import { Link } from 'react-scroll';
import '../App.css';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: 'transparent',
    position: 'fixed',
    top: 0,
    zIndex: 999,
    transition: '0.4s',
  },
  appBarScrolled: {
    backgroundColor: '#000',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    marginLeft: 10,
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    margin: '0 10px',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#fff',
  },
  activeLink: {
    color: 'orange',
  },
});

function Header() {
  const classes = useStyles();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AppBar position="static" className={`${classes.appBar} ${isScrolled ? classes.appBarScrolled : ''}`} >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Ionut Bostan
        </Typography>
        <Box className={classes.linkContainer}>
          <Link 
            to="about" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className={classes.link} 
            activeClass={classes.activeLink}
          >
            About
          </Link>
          <Link 
            to="skills" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className={classes.link} 
            activeClass={classes.activeLink}
          >
            Skills
          </Link>
          <Link 
            to="projects" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className={classes.link} 
            activeClass={classes.activeLink}
          >
            Projects
          </Link>
          <Link 
            to="huggingfaceproject" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className={classes.link} 
            activeClass={classes.activeLink}
          >
            HuggingFaceProject
          </Link>
        </Box>
        <img src={eu} alt="Remy Sharp" className={classes.avatar} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
