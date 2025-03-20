import React from 'react';
import { Typography, Container, Grid } from '@mui/material';

function ContactForm() {
    const handleContactClick = () => {
        const mailtoLink = `mailto:daveymason@outlook.com?subject=Contact Form Submission&body=Name:%0D%0AEmail:%0D%0AMessage:%0D%0A`; // %0D%0A adds new lines
        window.location.href = mailtoLink;
    };

    return (
        <Container maxWidth="xl" className='contact' sx={{ p: 5 }}>
            <Grid container spacing={2} alignItems="center" justifyContent={"center"} sx={{ p: 5 }}>
                <Grid item xs={12} md={5}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Contact
                    </Typography>
                    <Typography variant='p'>
                        E-mail at <a href="mailto:daveymason@outlook.com">daveymason@outlook.com</a><br/>
                        Or click <a href="#" onClick={handleContactClick}>here</a> to use the contact form (opens your email client).
                    </Typography>
                </Grid>
                <Grid item xs={5} />
            </Grid>
        </Container>
    );
}

export default ContactForm;