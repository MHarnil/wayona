import { Grid, Paper, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EastIcon from '@mui/icons-material/East';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

function Find() {
    return (
        <>
            <Container>
                <Typography variant="h5" sx={{ my: 4, fontWeight: "700", fontSize: { xs: "28px", md: "40px", lg: "46px" }, fontFamily: "cardo", display: 'flex', justifyContent: 'center', textAlign: 'center' }} >
                    Find dealers around you!
                </Typography>
                <Box>
                    <Grid container spacing={2} sx={{ justifyContent: "space-between", display: "flex" }}>
                        {/* Left Side (Dealer Information and Search Bar) */}
                        <Grid item xs={12} sm={12} md={5} sx={{ backgroundColor: "#F5F5F5", borderRadius: 3, py: 2 }}>
                            <Box sx={{ position: "relative" }}>
                                <Typography>
                                    <input
                                        type="text"
                                        placeholder='Search City, State, Pin, Experience Centre...'
                                        style={{
                                            padding: "15px 175px 15px 13px",
                                            borderRadius: "7px",
                                            border: "none",
                                            outline: "none",
                                            width: '97%', fontFamily: '"Nunito", sans-serif'
                                        }}
                                    />
                                </Typography>
                                <Typography sx={{ position: "absolute", top: "11px", left: "88%" }}>
                                    <SearchIcon />
                                </Typography>
                            </Box>
                            <Typography sx={{ fontWeight: "600", fontSize: "23px", margin: "20px 0 10px 0", fontFamily: '"Nunito", sans-serif' }}>Near You (20 dealers)</Typography>
                            {/* Dealer 1 */}
                            <Paper sx={{ marginRight: "15px", padding: "10px" }}>
                                <Box>
                                    <Typography variant='h6' sx={{ color: "#000", fontFamily: '"Nunito", sans-serif' }}>Wayonaa EV</Typography>
                                    <Typography sx={{ color: "#1E1E1E", fontFamily: '"Nunito", sans-serif' }}>Surat, Gujarat</Typography>
                                    <Typography sx={{ color: "#1E1E1E", fontSize: "15px", margin: "15px 0 0 0", fontFamily: '"Nunito", sans-serif' }}>
                                        Opera Business Hub, G - 19, Lajamni Chowk, Maruti Dham Society, Mota Varachha, Surat, Gujarat 394101
                                    </Typography>
                                </Box>
                                <Box>
                                    <Box sx={{ display: "flex", margin: "15px 0 0 0" }}>
                                        <Typography><AccessTimeIcon /></Typography>
                                        <Typography mx={1} sx={{ fontFamily: '"Nunito", sans-serif' }}>Mon - Sun . 10:00 AM - 08:00 PM</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography><LocalPhoneIcon /></Typography>
                                        <Typography mx={1} sx={{ fontWeight: "600", fontFamily: '"Nunito", sans-serif' }}>+91 98791 82121</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ margin: "15px 0 0 0", display: "flex", flexWrap: "wrap" }}>
                                    {/* Book a Test Ride Box */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            backgroundColor: "#F5F5F5",
                                            alignItems: "center",
                                            padding: "8px 16px",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                            marginRight: { xs: 0, sm: "12px", md: "16px" },
                                            marginBottom: { xs: "10px", sm: 0 },
                                            transition: "background-color 0.3s",
                                            '&:hover': {
                                                backgroundColor: "#E0E0E0",
                                            }
                                        }}
                                    >
                                        <Typography sx={{ fontSize: "17px", fontFamily: '"Nunito", sans-serif' }}>Book a test ride</Typography>
                                        <EastIcon sx={{ fontSize: "16px", marginLeft: "8px" }} />
                                    </Box>

                                    {/* Get Direction Box */}
                                    <Box sx={{
                                        display: "flex",
                                        backgroundColor: "#F5F5F5",
                                        alignItems: "center",
                                        padding: "8px 16px",
                                        borderRadius: "8px",
                                        cursor: "pointer",
                                        transition: "background-color 0.3s",
                                        '&:hover': {
                                            backgroundColor: "#E0E0E0",
                                        }
                                    }}
                                    >
                                        <Typography sx={{ fontSize: "17px", fontFamily: '"Nunito", sans-serif' }}>Get Direction</Typography>
                                        <LocationSearchingIcon sx={{ fontSize: "16px", marginLeft: "8px" }} />
                                    </Box>
                                </Box>
                            </Paper>
                            {/* Dealer 2 */}
                            <Paper sx={{ margin: "20px 15px 0 0", padding: "10px" }}>
                                <Box>
                                    <Typography variant='h6' sx={{ color: "#000", fontFamily: '"Nunito", sans-serif' }}>Navakar Electric Vehicle Point</Typography>
                                    <Typography sx={{ color: "#1E1E1E", fontFamily: '"Nunito", sans-serif' }}>Halol, Gujarat</Typography>
                                    <Typography sx={{ color: "#1E1E1E", fontSize: "15px", margin: "15px 0 0 0", fontFamily: '"Nunito", sans-serif' }}>
                                        Navkar electric vehicle point, Near janvi hospital, Godhra Road, Halol-389 350
                                    </Typography>
                                </Box>
                                <Box>
                                    <Box sx={{ display: "flex", margin: "15px 0 0 0" }}>
                                        <Typography><AccessTimeIcon /></Typography>
                                        <Typography mx={1} sx={{ fontFamily: '"Nunito", sans-serif' }}>Mon - Sun . 10:00 AM - 08:00 PM</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography><LocalPhoneIcon /></Typography>
                                        <Typography mx={1} sx={{ fontWeight: "600", fontFamily: '"Nunito", sans-serif' }}>+91 90333 03270</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ margin: "15px 0 0 0", display: "flex", flexWrap: "wrap" }}>
                                    {/* Book a Test Ride Box */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            backgroundColor: "#F5F5F5",
                                            alignItems: "center",
                                            padding: "8px 16px",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                            marginRight: { xs: 0, sm: "12px", md: "16px" },
                                            marginBottom: { xs: "10px", sm: 0 },
                                            transition: "background-color 0.3s",
                                            '&:hover': {
                                                backgroundColor: "#E0E0E0",
                                            }
                                        }}
                                    >
                                        <Typography sx={{ fontSize: "17px", fontFamily: '"Nunito", sans-serif' }}>Book a test ride</Typography>
                                        <EastIcon sx={{ fontSize: "16px", marginLeft: "8px" }} />
                                    </Box>

                                    {/* Get Direction Box */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            backgroundColor: "#F5F5F5",
                                            alignItems: "center",
                                            padding: "8px 16px",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                            transition: "background-color 0.3s",
                                            '&:hover': {
                                                backgroundColor: "#E0E0E0",
                                            }
                                        }}
                                    >
                                        <Typography sx={{ fontSize: "17px", fontFamily: '"Nunito", sans-serif' }}>Get Direction</Typography>
                                        <LocationSearchingIcon sx={{ fontSize: "16px", marginLeft: "8px" }} />
                                    </Box>
                                </Box>
                            </Paper>
                            {/* Dealer 3 */}
                            <Paper sx={{ margin: "20px 15px 0 0", padding: "10px" }}>
                                <Box>
                                    <Typography variant='h6' sx={{ color: "#000", fontFamily: '"Nunito", sans-serif' }}>EcoWheel EV</Typography>
                                    <Typography sx={{ color: "#1E1E1E", fontFamily: '"Nunito", sans-serif' }}>Ahmedabad, Gujarat</Typography>
                                    <Typography sx={{ color: "#1E1E1E", fontSize: "15px", margin: "15px 0 0 0", fontFamily: '"Nunito", sans-serif' }}>
                                        EcoWheel Electric Vehicles, Opposite Science City, Sola, Ahmedabad, Gujarat 380060
                                    </Typography>
                                </Box>
                                <Box>
                                    <Box sx={{ display: "flex", margin: "15px 0 0 0" }}>
                                        <Typography><AccessTimeIcon /></Typography>
                                        <Typography mx={1} sx={{ fontFamily: '"Nunito", sans-serif' }}>Mon - Sun . 10:00 AM - 08:00 PM</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography><LocalPhoneIcon /></Typography>
                                        <Typography mx={1} sx={{ fontWeight: "600", fontFamily: '"Nunito", sans-serif' }}>+91 98988 77665</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ margin: "15px 0 0 0", display: "flex", flexWrap: "wrap" }}>
                                    {/* Book a Test Ride Box */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            backgroundColor: "#F5F5F5",
                                            alignItems: "center",
                                            padding: "8px 16px",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                            marginRight: { xs: 0, sm: "12px", md: "16px" },
                                            marginBottom: { xs: "10px", sm: 0 },
                                            transition: "background-color 0.3s",
                                            '&:hover': {
                                                backgroundColor: "#E0E0E0",
                                            }
                                        }}
                                    >
                                        <Typography sx={{ fontSize: "17px", fontFamily: '"Nunito", sans-serif' }}>Book a test ride</Typography>
                                        <EastIcon sx={{ fontSize: "16px", marginLeft: "8px" }} />
                                    </Box>

                                    {/* Get Direction Box */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            backgroundColor: "#F5F5F5",
                                            alignItems: "center",
                                            padding: "8px 16px",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                            transition: "background-color 0.3s",
                                            '&:hover': {
                                                backgroundColor: "#E0E0E0",
                                            }
                                        }}
                                    >
                                        <Typography sx={{ fontSize: "17px", fontFamily: '"Nunito", sans-serif' }}>Get Direction</Typography>
                                        <LocationSearchingIcon sx={{ fontSize: "16px", marginLeft: "8px" }} />
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                        {/* Right Side (Google Map) */}
                        <Grid item xs={12} sm={12} md={7}>
                            <Box sx={{ position: 'relative', borderRadius: 3, paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', height: '100%' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29745.751869584794!2d72.93957602990993!3d21.26279769314171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0469b3305e691%3A0x2ede4b8a039942d2!2sKamrej%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1734433050168!5m2!1sen!2sin"
                                    style={{
                                        border: 0,
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                    }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default Find;
