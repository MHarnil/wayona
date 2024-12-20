import { Container } from '@mui/system';
import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

import Leader from '../../assest/img/aboutUs/leadership.webp';
import facebookLogo from '../../assest/img/aboutUs/facebook.webp'
import linkedinLogo from '../../assest/img/aboutUs/in.webp'
import instagramLogo from '../../assest/img/aboutUs/x.webp'
import twitterLogo from '../../assest/img/aboutUs/insta.webp'

function Leadership() {
    return (
        <>
            <Container>
                <Typography
                    variant="h5"
                    sx={{
                        my: 2,
                        fontWeight: "700",
                        fontSize: { xs: "28px", md: "40px", lg: "46px" },
                        fontFamily: "cardo", display: 'flex', justifyContent: 'center', textAlign: 'center'
                    }}
                >
                    Our Leadership
                </Typography>
                <Box>
                    <Grid container spacing={2}>
                        {/* Leader Card 1 */}
                        <Grid item xs={12} lg={4} md={6} sm={6}>
                            <Typography sx={{ border: "1px solid #1E1E1E4D", borderRadius: "7px" }}>
                                <Box sx={{ padding: "12px" }}>
                                    <img
                                        src={Leader}
                                        alt="Leadership Image"
                                        style={{
                                            width: '100%', // Ensures the image fits the container width
                                            height: 'auto', // Maintains aspect ratio
                                            borderRadius: '7px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{ padding: "12px" }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography sx={{ fontSize: "20px", fontWeight: "600", fontFamily: '"Nunito", sans-serif' }}>Mr. Sanjay Kaswala</Typography>
                                        <Typography>
                                            <span style={{ margin: "0 10px 0 0" }}>
                                                <img src={facebookLogo} alt="Facebook" style={{ width: '20px', height: '20px' }} />
                                            </span>
                                            <span>
                                                <img src={linkedinLogo} alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
                                            </span>
                                            <span style={{ margin: "0 10px 0 10px" }}>
                                                <img src={instagramLogo} alt="Instagram" style={{ width: '20px', height: '20px' }} />
                                            </span>
                                            <span>
                                                <img src={twitterLogo} alt="Twitter" style={{ width: '20px', height: '20px' }} />
                                            </span>
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: "15px", margin: "4px 0 0 0", fontFamily: '"Nunito", sans-serif' }}>CEO & Founder of Wayonaa EV</Typography>
                                        <Typography sx={{ color: "#1E1E1E", fontSize: "14px", margin: "12px 0 0 0", fontFamily: '"Nunito", sans-serif' }}>
                                            Visionary leader dedicated to transforming the electric vehicle industry. With a strong background in [insert relevant field], he founded Wayonaa EV with the mission to provide sustainable, high-performance electric scooters that meet the growing demand for eco-friendly transportation. Under his leadership, Wayonaa has quickly grown into a recognized brand known for its innovative approach and commitment to environmental responsibility. His hands-on leadership style and focus on innovation have driven the company’s success, and he remains committed to advancing electric mobility, creating a greener future, and setting new standards in the industry.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Typography>
                        </Grid>

                        {/* Leader Card 2 */}
                        <Grid item xs={12} lg={4} md={6} sm={6}>
                            <Typography sx={{ border: "1px solid #1E1E1E4D", borderRadius: "7px" }}>
                                <Box sx={{ padding: "12px" }}>
                                    <img
                                        src={Leader}
                                        alt="Leadership Image"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: '7px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{ padding: "12px" }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography sx={{ fontSize: "20px", fontWeight: "600", fontFamily: '"Nunito", sans-serif' }}>Mr. Sanjay Kaswala</Typography>
                                        <Typography>
                                            <span style={{ margin: "0 10px 0 0" }}>
                                                <img src={facebookLogo} alt="Facebook" style={{ width: '20px', height: '20px' }} />
                                            </span>
                                            <span>
                                                <img src={linkedinLogo} alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
                                            </span>
                                            <span style={{ margin: "0 10px 0 10px" }}>
                                                <img src={instagramLogo} alt="Instagram" style={{ width: '20px', height: '20px' }} />
                                            </span>
                                            <span>
                                                <img src={twitterLogo} alt="Twitter" style={{ width: '20px', height: '20px' }} />
                                            </span>
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: "15px", margin: "4px 0 0 0", fontFamily: '"Nunito", sans-serif' }}>CEO & Founder of Wayonaa EV</Typography>
                                        <Typography sx={{ color: "#1E1E1E", fontSize: "14px", margin: "12px 0 0 0", fontFamily: '"Nunito", sans-serif' }}>
                                            Visionary leader dedicated to transforming the electric vehicle industry. With a strong background in [insert relevant field], he founded Wayonaa EV with the mission to provide sustainable, high-performance electric scooters that meet the growing demand for eco-friendly transportation. Under his leadership, Wayonaa has quickly grown into a recognized brand known for its innovative approach and commitment to environmental responsibility. His hands-on leadership style and focus on innovation have driven the company’s success, and he remains committed to advancing electric mobility, creating a greener future, and setting new standards in the industry.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Typography>
                        </Grid>

                        {/* Leader Card 3 */}
                        <Grid item xs={12} lg={4} md={6} sm={6}>
                            <Typography sx={{ border: "1px solid #1E1E1E4D", borderRadius: "7px" }}>
                                <Box sx={{ padding: "12px" }}>
                                    <img
                                        src={Leader}
                                        alt="Leadership Image"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: '7px',
                                        }}
                                    />
                                </Box>
                                <Box sx={{ padding: "12px" }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography sx={{ fontSize: "20px", fontWeight: "600", fontFamily: '"Nunito", sans-serif' }}>Mr. Sanjay Kaswala</Typography>
                                        <Typography>
                                            <span style={{ margin: "0 10px 0 0" }}>
                                                <img src={facebookLogo} alt="Facebook" style={{ width: '20px', height: '20px' }} />
                                            </span>
                                            <span>
                                                <img src={linkedinLogo} alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
                                            </span>
                                            <span style={{ margin: "0 10px 0 10px" }}>
                                                <img src={instagramLogo} alt="Instagram" style={{ width: '20px', height: '20px' }} />
                                            </span>
                                            <span>
                                                <img src={twitterLogo} alt="Twitter" style={{ width: '20px', height: '20px' }} />
                                            </span>
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: "15px", margin: "4px 0 0 0", fontFamily: '"Nunito", sans-serif' }}>CEO & Founder of Wayonaa EV</Typography>
                                        <Typography sx={{ color: "#1E1E1E", fontSize: "14px", margin: "12px 0 0 0", fontFamily: '"Nunito", sans-serif' }}>
                                            Visionary leader dedicated to transforming the electric vehicle industry. With a strong background in [insert relevant field], he founded Wayonaa EV with the mission to provide sustainable, high-performance electric scooters that meet the growing demand for eco-friendly transportation. Under his leadership, Wayonaa has quickly grown into a recognized brand known for its innovative approach and commitment to environmental responsibility. His hands-on leadership style and focus on innovation have driven the company’s success, and he remains committed to advancing electric mobility, creating a greener future, and setting new standards in the industry.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default Leadership;
