import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bgHero from '../assets/bgImage.png';

function Hero() {
  const navigate = useNavigate();
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        position: 'relative',
        overflow: 'hidden',
        height: '100vh', // full viewport height
        display: 'flex',
        alignItems: 'center', // vertically center content
        px: { xs: theme.spacing(2), md: theme.spacing(4) },
        py: { xs: theme.spacing(6), md: theme.spacing(8) },
        color: theme.palette.text.primary,
        borderRadius: theme.shape.borderRadius * 2,
        boxShadow: theme.shadows[3],
      })}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', mt: 5, pt: 5 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={(theme) => ({
              position: 'relative',
              overflow: 'hidden',
              p: { xs: 4, md: 8 },
              color: theme.palette.text.primary,
              borderRadius: theme.shape.borderRadius * 2,
              boxShadow: theme.shadows[3],
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)', 
            })}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              Step into Checkpoint Tavern
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.9,
              }}
            >
              A sanctuary for weary souls to find support, community, and a moment's respite. Our AI barkeep is here to listen, guide, and help you navigate the stormy seas of life.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                lineHeight: 1.7,
                color: '#402218',
              }}
            >
              Whether you're seeking a friendly chat, mindfulness exercises, or just a place to unwind, tell us a story or ask for one and I'll get you your favorite drink. Now what would you like? 🍺
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/chat')}
              sx={{
                backgroundColor: '#f7c873',
                color: '#402218',
                py: 1.5,
                px: 4,
                fontSize: '1rem',
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                transition: 'all 0.3s',
                '&:hover': {
                  backgroundColor: '#f1b661',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Enter the Tavern
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <img
                src={bgHero}
                alt="Checkpoint Tavern bgHero"
                style={{
                  width: '100%',
                  maxWidth: 600,
                  height: 'auto',
                  borderRadius: 8,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
