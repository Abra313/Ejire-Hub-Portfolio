import React, { useState, useEffect } from 'react';
import { Box, Typography, LinearProgress, Grid, Paper, Fade } from '@mui/material';

const skillsData = [
  { skill: "HTML", percentage: 80 },
  { skill: "CSS", percentage: 85 },
  { skill: "JavaScript", percentage: 80 },
  { skill: "React", percentage: 90 },
  { skill: "Node.js", percentage: 70 },
  { skill: "Express.js", percentage: 75 },
  { skill: "React Native", percentage: 60 },
  { skill: "Tailwind CSS", percentage: 75 },
  { skill: "Material UI", percentage: 60 },
  { skill: "MongoDB", percentage: 85 },
  { skill: "Photoshop", percentage: 80 },
];

const Skills = () => {
  const [progress, setProgress] = useState(skillsData.map(() => 0));
  const [visible, setVisible] = useState(skillsData.map(() => false));

  // Function to animate progress bar
  const animateProgress = (index, percentage) => {
    let start = 0;
    const duration = 1000; // Animation duration in ms
    const increment = percentage / (duration / 50); // Calculate increment for each frame
    const interval = setInterval(() => {
      start += increment;
      if (start >= percentage) {
        start = percentage;
        clearInterval(interval);
      }
      setProgress((prev) => {
        const newProgress = [...prev];
        newProgress[index] = Math.round(start);
        return newProgress;
      });
    }, 50); // Update every 50 ms
  };

  // Trigger animation on mount
  useEffect(() => {
    skillsData.forEach((skill, index) => {
      setTimeout(() => {
        setVisible((prev) => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
        animateProgress(index, skill.percentage);
      }, index * 200); // Stagger each skill's animation by 200ms
    });
  }, []);

  return (
    <Box
      sx={{
        padding: '60px 20px',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h3" fontWeight="bold" color="textPrimary" sx={{ marginBottom: 4 }}>
        My Skills
      </Typography>

      <Grid container spacing={4} sx={{ width: '100%', maxWidth: 1200 }}>
        {skillsData.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Fade in={visible[index]} timeout={600}>
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Typography variant="h6" color="textPrimary" sx={{ marginBottom: 1 }}>
                  {skill.skill}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={progress[index]} // Use animated progress value
                  sx={{
                    height: 12,
                    borderRadius: 5,
                    backgroundColor: '#dcdcdc',
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 5,
                      backgroundColor: '#4caf50', // Green color for progress bars
                    },
                  }}
                />
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                  {progress[index]}%
                </Typography>
              </Paper>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
