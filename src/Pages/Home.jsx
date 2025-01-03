import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Avatar, keyframes } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link } from 'react-router-dom';

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
  const [currentText, setCurrentText] = useState("I'm Abraham Taiwo");

  const textList = [
    "I'm Abraham Taiwo ,",
    'A Full Stack Developer,',
    'Mobile App Developer ,',
    'And Graphic Designer...',
  ];

  useEffect(() => {
    let textIndex = 0;
    const rotateText = () => {
      textIndex = (textIndex + 1) % textList.length;
      setCurrentText(textList[textIndex]);
    };
    const interval = setInterval(rotateText, 5000);
    return () => clearInterval(interval);
  }, []);

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

  useEffect(() => {
    updateGreeting();
    const timer = setInterval(updateGreeting, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: { xs: 'column', sm: 'row' }, // Responsive layout
        height: '100vh',
        gap: 4,
        backgroundColor: '#f3f3f3',
        animation: `${fadeIn} 1.5s ease-in-out`,
        padding: 2,
      }}
    >
      {/* Avatar */}
      <Avatar
        src="https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/335312495_1589219844906990_4288669999037673587_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEufgFmYXXruxL5bl6UOiQgcaJ4OO-b-A1xong475v4DSywK4NEzSaaNqD3uov3BMrBpy6rWrvzcBtQ01XMxI2D&_nc_ohc=WC-n1WTgy1oQ7kNvgHYHukc&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=AJ33PhkQbWdxKdaBB7dqNLm&oh=00_AYB_3TdOffG1tipzp61LTElI_2Pv6BaJ_W0lNsZjyzL2_g&oe=67734566"
        alt="Profile Picture"
        sx={{
          width: { xs: 150, sm: 300 },
          height: { xs: 150, sm: 300 },
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
        <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            color="textPrimary"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2.5rem' }, // Responsive text size
            }}
          >
            {greeting}
          </Typography>
        </Box>

        <Typography
          variant="h6"
          color="textSecondary"
          sx={{
            fontSize: { xs: '1rem', sm: '1.5rem' },
            fontWeight: 'bold',
            marginTop: 2,
          }}
        >
          {currentText}
        </Typography>

        <Typography
          variant="body1"
          color="textSecondary"
          sx={{
            fontSize: { xs: '0.8rem', sm: '1rem' },
            marginTop: 1,
          }}
        >
          Programming is my passion, where logic meets creativity and ideas become reality
        </Typography>

        {/* Buttons */}
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }} // Responsive button layout
          gap={2}
          justifyContent="center"
          alignItems="center"
          marginTop={3}
        >
          <a
            href="https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-6/471250702_1203801834565308_5597973211036684089_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHHs9zCreHYqq4AqoG03FTC9eM4qOZW32f14zio5lbfZ3TsEyfZCzfIVF0uvDNr32wiJhVQlMQrPx0BB8Y28gLj&_nc_ohc=kYVTntFUSx0Q7kNvgH8ZmgH&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&_nc_gid=AWvD_3_NNQ3vWwaCD_p6eoh&oh=00_AYDSSDJVvHNzlSoDm5ACUbSTNVWDF1apb7BYBLlFh1pxCA&oe=67736C47"
            download
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#eea302',
                color: '#000',
                width: { xs: '100%', sm: 200 },
                height: 50,
                animation: `${scaleIn} 1.5s ease-in-out 0.2s`,
                '&:hover': { backgroundColor: '#d68f00' },
              }}
            >
              <VisibilityIcon sx={{ marginRight: 1 }} />
              View CV
            </Button>
          </a>

          <Link to="/project" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ff3b25',
                color: '#000',
                width: { xs: '100%', sm: 200 },
                height: 50,
                animation: `${scaleIn} 1.5s ease-in-out 0.4s`,
                '&:hover': { backgroundColor: '#e1301f' },
              }}
            >
              <WorkIcon sx={{ marginRight: 1 }} />
              Projects
            </Button>
          </Link>

          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#80d8da',
                color: '#000',
                width: { xs: '100%', sm: 200 },
                height: 50,
                animation: `${scaleIn} 1.5s ease-in-out 0.6s`,
                '&:hover': { backgroundColor: '#6cbfc0' },
              }}
            >
              <ContactMailIcon sx={{ marginRight: 1 }} />
              Contact
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
