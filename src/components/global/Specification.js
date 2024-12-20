import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography, Container, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function Specification() {
    const data = [
        {
            question: "Speed & Range",
            answer: "Wayonaa EV stands out for its commitment to innovation, sustainability, and user-centric design. Our electric vehicles boast cutting-edge technology, exceptional performance, and a focus on environmental responsibility."
        },
        {
            question: "Tyre, Brake & Suspension",
            answer: "Yes, our vehicles are designed to cater to various travel needs, including long-distance journeys. With advanced battery technology and efficient power management systems, Wayonaa EV ensures extended range capabilities, allowing for comfortable travel over extended distances."
        },
        {
            question: "Battery & Charging",
            answer: "Wayonaa EV is dedicated to reducing carbon emissions and minimizing environmental impact. By utilizing electric powertrains, we eliminate tailpipe emissions associated with traditional combustion engines, thus promoting cleaner air and a healthier planet."
        },
        {
            question: "Motor",
            answer: "Absolutely! Wayonaa EV provides convenient charging solutions for home charging. You can use standard household outlets or opt for dedicated charging stations for faster charging times, ensuring your vehicle is ready to go whenever you are."
        },
        {
            question: "Load Capacity & Boot Space",
            answer: "We stand behind the quality and reliability of our vehicles with comprehensive warranty coverage. Each Wayonaa EV comes with a standard warranty package, covering components and systems to provide you with peace of mind and confidence in your purchase."
        },
        {
            question: "Light",
            answer: "Our dedicated service network is committed to providing exceptional support for all your maintenance and service requirements. Whether it's routine inspections, software updates, or repairs, our skilled technicians are here to ensure your Wayonaa EV remains in optimal condition."
        }
    ];

    return (
        <Box sx={{ py: 4 }}>
            <Container maxWidth="md">
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        color: '#1E1E1E',
                        my: 3,
                        fontFamily: '"Cardo", serif',
                        fontWeight: '700',
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: { xs: '1.5rem', sm: '2.5rem' },
                        textAlign: { xs: 'center', sm: 'left' }
                    }}
                >
                    Specification
                </Typography>
                <Grid container spacing={2}>
                    {data.map((item, index) => (
                        <Grid item xs={12} key={index}>
                            <Accordion sx={{ boxShadow: 1, borderRadius: 1 }}>
                                <AccordionSummary
                                    expandIcon={<AddIcon />}
                                    aria-controls={`panel${index + 1}-content`}
                                    id={`panel${index + 1}-header`}
                                    sx={{
                                        backgroundColor:'#E6E6E6',
                                        borderBottom: '1px solidrgb(1, 1, 1)',
                                        '&:hover': { color: '#FB7C00' }
                                    }}
                                >
                                    <Typography variant="body1" sx={{ fontWeight: 600, fontSize: { xs: '14px', sm: '16px' },fontFamily: '"Nunito", sans-serif' }}>
                                        {item.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ backgroundColor: '#fafafa' }}>
                                    <Typography variant="body2" sx={{ color: '#1E1E1E', fontSize: { xs: '14px', sm: '16px' },fontFamily: '"Nunito", sans-serif' }}>
                                        {item.answer}
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
