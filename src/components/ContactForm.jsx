import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Grid } from '@mui/material';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to a server
    console.log(formData);
  };

  return (
    <Container maxWidth="xl" className='contact' sx={{ p:5 }}>
      <Grid container spacing={2} alignItems="center" justifyContent={"center"} sx={{p:5}}>
      <Grid item xs={12} md={5}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact 
      </Typography>
      <Typography variant='p'>
  E-mail at <a href="mailto:daveymason@outlook.com">daveymason@outlook.com</a>
</Typography>
      {/* <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Message"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form> */}
      </Grid>
      <Grid item xs={5}/>
      </Grid>

    </Container>
  );
}

export default ContactForm;
