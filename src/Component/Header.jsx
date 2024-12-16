import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#f3f3f3',
        boxShadow: 'none',
        '*': { color: '#000' }, // Universal selector for child elements
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Ejire Hub
        </Typography>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button color="inherit" >
            Home
          </Button>
        </Link>
        <Link to="/skill" >
          <Button color="inherit" >
            Skills
          </Button>
        </Link>
        <Link to="/project" >
          <Button color="inherit" >
            Project
          </Button>
        </Link>
       
        <Link to="/contact" >
          <Button color="inherit" >
            Contact
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
