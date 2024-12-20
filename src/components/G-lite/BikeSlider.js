import React from 'react';
import { Box, Typography } from '@mui/material';

import I1 from '../../assest/img/G-lite/slider/Frame519.webp';
import I2 from '../../assest/img/G-lite/slider/Frame520.webp';
import I3 from '../../assest/img/G-lite/slider/Frame521.webp';
import I4 from '../../assest/img/G-lite/slider/Frame522.webp';
import I5 from '../../assest/img/G-lite/slider/Frame523.webp';

const cardData = [
    { id: 1, image: I1 },
    { id: 2, image: I2 },
    { id: 3, image: I3 },
    { id: 4, image: I4 },
    { id: 5, image: I5 },
];

const BikeSlider = () => {
    return (
        <>
            <Box>
                <Typography
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontFamily: '"Cardo", serif',
                        fontSize: { xs: 20, sm: 22, md: 26, lg: 28 },
                        fontWeight: 600,
                        textAlign: 'center', mt:5,mb:2
                    }}
                >
                    UNFORGETTABLE RIDE
                    <Typography
                        variant="span"
                        sx={{
                            color: '#FB7C00',
                            fontSize: { xs: 20, sm: 22, md: 26, lg: 28 },
                            fontWeight: 600,
                            fontFamily: '"Cardo", serif',
                            marginTop: { xs: '8px', sm: '0' }, ml:2
                        }}
                    >
                        BEYOND IMAGINATION!
                    </Typography>
                </Typography>
                <Box
                    sx={{
                        // height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            height: 380,
                            display: 'flex',
                            flexWrap: 'nowrap',
                            justifyContent: 'start',
                            position: 'relative',
                        }}
                    >
                        {cardData.map((card) => (
                            <Box
                                key={card.id}
                                sx={{
                                    width: 130,
                                    height: '100%',
                                    transition: 'width 0.6s cubic-bezier(.28,-0.03,0,.99)',
                                    borderRadius: '6px',
                                    margin: '0 4px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    backgroundImage: `url(${card.image})`,
                                    backgroundSize: 'cover',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&:hover': {
                                        width: 290,
                                        backgroundPosition: 'start',
                                        zIndex: 1,
                                        backgroundRepeat: 'no-repeat'
                                    },
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default BikeSlider;
