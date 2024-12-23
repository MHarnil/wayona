import React, { useState } from 'react';
import { Box, Typography, MenuItem, FormControl, Select, Button, Grid, Container, TextField, InputAdornment } from '@mui/material';
import Bike from '../../assest/img/GroupBike.webp';
import { Email, Person, Phone } from '@mui/icons-material';

const Become = () => {
    const [areaAvailable, setAreaAvailable] = useState('');
    const [investment, setInvestment] = useState('');
    const [step, setStep] = useState(1);

    const handleAreaChange = (event) => {
        setAreaAvailable(event.target.value);
    };

    const handleInvestmentChange = (event) => {
        setInvestment(event.target.value);
    };

    const handleNextClick = () => {
        setStep(2);
    };

    return (
        <Container>
            <Box sx={{ flexGrow: 1, p: 2 }}>
                <Typography variant="h4" textAlign="center" gutterBottom sx={{ fontWeight: 600, fontFamily: "Cardo", my: 4 }}>
                    Become a Dealer
                </Typography>

                {/* Step 1: Personal Info Form */}
                {step === 1 && (
                    <Grid container spacing={2} sx={{ display: { lg: "flex", md: "flex", sm: "flex", xs: "block" } }}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, mx: 'auto', }} >
                                <form>
                                    <TextField
                                        fullWidth
                                        label="Full Name"
                                        variant="outlined"
                                        margin="normal"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Person />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                    <TextField
                                        fullWidth
                                        label="E-mail Address"
                                        type="email"
                                        variant="outlined"
                                        margin="normal"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Email />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        type="tel"
                                        variant="outlined"
                                        margin="normal"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Phone />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                    <TextField
                                        fullWidth
                                        label="Pincode"
                                        variant="outlined"
                                        margin="normal"
                                    />

                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{ py: 1.5, backgroundColor: '#FB7C00', mt: 2, fontFamily: '"Nunito", sans-serif' }}
                                        onClick={handleNextClick}
                                    >
                                        NEXT
                                    </Button>
                                </form>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', }} >
                                <Box
                                    component="img"
                                    src={Bike}
                                    alt="Scooters"
                                    sx={{
                                        width: '100%',
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                )}

                {/* Step 2: Area and Investment Selection */}
                {step === 2 && (
                    <Grid container spacing={2} sx={{ display: { lg: "flex", md: "flex", sm: "flex", xs: "block" } }}>
                        <Grid item xs={12} md={6}>
                            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, mx: 'auto', }}  >
                                <FormControl fullWidth>
                                    <Select
                                        value={areaAvailable}
                                        onChange={handleAreaChange}
                                        displayEmpty sx={{ fontFamily: '"Nunito", sans-serif' }}
                                    >
                                        <MenuItem value="">
                                            Select Area
                                        </MenuItem>
                                        <MenuItem value="Urban">Urban</MenuItem>
                                        <MenuItem value="Rural">Rural</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl fullWidth>
                                    <Select
                                        value={investment}
                                        onChange={handleInvestmentChange}
                                        displayEmpty sx={{ fontFamily: '"Nunito", sans-serif' }}
                                    >
                                        <MenuItem value="">
                                            Select Investment
                                        </MenuItem>
                                        <MenuItem value="Low">Low</MenuItem>
                                        <MenuItem value="Medium">Medium</MenuItem>
                                        <MenuItem value="High">High</MenuItem>
                                    </Select>
                                </FormControl>

                                <Button
                                    variant="contained"
                                    sx={{ py: 1.5, backgroundColor: '#FB7C00', fontFamily: '"Nunito", sans-serif' }}
                                >
                                    SUBMIT
                                </Button>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', }}  >
                                <Box
                                    component="img"
                                    src={Bike}
                                    alt="Scooters"
                                    sx={{
                                        width: '100%',
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                )}
            </Box>
        </Container>
    );
};

export default Become;
