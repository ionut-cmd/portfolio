import React from 'react';
import projects from '../data/projects';
import Button from '@material-ui/core/Button';

function Header() {
  return (
    <header>
      <h1>My Portfolio</h1>
      <div className="dropdown">
        <span>Projects </span>
        <span>🔽</span>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    </header>
  );
}

export default Header;
