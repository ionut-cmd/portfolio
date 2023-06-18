import React from 'react';
import { Container, Typography, makeStyles, Link } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import eu from "../assets/images/eu.png";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    paddingTop: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4),
    // backgroundColor: theme.palette.primary.main,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: theme.spacing(4),
  },
  rightContainer: {
    flex: 1,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: '50%',
    marginBottom: theme.spacing(2),
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  socialIcon: {
    marginRight: theme.spacing(1),
  },
}));

function About() {
  const classes = useStyles();

  return (
    <section id="about">
      <Container maxWidth="md">
        <div className={classes.aboutContainer}>
          <div className={classes.leftContainer}>
            <img src={eu} alt="Profile" className={classes.profileImage} />
            <div className={classes.socialLinks}>
              <Link href="https://linkedin.com/in/ionut-bostan-25a598196" color="inherit" target="_blank" rel="noopener">
                <LinkedInIcon className={classes.socialIcon} />
              </Link>
              <Link href="https://github.com/ionut-cmd" color="inherit" target="_blank" rel="noopener">
                <GitHubIcon className={classes.socialIcon} />
              </Link>
            </div>
          </div>
          <div className={classes.rightContainer}>
            <Typography variant="h4" gutterBottom>
              Ionut Bostan
            </Typography>
            <Typography variant="body1" gutterBottom>
              Job Title
            </Typography>
            <Typography variant="body1" gutterBottom>
              Profile Text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur quam non massa
              tristique, ac iaculis tortor lacinia.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Education:
            </Typography>
            <ul>
              <li>Educational Institution 1</li>
              <li>Educational Institution 2</li>
              <li>Educational Institution 3</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
