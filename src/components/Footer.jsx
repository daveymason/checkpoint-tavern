import { Typography, Container, Box } from '@mui/material';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: 'secondary.main', color: 'white', py: 3 }}>
      <Container maxWidth="md">

        <Typography variant="body2" align="center" color="inherit" gutterBottom>
          © {currentYear} Checkpoint Tavern. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
