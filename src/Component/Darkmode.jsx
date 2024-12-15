import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Switch, FormControlLabel, Typography } from '@mui/material';

// Custom Dark and Light Mode Toggle Component
const DarkModeToggle = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Light theme
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: { default: '#f3f3f3' },
      primary: { main: '#eea302' },
      secondary: { main: '#ff3b25' },
      info: { main: '#80d8da' },
      text: { primary: '#333333' },
    },
  });

  // Dark theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: { default: '#121212', paper: '#1e1e1e' },
      primary: { main: '#eea302' },
      secondary: { main: '#ff3b25' },
      info: { main: '#80d8da' },
      text: { primary: '#ffffff' },
    },
  });

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        <Box display="flex" justifyContent="flex-end" p={2}>
          {/* Switch for Dark and Light Mode */}
          <FormControlLabel
            control={
              <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            }
            label={darkMode ? 'Dark Mode' : 'Light Mode'}
          />
        </Box>
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default DarkModeToggle;
