import { Box, Typography } from "@mui/material";
import React from "react";
import About from '../../assest/img/aboutUs/Rectangle 168.webp'

function Contact() {
    return (
        <Box sx={{  height: "auto", overflow: "hidden", position: "relative" }}>
            {/* Background Image */}
            <Typography
                component="img"
                src={About}
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: 'cover',
                    objectPosition: "center",
                }}
            />

            {/* Overlay Text */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: '"Cardo", serif',
                        color: "white",
                        textAlign: "center",
                        fontSize: { xl: "44px", lg: "40px", md: "35px", sm: "30px", xs: "23px" }
                    }}
                >
                    Contact Us
                </Typography>
            </Box>
        </Box>
    );
}

export default Contact
