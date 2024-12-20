import React from "react";
import Slider from "react-slick";
import { Box, Container, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your video assets
import video1 from '../../assest/video/Video1.mp4';
import video2 from '../../assest/video/Video2.mp4';
import video3 from '../../assest/video/Video3.mp4';
import video4 from '../../assest/video/Video1.mp4';
import video5 from '../../assest/video/Video2.mp4';
import video6 from '../../assest/video/Video3.mp4';


const Testimonials = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "10%",
          centerMode: false,
        },
      },
    ],
  };

  const videos = [video1, video2, video3, video4, video5, video6];

  return (
    <Box>
      <Container>
        <Box sx={{ width: "100%", textAlign: "center", mt: { xs: 3, sm: 5 } }}>
          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "700",
              fontSize: { xs: "28px", md: "40px", lg: "46px" },
              fontFamily: "cardo",
            }}
          >
            Testimonials
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {/* Subtitle */}
            <Typography
              variant="h6"
              sx={{
                mb: { xs: 3, sm: 4 },
                fontWeight: "500",
                fontSize: { xs: "13px", md: "20px", lg: "19px" },
                fontFamily: "nunito",
                width: { xs: "100%", sm: "80%", md: "70%", lg: "60%" },
              }}
            >
              Wayonaa Ev Fastest-Growing Company Shaping the Future of Electric
              Vehicles Here's Customers Feedback
            </Typography>
          </Box>

          {/* Video Slider */}
          <Box
            className="slider-container"
            sx={{ mx: "auto", maxWidth: { xs: "100%", sm: "90%" } }}
          >
            <Slider {...settings}>
              {videos.map((video, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    borderRadius: "7px",
                    overflow: "hidden",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    transform: "scale(0.85)",
                    transition: "transform 0.5s ease",
                  }}
                  className="video-slide"
                >
                  <Box
                    component="video"
                    src={video}
                    muted
                    loop
                    autoPlay
                    playsInline
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>

          <style>
            {`
              .slick-slide {
                transition: transform 0.5s ease, opacity 0.5s ease;
              }

              .slick-center .video-slide {
                transform: scale(1.1); /* Enlarged center slide */
                opacity: 1;
              }

              .slick-slide:not(.slick-center) {
                opacity: 0.6; /* Dim non-active slides */
              }

              video::-webkit-media-controls {
                display: none !important; /* Hide video controls */
              }

              video {
                pointer-events: none; /* Disable interaction with the video */
              }
            `}
          </style>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials