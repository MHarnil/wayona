import { Grid, Link, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import EastIcon from '@mui/icons-material/East';

import BG from '../../assest/img/home/BikeBG.webp';
import B1 from '../../assest/img/home/BikeOne.webp';
import B2 from '../../assest/img/home/BikeTwo.webp';
import B3 from '../../assest/img/home/BikeThree.webp';
import MaskLogo from '../../assest/img/MaskLogo.webp'
import Right from '../../assest/img/home/Right.webp'

function BikeAbout() {
    return (
        <>
            <Container sx={{ py: 5 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center', fontFamily: '"Cardo", serif', fontSize: { xs: 24, sm: 28, md: 32, lg: 36 }, fontWeight: 600, textAlign: 'center', }}>
                        Are you ready to make the switch to
                        <Typography
                            variant="span"
                            sx={{
                                color: '#FB7C00',
                                fontSize: { xs: 20, sm: 22, md: 26, lg: 28 },
                                fontWeight: 600,
                                fontFamily: '"Cardo", serif',
                                marginTop: { xs: '8px', sm: '0' },
                            }}
                        >
                            WAYONAA EV
                        </Typography>
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{ mb: { xs: 3, sm: 4 }, fontWeight: "500", fontSize: { xs: "12px", md: "14px", lg: "15px" }, fontFamily: "nunito", width: { xs: "100%", sm: "80%", md: "70%", lg: "60%" }, }} >
                            Experience our affordable and stylish Model-G scooters with eco-friendly features, intuitive controls, customization options for a comfortable and reliable ride.
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Grid container spacing={4} sx={{ justifyContent: "center", display: "flex" }}>
                        {/* Bike 1 */}
                        <Grid item xs={12} md={4} sm={6} lg={4}>
                            <Box sx={{ borderRadius: "10px", overflow: "hidden", position: "relative" }}>
                                {/* Background Image */}
                                <Typography component="img" src={BG} sx={{ width: "100%", height: "auto" }} />
                                {/* Bike 1 Image Hover Effect */}
                                <Box sx={{ position: "absolute", top: "10%", left: "10%", transition: "transform 0.3s ease-in-out" }}>
                                    <Typography component="img" src={B1} sx={{
                                        width: "80%",
                                        height: "auto",
                                        transition: "transform 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.3)",
                                        }
                                    }} />
                                </Box>
                                {/* Bike Details */}
                                <Box sx={{ margin: "10px" }}>
                                    <Box sx={{ display: "flex", marginTop: "20px" }}>
                                        <Typography component="img" src={MaskLogo} sx={{ width: '40%', height: '100%' }} />
                                        <Typography sx={{ fontWeight: 600, fontSize: "21px", ml: 1, fontFamily: '"Cardo", serif', }}>G-RAZOR</Typography>
                                    </Box>
                                    <Typography sx={{ fontSize: "16px", color: "#1E1E1E", my: 1, fontFamily: '"Nunito", sans-serif' }}>Modern, Innovative, Advanced, Unparalleled</Typography>
                                    {/* Specifications */}
                                    <Box sx={{ mt: 2 }}>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography component="img" src={Right} sx={{ width: '22px', height: 'auto' }} />
                                            <Typography sx={{ fontSize: '16px', fontFamily: '"Nunito", sans-serif', ml: 1 }}>Top Speed: 25 km/h</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography component="img" src={Right} sx={{ width: '22px', height: 'auto' }} />
                                            <Typography sx={{ fontSize: '16px', fontFamily: '"Nunito", sans-serif', ml: 1 }}>Range: 60-65 km</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography component="img" src={Right} sx={{ width: '22px', height: 'auto' }} />
                                            <Typography sx={{ fontSize: '16px', fontFamily: '"Nunito", sans-serif', ml: 1 }}>Charging Time: 4 hours max</Typography>
                                        </Box>
                                    </Box>
                                    {/* Price */}
                                    <Box sx={{ mt: 2 }}>
                                        <Typography sx={{ fontSize: 14, fontFamily: '"Nunito", sans-serif' }}>From</Typography>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography sx={{ fontWeight: 700, fontSize: "22px", color: '#1E1E1E', fontFamily: '"Nunito", sans-serif' }}>₹62,999</Typography>
                                            <Typography sx={{ marginLeft: "8px", fontSize: "14px", textDecoration: "line-through", fontFamily: '"Nunito", sans-serif' }}>₹74,999</Typography>
                                        </Box>
                                    </Box>
                                    {/* Explore More Button */}
                                    <Link href="/grazor" color="inherit" underline="none">
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                color: "#1E1C4E",
                                                border: "1px solid #E6E6E6",
                                                borderRadius: "5px",
                                                padding: "10px",
                                                marginTop: "15px",
                                                "&:hover": {
                                                    color: "#FB7C00",
                                                    borderColor: "#FB7C00",
                                                },
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: "15px",
                                                    fontFamily: '"Nunito", sans-serif',
                                                    "&:hover": {
                                                        color: "#FB7C00",
                                                    },
                                                }}
                                            >
                                                EXPLORE MORE
                                            </Typography>
                                            <EastIcon
                                                sx={{
                                                    fontSize: "15px",
                                                    ml: 1,
                                                    "&:hover": {
                                                        color: "#FB7C00",
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </Link>

                                </Box>
                            </Box>
                        </Grid>

                        {/* Bike 2 */}
                        <Grid item xs={12} md={4} sm={6} lg={4}>
                            <Box sx={{ borderRadius: "10px", overflow: "hidden", position: "relative" }}>
                                {/* Background Image */}
                                <Typography component="img" src={BG} sx={{ width: "100%", height: "auto" }} />
                                {/* Bike 2 Image Hover Effect */}
                                <Box sx={{ position: "absolute", top: "10%", left: "10%" }}>
                                    <Typography component="img" src={B2} sx={{
                                        width: "80%",
                                        height: "auto",
                                        transition: "transform 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.3)",
                                        }
                                    }} />
                                </Box>
                                {/* Bike Details */}
                                <Box sx={{ margin: "10px" }}>
                                    <Box sx={{ display: "flex", marginTop: "20px" }}>
                                        <Typography component="img" src={MaskLogo} sx={{ width: '40%', height: '100%' }} />
                                        <Typography sx={{ fontWeight: 600, fontSize: "21px", ml: 1, fontFamily: '"Cardo", serif', }}>G-ONE</Typography>
                                    </Box>
                                    <Typography sx={{ fontSize: "16px", color: "#1E1E1E", my: 1, fontFamily: '"Nunito", sans-serif' }}>Sportier, Speedier, Safer, Better</Typography>
                                    {/* Specifications */}
                                    <Box sx={{ mt: 2 }}>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography component="img" src={Right} sx={{ width: '22px', height: 'auto' }} />
                                            <Typography sx={{ fontSize: '16px', fontFamily: '"Nunito", sans-serif', ml: 1 }}>Top Speed: 25 km/h</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography component="img" src={Right} sx={{ width: '22px', height: 'auto' }} />
                                            <Typography sx={{ fontSize: '16px', fontFamily: '"Nunito", sans-serif', ml: 1 }}>Range: 60-65 km</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography component="img" src={Right} sx={{ width: '22px', height: 'auto' }} />
                                            <Typography sx={{ fontSize: '16px', fontFamily: '"Nunito", sans-serif', ml: 1 }}>Charging Time: 4 hours max</Typography>
                                        </Box>
                                    </Box>
                                    {/* Price */}
                                    <Box sx={{ mt: 2 }}>
                                        <Typography sx={{ fontSize: 14, fontFamily: '"Nunito", sans-serif' }}>From</Typography>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography sx={{ fontWeight: 700, fontSize: "22px", color: '#1E1E1E', fontFamily: '"Nunito", sans-serif' }}>₹67,999</Typography>
                                            <Typography sx={{ marginLeft: "8px", fontSize: "14px", textDecoration: "line-through", fontFamily: '"Nunito", sans-serif' }}>₹79,999</Typography>
                                        </Box>
                                    </Box>
                                    {/* Explore More Button */}
                                    <Link href="/gone" color="inherit" underline="none">
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                color: "#1E1C4E",
                                                border: "1px solid #E6E6E6",
                                                borderRadius: "5px",
                                                padding: "10px",
                                                marginTop: "15px",
                                                "&:hover": {
                                                    color: "#FB7C00",
                                                    borderColor: "#FB7C00",
                                                },
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: "15px",
                                                    fontFamily: '"Nunito", sans-serif',
                                                    "&:hover": {
                                                        color: "#FB7C00",
                                                    },
                                                }}
                                            >
                                                EXPLORE MORE
                                            </Typography>
                                            <EastIcon
                                                sx={{
                                                    fontSize: "15px",
                                                    ml: 1,
                                                    "&:hover": {
                                                        color: "#FB7C00",
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>

                        {/* Bike 3 */}
                        <Grid item xs={12} md={4} sm={6} lg={4}>
                            <Box sx={{ borderRadius: "10px", overflow: "hidden", position: "relative" }}>
                                {/* Background Image */}
                                <Typography component="img" src={BG} sx={{ width: "100%", height: "auto" }} />
                                {/* Bike 3 Image Hover Effect */}
                                <Box sx={{ position: "absolute", top: "10%", left: "10%" }}>
                                    <Typography component="img" src={B3} sx={{
                                        width: "80%",
                                        height: "auto",
                                        transition: "transform 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.3)",
                                        }
                                    }} />
                                </Box>
                                {/* Bike Details */}
                                <Box sx={{ margin: "10px" }}>
                                    <Box sx={{ display: "flex", marginTop: "20px" }}>
                                        <Typography component="img" src={MaskLogo} sx={{ width: '40%', height: '100%' }} />
                                        <Typography sx={{ fontWeight: 600, fontSize: "21px", ml: 1, fontFamily: '"Cardo", serif', }}>G-LITE</Typography>
                                    </Box>
                                    <Typography sx={{ fontSize: "16px", color: "#1E1E1E", my: 1, fontFamily: '"Nunito", sans-serif' }}>Classic, Timeless, Secure, Upgraded</Typography>
                                    {/* Specifications */}
                                    <Box sx={{ mt: 2 }}>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography component="img" src={Right} sx={{ width: '22px', height: 'auto' }} />
                                            <Typography sx={{ fontSize: '16px', fontFamily: '"Nunito", sans-serif', ml: 1 }}>Top Speed: 25 km/h</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography component="img" src={Right} sx={{ width: '22px', height: 'auto' }} />
                                            <Typography sx={{ fontSize: '16px', fontFamily: '"Nunito", sans-serif', ml: 1 }}>Range: 60-65 km</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography component="img" src={Right} sx={{ width: '22px', height: 'auto' }} />
                                            <Typography sx={{ fontSize: '16px', fontFamily: '"Nunito", sans-serif', ml: 1 }}>Charging Time: 4 hours max</Typography>
                                        </Box>
                                    </Box>
                                    {/* Price */}
                                    <Box sx={{ mt: 2 }}>
                                        <Typography sx={{ fontSize: 14, fontFamily: '"Nunito", sans-serif' }}>From</Typography>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography sx={{ fontWeight: 700, fontSize: "22px", color: '#1E1E1E', fontFamily: '"Nunito", sans-serif' }}>₹62,999</Typography>
                                            <Typography sx={{ marginLeft: "8px", fontSize: "14px", textDecoration: "line-through", fontFamily: '"Nunito", sans-serif' }}>₹74,999</Typography>
                                        </Box>
                                    </Box>
                                    {/* Explore More Button */}
                                    <Link href="/glite" color="inherit" underline="none">
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                color: "#1E1C4E",
                                                border: "1px solid #E6E6E6",
                                                borderRadius: "5px",
                                                padding: "10px",
                                                marginTop: "15px",
                                                "&:hover": {
                                                    color: "#FB7C00",
                                                    borderColor: "#FB7C00",
                                                },
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: "15px",
                                                    fontFamily: '"Nunito", sans-serif',
                                                    "&:hover": {
                                                        color: "#FB7C00",
                                                    },
                                                }}
                                            >
                                                EXPLORE MORE
                                            </Typography>
                                            <EastIcon
                                                sx={{
                                                    fontSize: "15px",
                                                    ml: 1,
                                                    "&:hover": {
                                                        color: "#FB7C00",
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default BikeAbout;
