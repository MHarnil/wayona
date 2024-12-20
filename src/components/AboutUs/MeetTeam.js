import { Box, Grid, Typography, Container } from "@mui/material";
import React from "react";
import bikePhoto1 from '../../assest/img/aboutUs/meetteam.webp'
import bikePhoto2 from '../../assest/img/aboutUs/meetteam2.webp'
import groupPhoto from '../../assest/img/aboutUs/meetteam3.webp'

function MeetTeam() {
    return (
        <Box sx={{ padding: { xs: 1, sm: 4 } }}>
            <Container>
                <Box sx={{ justifyContent: "center", textAlign: "center", my: 2 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 2,
                            fontWeight: "700",
                            fontSize: { xs: "28px", md: "40px", lg: "46px" },
                            fontFamily: "cardo",
                        }}
                    >
                        Meet Our Team
                    </Typography>
                </Box>
                <Grid container spacing={4} sx={{
                    flexDirection: { xs: "column", sm: "row" },
                }}>
                    <Grid item xs={12} sm={8}>
                        <Box
                            sx={{
                                width: "100%",
                                height: { xs: 250, sm: 500 },
                                overflow: "hidden",
                                borderRadius: "8px",
                                boxShadow: 3,
                            }}
                        >
                            <Typography
                                component="img"
                                src={groupPhoto}
                                sx={{
                                    width: "100%", height: "100%", objectFit: "cover"
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Side Photos */}
                    <Grid item xs={12} sm={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: { xs: 150, sm: 240 },
                                        overflow: "hidden",
                                        borderRadius: "8px",
                                        boxShadow: 3,
                                    }}
                                >
                                    <Typography
                                        component="img"
                                        src={bikePhoto1}
                                        sx={{
                                            width: "100%", height: "100%", objectFit: "cover"
                                        }}
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: { xs: 150, sm: 240 },
                                        overflow: "hidden",
                                        borderRadius: "8px",
                                        boxShadow: 3,
                                    }}
                                >
                                    <Typography
                                        component="img"
                                        src={bikePhoto2}
                                        sx={{
                                            width: "100%", height: "100%", objectFit: "cover"
                                        }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default MeetTeam;
