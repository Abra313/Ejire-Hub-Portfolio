import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fab } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CssBaseline from '@mui/material/CssBaseline'; // Global style reset
import GlobalStyles from '@mui/material/GlobalStyles'; // Apply custom global styles

// Components and Pages
import Navbar from './Component/Header';  // Correct path
import Home from './Pages/Home';          // Correct path
import Skills from './Pages/Skill';       // Correct path
import Projects from './Pages/Project';   // Correct path
import Contact from './Pages/Contact';    // Correct path
import ChatbotModal from './Component/ChatbotModal';
import Footer from './Component/Footer';  // Footer component

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Handle modal open and close
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <CssBaseline /> {/* Global reset from Material-UI */}
      <GlobalStyles
        styles={{
          "*": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
          },
        }}
      /> {/* Custom Global Styles for margin and padding reset */}
      
      <Router>
        {/* Navigation Bar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Wildcard route for 404 page */}
          <Route path="*" element={<div style={{ textAlign: 'center', marginTop: '50px' }}><h1>404 - Page Not Found</h1></div>} />
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
        
        {/* Footer Component */}
        <Footer />
      </Router>
    </>
  );
};

export default App;
