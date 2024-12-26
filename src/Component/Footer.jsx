import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import { keyframes } from "@emotion/react";

// Animation for fading in
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Animation for social media icon hover effect
const scaleUp = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
`;

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#f3f3f3",
        color: "black",
        py: 2, // Reduced vertical padding
        px: 2,
        animation: `${fadeIn} 1s ease-in`, // Apply fade-in animation to the footer
      }}
    >
      <Grid container spacing={2} justifyContent="space-around">
        {/* Phone */}
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1" fontWeight="bold">
            Phone
          </Typography>
          <Typography variant="body2">+234 815 797 312</Typography>
        </Grid>

        {/* Email */}
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1" fontWeight="bold">
            Email
          </Typography>
          <Typography variant="body2">
            <Link href="mailto:taiwopeter454@gmail.com" underline="none" color="inherit">
              taiwopeter454@gmail.com
            </Link>
          </Typography>
        </Grid>

        {/* Follow Me */}
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1" fontWeight="bold">
            Follow Me
          </Typography>
          <Box>
            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/abraham-taiwo-peter-4731302b0/"
              color="inherit"
              sx={{
                mr: 1,
                animation: `${scaleUp} 0.3s ease-in-out`,
                "&:hover": {
                  animation: `${scaleUp} 0.3s ease-in-out forwards`, // Add hover animation
                },
              }}
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon fontSize="small" />
            </Link>
            {/* Facebook */}
            <Link
              href="https://www.facebook.com/gerald.norton.790"
              color="inherit"
              sx={{
                mr: 1,
                animation: `${scaleUp} 0.3s ease-in-out`,
                "&:hover": {
                  animation: `${scaleUp} 0.3s ease-in-out forwards`,
                },
              }}
              aria-label="Facebook Profile"
            >
              <FacebookIcon fontSize="small" />
            </Link>
            {/* Instagram */}
            <Link
              href="#"
              color="inherit"
              sx={{
                mr: 1,
                animation: `${scaleUp} 0.3s ease-in-out`,
                "&:hover": {
                  animation: `${scaleUp} 0.3s ease-in-out forwards`,
                },
              }}
              aria-label="Instagram Profile"
            >
              <InstagramIcon fontSize="small" />
            </Link>
            {/* WhatsApp */}
            <Link
              href="https://wa.me/qr/W4UA36DVLYHEH1"
              color="inherit"
              sx={{
                mr: 1,
                animation: `${scaleUp} 0.3s ease-in-out`,
                "&:hover": {
                  animation: `${scaleUp} 0.3s ease-in-out forwards`,
                },
              }}
              aria-label="WhatsApp Contact"
            >
              <WhatsAppIcon fontSize="small" />
            </Link>
            {/* GitHub */}
            <Link
              href="https://github.com/Abra313"
              color="inherit"
              sx={{
                animation: `${scaleUp} 0.3s ease-in-out`,
                "&:hover": {
                  animation: `${scaleUp} 0.3s ease-in-out forwards`,
                },
              }}
              aria-label="GitHub Profile"
            >
              <GitHubIcon fontSize="small" />
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Text */}
      <Box textAlign="center" mt={2}>
        <Typography variant="caption" color="textSecondary">
          © 2024 By EJire Hub.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
