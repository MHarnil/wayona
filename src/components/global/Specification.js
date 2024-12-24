import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Box, Typography, Container, Grid, TableRow, TableCell, Table, TableBody } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// Array of specification data
const specifications = [
    {
        title: "Speed & Range",
        details: [
            { label: "Range", value: "70-75 kms (Single charge on road range)" },
            { label: "Top Speed", value: "25 km/h" },
            {
                label: "Speed Limit Switch",
                value: "(1) Eco Mode (2) Normal Mode (3) Sport Mode (4) Reverse Mode",
            },
            { label: "Speedometer", value: "Smart Digital Meter" },
        ],
    },
    {
        title: "Tyre, Brake & Suspension",
        details: [
            { label: "Front Brake", value: "Disc Brake 220mm" },
            { label: "Rear Brake", value: "Drum Brake" },
            { label: "Suspension", value: "Front Hydraulic Telescopic, Rear Twin-Shocker" },
            { label: "Tyre", value: "90/100 - 10, 3.0 - 10 (Tubeless)" },
        ],
    },
    {
        title: "Battery & Charging",
        details: [
            { label: "Battery", value: "48V 30Ah LFP Safe Lithium-ion Battery(3 Years Warranty)" },
            { label: "Charger", value: "Lithium 6A with Auto Cut-off" },
            { label: "Mobile Charging", value: "USB Charging Port Available" },
        ],
    },
    {
        title: "Motor",
        details: [
            { label: "Motor Type", value: "250W BLDC Hub Motor(2 Years Warranty)" },
        ],
    },
    {
        title: "Load Capacity & Boot Space",
        details: [
            { label: "Load Capacity", value: "160 kgs" },
            { label: "Boot Space", value: "17 Ltrs" },
        ],
    },
    {
        title: "Light",
        details: [
            { label: "Headlight", value: "LED Headlight with DRL" },
        ],
    },
];

export default function Specification() {
    return (
        <Box sx={{ py: 4 }}>
            <Container maxWidth="md">
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        color: "#1E1E1E",
                        my: 3,
                        fontFamily: '"Cardo", serif',
                        fontWeight: "700",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: { xs: "1.5rem", sm: "2.5rem" },
                        textAlign: { xs: "center", sm: "left" },
                    }}
                >
                    Specification
                </Typography>
                <Grid container spacing={2}>
                    {specifications.map((spec, index) => (
                        <Grid item xs={12} key={index}>
                            <Accordion sx={{ boxShadow: 1, borderRadius: 1 }}>
                                <AccordionSummary
                                    expandIcon={<AddIcon />}
                                    sx={{
                                        backgroundColor: "#E6E6E6",
                                        borderBottom: "1px solid rgb(1, 1, 1)",
                                        "&:hover": { color: "#FB7C00" },
                                    }}
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: { xs: "14px", sm: "16px" },
                                            fontFamily: '"Nunito", sans-serif',
                                        }}
                                    >
                                        {spec.title}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ backgroundColor: "#fafafa" }}>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#1E1E1E",
                                            fontSize: { xs: "14px", sm: "16px" },
                                            fontFamily: '"Nunito", sans-serif',
                                        }}
                                    >
                                        <Table>
                                            <TableBody>
                                                {spec.details.map((detail, idx) => (
                                                    <TableRow key={idx}>
                                                        <TableCell
                                                            sx={{
                                                                fontFamily: '"Nunito", sans-serif',
                                                                fontWeight: "600",
                                                                fontSize: 16,
                                                            }}
                                                        >
                                                            {detail.label}
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{
                                                                fontFamily: '"Nunito", sans-serif',
                                                                fontWeight: "600",
                                                                fontSize: 16,
                                                            }}
                                                        >
                                                            {detail.value}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
