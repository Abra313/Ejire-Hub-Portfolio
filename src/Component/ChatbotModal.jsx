import React, { useState } from 'react';
import { Box, Modal, TextField, Button, Typography, Paper } from '@mui/material';

const ChatbotModal = ({ open, handleClose }) => {
  const [messages, setMessages] = useState([
    { text: 'Hi, I am Ejire Hub Bot. May I know your name and email?', sender: 'bot' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isAwaitingName, setIsAwaitingName] = useState(true); // Flag to track if we are waiting for name and email

  // Handle user input change
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  // Function to get a greeting based on Nigeria's time zone
  const getGreeting = () => {
    const nigerianTime = new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' });
    const currentHour = new Date(nigerianTime).getHours();

    if (currentHour < 12) return 'Good Morning';
    if (currentHour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  // Function to handle user input and bot responses
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      // Add user message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userInput, sender: 'user' },
      ]);

      if (isAwaitingName) {
        // First, store the name and email
        if (!userName) {
          setUserName(userInput);
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: 'Got it! Now, please provide your email.', sender: 'bot' },
          ]);
        } else {
          setUserEmail(userInput);
          const greeting = getGreeting(); // Get the greeting based on Nigerian time
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `${greeting}, ${userName}! Thank you for providing your details.`,
              sender: 'bot',
            },
          ]);
          setIsAwaitingName(false); // Move past the name/email input
        }
      } else {
        // Handle further bot responses after greeting
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "How can I assist you today?", sender: 'bot' },
        ]);
      }

      setUserInput('');
    }
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="chatbot-modal-title">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '80vh',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h6" id="chatbot-modal-title" sx={{ textAlign: 'center', mb: 2 }}>
          Chat with us
        </Typography>
        <Paper sx={{ flex: 1, overflowY: 'auto', padding: 2, maxHeight: '70vh' }}>
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                mb: 1,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: msg.sender === 'user' ? '#4caf50' : '#1976d2',
                  color: '#fff',
                  padding: '10px',
                  borderRadius: '10px',
                  maxWidth: '70%',
                }}
              >
                {msg.text}
              </Typography>
            </Box>
          ))}
        </Paper>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex' }}>
          <TextField
            value={userInput}
            onChange={handleUserInput}
            label={isAwaitingName ? 'Enter your name' : 'Enter your email'}
            variant="outlined"
            fullWidth
            sx={{ mr: 2 }}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ChatbotModal;
