import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField, Button, Typography, Container, Paper, Avatar, Grid } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import avatar from '../assets/avatar.png';

function ChatApp() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const eventSource = useRef(null);
  const [currentResponse, setCurrentResponse] = useState('');
  const messagesEndRef = useRef(null); // Ref for scrolling to the bottom

  const sendMessage = () => {
    if (message.trim() === '') return;

    setMessages(prevMessages => [...prevMessages, { role: 'user', content: message }]);
    setCurrentResponse(''); // Reset current response

    const url = `http://127.0.0.1:5000/chat?message=${encodeURIComponent(message)}`;
    eventSource.current = new EventSource(url);

    let accumulatedResponse = ''; // Temporary variable to accumulate chunks to stop AI messages from being split

    eventSource.current.onmessage = (event) => {
      accumulatedResponse += event.data;
      setCurrentResponse(accumulatedResponse); 
    };

    eventSource.current.onerror = (error) => {
      console.error('EventSource failed:', error);
      eventSource.current.close();
      if (!accumulatedResponse) {
        setMessages(prev => [...prev, { role: 'assistant', content: 'Error: Could not get a response.' }]);
      }
    };

    eventSource.current.onclose = () => {
      console.log("connection closed");
      setMessages((prev) => {
        const lastMessage = prev[prev.length - 1];
        if (
          accumulatedResponse &&
          !(lastMessage && lastMessage.role === "assistant" && lastMessage.content === accumulatedResponse)
        ) {
          return [...prev, { role: "assistant", content: accumulatedResponse }];
        }
        return prev;
      });
    };

    setMessage('');
  };

  useEffect(() => {
    return () => {
      if (eventSource.current) {
        eventSource.current.close();
      }
    };
  }, []);

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
            {messages.map((msg, index) => (
              <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}
              </Typography>
            ))}
            {currentResponse && (
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>AI:</strong> {currentResponse}
              </Typography>
            )}
            <div ref={messagesEndRef} />
          </Box>
          <Box display="flex">
            <TextField
              fullWidth
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              sx={{ mr: 2 }}
            />
            <Button variant="contained" color="primary" onClick={sendMessage}>
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