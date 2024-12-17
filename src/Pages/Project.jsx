import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { keyframes } from "@emotion/react";

// Keyframe animation for fade-in effect
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Mock Data for Projects
const projects = [
  {
    title: "Tetma Health Care",
    description:
      "It empowers users to manage their health conveniently and securely, bridging the gap between patients and healthcare providers.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTra8coCVzAoqhTrRlfqGWBMmzQWLxWItv2g&s",
    url: "https://github.com/Abra313/TETMA-HEALTH-CARE",
  },
  {
    title: "Bankorama",
    description:
      "A secure and modern banking website for seamless transactions, financial management, and intuitive user experiences—empowering users to manage finances anytime, anywhere.",
    image: "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/mobile-banking/how-new-age-banking-is-transforming-the-banking-industry-717x404.jpg", // No image available for this project
    url: "https://bankorama-bank.web.app/",
  },
  {
    title: "Go-Ride",
    description:
      "Go-Ride connects riders with reliable drivers for safe, affordable, and efficient transportation, offering real-time tracking and 24/7 availability.",
    image:
      "https://media.istockphoto.com/id/1377893181/photo/shot-of-young-man-delivering-a-package-while-sitting-in-a-vehicle.jpg?s=612x612&w=0&k=20&c=yOMqI9TcSFRPKuLl40lUsjYmRkji9hoH_eUtKPUrZwk=",
    url: "https://go-rideng.netlify.app/", // Replace with actual project URL
  },
  {
    title: "Net world",
    description:
      "A message community that allow users to chat and post images e.t.c",
    image: "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063163.jpg",
    url: "https://github.com/yourusername/ecommerce-store",
  },
  {
    title: "Todo App",
    description:
      "secure your task for the day and meet up with the target",
    image:
      "https://t3.ftcdn.net/jpg/02/59/31/70/360_F_259317013_nJJaBgGGzvXMd6cAyLd6yMJtbdnd61wk.jpg",
    url: "https://todo-app-tan-nine.vercel.app/",
  }
];

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProjects(true);
    }, 500); // Delay for animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f3f3f3", minHeight: "100vh" }}>
      {/* Section Title */}
      <Typography
        variant="h4"
        component="h1"
        align="center"
        sx={{
          marginBottom: "2rem",
          marginTop: "2.5rem",
          fontWeight: "bold",
          color: "#333",
          textTransform: "uppercase",
        }}
      >
        My Projects
      </Typography>

      {/* Grid for Project Cards */}
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              opacity: showProjects ? 1 : 0,
              animation: `${fadeInUp} 1s ease-in-out ${
                index * 0.2
              }s forwards`,
            }}
          >
            <Card
              sx={{
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                overflow: "hidden",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              {/* Card Media */}
              {project.image ? (
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                />
              ) : (
                <Box
                  sx={{
                    height: "180px",
                    backgroundColor: "#e0e0e0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h6" color="textSecondary">
                    No Image Available
                  </Typography>
                </Box>
              )}

              {/* Card Content */}
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>

              {/* Project Button */}
              <Box sx={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "#80d8da",
                    "&:hover": { backgroundColor: "#66c2c3" },
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  View Project
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
