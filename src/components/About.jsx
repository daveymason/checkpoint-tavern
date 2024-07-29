import { Container, Typography, Grid, Box } from "@mui/material";
import aboutImage from "../assets/aboutImage.png";
import InfoIcon from '@mui/icons-material/Info';


function About() {
  return (
    <Container className="about" maxWidth="xl" id="about" sx={{p:5, mt:5, mb:5}}>
      <Grid container spacing={4} alignItems="center" justifyContent={"center"}>
        <Grid item xs={12} md={5}>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h4" component="h2" gutterBottom>
             <InfoIcon /> About
            </Typography>
            <Typography variant="body1" component="p" paragraph>
              We blend the warmth of a fantasy tavern with
              cutting-edge mental health support. Our chatbot, trained on professional crisis
              management data, provides empathetic and confidential support
              24/7.
            </Typography>
            <Typography variant="body1" component="p" paragraph>
              Whether you need mindfulness exercises, expert advice, or a
              comforting chat, Checkpoint Tavern is your refuge.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={aboutImage}
              alt="About"
              style={{ width: "100%", maxWidth: "200px", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
