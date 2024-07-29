import { Button, Container, Grid, Typography, Box } from "@mui/material";
import heroImage from "../assets/heroImage.png";

function Hero() {
  return (
    <Container
      className="hero"
      id="hero"
      maxWidth="xl"
      sx={{borderRadius: "0 0 20px 20px" }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent={"center"}>
        <Grid item xs={12} md={5}>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h4">
              Welcome to Checkpoint Tavern
            </Typography>
            <Typography variant="h6" sx={{pl:1, color: '#e7e7e790'}}>
            A sanctuary for every weary traveler.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: '#f7f7f750' }}>
              Whether you're seeking advice, a friendly chat, or just a moment
              of peace, our friendly innkeeper is always here to listen and
              provide support.
            </Typography>
            <Button
              variant="contained"
              className="cta-button contained"
              href="/chat"
            >
              Chat Now
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={heroImage}
              alt="About"
              style={{ width: "100%", maxWidth: "200px", height: "auto", borderRadius: "50%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
