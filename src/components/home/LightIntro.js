import { Box, Container, Typography } from '@mui/material'
import React from 'react'

import LiftIntro from '../../assest/img/home/LiftIntro.webp'
import LiftBanner from '../../assest/img/home/Banner 1.webp'

const LightIntro = () => {
    return (
        <>
            <Box sx={{ my: 4 }}>
                <Container>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                        <Typography component="img" src={LiftIntro} sx={{ width: { xs: '70%', sm: '20%' } }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontFamily: '"Nunito", sans-serif', fontSize: '14px', textAlign: 'center', mb: 4, width: { xs: '100%', sm: '85%', md: '75%', lg: '70%' } }}>
                            Embark on a journey towards sustainable urban exploration with G-Lite EV Scooters! Compact, efficient, and emission-free, these electric scooters are revolutionizing the way we navigate our cities. Say goodbye to traffic jams and parking woes as you glide effortlessly through the streets on these sleek and stylish rides. With zero emissions and whisper-quiet operation, G-Lite EV Scooters are not just a mode of transportation but a statement of eco-consciousness. Join the electric revolution and experience the freedom of emission-free commuting with G-Lite EV Scooters today!
                        </Typography>
                    </Box>
                </Container>
                <Typography component="img" src={LiftBanner} sx={{ width: '100%' }} />
            </Box>
        </>
    )
}

export default LightIntro
