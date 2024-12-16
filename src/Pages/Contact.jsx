// LetsTalk.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would usually send the form data to the server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Let’s Talk
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          We'd love to hear from you! Fill out the form below and we'll get back to you soon.
        </Typography>
      </Box>

      {submitted ? (
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="h6" color="primary">
            Thank you for reaching out! We'll get back to you soon.
          </Typography>
        </Box>
      ) : (
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
            />
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      )}
    </Container>
  );
};

export default Contact;
