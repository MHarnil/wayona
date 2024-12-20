import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

import I1 from '../../assest/img/Features/I1.webp'
import I2 from '../../assest/img/Features/I2.webp'
import I3 from '../../assest/img/Features/I3.webp'
import I4 from '../../assest/img/Features/I4.webp'
import I5 from '../../assest/img/Features/I5.webp'
import Bike from '../../assest/img/Features/Bike.webp'
import I6 from '../../assest/img/Features/I6.webp'
import I7 from '../../assest/img/Features/I7.webp'
import I8 from '../../assest/img/Features/I8.webp'
import I9 from '../../assest/img/Features/I9.webp'
import I10 from '../../assest/img/Features/I10.webp'
import BG from '../../assest/img/Features/BG.webp'

function Features() {
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "20px 0",
                mb:4
            }}>
                <Container>
                    <Typography
                        sx={{
                            fontFamily: '"Cardo", serif',
                            fontSize: { xs: 24, sm: 28, md: 32, lg: 36 },
                            fontWeight: 600,
                            textAlign: 'center', mt: 5, mb: 2
                        }}
                    >
                        Features
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={2.25} md={2.25}>
                            <Box sx={{
                                boxShadow: "0 7px 29px rgba(100, 100, 111, 0.2)",
                                borderRadius: "7px",
                                textAlign: "center",
                                padding: "20px",
                                marginTop: "15px"
                            }}>
                                <Typography>
                                    <img src={I1} alt="icon1" width="45%" />
                                </Typography>
                                <Typography fontWeight="700" sx={{ fontFamily: '"Nunito", sans-serif' }}>Load Capacity</Typography>
                                <Typography fontSize="12px" color="#1E1E1E" marginTop="5px" sx={{ fontFamily: '"Nunito", sans-serif' }}>160 kgs</Typography>
                            </Box>
                            <Box sx={{
                                boxShadow: "0 7px 29px rgba(100, 100, 111, 0.2)",
                                borderRadius: "7px",
                                textAlign: "center",
                                padding: "20px",
                                marginTop: "15px"
                            }}>
                                <Typography>
                                    <img src={I2} alt="icon2" width="45%" />
                                </Typography>
                                <Typography fontWeight="700" sx={{ fontFamily: '"Nunito", sans-serif' }}>Motor Power</Typography>
                                <Typography fontSize="12px" color="#1E1E1E" marginTop="5px" sx={{ fontFamily: '"Nunito", sans-serif' }}>250W BLDC Hub Motor</Typography>
                            </Box>
                            <Box sx={{
                                boxShadow: "0 7px 29px rgba(100, 100, 111, 0.2)",
                                borderRadius: "7px",
                                textAlign: "center",
                                padding: "20px",
                                marginTop: "15px"
                            }}>
                                <Typography>
                                    <img src={I3} alt="icon3" width="45%" />
                                </Typography>
                                <Typography fontWeight="700" sx={{ fontFamily: '"Nunito", sans-serif' }}>Headlight</Typography>
                                <Typography fontSize="12px" color="#1E1E1E" marginTop="5px" sx={{ fontFamily: '"Nunito", sans-serif' }}>LED with DRL</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6} sm={2.25} md={2.25} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box>
                                <Box sx={{
                                    boxShadow: "0 7px 29px rgba(100, 100, 111, 0.2)",
                                    borderRadius: "7px",
                                    textAlign: "center",
                                    padding: "20px",
                                    marginTop: "15px"
                                }}>
                                    <Typography>
                                        <img src={I4} alt="icon4" width="45%" />
                                    </Typography>
                                    <Typography fontWeight="700" sx={{ fontFamily: '"Nunito", sans-serif' }}>Battery</Typography>
                                    <Typography fontSize="12px" color="#1E1E1E" marginTop="5px" sx={{ fontFamily: '"Nunito", sans-serif' }}>60V 30Ah LFP Safe Lithium-ion Battery</Typography>
                                </Box>
                                <Box sx={{
                                    boxShadow: "0 7px 29px rgba(100, 100, 111, 0.2)",
                                    borderRadius: "7px",
                                    textAlign: "center",
                                    padding: "20px",
                                    marginTop: "15px"
                                }}>
                                    <Typography>
                                        <img src={I5} alt="icon5" width="45%" />
                                    </Typography>
                                    <Typography fontWeight="700" sx={{ fontFamily: '"Nunito", sans-serif' }}>Suspension</Typography>
                                    <Typography fontSize="12px" color="#1E1E1E" marginTop="5px" sx={{ fontFamily: '"Nunito", sans-serif' }}>Front Forks, Rear Shock Absorbers</Typography>
                                </Box>
                            </Box>
                        </Grid>


                        <Grid item xs={12} sm={3} md={3} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box>
                                <img src={Bike} alt="g1" width="100%" />
                            </Box>
                        </Grid>


                        <Grid item xs={6} sm={2.25} md={2.25} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box>
                                <Box sx={{
                                    boxShadow: "0 7px 29px rgba(100, 100, 111, 0.2)",
                                    borderRadius: "7px",
                                    textAlign: "center",
                                    padding: "20px",
                                    marginTop: "15px"
                                }}>
                                    <Typography>
                                        <img src={I6} alt="icon4" width="45%" />
                                    </Typography>
                                    <Typography fontWeight="700" sx={{ fontFamily: '"Nunito", sans-serif' }}>Range Per Charge</Typography>
                                    <Typography fontSize="12px" color="#1E1E1E" marginTop="5px" sx={{ fontFamily: '"Nunito", sans-serif' }}>70 - 75 kms</Typography>
                                </Box>
                                <Box sx={{
                                    boxShadow: "0 7px 29px rgba(100, 100, 111, 0.2)",
                                    borderRadius: "7px",
                                    textAlign: "center",
                                    padding: "20px",
                                    marginTop: "15px"
                                }}>
                                    <Typography>
                                        <img src={I7} alt="icon5" width="45%" />
                                    </Typography>
                                    <Typography fontWeight="700" sx={{ fontFamily: '"Nunito", sans-serif' }}>Top Speed</Typography>
                                    <Typography fontSize="12px" color="#1E1E1E" marginTop="5px" sx={{ fontFamily: '"Nunito", sans-serif' }}>25 km/h With Reverse Mode</Typography>
                                </Box>
                            </Box>
                        </Grid>


                        <Grid item xs={6} sm={2.25} md={2.25}>
                            <Box sx={{
                                boxShadow: "0 7px 29px rgba(100, 100, 111, 0.2)",
                                borderRadius: "7px",
                                textAlign: "center",
                                padding: "20px",
                                marginTop: "15px"
                            }}>
                                <Typography>
                                    <img src={I8} alt="icon1" width="45%" />
                                </Typography>
                                <Typography fontWeight="700" sx={{ fontFamily: '"Nunito", sans-serif' }}>Tyre</Typography>
                                <Typography fontSize="12px" color="#1E1E1E" marginTop="5px" sx={{ fontFamily: '"Nunito", sans-serif' }}>90/100 - 10 Tubeless Tyre</Typography>
                            </Box>
                            <Box sx={{
                                boxShadow: "0 7px 29px rgba(100, 100, 111, 0.2)",
                                borderRadius: "7px",
                                textAlign: "center",
                                padding: "20px",
                                marginTop: "15px"
                            }}>
                                <Typography>
                                    <img src={I9} alt="icon2" width="45%" />
                                </Typography>
                                <Typography fontWeight="700" sx={{ fontFamily: '"Nunito", sans-serif' }}>Front Disc Brake</Typography>
                                <Typography fontSize="12px" color="#1E1E1E" marginTop="5px" sx={{ fontFamily: '"Nunito", sans-serif' }}>80mm Front Disc Brake</Typography>
                            </Box>
                            <Box sx={{
                                boxShadow: "0 7px 29px rgba(100, 100, 111, 0.2)",
                                borderRadius: "7px",
                                textAlign: "center",
                                padding: "20px",
                                marginTop: "15px"
                            }}>
                                <Typography>
                                    <img src={I10} alt="icon3" width="45%" />
                                </Typography>
                                <Typography fontWeight="700" sx={{ fontFamily: '"Nunito", sans-serif' }}>Charger</Typography>
                                <Typography fontSize="12px" color="#1E1E1E" marginTop="5px" sx={{ fontFamily: '"Nunito", sans-serif' }}>Lithium 6A with Auto Cut-Off</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Features;
