import { Box, Grid, Typography, Container } from "@mui/material";
import React from "react";
import year2021Img from '../../assest/img/aboutUs/journey.webp'
import year2022Img from '../../assest/img/aboutUs/journey2.webp'
import year2023Img from '../../assest/img/aboutUs/journey3.webp'
import year2024Img from '../../assest/img/aboutUs/journey4.webp'
import year2027Img from '../../assest/img/aboutUs/journey5.webp'

function Journey() {
    return (
        <Box sx={{ padding: { xs: 1, sm: 4 } }}>
            <Container>
                <Typography
                    variant="h5"
                    sx={{
                        mb: 2,
                        fontWeight: "700",
                        fontSize: { xs: "28px", md: "40px", lg: "46px" },
                        fontFamily: "cardo", display: 'flex', justifyContent: 'center', textAlign: 'center'
                    }}
                >
                    Our Journey
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <Typography sx={{
                        mb: { xs: 3, sm: 4 },
                        fontWeight: "500",
                        fontSize: { xs: "13px", md: "20px", lg: "19px" },
                        fontFamily: "nunito",
                        width: { xs: "100%", sm: "80%", md: "70%", lg: "85%" },
                    }}>
                        The seeds of Wayonaa were sown in 2021 and just within two months of inception, we established two experience centers – one each in Surat and Rajkot and set up 15+ dealerships across Gujarat
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {/* Milestone 2021 */}
                    <Grid item xs={12} sm={4} md={2.4}>
                        <Box
                            sx={{
                                py: 4,
                                textAlign: "center",
                                borderRadius: "8px",
                                boxShadow: 1,
                                backgroundColor: "#fff",
                            }}
                        >
                            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                                2021
                            </Typography>
                            <Typography sx={{ fontSize: "14px", color: "#666666", fontWeight: "700", fontFamily: "nunito" }}>
                                The Grand Launch of Wayonaa's 3 Low-Speed Scooter Models
                            </Typography>
                            <Box
                                sx={{
                                    width: "60%",
                                    height: "100%",
                                    margin: "16px auto",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src={year2021Img}
                                    alt="2021 Milestone"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Box>

                        </Box>
                    </Grid>

                    {/* Milestone 2022 */}
                    <Grid item xs={12} sm={4} md={2.4}>
                        <Box
                            sx={{
                                py: 4,
                                textAlign: "center",
                                borderRadius: "8px",
                                boxShadow: 1,
                                backgroundColor: "#fff",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "60%",
                                    height: "100%",
                                    margin: "16px auto",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src={year2022Img}
                                    alt="2021 Milestone"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Box>
                            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                                2022
                            </Typography>
                            <Typography sx={{ fontSize: "14px", color: "#666666", fontWeight: "700", fontFamily: "nunito" }}>
                                Inauguration of our state-of-the-art manufacturing and development facility
                            </Typography>


                        </Box>
                    </Grid>

                    {/* Milestone 2023 */}
                    <Grid item xs={12} sm={4} md={2.4}>
                        <Box
                            sx={{
                                py: 1.8,
                                px: 2,
                                textAlign: "center",
                                borderRadius: "8px",
                                boxShadow: 1,
                                backgroundColor: "#fff",
                            }}
                        >
                            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                                2023
                            </Typography>
                            <Typography sx={{ fontSize: "14px", color: "#666666", fontWeight: "700", fontFamily: "nunito" }}>
                                15+ Dealerships and Service Centre Networks across Gujarat under Wayonaa brand
                            </Typography>
                            <Box
                                sx={{
                                    width: "80%",
                                    height: "100%",
                                    margin: "16px auto",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src={year2023Img}
                                    alt="2021 Milestone"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Box>

                        </Box>
                    </Grid>

                    {/* Milestone 2024 */}
                    <Grid item xs={12} sm={4} md={2.4}>
                        <Box
                            sx={{
                                py: 4,
                                textAlign: "center",
                                borderRadius: "8px",
                                boxShadow: 1,
                                backgroundColor: "#fff",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "60%",
                                    height: "100%",
                                    margin: "16px auto",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src={year2024Img}
                                    alt="2021 Milestone"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Box>
                            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                                2024
                            </Typography>
                            <Typography sx={{ fontSize: "14px", color: "#666666", fontWeight: "700", fontFamily: "nunito" }}>
                                Launch of the high-speed flagship electric scooter - Neutrino
                            </Typography>


                        </Box>
                    </Grid>

                    {/* Milestone 2027 */}
                    <Grid item xs={12} sm={4} md={2.4}>
                        <Box
                            sx={{
                                py: 5,
                                textAlign: "center",
                                borderRadius: "8px",
                                boxShadow: 1,
                                backgroundColor: "#fff",
                            }}
                        >
                            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                                2025
                            </Typography>
                            <Typography sx={{ fontSize: "14px", color: "#666666", fontWeight: "700", fontFamily: "nunito" }}>
                                1,50,000 Nutrino Sell Launching of other Variants
                            </Typography>
                            <Box
                                sx={{
                                    width: "60%",
                                    height: "100%",
                                    margin: "16px auto",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src={year2027Img}
                                    alt="2021 Milestone"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Box>

                        </Box>
                    </Grid>



                </Grid>
            </Container>
        </Box>
    );
}

export default Journey
