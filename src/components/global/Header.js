import React, { useState } from 'react';
import { Box, Container, Grid, Typography, IconButton, Drawer, Link, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assest/img/Logo.webp';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
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
                {/* E-Scooters */}
                <Typography sx={{ mx: 2, fontFamily: '"Nunito", sans-serif', cursor: 'pointer', fontSize: { md: '14px', lg: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' }, }} onMouseEnter={(e) => handleMenuOpen(e, 'eScooters')} >
                  E-Scooters
                </Typography>

                {/* Dealer */}
                <Typography sx={{ mx: 2, fontFamily: '"Nunito", sans-serif', cursor: 'pointer', fontSize: { md: '14px', lg: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' }, }} onMouseEnter={(e) => handleMenuOpen(e, 'dealer')}>
                  Dealer
                </Typography>

                {/* Other Links */}
                <Typography sx={{ mx: 2, fontFamily: '"Nunito", sans-serif', fontSize: { md: '14px', lg: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                  <Link href="/aboutus" color="inherit" underline="none">
                    About Us
                  </Link>
                </Typography>
                <Typography sx={{ mx: 2, fontFamily: '"Nunito", sans-serif', fontSize: { md: '14px', lg: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                  <Link href="/contactus" color="inherit" underline="none">
                    Contact Us
                  </Link>
                </Typography>
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

      {/* Mega Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{
          onMouseLeave: handleMenuClose,
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          '& .MuiPaper-root': {
            width: '100vw',
            left: 0,
            padding: 0,
          },
        }}
      >
        {activeMenu === 'eScooters' && (
          <Box sx={{ bgcolor: '#f9f9f9', width: '100%', py: { xs: 3, md: 6 } }}>
            <Grid container spacing={3}>
              {/* Title Section */}
              <Grid item xs={12} md={4}>
                <Typography fontWeight="bold" sx={{ mb: { xs: 2, md: 1 }, fontFamily: '"Nunito", sans-serif', color: '#B4B4B4', fontSize: { xs: '20px', md: '33px' }, textAlign: { xs: 'center', md: 'right' }, }}>
                  E-SCOOTER
                </Typography>
              </Grid>

              {/* Middle Section */}
              <Grid item xs={12} md={4}>
                <Box sx={{ mx: { xs: 2, md: 8 } }}>
                  <Box sx={{ mb: { xs: 2, md: 3 } }}>
                    <Link href="/grazor" color="inherit" underline="none">
                      <Typography sx={{ fontFamily: '"Nunito", sans-serif', fontWeight: '700', fontSize: { xs: '16px', md: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' }, textAlign: { xs: 'start', md: 'left' }, }}>
                        G-Razor
                        <Typography sx={{ color: '#B4B4B4', fontFamily: '"Nunito", sans-serif', fontWeight: '700', fontSize: { xs: '14px', md: '16px' }, }}>
                          Modern. Innovative. Advanced. Unparalleled.
                        </Typography>
                      </Typography>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/glite" color="inherit" underline="none">
                      <Typography sx={{ fontFamily: '"Nunito", sans-serif', fontWeight: '700', fontSize: { xs: '16px', md: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' }, textAlign: { xs: 'start', md: 'left' }, }}>
                        G-Lite
                        <Typography sx={{ color: '#B4B4B4', fontFamily: '"Nunito", sans-serif', fontWeight: '700', fontSize: { xs: '14px', md: '16px' }, }}>
                          Classic. Timeless. Secure. Upgraded.
                        </Typography>
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>

              {/* Last Section */}
              <Grid item xs={12} md={4}>
                <Box sx={{ mr: { xs: 0, md: 12 }, mx: { xs: 2, md: 0 } }}>
                  <Box sx={{ mb: { xs: 2, md: 3 } }}>
                    <Link href="/gone" color="inherit" underline="none">
                      <Typography sx={{ fontFamily: '"Nunito", sans-serif', fontWeight: '700', fontSize: { xs: '16px', md: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' }, textAlign: { xs: 'start', md: 'left' }, }}>
                        G-One
                        <Typography sx={{ color: '#B4B4B4', fontFamily: '"Nunito", sans-serif', fontWeight: '700', fontSize: { xs: '14px', md: '16px' }, }}>
                          Sportier. Speedier. Safer.
                        </Typography>
                      </Typography>
                    </Link>
                  </Box>
                  <Box>
                    <Typography sx={{ fontFamily: '"Nunito", sans-serif', fontWeight: '700', fontSize: { xs: '16px', md: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' }, textAlign: { xs: 'start', md: 'left' }, }}>
                      Astino Coming Soon!!
                      <Typography sx={{ color: '#B4B4B4', fontFamily: '"Nunito", sans-serif', fontWeight: '700', fontSize: { xs: '14px', md: '16px' }, }}>
                        Award winning. Extra ordinary. Unbeatable. Best-in-class.
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}

        {activeMenu === 'dealer' && (
          <Box sx={{ bgcolor: '#f9f9f9', width: '100%', py: { xs: 3, md: 6 } }}>
            <Grid container spacing={3}>
              {/* Title Section */}
              <Grid item xs={12} md={4}>
                <Typography fontWeight="bold" sx={{ mb: { xs: 2, md: 1 }, fontFamily: '"Nunito", sans-serif', color: '#B4B4B4', fontSize: { xs: '20px', md: '33px' }, textAlign: { xs: 'center', md: 'right' }, }}>
                  DEALER
                </Typography>
              </Grid>

              {/* Middle Section */}
              <Grid item xs={12} md={4}>
                <Box sx={{ mx: { xs: 2, md: 8 } }}>
                  <Box sx={{ mb: { xs: 2, md: 3 } }}>
                    <Link href="/dealerlocator" color="inherit" underline="none">
                      <Typography sx={{ fontFamily: '"Nunito", sans-serif', fontWeight: '700', fontSize: { xs: '16px', md: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' }, textAlign: { xs: 'start', md: 'left' }, }}>
                        Dealer Locator
                        <Typography sx={{ color: '#B4B4B4', fontFamily: '"Nunito", sans-serif', fontWeight: '700', fontSize: { xs: '14px', md: '16px' }, }}>
                          Find a Wayonaa showroom near you
                        </Typography>
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>

              {/* Last Section */}
              <Grid item xs={12} md={4}>
                <Box sx={{ mr: { xs: 0, md: 12 }, mx: { xs: 2, md: 0 } }}>
                  <Box sx={{ mb: { xs: 2, md: 3 } }}>
                    <Link href="/becomedealer" color="inherit" underline="none">
                      <Typography sx={{ fontFamily: '"Nunito", sans-serif', fontWeight: '700', fontSize: { xs: '16px', md: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' }, textAlign: { xs: 'start', md: 'left' }, }}>
                        Become a Dealer
                        <Typography sx={{ color: '#B4B4B4', fontFamily: '"Nunito", sans-serif', fontWeight: '700', fontSize: { xs: '14px', md: '16px' }, }}>
                          Join the Electric Revolution
                        </Typography>
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}

      </Menu>

      {/* Mobile Drawer for Menu */}
      <Drawer anchor="left" open={mobileMenuOpen} onClose={toggleMobileMenu}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }} onMouseEnter={(e) => handleMenuOpen(e, 'eScooters')} >E-Scooters</Typography>
          <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}>
            <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }} onMouseEnter={(e) => handleMenuOpen(e, 'dealer')} >Dealer</Typography>
            <Link href="/aboutus" color="inherit" underline="none">About Us</Link>
          </Typography>
          <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}>
            <Link href="/contactus" color="inherit" underline="none">Contact Us</Link>
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
