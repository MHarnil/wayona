import React from 'react';
import Slider from 'react-slick';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';

import I1 from '../../assest/img/G-rozar/slider/Frame521.webp';
import I2 from '../../assest/img/G-rozar/slider/Frame520.webp';

const cardData = [
    { id: 1, image: I1 },
    { id: 2, image: I2 },
];

const BikeSlider = () => {
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('md'));

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };


    return (
        <Box>
            <Typography sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center', fontFamily: '"Cardo", serif', fontSize: { xs: 20, sm: 22, md: 26, lg: 28 }, fontWeight: 600, textAlign: 'center', mt: 5, mb: 2 }} >
                UNFORGETTABLE RIDE
                <Typography variant="span" sx={{ color: '#FB7C00', fontSize: { xs: 20, sm: 22, md: 26, lg: 28 }, fontWeight: 600, fontFamily: '"Cardo", serif', marginTop: { xs: '8px', sm: '0' }, ml: 2 }} >
                    BEYOND IMAGINATION!
                </Typography>
            </Typography>

            {/* Show Carousel on Small Screens */}
            {isSmDown && (
                <Container>
                    <Slider {...settings}>
                        {cardData.map((card) => (
                            <Box
                                key={card.id}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 400,
                                    backgroundImage: `url(${card.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '2px',
                                    px: 2,
                                }}
                            />
                        ))}
                    </Slider>
                </Container>
            )}

            {/* Show Static Slider on Larger Screens */}
            {!isSmDown && (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                    <Box sx={{ height: 380, display: 'flex', flexWrap: 'nowrap', justifyContent: 'start', position: 'relative', }} >
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
            )}
        </Box>
    );
};

export default BikeSlider;
