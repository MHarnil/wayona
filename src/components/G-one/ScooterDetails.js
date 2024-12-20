import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Stack, IconButton, Container } from "@mui/material";

import BlackScooterFront from "../../assest/img/G-one/BlackMain.webp";
import BlackScooterSide from "../../assest/img/G-one/BlackSide.webp";

import BlueScooterFront from "../../assest/img/G-one/BlueMain.webp";
import BlueScooterSide from "../../assest/img/G-one/BlueSide.webp";

import WhiteScooterFront from "../../assest/img/G-one/BlackMain.webp";
import WhiteScooterSide from "../../assest/img/G-one/BlackSide.webp";

import OrangeScooterFront from "../../assest/img/G-one/OrangeMain .webp";
import OrangeScooterSide from "../../assest/img/G-one/OrangeSide.webp";

const colorOptions = [
  { color: "#FB7C00", name: "Orange" },
  { color: "#000000", name: "Black" },
  { color: "#FFFFFF", name: "White" },
  { color: "#0133AA", name: "Blue" },
];

const ScooterDetails = () => {
  const [selectedColor, setSelectedColor] = useState("Black");

  const getScooterImages = () => {
    switch (selectedColor) {
      case "Orange":
        return { front: OrangeScooterFront, side: OrangeScooterSide };
      case "Black":
        return { front: BlackScooterFront, side: BlackScooterSide };
      case "White":
        return { front: WhiteScooterFront, side: WhiteScooterSide };
      case "Blue":
        return { front: BlueScooterFront, side: BlueScooterSide };
      default:
        return { front: BlackScooterFront, side: BlackScooterSide };
    }
  };

  const getSelectedColorHex = () => {
    const colorObj = colorOptions.find((color) => color.name === selectedColor);
    return colorObj ? colorObj.color : "#000000";
  };

  const [maxSpeed, setMaxSpeed] = useState(0);
  const [maxRange, setMaxRange] = useState(0);
  const [motorPower, setMotorPower] = useState(0);

  
  const countdown = (target, setter) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < target) {
        count += 1;
        setter(count);
      } else {
        clearInterval(interval); 
      }
    }, 50); 
  };

  useEffect(() => {
    countdown(75, setMaxSpeed); 
    countdown(75, setMaxRange); 
    countdown(1000, setMotorPower); 
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          py: 4,
          px: 2,
        }}
      >

        {/* Header Section */}
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                color: selectedColor === "White" ? "#000000" : getSelectedColorHex(),
                textTransform: "capitalize",
                fontFamily: "cardo",
              }}
            >
              {selectedColor}
            </Typography>

          </Grid>
          <Grid item xs={12} sm={6} textAlign="start">
            <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "cardo" }}>
              G-ONE
            </Typography>
          </Grid>
        </Grid>

        {/* Main Content Section */}
        <Grid container spacing={4} sx={{ mt: 0 }}>
          {/* Specifications */}
          <Grid item xs={12} sm={12} md={3}>
            <Box
              sx={{
                p: 3,
                backgroundColor: "#F5F5F5",
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Stack spacing={4}>
              {["MAX SPEED", "MAX RANGE", "MOTOR POWER"].map((label, index) => (
                  <Box key={index}>
                    <Typography
                      variant="body2"
                      color="#1E1E1E"
                      sx={{ fontFamily: '"Nunito", sans-serif' }}
                    >
                      {label}
                    </Typography>
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      sx={{ fontFamily: '"Nunito", sans-serif' }}
                    >
                      0 {label === "MOTOR POWER" ? "W" : "Km"}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Scooter Images */}
          <Grid item xs={12} sm={12} md={7}>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection={{ xs: "column", sm: "row" }}
              gap={2}
            >
              <img
                src={getScooterImages().front}
                alt="Front View"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  objectFit: "contain",
                  margin: "0 auto",
                }}
              />
              <img
                src={getScooterImages().side}
                alt="Side View"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  objectFit: "contain",
                  margin: "0 auto",
                }}
              />
            </Box>
          </Grid>

          {/* Color Selector */}
          <Grid item xs={12} sm={12} md={2}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" }, 
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                backgroundColor: "#F5F5F5",
                borderRadius: 50,
                py: 3,
                mx: { xs: 0, md: 5 },
              }}
            >
              {colorOptions.map((color) => (
                <IconButton
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    backgroundColor: color.color,
                    border: selectedColor === color.name ? "2px solid black" : "none",
                    transition: "all 0.3s ease", 
                  }}
                />
              ))}
            </Box>
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
};

export default ScooterDetails;
