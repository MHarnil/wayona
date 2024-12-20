import React from "react";
import { Box, IconButton } from "@mui/material";
import Slider from "react-slick";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import Slider1 from '../../assest/img/home/SliderBanner.webp';
import Slider2 from '../../assest/img/home/SliderBanner.webp';
import Slider3 from '../../assest/img/home/SliderBanner.webp';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CustomPrevArrow = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: "absolute",
            top: "50%",
            left: { xs: "10px", sm: "20px", lg: "50px" },
            transform: "translateY(-50%)",
            zIndex: 10,
            fontSize: { xl: 24, lg: 22, md: 18, sm: 16, xs: 14 },
            color: "white",
            border: "2px solid white",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
        }}
    >
        <KeyboardArrowLeftIcon />
    </IconButton>
);


const CustomNextArrow = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: "absolute",
            top: "50%",
            right: { xs: "10px", sm: "20px", lg: "50px" },
            transform: "translateY(-50%)",
            zIndex: 10,
            fontSize: { xl: 24, lg: 22, md: 18, sm: 16, xs: 14 },
            color: "white",
            border: "2px solid white",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
        }}
    >
        <ChevronRightIcon />
    </IconButton>
);

const CarouselComponent = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            }
        ]
    };

    const images = [Slider1, Slider2, Slider3];

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "100%",
                margin: "auto",
                overflow: "hidden",
                position: "relative",
            }}
        >
            <Slider {...sliderSettings}>
                {images.map((image, index) => (
                    <Box key={index} sx={{ position: "relative" }}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            style={{
                                width: "100%",
                                height: "auto",
                                maxHeight: "600px",
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default CarouselComponent;
