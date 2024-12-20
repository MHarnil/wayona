import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lite from '../../assest/img/home/LiteBike.webp';
import LiteCon from '../../assest/img/home/LiteCon.webp';
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

const GLitePage = () => {

    useEffect(() => {
        // GSAP Animations with ScrollTrigger

        gsap.fromTo(
            ".animate-text",
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".animate-text",
                    start: "top 100%",
                    end: "bottom top",
                    scrub: true
                }
            }
        );

        gsap.fromTo(
            ".animate-Lite",
            { opacity: 0, y: -100, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: ".animate-Lite",
                    start: "top 100%",
                    end: "bottom top",
                    scrub: true
                }
            }
        );

        gsap.fromTo(
            ".animate-Litecon",
            { opacity: 0, y: 100, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: ".animate-Litecon",
                    start: "top 100%",
                    end: "bottom top",
                    scrub: true
                }
            }
        );

    }, []);

    return (
        <Box
            sx={{
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                my:6,
            }}
        >
            {/* Main Content Section */}
            <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                {/* Left Side: One Charge Text */}
                <Grid item xs={12} sm={3} textAlign="center" sx={{ ml: 5 }}>
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: '"Nunito", sans-serif',
                            color: '#000',
                            fontWeight: 600,
                            fontSize: 20
                        }}
                        className="animate-text"
                    >
                        One Charge And Get Up To
                    </Typography>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        sx={{ mt: 1, color: '#FB7C00', fontFamily: '"Nunito", sans-serif' }}
                        className="animate-text"
                    >
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
                        className="animate-Lite"
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
                        className="animate-Litecon"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default GLitePage;
