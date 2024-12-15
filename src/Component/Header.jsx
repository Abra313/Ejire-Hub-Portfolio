import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
        <Button color="inherit" sx={{ fontWeight: 'bold' }}>
          Home
        </Button>
        <Button color="inherit" sx={{ fontWeight: 'bold' }}>
          Skills
        </Button>
        <Button color="inherit" sx={{ fontWeight: 'bold' }}>
          Projects
        </Button>
        <Button color="inherit" sx={{ fontWeight: 'bold' }}>
          Services
        </Button>
        <Button color="inherit" sx={{ fontWeight: 'bold' }}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
