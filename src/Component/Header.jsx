import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skill' },
    { name: 'Projects', path: '/project' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#f3f3f3',
        boxShadow: 'none',
        '*': { color: '#000' },
      }}
    >
      <Toolbar>
        {/* Logo/Brand */}
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Ejire Hub
        </Typography>

        {/* Mobile Hamburger Menu */}
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Desktop Links */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} style={{ textDecoration: 'none' }}>
              <Button color="inherit">{link.name}</Button>
            </Link>
          ))}
        </Box>
      </Toolbar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': { width: '250px', backgroundColor: '#f3f3f3' },
        }}
      >
        <List>
          {navLinks.map((link) => (
            <ListItem button key={link.name} onClick={toggleDrawer(false)}>
              <Link
                to={link.path}
                style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
              >
                <ListItemText primary={link.name} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
