import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Header';  // Ensure correct path
import Home from './Pages/Home'; // Ensure correct path
import Skills from './Pages/Skill'; // Ensure correct path
import Projects from './Pages/Project'; // Ensure correct path
import Contact from './Pages/Contact'; // Ensure correct path
import ChatbotModal from './Component/ChatbotModal'; // Import ChatbotModal component
import { Fab } from '@mui/material'; // Import Fab
import ChatIcon from '@mui/icons-material/Chat'; // Import ChatIcon

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Handle modal open and close
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <Router>  {/* This wraps the entire app */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Floating Chatbot Icon */}
      <Fab
        color="primary"
        onClick={handleOpen}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 9999,
        }}
      >
        <ChatIcon />
      </Fab>

      {/* Chatbot Modal */}
      <ChatbotModal open={modalOpen} handleClose={handleClose} />
    </Router>
  );
};

export default App;
