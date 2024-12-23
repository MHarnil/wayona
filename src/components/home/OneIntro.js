import { Box, Container, Typography } from '@mui/material'
import React from 'react'

import OneIntr from '../../assest/img/home/OneIntro.webp'
import OneBanner from '../../assest/img/home/Banner 5.webp'

const OneIntro = () => {
    return (
        <>
            <Box>
                <Container>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                        <Typography component="img" src={OneIntr} sx={{ width: { xs: '70%', sm: '20%' } }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontFamily: '"Nunito", sans-serif', fontSize: '14px', textAlign: 'center', mb: 4, width: { xs: '100%', sm: '85%', md: '75%', lg: '70%' } }}>
                            Discover the epitome of electric mobility with G-One EV Scooters! From sleek design to eco-friendly performance, these scooters redefine urban commuting. Join us as we delve into the cutting-edge features, unparalleled efficiency, and unmatched convenience of G-One EV Scooters. Embrace the future of transportation and elevate your ride today!
                        </Typography>
                    </Box>
                </Container>
                <Typography component="img" src={OneBanner} sx={{ width: '100%' }} />
            </Box>
        </>
    )
}

export default OneIntro
