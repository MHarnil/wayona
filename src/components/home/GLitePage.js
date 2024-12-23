import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Lite from '../../assest/img/home/LiteBike.webp';

import Ico1 from '../../assest/img/home/I1.webp'
import Ico2 from '../../assest/img/home/I2.webp'
import Ico3 from '../../assest/img/home/I3.webp'
import CountUp from "react-countup";

const GLitePage = () => {

    return (
        <Box sx={{ backgroundColor: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", my: 6, }} >
            {/* Main Content Section */}
            <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                {/* Left Side: One Charge Text */}
                <Grid item xs={12} sm={3} textAlign="center" sx={{ ml: 5 }}>
                    <Typography variant="body2" sx={{ fontFamily: '"Nunito", sans-serif', color: '#000', fontWeight: 600, fontSize: 20 }} >
                        One Charge And Get Up To
                    </Typography>
                    <Typography variant="h3" fontWeight="bold" sx={{ mt: 1, color: '#FB7C00', fontFamily: '"Nunito", sans-serif' }} >
                        <CountUp duration={3} start={0} end={75} />Km
                    </Typography>
                </Grid>

                {/* Center: Scooter Image */}
                <Grid item xs={12} sm={3} textAlign="center">
                    <Typography
                        component="img"
                        src={Lite}
                        sx={{
                            maxWidth: "100%",
                            width: { xs: '90%', sm: '100%' },
                            height: "auto"
                        }}
                    />
                </Grid>

                {/* Right Side: Specifications */}
                <Grid item xs={12} sm={3} textAlign="center" sx={{
                    backgroundColor: '#E5E5E5', py: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', aspectRatio: "1.5", // Aspect ratio 1.5
                    background: `
          radial-gradient(circle 220px at left, #0000 100%, #E5E5E5) left`,
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                }}>

                    <Box sx={{ width: '70%' }}>
                        <Box>
                            <Typography
                                component="img"
                                src={Ico1}
                                sx={{ width: '44px' }}
                            />
                            <Box>
                                <Typography sx={{ fontFamily: '"Nunito", sans-serif', color: '#808080', fontWeight: '700' }}>Top Speed</Typography>
                                <Typography sx={{ fontFamily: '"Nunito", sans-serif', color: '#808080', fontSize: 14 }}>With a continuous speed of 25 km/h</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ my: 4 }}>
                            <Typography
                                component="img"
                                src={Ico2}
                                sx={{ width: '44px' }}
                            />
                            <Box>
                                <Typography sx={{ fontFamily: '"Nunito", sans-serif', color: '#808080', fontWeight: '700' }}>Motor Power</Typography>
                                <Typography sx={{ fontFamily: '"Nunito", sans-serif', color: '#808080', fontSize: 14 }}>250W BLDC Hub Motor</Typography>
                            </Box>
                        </Box>

                        <Box>
                            <Typography
                                component="img"
                                src={Ico3}
                                sx={{ width: '44px' }}
                            />
                            <Box>
                                <Typography sx={{ fontFamily: '"Nunito", sans-serif', color: '#808080', fontWeight: '700' }}>Battery</Typography>
                                <Typography sx={{ fontFamily: '"Nunito", sans-serif', color: '#808080', fontSize: 14 }}>48V 30Ah/60V 30Ah NMC waterproof lithium-ion Battery</Typography>
                            </Box>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </Box>
    );
};

export default GLitePage;
