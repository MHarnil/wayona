import React from "react";
import { Box, Grid, Button, Typography, Checkbox, FormControlLabel, Container } from "@mui/material";

import B1 from '../../assest/img/G-lite/BookBike.webp'
import EV from '../../assest/img/G-lite/Ev.webp'

const TestDrivePage = () => {
  return (
    <>
      <Container>
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center', fontFamily: '"Cardo", serif', fontSize: { xs: 24, sm: 28, md: 32, lg: 36 }, fontWeight: 600, textAlign: 'center', }}  >
            Booking For
            <Typography variant="span" sx={{ color: '#FB7C00', fontSize: { xs: 24, sm: 28, md: 32, lg: 36 }, fontWeight: 600, fontFamily: '"Cardo", serif', marginTop: { xs: '8px', sm: '0' }, ml: 1 }} >
              Test Drive
            </Typography>
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "500", fontSize: 22, fontFamily: "nunito", width: { xs: "100%", sm: "80%", md: "70%", lg: "60%" }, }}>
              Book Your Exclusive At-Home Test Drive Today
            </Typography>
          </Box>
        </Box>
        <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif", }} >
          {/* Main Content */}
          <Grid container spacing={3} alignItems="center">
            {/* Left Section - Scooter Image */}
            <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
              <Typography component="img" src={B1} sx={{ width: "100%", height: "auto" }} />
            </Grid>

            {/* Right Section - Form */}
            <Grid item xs={12} md={7}>
              <form>
                {/* Row 1 */}
                <Grid container spacing={2} mb={2}>
                  <Grid item xs={12} sm={6}>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: '#F5F5F5',
                        border: 'none',
                        fontFamily: '"Nunito", sans-serif',
                        fontSize: "14px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <input
                      type="email"
                      placeholder="Enter your e-mail"
                      style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: '#F5F5F5',
                        border: 'none',
                        fontFamily: '"Nunito", sans-serif',
                        fontSize: "14px",
                      }}
                    />
                  </Grid>
                </Grid>

                {/* Row 2 */}
                <Grid container spacing={2} mb={2}>
                  <Grid item xs={12} sm={6}>
                    <div style={{ position: "relative" }}>
                      <span
                        style={{
                          position: "absolute",
                          top: "50%",
                          transform: "translateY(-50%)",
                          left: "10px",
                          fontSize: "14px",
                          color: "#888",
                        }}
                      >
                        +91
                      </span>
                      <input
                        type="tel"
                        placeholder="Enter your mobile number"
                        style={{
                          width: "100%",
                          padding: "10px 10px 10px 40px",
                          backgroundColor: '#F5F5F5',
                          border: 'none',
                          fontFamily: '"Nunito", sans-serif',
                          fontSize: "14px",
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <input
                      type="date"
                      placeholder="Select a Date"
                      style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: '#F5F5F5',
                        border: 'none',
                        fontFamily: '"Nunito", sans-serif',
                        fontSize: "14px",
                      }}
                    />
                  </Grid>
                </Grid>

                {/* Row 3 */}
                <Grid container spacing={2} mb={2}>
                  <Grid item xs={12} sm={6}>
                    <select
                      style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: '#F5F5F5',
                        border: 'none',
                        fontFamily: '"Nunito", sans-serif',
                        fontSize: "14px",
                      }}
                    >
                      <option value="">Choose a Model</option>
                      <option value="Model G">Model G</option>
                      <option value="Model S">Model S</option>
                      <option value="Model X">Model X</option>
                    </select>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <input
                        type="text"
                        placeholder="Address"
                        style={{
                          width: "100%",
                          padding: "10px",
                          backgroundColor: '#F5F5F5',
                          border: 'none',
                          fontFamily: '"Nunito", sans-serif',
                          fontSize: "14px", marginRight: '14px'
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Pin Code"
                        style={{
                          width: "100%",
                          padding: "10px",
                          backgroundColor: '#F5F5F5',
                          border: 'none',
                          fontFamily: '"Nunito", sans-serif',
                          fontSize: "14px",
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>

                {/* Checkbox */}
                <Box>
                  {/* Terms and Conditions */}
                  <FormControlLabel
                    control={<Checkbox />}
                    label="I agree to terms & conditions"
                    sx={{
                      fontSize: "14px",
                      display: "block",
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  />

                  {/* Submit Button */}
                  <Box sx={{ display: "flex", justifyContent: "center", mt: 3, flexDirection: "column", alignItems: "center", }} >
                    <Button variant="contained" color="warning" sx={{ py: 1, px: { xs: 4, sm: 6 }, fontSize: { xs: "14px", sm: "16px" }, textTransform: "none", fontFamily: '"Nunito", sans-serif', width: { xs: "100%", sm: "auto" }, maxWidth: "300px", }} >
                      BOOK YOUR TEST DRIVE
                    </Button>
                  </Box>
                </Box>

              </form>
              {/* Footer Road Design */}
              <Box textAlign="center">
                <img
                  src={EV}
                  alt="Road"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default TestDrivePage;
