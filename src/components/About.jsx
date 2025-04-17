import React from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import aboutImage from '../assets/aboutImage.png';
import Fade from '@mui/material/Fade';

function About() {
  return (
    <Fade in timeout={800}>
      <Container
        id="about"
        component="section"
        maxWidth="lg"
        sx={(theme) => ({
          p: { xs: 4, md: 6 },
          my: { xs: 4, md: 6 },
        })}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box sx={(theme) => ({
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: theme.shape.borderRadius * 2,
              boxShadow: theme.shadows[2],
              p: { xs: 2, md: 3 },
            })}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '80px',
                    height: '4px',
                    backgroundColor: '#8a4f2b',
                    borderRadius: 1
                  }
                }}
              >
                <InfoIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#8a4f2b' }} /> About
              </Typography>
              <Typography variant="body1" paragraph sx={{ mt: 3, lineHeight: 1.7, color: '#4e342e' }}>
                Millions struggle with mental health, yet traditional therapy can feel inaccessible or clinical. Checkpoint Tavern provides a warm, stigma-free refuge where you can explore your feelings at your own pace.
              </Typography>
              <Paper elevation={2} sx={{ p: 3, backgroundColor: 'rgba(255,252,246,0.8)', borderLeft: '4px solid #8a4f2b', mb: 3 }}>
                <Typography variant="body1" component="p" sx={{ fontStyle: 'italic', color: '#5a3e2b' }}>
                  "Sometimes the bravest thing you can do is ask for a helping hand. Welcome to your safe haven."
                </Typography>
              </Paper>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: '#4e342e' }}>
                Our AI barkeep is trained on crisis management data and tailored mindfulness practices, offering empathetic, confidential support and practical resources whenever you need them.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <img
                src={aboutImage}
                alt="Tavern Interior"
                style={{ width: '100%', maxWidth: '250px', borderRadius: 8, boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
}

export default About;
