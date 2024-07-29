import React from 'react';
import { Card, Container, Grid, Typography, Box } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import BookIcon from '@mui/icons-material/Book';
import SpaIcon from '@mui/icons-material/Spa';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PeopleIcon from '@mui/icons-material/People';
import featuresImage from "../assets/featuresImage.png";

function Features() {
  return (
    <Container className="features" maxWidth="xl" id="features">
      <Grid container spacing={2} alignItems="center" justifyContent={"center"}>
        <Grid item xs={12} md={5}>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Features
            </Typography>
            <Card className="feature-card" sx={{ mb: 2, p: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ChatIcon fontSize="medium" sx={{ mr: 1 }} />
                <Typography variant="h6" component="h3">
                  Chat
                </Typography>
              </Box>
              <Typography variant="body2" component="p">
                Our chatbot is trained on crisis management data to provide support 24/7.
              </Typography>
            </Card>
            <Card className="feature-card" sx={{ mb: 2, p: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <BookIcon fontSize="medium" sx={{ mr: 1 }} />
                <Typography variant="h6" component="h3">
                  Ledger
                </Typography>
              </Box>
              <Typography variant="body2" component="p">
                Keep track of your mood and activities to better understand your mental health.
              </Typography>
            </Card>
            <Card className="feature-card" sx={{ mb: 2, p: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <SpaIcon fontSize="medium" sx={{ mr: 1 }} />
                <Typography variant="h6" component="h3">
                  Mindfulness
                </Typography>
              </Box>
              <Typography variant="body2" component="p">
                Access various exercises designed to help you relax and recharge.
              </Typography>
            </Card>
            <Card className="feature-card" sx={{ mb: 2, p: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <SupportAgentIcon fontSize="medium" sx={{ mr: 1 }} />
                <Typography variant="h6" component="h3">
                  Expert
                </Typography>
              </Box>
              <Typography variant="body2" component="p">
                Get advice from mental health professionals on various topics.
              </Typography>
            </Card>
            <Card className="feature-card" sx={{ mb: 2, p: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PeopleIcon fontSize="medium" sx={{ mr: 1 }} />
                <Typography variant="h6" component="h3">
                  Community
                </Typography>
              </Box>
              <Typography variant="body2" component="p">
                Read stories shared by our community, fostering connection and support.
              </Typography>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={featuresImage}
              alt="Features"
              style={{ width: "100%", maxWidth: "200px", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Features;