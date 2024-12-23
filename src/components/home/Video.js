import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Avard from '../../assest/img/home/Avard.webp'
import Product from '../../assest/img/home/Product.webp'
import Design from '../../assest/img/home/Disgn.webp'

function Video() {
    return (
        <Box
            sx={{
                backgroundImage:
                    "url('https://wayonaaev.in/frontend/live/assets/images/new/astino-with-light.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                display: "flex",
                color: "white",
            }}
        >
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} sx={{ my: 8 }}>
                        <Box sx={{ mt: 10 }}>
                            <Typography sx={{ fontFamily: '"Nunito", sans-serif', fontWeight: "bold", fontSize: { xs: "23px", sm: "27px", md: "27px", lg: "30px", xl: "40px", }, textAlign: { xl: "start", lg: "start", md: "start", sm: "start", xs: "center", }, }} >
                                TRENDY LOOK THAT WILL MAKE YOU SAY{" "}
                                <Typography variant="span" style={{ color: "orange" }}>WOW!</Typography>
                            </Typography>

                            <Typography sx={{ fontFamily: '"Nunito", sans-serif', fontSize: { xs: "16px", sm: "18px", md: "18px", lg: "21px", }, textAlign: { xl: "start", lg: "start", md: "start", sm: "start", xs: "center", }, fontFamily: "italic", mt: 2, fontWeight: "600", }} >
                                Making History: India's First-Ever "iF" Design Award for the
                                electric scooter.
                            </Typography>

                            <Typography sx={{ fontFamily: '"Nunito", sans-serif', pt: 4, fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "20px", }, fontWeight: "600", textAlign: { xl: "start", lg: "start", md: "start", sm: "start", xs: "center", }, }} >
                                Not just another EV on the block! Astino is our sleek, modern
                                electric scooter that delivers high speed and a trendy look that
                                will turn heads.
                            </Typography>

                            <Typography sx={{ fontFamily: '"Nunito", sans-serif', mt: 3, color: "orange", fontSize: { xs: "33px", sm: "35px", md: "40px", lg: "50px", }, fontWeight: "bold", fontStyle: "italic", textAlign: { xl: "start", lg: "start", md: "start", sm: "start", xs: "center", }, }} >
                                Coming Soon!
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} sx={{ mt: 5 }}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: { xs: 30 } }} >
                            <Box sx={{ display: "flex", justifyContent: "center", width: "45%", gap: "10px" }}>
                                <Typography component="img" src={Design} sx={{ maxWidth: "70%", height: "100%", marginTop: "10px" }} />
                                <Typography component="img" src={Product} sx={{ maxWidth: "70%", height: "100%", marginTop: "10px" }} />
                                <Typography component="img" src={Avard} sx={{ maxWidth: "50%", height: "100%" }} />
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}

export default Video