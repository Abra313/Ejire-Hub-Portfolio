import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Avatar, keyframes } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Morning Icon
import LightModeIcon from '@mui/icons-material/LightMode'; // Noon Icon
import NightsStayIcon from '@mui/icons-material/NightsStay'; // Night Icon
import BedtimeIcon from '@mui/icons-material/Bedtime'; // Late Night Icon
import DownloadIcon from '@mui/icons-material/Download'; // Download Icon
import WorkIcon from '@mui/icons-material/Work'; // Projects Icon
import ContactMailIcon from '@mui/icons-material/ContactMail'; // Contact Icon

// Define keyframe animations
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const slideUp = keyframes`
  0% { transform: translateY(50px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const scaleIn = keyframes`
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const Home = () => {
  const [greeting, setGreeting] = useState('Hello');
  const [icon, setIcon] = useState(null);
  const [currentText, setCurrentText] = useState('I\'m Abraham Taiwo');

  // List of rotating texts
  const textList = [
    "I'm Abraham Taiwo ,",
    'A Full Stack Developer,',
    'Mobile App Developer ,',
    'And Graphic Designer...',
  ];

  // Function to rotate texts dynamically
  useEffect(() => {
    let textIndex = 0; // Start from the first text
    const rotateText = () => {
      textIndex = (textIndex + 1) % textList.length; // Loop through the text list
      setCurrentText(textList[textIndex]); // Update the current text
    };

    const interval = setInterval(rotateText, 5000); // Change text every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Function to update the greeting and icon based on current time in Nigeria
  const updateGreeting = () => {
    const now = new Date();
    const nigeriaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Lagos' }));
    const hour = nigeriaTime.getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting('Good Morning');
      setIcon(<WbSunnyIcon sx={{ fontSize: 60, color: '#eea302' }} />);
    } else if (hour >= 12 && hour < 17) {
      setGreeting('Good Afternoon');
      setIcon(<LightModeIcon sx={{ fontSize: 60, color: '#ff3b25' }} />);
    } else if (hour >= 17 && hour < 21) {
      setGreeting('Good Evening');
      setIcon(<NightsStayIcon sx={{ fontSize: 60, color: '#80d8da' }} />);
    } else {
      setGreeting('Good Night');
      setIcon(<BedtimeIcon sx={{ fontSize: 60, color: '#000000' }} />);
    }
  };

  // Run the function on component mount
  useEffect(() => {
    updateGreeting();
    const timer = setInterval(updateGreeting, 60000); // Update greeting every minute
    return () => clearInterval(timer); // Clean up the interval on unmount
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: 4,
        backgroundColor: '#f3f3f3',
        animation: `${fadeIn} 1.5s ease-in-out`,
      }}
    >
      {/* Circular Profile Image */}
      <Avatar
        src="https://via.placeholder.com/300" // Replace with your image URL
        alt="Profile Picture"
        sx={{
          width: 300,
          height: 300,
          boxShadow: 3,
          animation: `${scaleIn} 1.2s ease-in-out`,
        }}
      />

      {/* Title Section */}
      <Box
        textAlign="center"
        display="flex"
        flexDirection="column"
        gap="10%"
        sx={{
          animation: `${slideUp} 1s ease-out`,
        }}
      >
        {/* Greeting Icon and Text */}
        <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
          {icon}
          <Typography variant="h2" fontWeight="bold" color="textPrimary">
            {greeting}
          </Typography>
        </Box>

        {/* Dynamic Rotating Text */}
        <Typography
          variant="h6"
          color="textSecondary"
          sx={{
            maxWidth: 500,
            margin: '0 auto',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            animation: `${fadeIn} 1s ease-in-out`,
          }}
        >
          {currentText}
        </Typography>

        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ maxWidth: 500, margin: '0 auto', fontSize: '1rem' }}
        >
          Programming is my passion, where logic meets creativity and ideas become reality
        </Typography>

        {/* Buttons */}
        <Box display="flex" gap={4} justifyContent="center" alignItems="center" marginTop={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#eea302',
              color: '#000',
              width: 200,
              height: 50,
              borderRadius: '5%',
              fontWeight: 'bold',
              animation: `${scaleIn} 1.5s ease-in-out 0.2s`,
              '&:hover': { backgroundColor: '#d68f00', transform: 'scale(1.1)' },
              transition: 'transform 0.3s ease',
            }}
          >
            <DownloadIcon sx={{ marginRight: 1 }} />
            Download CV
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ff3b25',
              color: '#000',
              width: 200,
              height: 50,
              borderRadius: '5%',
              fontWeight: 'bold',
              animation: `${scaleIn} 1.5s ease-in-out 0.4s`,
              '&:hover': { backgroundColor: '#e1301f', transform: 'scale(1.1)' },
              transition: 'transform 0.3s ease',
            }}
          >
            <WorkIcon sx={{ marginRight: 1 }} />
            Projects
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#80d8da',
              color: '#000',
              width: 200,
              height: 50,
              borderRadius: '5%',
              fontWeight: 'bold',
              animation: `${scaleIn} 1.5s ease-in-out 0.6s`,
              '&:hover': { backgroundColor: '#6cbfc0', transform: 'scale(1.1)' },
              transition: 'transform 0.3s ease',
            }}
          >
            <ContactMailIcon sx={{ marginRight: 1 }} />
            Contact
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
