import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField, Button, Typography, Container, Paper, Avatar, Grid } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import avatar from '../assets/avatar.png';

function ChatApp() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]); // Initialize as an empty array
  const [inputDisabled, setInputDisabled] = useState(false);
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (message.trim() === '') return;

    setMessages(prevMessages => [...prevMessages, { role: 'user', content: message }]);
    setMessage('');
    setInputDisabled(true);

    const url = `http://127.0.0.1:5000/chat?message=${encodeURIComponent(message)}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let botResponse = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.substring('data: '.length);
            if (data.trim() !== '') {
              botResponse += data;

              // Simpler and more reliable state update:
              setMessages(prevMessages => [
                ...prevMessages.filter(msg => msg.role !== 'assistant'), // Remove previous bot response
                { role: 'assistant', content: botResponse } // Add updated bot response
              ]);
            }
          } else if (line.startsWith('Error: ')) {
            const errorMessage = line.substring('Error: '.length);
            setMessages(prev => [...prev, { role: 'assistant', content: errorMessage }]);
            console.error("Chatbot Error:", errorMessage);
          }
        }
      }

    } catch (error) {
      console.error('Fetch failed:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error: Could not get a response.' }]);
    } finally {
      setInputDisabled(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4, height: '79vh' }}>
        <Paper elevation={3} sx={{ p: 4, mb: 2 }}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={1}>
              <Avatar alt="Assistant" src={avatar} sx={{ width: 50, height: 50 }} />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="h4" gutterBottom>
                What's on your mind?
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc', p: 2, mb: 2, borderRadius: 1, backgroundColor: '#f9f9f9' }}>
            {messages && messages.map((msg, index) => (  // Correct way to render messages
              <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}
              </Typography>
            ))}
            <div ref={messagesEndRef} />  {/* Ref for scrolling always goes inside the container */}
          </Box>
          <Box display="flex">
            <TextField
              fullWidth
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === 'Enter' && !inputDisabled && sendMessage()}
              sx={{ mr: 2 }}
              disabled={inputDisabled}
            />
            <Button variant="contained" color="primary" onClick={sendMessage} disabled={inputDisabled}>
              Send
            </Button>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}

export default ChatApp;