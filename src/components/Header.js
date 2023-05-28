
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import eu from "../images/eu.png"


const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#354f52" 
  },
});

// export default Header;
function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Avatar alt="Remy Sharp" src={eu}/>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Project 1</MenuItem>
          <MenuItem onClick={handleClose}>Project 2</MenuItem>
          <MenuItem onClick={handleClose}>HuggingFaceProject</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
