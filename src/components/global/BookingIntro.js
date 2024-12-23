import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const BookingIntro = () => {
    return (
        <>
            <Box sx={{ my: 5 }}>
                <Container>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center', fontFamily: '"Cardo", serif', fontSize: { xs: 24, sm: 28, md: 32, lg: 36 }, fontWeight: 600, textAlign: 'center', }} >
                            Booking For
                            <Typography variant="span" sx={{ color: '#FB7C00', fontSize: { xs: 24, sm: 28, md: 32, lg: 36 }, fontWeight: 600, fontFamily: '"Cardo", serif', marginTop: { xs: '8px', sm: '0' }, ml: 1 }} >
                                Test Drive
                            </Typography>
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h6" sx={{ mb: { xs: 3, sm: 4 }, fontWeight: "500", fontSize: 22, fontFamily: "nunito", width: { xs: "100%", sm: "80%", md: "70%", lg: "60%" }, }} >
                                Book Your Exclusive At-Home Test Drive Today
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default BookingIntro
