import { Container, Typography } from '@mui/material'
import React, { useState } from "react";
import { Box, Slider, Select, MenuItem, Grid } from "@mui/material";

const Saveing = () => {

    const [dailyKms, setDailyKms] = useState(60);
    const [mileage, setMileage] = useState(50);

    const monthlySavings = ((dailyKms / mileage) * 85 * 30).toFixed(0);
    const annualSavings = (monthlySavings * 12).toFixed(0);
    return (
        <>
            <Box sx={{
                backgroundColor: "#f9f9f9",
                py: 3
            }}>
                <Container>
                    <Typography sx={{
                        fontFamily: '"Nunito", sans-serif',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', sm: 'row' },
                        textAlign: { xs: 'center', sm: 'left' },
                        fontSize: { xs: '18px', sm: '22px', md: '28px' },
                        fontWeight: 800,
                        mt: 2,
                    }}>
                        <Typography variant='span' sx={{ color: '#FB7C00', mx: 1, }}>Savings meter</Typography>compared to<Typography variant='span' sx={{ color: '#FB7C00', mx: 1, }}>petrol</Typography> @100/litre
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            my: 5
                        }}
                    >
                        <Grid
                            container
                            spacing={2}
                        >
                            {/* Daily Travel Section */}
                            <Grid item xs={12} sm={6} md={4}>
                                <Box sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: 4, p: 2, borderLeft: '6px solid #FB7C00', pl: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="body1" fontWeight="bold" sx={{ fontFamily: '"Nunito", sans-serif', }}>
                                            Daily Travel Kms
                                        </Typography>
                                        <Select
                                            value={dailyKms}
                                            onChange={(e) => setDailyKms(e.target.value)}
                                            size="small"
                                            sx={{ width: 70 }}
                                        >
                                            {[...Array(101).keys()].map((km) => (
                                                <MenuItem key={km} value={km}>
                                                    {km}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Box>
                                    <Box display="flex" alignItems="center" justifyContent="space-between">
                                        <Typography sx={{ fontFamily: '"Nunito", sans-serif' }}>0km</Typography>
                                        <Slider
                                            value={dailyKms}
                                            onChange={(e, newValue) => setDailyKms(newValue)}
                                            min={0}
                                            max={100}
                                            sx={{ color: "#FF7A00", mx: 1 }}
                                        />
                                        <Typography sx={{ fontFamily: '"Nunito", sans-serif' }}>100km</Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Mileage Section */}
                            <Grid item xs={12} sm={6} md={4}>
                                <Box sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: 4, p: 2, borderLeft: '6px solid #FB7C00', pl: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="body1" fontWeight="bold" sx={{ fontFamily: '"Nunito", sans-serif', }}>
                                            Mileage in kms
                                        </Typography>
                                        <Select
                                            value={mileage}
                                            onChange={(e) => setMileage(e.target.value)}
                                            size="small"
                                            sx={{ width: 70 }}
                                        >
                                            {[...Array(101).keys()].map((km) => (
                                                <MenuItem key={km} value={km}>
                                                    {km}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Box>
                                    <Box display="flex" alignItems="center" justifyContent="space-between">
                                        <Typography sx={{ fontFamily: '"Nunito", sans-serif' }}>0km</Typography>
                                        <Slider
                                            value={mileage}
                                            onChange={(e, newValue) => setMileage(newValue)}
                                            min={0}
                                            max={100}
                                            sx={{ color: "#FF7A00", mx: 1 }}
                                        />
                                        <Typography sx={{ fontFamily: '"Nunito", sans-serif' }}>100km</Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Savings Section */}
                            <Grid item xs={12} sm={6} md={4}>
                                <Box
                                    sx={{
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                        borderRadius: 4,
                                        p: 3,
                                        textAlign: "center",
                                        display: 'flex',
                                        justifyContent: 'space-evenly', borderLeft: '6px solid #FB7C00', pl: 2
                                    }}
                                >
                                    <Box>
                                        <Typography variant="body1" fontWeight="bold" sx={{ fontFamily: '"Nunito", sans-serif' }}>
                                            Monthly Savings
                                        </Typography>
                                        <Typography variant="h5" color="primary" fontWeight="bold">
                                            ₹{monthlySavings}
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="body1" fontWeight="bold" sx={{ fontFamily: '"Nunito", sans-serif' }}>
                                            Annual Savings
                                        </Typography>
                                        <Typography variant="h5" color="primary" fontWeight="bold">
                                            ₹{annualSavings}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Saveing
