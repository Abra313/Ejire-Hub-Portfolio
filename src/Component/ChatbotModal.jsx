import React, { useState, useEffect } from 'react';
import { Box, Modal, TextField, IconButton, Typography, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatbotModal = ({ open, handleClose }) => {
  const [messages, setMessages] = useState([
    { text: 'Hi, I am Ejire Hub Bot. May I know your name and email?', sender: 'bot' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isAwaitingName, setIsAwaitingName] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  // Predefined responses
  const predefinedResponses = [
    { keyword: 'What services do you offer', response: 'I offer full-stack development, mobile app development, SEO, UI/UX design, and more.' },
    { keyword: 'Can I hire you for my project', response: 'Yes, you can hire me for your project. Feel free to contact me for further details.' },
    { keyword: 'How much do you charge', response: 'My pricing depends on the scope and complexity of the project. Contact me for a detailed quote.' },
    { keyword: 'Do you provide ongoing support', response: 'Yes, I offer ongoing support and maintenance for projects.' },
    { keyword: 'Can you help with mobile app development', response: 'Yes, I specialize in mobile app development for both Android and iOS.' },
  ];

  useEffect(() => {
    cleanUpExpiredMessages();
  }, []);

  // Handle input change
  const handleUserInput = (e) => setUserInput(e.target.value);

  // Nigerian Greeting
  const getGreeting = () => {
    const nigerianTime = new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' });
    const currentHour = new Date(nigerianTime).getHours();
    if (currentHour < 12) return 'Good Morning';
    if (currentHour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  // Simulate bot typing
  const simulateBotResponse = (response) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: response, sender: 'bot' }]);
      setIsTyping(false);
    }, 2000); // 2 seconds delay
  };

  // Store messages in local storage
  const storeMessages = (email, messages) => {
    const data = {
      messages,
      timestamp: Date.now(),
    };
    localStorage.setItem(email, JSON.stringify(data));
  };

  // Clean up expired messages (older than 60 days)
  const cleanUpExpiredMessages = () => {
    const now = Date.now();
    const expiryTime = 60 * 24 * 60 * 60 * 1000; // 60 days in milliseconds
    Object.keys(localStorage).forEach((key) => {
      const storedData = JSON.parse(localStorage.getItem(key));
      if (storedData && now - storedData.timestamp > expiryTime) {
        localStorage.removeItem(key);
      }
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      const userMessage = { text: userInput, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Process input
      if (isAwaitingName) {
        if (!userName) {
          setUserName(userInput);
          simulateBotResponse('Got it! Now, please provide your email.');
        } else {
          setUserEmail(userInput);
          const greeting = getGreeting();
          simulateBotResponse(`${greeting}, ${userName}! Thank you for providing your details.`);
          setIsAwaitingName(false);
        }
      } else {
        const response = predefinedResponses.find((res) =>
          userInput.toLowerCase().includes(res.keyword.toLowerCase())
        );
        if (response) {
          simulateBotResponse(response.response);
        } else {
          simulateBotResponse(
            "I'm not in the right position to answer that now. Please contact Ejire Hub at 08157977312."
          );
        }
      }

      setUserInput('');

      // Store messages in local storage after each submission
      if (userEmail) {
        storeMessages(userEmail, [...messages, userMessage]);
      }
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
          width: { xs: '90%', sm: 400 },
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: { xs: '90vh', sm: '80vh' },
          borderRadius: '10px',
        }}
      >
        <Typography
          variant="h6"
          id="chatbot-modal-title"
          sx={{ textAlign: 'center', mb: 2, fontSize: { xs: '1rem', sm: '1.5rem' } }}
        >
          Chat with us
        </Typography>

        {/* Messages */}
        <Paper
          sx={{
            flex: 1,
            overflowY: 'auto',
            padding: 2,
            maxHeight: { xs: '70vh', sm: '70vh' },
          }}
        >
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
                  maxWidth: '80%',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
                {msg.text}
              </Typography>
            </Box>
          ))}
          {isTyping && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  backgroundColor: '#1976d2',
                  color: '#fff',
                  padding: '10px',
                  borderRadius: '10px',
                  fontStyle: 'italic',
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                }}
              >
                Bot is typing...
              </Typography>
            </Box>
          )}
        </Paper>

        {/* Input Field */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 1,
            mt: 2,
          }}
        >
          <TextField
            value={userInput}
            onChange={handleUserInput}
            label="Type your message"
            variant="outlined"
            fullWidth
            required
          />
          <IconButton type="submit" color="primary">
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default ChatbotModal;
