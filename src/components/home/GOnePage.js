import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import One from '../../assest/img/home/OneBike.webp';
import LiteCon from '../../assest/img/home/LiteCon.webp';
import CountUp from "react-countup";

const GOnePage = () => {

    return (
        <Box sx={{ backgroundColor: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", my: 6, }}  >
            {/* Main Content Section */}
            <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                {/* Left Side: One Charge Text */}
                <Grid item xs={12} sm={3} textAlign="center" sx={{ ml: 5 }}>
                    <Typography variant="body2" sx={{ fontFamily: '"Nunito", sans-serif', color: '#000', fontWeight: 600, fontSize: 20 }}  >
                        One Charge And Get Up To
                    </Typography>
                    <Typography variant="h3" fontWeight="bold" sx={{ mt: 1, color: '#FB7C00', fontFamily: '"Nunito", sans-serif' }} >
                        <CountUp duration={3} start={0} end={75} /> Km
                    </Typography>
                </Grid>

                {/* Center: Scooter Image */}
                <Grid item xs={12} sm={3} textAlign="center">
                    <Typography
                        component="img"
                        src={One}
                        sx={{
                            maxWidth: "100%",
                            width: { xs: '90%', sm: '100%' },
                            height: "auto"
                        }}
                    />
                </Grid>

                {/* Right Side: Specifications */}
                <Grid item xs={12} sm={3} textAlign="end">
                    <Typography
                        component="img"
                        src={LiteCon}
                        sx={{
                            maxWidth: "100%",
                            height: "auto"
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default GOnePage;
