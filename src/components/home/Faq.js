import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography, Container, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function Faq() {
    const data = [
        {
            question: "What makes Wayonaa EV stand out in the electric vehicle market?",
            answer: "Wayonaa EV stands out for its commitment to innovation, sustainability, and user-centric design. Our electric vehicles boast cutting-edge technology, exceptional performance, and a focus on environmental responsibility."
        },
        {
            question: "Are Wayonaa EV vehicles suitable for long-distance travel?",
            answer: "Yes, our vehicles are designed to cater to various travel needs, including long-distance journeys. With advanced battery technology and efficient power management systems, Wayonaa EV ensures extended range capabilities, allowing for comfortable travel over extended distances."
        },
        {
            question: "How does Wayonaa EV contribute to environmental sustainability?",
            answer: "Wayonaa EV is dedicated to reducing carbon emissions and minimizing environmental impact. By utilizing electric powertrains, we eliminate tailpipe emissions associated with traditional combustion engines, thus promoting cleaner air and a healthier planet."
        },
        {
            question: "Can I charge my Wayonaa EV at home?",
            answer: "Absolutely! Wayonaa EV provides convenient charging solutions for home charging. You can use standard household outlets or opt for dedicated charging stations for faster charging times, ensuring your vehicle is ready to go whenever you are."
        },
        {
            question: "What warranty coverage does Wayonaa EV offer for its vehicles?",
            answer: "We stand behind the quality and reliability of our vehicles with comprehensive warranty coverage. Each Wayonaa EV comes with a standard warranty package, covering components and systems to provide you with peace of mind and confidence in your purchase."
        },
        {
            question: "How does Wayonaa EV support its customers with maintenance and service needs?",
            answer: "Our dedicated service network is committed to providing exceptional support for all your maintenance and service requirements. Whether it's routine inspections, software updates, or repairs, our skilled technicians are here to ensure your Wayonaa EV remains in optimal condition."
        }
    ];

    return (
        <Box sx={{ backgroundColor: '#f9f9f9', py: 4 }}>
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
                    Frequently Asked Questions
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
                                        backgroundColor: '#ffffff',
                                        borderBottom: '1px solid #e0e0e0',
                                        '&:hover': { color: '#FB7C00' }
                                    }}
                                >
                                    <Typography variant="body1" sx={{ fontWeight: 500, fontSize: { xs: '14px', sm: '16px' } }}>
                                        {item.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ backgroundColor: '#fafafa' }}>
                                    <Typography variant="body2" sx={{ color: '#1E1E1E', fontSize: { xs: '14px', sm: '16px' } }}>
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
