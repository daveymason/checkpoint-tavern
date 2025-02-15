import React from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function USP() {
  return (
    <Container className="usp" maxWidth="xl" id="usp" sx={{ p: 5, textAlign: 'center' }}>
      <Grid container spacing={3} sx={{ p: 5 }}>
        <Grid item xs={12} md={4}>
          <Paper className="feature-card" elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <HomeIcon fontSize="large" color="primary" />
            </Box>
            <Typography variant="h6" component="h3" gutterBottom>
              A Safe Haven, Not a Clinic
            </Typography>
            <Typography variant="body1">
              Checkpoint Tavern isn't a sterile doctor's office. It's a fantasy tavern, a place of stories and camaraderie. This approach bypasses the clinical feel that can be a barrier for many, especially those from communities where mental health is stigmatized or misunderstood. It's a place where you can explore your feelings without feeling like a "patient."
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="feature-card" elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <TouchAppIcon fontSize="large" color="primary" />
            </Box>
            <Typography variant="h6" component="h3" gutterBottom>
              AI with a Human Touch
            </Typography>
            <Typography variant="body1">
              Our AI isn't cold and robotic. It's crafted by specialist prompt engineers who understands the nuances of human conversation and emotion. This creates a more empathetic and supportive experience, especially for those who might feel intimidated by technology or have had negative experiences with impersonal AI. It's like having a wise, understanding NPC in your pocket.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="feature-card" elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <AccessTimeIcon fontSize="large" color="primary" />
            </Box>
            <Typography variant="h6" component="h3" gutterBottom>
              Always Open, Always There
            </Typography>
            <Typography variant="body1">
              Life doesn't stick to a 9-to-5 schedule, and neither do mental health challenges. Checkpoint Tavern is accessible anytime, anywhere. Whether you're in a rural area with limited access to services or just need support in the middle of the night, the tavern doors are always open. It's about meeting people where they are, when they need it most.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default USP;