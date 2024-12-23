import { Box, Typography, Grid, Container } from "@mui/material";
import React from "react";

function WeAre() {
    return (
        <Box sx={{ padding: { xs: 1, sm: 4 } }}>
            <Container >
                <Box sx={{ width: "100%" }}>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: "700", fontSize: { xs: "28px", md: "40px", lg: "46px" }, fontFamily: "cardo", display: 'flex', justifyContent: 'center', textAlign: 'center' }} >
                        Who we are
                    </Typography>

                    <Grid container spacing={3} alignItems="center">
                        {/* Left Section: Image Placeholder */}
                        <Grid item xs={12} md={6}  >
                            <Box
                                sx={{
                                    width: "100%",
                                    height: { xs: 200, md: 450 },
                                    backgroundColor: "#E0E0E0",
                                }}
                            ></Box>
                        </Grid>

                        {/* Right Section: Text Content */}
                        <Grid item xs={12} md={6} sx={{ mt: { xl: -10, lg: -6 } }}>
                            <Typography sx={{ fontWeight: "700", color: '#1E1E1E', marginBottom: 3, fontSize: { xl: 32, lg: 32, md: 30, sm: 25, xs: 20 }, fontFamily: '"Nunito", sans-serif' }}>
                                Wayonaa: Changing the World of E-Scooters One at a Time
                            </Typography>

                            <Typography variant="body1" sx={{ marginBottom: 2, textAlign: "justify", color: '#1E1E1E', fontWeight: "600", fontFamily: '"Nunito", sans-serif' }} >
                                At Wayonaa, we’re more than just an E-Scooter company. We are a dedicated team revolutionizing commuting with high-performance, eco-friendly rides. Our precision-designed bikes embody our brand’s values of efficiency and reliability. Experience optimal performance and an exceptional ride with our focus on design, technology, and safety.
                            </Typography>

                            <Typography variant="body1" sx={{ textAlign: "justify", color: '#1E1E1E', fontFamily: '"Nunito", sans-serif', fontWeight: "600" }}>
                                Our mission is to manufacture high-quality electric scooters, contributing to the growing trend of electric mobility. We aim to set new standards in this EV market and lead the way toward a sustainable tomorrow by reducing the carbon footprint and combating climate change.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default WeAre
