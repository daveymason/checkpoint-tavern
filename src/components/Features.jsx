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
    <Container
      id="features"
      component="section"
      maxWidth="lg"
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={5}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, fontWeight: 700 }}>
            Features
          </Typography>
          <Box>
            {[
              { icon: <ChatIcon />, label: 'Chat', desc: 'Our chatbot is trained on crisis management data to provide support 24/7.' },
              { icon: <BookIcon />, label: 'Ledger', desc: 'Keep track of your mood and activities to better understand your mental health.' },
              { icon: <SpaIcon />, label: 'Mindfulness', desc: 'Access various exercises designed to help you relax and recharge.' },
              { icon: <SupportAgentIcon />, label: 'Expert', desc: 'Get advice from mental health professionals on various topics.' },
              { icon: <PeopleIcon />, label: 'Community', desc: 'Read stories shared by our community, fostering connection and support.' },
            ].map((item) => (
              <Card
                key={item.label}
                elevation={1}
                sx={{
                  p: 2,
                  mb: 3,
                  borderRadius: 2,
                  boxShadow: (theme) => theme.shadows[1],
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  {React.cloneElement(item.icon, { fontSize: 'medium', sx: { mr: 1, color: (theme) => theme.palette.primary.main } })}
                  <Typography variant="h6" component="h3">
                    {item.label}
                  </Typography>
                </Box>
                <Typography variant="body2" component="p">
                  {item.desc}
                </Typography>
              </Card>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src={featuresImage}
              alt="Features"
              sx={(theme) => ({ width: '100%', maxWidth: 240, borderRadius: theme.shape.borderRadius, boxShadow: theme.shadows[2] })}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Features;