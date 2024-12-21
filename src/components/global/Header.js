import React, { useState } from 'react';
import { Box, Container, Grid, Typography, IconButton, Drawer, Link } from '@mui/material';
import Logo from '../../assest/img/Logo.webp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <Box sx={{ my: 2 }}>
        <Container>
          <Grid container spacing={2} alignItems="center">
            {/* Logo Section */}
            <Grid item xs={6} sm={3} md={2}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Link href="/" color="inherit" underline="none">
                  <Typography component="img" src={Logo} sx={{ width: { xs: '90%', sm: '100%' }, maxWidth: '150px' }} />
                </Link>
              </Box>
            </Grid>

            {/* Menu and Social Icons */}
            <Grid item xs={6} sm={9} md={10} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              {/* Menu links - Visible on larger screens */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                <Typography sx={{ mx: 2, fontFamily: '"Nunito", sans-serif', fontSize: { md: '14px', lg: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                  <Link href="/" color="inherit" underline="none">Home</Link>
                </Typography>
                <Typography sx={{ mx: 2, fontFamily: '"Nunito", sans-serif', fontSize: { md: '14px', lg: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                  <Link href="/aboutus" color="inherit" underline="none">About Us</Link>
                </Typography>
                <Typography sx={{ mx: 2, fontFamily: '"Nunito", sans-serif', fontSize: { md: '14px', lg: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                  Our Products
                </Typography>
                <Typography sx={{ mx: 2, fontFamily: '"Nunito", sans-serif', fontSize: { md: '14px', lg: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                  <Link href="/storelocator" color="inherit" underline="none">Store Locator</Link></Typography>
                <Typography sx={{ mx: 2, fontFamily: '"Nunito", sans-serif', fontSize: { md: '14px', lg: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>Blog</Typography>
                <Typography sx={{ mx: 2, fontFamily: '"Nunito", sans-serif', fontSize: { md: '14px', lg: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                  <Link href="/contactus" color="inherit" underline="none">Contact Us</Link>
                </Typography>
              </Box>

              {/* Social icons - Visible on larger screens */}
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton sx={{ mx: 1, color: '#000', border: '1px solid #000', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                  <FacebookIcon fontSize="small" />
                </IconButton>
                <IconButton sx={{ mx: 1, color: '#000', border: '1px solid #000', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                  <InstagramIcon fontSize="small" />
                </IconButton>
                <IconButton sx={{ mx: 1, color: '#000', border: '1px solid #000', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                  <LinkedInIcon fontSize="small" />
                </IconButton>
                <IconButton sx={{ mx: 1, color: '#000', border: '1px solid #000', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                  <TwitterIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* Hamburger menu - Visible on small screens */}
              <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 2 }}>
                <IconButton onClick={toggleMobileMenu}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mobile Drawer for Menu */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}><Link href="/" color="inherit" underline="none">Home</Link></Typography>
          <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}><Link href="/aboutus" color="inherit" underline="none">About Us</Link></Typography>
          <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}><Link href="/ourproduct" color="inherit" underline="none">Our Products</Link></Typography>
          <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}>Store Locator</Typography>
          <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}>Blog</Typography>
          <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}><Link href="/contactus" color="inherit" underline="none">Contact Us</Link></Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 3 }}>
            <IconButton sx={{ color: '#000', border: '1px solid #000', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00' } }}>
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ color: '#000', border: '1px solid #000', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00' } }}>
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ color: '#000', border: '1px solid #000', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00' } }}>
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ color: '#000', border: '1px solid #000', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00' } }}>
              <TwitterIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
