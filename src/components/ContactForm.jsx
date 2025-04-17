import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';

function ContactForm() {
    const handleContactClick = () => {
        const mailtoLink = `mailto:daveymason@outlook.com?subject=Contact Form Submission&body=Name:%0D%0AEmail:%0D%0AMessage:%0D%0A`; // %0D%0A adds new lines
        window.location.href = mailtoLink;
    };

    return (
        <Container
            id="contact"
            component="section"
            maxWidth="lg"
            sx={(theme) => ({
                p: { xs: 4, md: 6 },
                my: { xs: 4, md: 6 },
                bgcolor: theme.palette.background.default,
                borderRadius: theme.shape.borderRadius * 2,
                boxShadow: theme.shadows[2],
            })}
        >
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                        Contact
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Need assistance or have questions? Reach out to us via email.
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handleContactClick} sx={{ mt: 2 }}>
                        Email Us
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ContactForm;