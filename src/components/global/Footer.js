import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

import Logo from '../../assest/img/Footerlogo.webp';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import SocialMedia from './SocialMedia';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#000', py: 4 }}>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Typography component="img" src={Logo} sx={{ width: { xs: '70%', sm: '20%' } }} />
                </Box>
                <Grid container spacing={2} sx={{ mb: 4 }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{ fontSize: '24px', color: '#FFF', fontFamily: '"Cardo", serif', py: '20px' }}>
                            Product
                        </Typography>
                        <Typography sx={{ color: '#FFF', fontFamily: '"Nunito", sans-serif', fontSize: '16px', lineHeight: '2.44', '&:hover': { color: '#FB7C00', transition: '0.4s' } }}>
                            G-ONE
                        </Typography>
                        <Typography sx={{ color: '#FFF', fontFamily: '"Nunito", sans-serif', fontSize: '16px', lineHeight: '2.44', '&:hover': { color: '#FB7C00', transition: '0.4s' } }}>
                            G-RAZOR
                        </Typography>
                        <Typography sx={{ color: '#FFF', fontFamily: '"Nunito", sans-serif', fontSize: '16px', lineHeight: '2.44', '&:hover': { color: '#FB7C00', transition: '0.4s' } }}>
                            G-LITE
                        </Typography>
                        <Typography sx={{ color: '#FFF', fontFamily: '"Nunito", sans-serif', fontSize: '16px', lineHeight: '2.44', '&:hover': { color: '#FB7C00', transition: '0.4s' } }}>
                            Astino...(Soon)
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{ fontSize: '24px', color: '#FFF', fontFamily: '"Cardo", serif', py: '20px' }}>
                            Quick Links
                        </Typography>
                        <Typography sx={{ color: '#FFF', fontFamily: '"Nunito", sans-serif', fontSize: '16px', lineHeight: '2.44', '&:hover': { color: '#FB7C00', transition: '0.4s' } }}>
                            Home
                        </Typography>
                        <Typography sx={{ color: '#FFF', fontFamily: '"Nunito", sans-serif', fontSize: '16px', lineHeight: '2.44', '&:hover': { color: '#FB7C00', transition: '0.4s' } }}>
                            About Us
                        </Typography>
                        <Typography sx={{ color: '#FFF', fontFamily: '"Nunito", sans-serif', fontSize: '16px', lineHeight: '2.44', '&:hover': { color: '#FB7C00', transition: '0.4s' } }}>
                            Franchise
                        </Typography>
                        <Typography sx={{ color: '#FFF', fontFamily: '"Nunito", sans-serif', fontSize: '16px', lineHeight: '2.44', '&:hover': { color: '#FB7C00', transition: '0.4s' } }}>
                            Exp. Center
                        </Typography>
                        <Typography sx={{ color: '#FFF', fontFamily: '"Nunito", sans-serif', fontSize: '16px', lineHeight: '2.44', '&:hover': { color: '#FB7C00', transition: '0.4s' } }}>
                            Contact Us
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{ fontSize: '24px', color: '#FFF', fontFamily: '"Cardo", serif', py: '20px' }}>
                            Contact Us
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', mb: 2 }}>
                            <Box>
                                <PhoneIcon sx={{ color: '#FB7C00' }} />
                            </Box>
                            <Box>
                                <Typography sx={{ ml: 1, color: '#FFF', fontFamily: '"Nunito", sans-serif', fontSize: '16px', '&:hover': { color: '#FB7C00', transition: '0.4s' } }}>
                                    +91 98791 82121
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'start', mb: 2 }}>
                            <Box>
                                <LocationOnIcon sx={{ color: '#FB7C00' }} />
                            </Box>
                            <Box>
                                <Typography sx={{ ml: 1, color: '#FFF', fontFamily: '"Nunito", sans-serif', fontSize: '16px', '&:hover': { color: '#FB7C00', transition: '0.4s' } }}>
                                    Kaviraj campus, Vesu Canal Rd,
                                    Punagam, Valthan, Surat,
                                    Gujarat 395006
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <Box>
                                <MailIcon sx={{ color: '#FB7C00' }} />
                            </Box>
                            <Box>
                                <Typography sx={{ ml: 1, color: '#FFF', fontFamily: '"Nunito", sans-serif', fontSize: '16px', '&:hover': { color: '#FB7C00', transition: '0.4s' } }}>
                                    info@wayonaaev.in
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{ fontSize: '24px', color: '#FFF', fontFamily: '"Cardo", serif', py: '20px' }}>
                            Subscribe Newsletter
                        </Typography>
                        <TextField
                            variant="outlined"
                            fullWidth
                            placeholder="Enter your email"
                            sx={{
                                backgroundColor: '#fff',
                                borderRadius: '4px',
                            }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                width: '100%',
                                backgroundColor: '#FB7C00',
                                my: 2,
                                '&:hover': {
                                    backgroundColor: '#FF4B3A',
                                },
                            }}
                        >
                            Subscribe
                        </Button>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {/* <FacebookIcon sx={{ color: '#FFF', mx: 1 }} />
                            <InstagramIcon sx={{ color: '#FFF', mx: 1 }} />
                            <YouTubeIcon sx={{ color: '#FFF', mx: 1 }} />
                            <LinkedInIcon sx={{ color: '#FFF', mx: 1 }} /> */}
                            <SocialMedia />
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ pt: 4, borderTop: '1px solid #354342' }}>
                    <Typography sx={{
                        color: '#FFF',
                        fontFamily: '"Nunito", sans-serif',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', sm: 'row' },
                        textAlign: { xs: 'center', sm: 'left' },
                        fontSize: { xs: '14px', sm: '16px', md: '18px' },

                    }}>
                        © Copyright@2024 <Typography variant='span' sx={{ color: '#FB7C00', mx: 1, }}> WAYONAA EV, </Typography> ALL Rights Reserved
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
