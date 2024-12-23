import { Box, Container, Typography } from '@mui/material'
import React from 'react'

import RazorIntr from '../../assest/img/home/OneIntro.webp'
import RazorBanner from '../../assest/img/home/Banner 7.webp'

const RazorIntro = () => {
    return (
        <>
            <Box>
                <Container>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                        <Typography component="img" src={RazorIntr} sx={{ width: { xs: '70%', sm: '20%' } }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontFamily: '"Nunito", sans-serif', fontSize: '14px', textAlign: 'center', mb: 4, width: { xs: '100%', sm: '85%', md: '75%', lg: '70%' } }}>
                            Discover the next evolution in urban transportation with G-Razor EV Scooters! With sleek design and eco-friendly electric power, G-Razor scooters offer a thrilling ride while reducing your carbon footprint. Join us as we delve into the features, performance, and benefits of these cutting-edge electric scooters. Whether you're commuting to work, zipping around town, or simply enjoying the open road, G-Razor EV Scooters are your ticket to effortless, emission-free mobility. Watch now and revolutionize your daily commute!
                        </Typography>
                    </Box>
                </Container>
                <Typography component="img" src={RazorBanner} sx={{ width: '100%' }} />
            </Box>
        </>
    )
}

export default RazorIntro
