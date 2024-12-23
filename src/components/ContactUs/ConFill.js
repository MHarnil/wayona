import React from "react";
import { Box, TextField, Button, InputAdornment, Typography, Grid } from "@mui/material";
import { Person, Email, Phone, Chat } from "@mui/icons-material";

const ConFill = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 4, my: 10 }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={10} sm={5}>
                    <Typography variant="h4" gutterBottom sx={{ fontFamily: "Cardo", fontWeight: 600 }}>
                        Contact Us
                    </Typography>
                    <Typography variant="body1" color="#1E1E1E" gutterBottom sx={{ fontFamily: '"Nunito", sans-serif' }}>
                        Fill out the form below to get connected with us.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ maxWidth: 500, margin: "0 auto", padding: 3, border: '1px solid #66626180', borderRadius: 2, }}  >
                        <form>
                            <TextField sx={{ color: '#1E1E1E', fontSize: 12 }}
                                fullWidth
                                label="Full Name"
                                variant="outlined"
                                margin="normal"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Person />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <TextField sx={{ color: '#1E1E1E', fontSize: 12 }}
                                fullWidth
                                label="E-mail Address"
                                type="email"
                                variant="outlined"
                                margin="normal"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Email />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <TextField sx={{ color: '#1E1E1E', fontSize: 12 }}
                                fullWidth
                                label="Phone Number"
                                type="tel"
                                variant="outlined"
                                margin="normal"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Phone />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <TextField sx={{ color: '#1E1E1E', fontSize: 12 }}
                                fullWidth
                                label="Write Your Message"
                                variant="outlined"
                                margin="normal"
                                multiline
                                rows={4}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Chat />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Box sx={{ textAlign: 'center' }}>
                                <Button
                                    variant="contained"
                                    sx={{ mt: 2, py: 1, px: 5, backgroundColor: '#FB7C00' }}
                                >
                                    SUBMIT
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ConFill;
