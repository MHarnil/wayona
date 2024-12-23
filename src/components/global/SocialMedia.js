import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Facebook, Instagram, YouTube, Twitter } from '@mui/icons-material';

// Social Media Button Component
const SocialMediaButton = ({ icon: Icon, color, text }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box component="button" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: isHovered ? '150px' : '45px', height: '45px', border: 'none', borderRadius: '50px', cursor: 'pointer', position: 'relative', overflow: 'hidden', transition: 'width 0.3s, border-radius 0.3s', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.199)', backgroundColor: color, }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: isHovered ? '30%' : '100%', transition: 'width 0.3s, padding-left 0.3s', }} >
                <Icon sx={{ color: 'white', fontSize: '20px' }} />
            </Box>

            {/* Text */}
            <Typography sx={{ position: 'absolute', right: 0, width: isHovered ? '70%' : '0%', opacity: isHovered ? 1 : 0, color: 'white', fontSize: '1.2em', fontWeight: 500, transition: 'width 0.3s, opacity 0.3s', }}>
                {text}
            </Typography>
        </Box>
    );
};

const SocialMedia = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '10px', }}>
            <SocialMediaButton icon={Facebook} color="#0163E0" text="Facebook" />
            <SocialMediaButton icon={Instagram} color="#E4405F" text="Instagram" />
            <SocialMediaButton icon={YouTube} color="#FF0000" text="YouTube" />
            <SocialMediaButton icon={Twitter} color="#1DA1F2" text="Twitter" />
        </Box>
    );
};

export default SocialMedia
