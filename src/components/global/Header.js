// import React, { useState } from 'react';
// import { Box, Container, Grid, Typography, IconButton, Drawer, Link } from '@mui/material';
// import Logo from '../../assest/img/Logo.webp';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import MenuIcon from '@mui/icons-material/Menu';

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <>
//       <Box sx={{ my: 2 }}>
//         <Container>
//           <Grid container spacing={2} alignItems="center">
//             {/* Logo Section */}
//             <Grid item xs={6} sm={3} md={2}>
//               <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
//                 <Link href="/" color="inherit" underline="none">
//                   <Typography component="img" src={Logo} sx={{ width: { xs: '90%', sm: '100%' }, maxWidth: '150px' }} />
//                 </Link>
//               </Box>
//             </Grid>

//             {/* Menu and Social Icons */}
//             <Grid item xs={6} sm={9} md={10} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
//               {/* Menu links - Visible on larger screens */}
//               <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
//                 <Typography sx={{ mx: 2, fontFamily: '"Nunito", sans-serif', fontSize: { md: '14px', lg: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
//                   <Link href="/" color="inherit" underline="none">E-Scooters</Link>
//                 </Typography>
//                 <Typography sx={{ mx: 2, fontFamily: '"Nunito", sans-serif', fontSize: { md: '14px', lg: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
//                   <Link href="/aboutus" color="inherit" underline="none">About Us</Link>
//                 </Typography>
//                 <Typography sx={{ mx: 2, fontFamily: '"Nunito", sans-serif', fontSize: { md: '14px', lg: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
//                   Our Products
//                 </Typography>
//                 <Typography sx={{ mx: 2, fontFamily: '"Nunito", sans-serif', fontSize: { md: '14px', lg: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
//                   <Link href="/storelocator" color="inherit" underline="none">Store Locator</Link></Typography>
//                 <Typography sx={{ mx: 2, fontFamily: '"Nunito", sans-serif', fontSize: { md: '14px', lg: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>Blog</Typography>
//                 <Typography sx={{ mx: 2, fontFamily: '"Nunito", sans-serif', fontSize: { md: '14px', lg: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
//                   <Link href="/contactus" color="inherit" underline="none">Contact Us</Link>
//                 </Typography>
//               </Box>

//               {/* Social icons - Visible on larger screens */}
//               <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//                 <IconButton sx={{ mx: 1, color: '#000', border: '1px solid #000', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
//                   <FacebookIcon fontSize="small" />
//                 </IconButton>
//                 <IconButton sx={{ mx: 1, color: '#000', border: '1px solid #000', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
//                   <InstagramIcon fontSize="small" />
//                 </IconButton>
//                 <IconButton sx={{ mx: 1, color: '#000', border: '1px solid #000', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
//                   <LinkedInIcon fontSize="small" />
//                 </IconButton>
//                 <IconButton sx={{ mx: 1, color: '#000', border: '1px solid #000', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
//                   <TwitterIcon fontSize="small" />
//                 </IconButton>
//               </Box>

//               {/* Hamburger menu - Visible on small screens */}
//               <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 2 }}>
//                 <IconButton onClick={toggleMobileMenu}>
//                   <MenuIcon />
//                 </IconButton>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Mobile Drawer for Menu */}
//       <Drawer
//         anchor="left"
//         open={mobileMenuOpen}
//         onClose={toggleMobileMenu}
//       >
//         <Box sx={{ width: 250, p: 2 }}>
//           <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}><Link href="/" color="inherit" underline="none">E-Scooters</Link></Typography>
//           <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}><Link href="/aboutus" color="inherit" underline="none">About Us</Link></Typography>
//           <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}><Link href="/ourproduct" color="inherit" underline="none">Our Products</Link></Typography>
//           <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}>Store Locator</Typography>
//           <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}>Blog</Typography>
//           <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}><Link href="/contactus" color="inherit" underline="none">Contact Us</Link></Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 3 }}>
//             <IconButton sx={{ color: '#000', border: '1px solid #000', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00' } }}>
//               <FacebookIcon fontSize="small" />
//             </IconButton>
//             <IconButton sx={{ color: '#000', border: '1px solid #000', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00' } }}>
//               <InstagramIcon fontSize="small" />
//             </IconButton>
//             <IconButton sx={{ color: '#000', border: '1px solid #000', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00' } }}>
//               <LinkedInIcon fontSize="small" />
//             </IconButton>
//             <IconButton sx={{ color: '#000', border: '1px solid #000', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00' } }}>
//               <TwitterIcon fontSize="small" />
//             </IconButton>
//           </Box>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { Box, Container, Grid, Typography, IconButton, Drawer, Link, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assest/img/Logo.webp';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null); // Track which menu is active

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
                <Typography
                  sx={{
                    mx: 2,
                    fontFamily: '"Nunito", sans-serif', cursor: 'pointer',
                    fontSize: { md: '14px', lg: '18px' },
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#FB7C00', cursor: 'pointer' },
                  }}
                  onMouseEnter={(e) => handleMenuOpen(e, 'eScooters')}
                >
                  E-Scooters
                </Typography>

                {/* Dealer */}
                <Typography
                  sx={{
                    mx: 2,
                    fontFamily: '"Nunito", sans-serif', cursor: 'pointer',
                    fontSize: { md: '14px', lg: '18px' },
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#FB7C00', cursor: 'pointer' },
                  }}
                  onMouseEnter={(e) => handleMenuOpen(e, 'dealer')}
                >
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
          <Box sx={{ bgcolor: '#f9f9f9', width: '100%', py: 6 }}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography fontWeight="bold" sx={{ mb: 1, fontFamily: '"Nunito", sans-serif', color: '#B4B4B4', fontSize: 33, display: 'flex', justifyContent: 'end' }}>
                  E-SCOOTER
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ mx: 8 }}>
                  <Box sx={{ mb: 3 }}>
                    <Link href="/grazor" color="inherit" underline="none">
                      <Typography sx={{ fontFamily: '"Nunito", sans-serif', fontWeight: '700', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                        G-Razor
                        <Typography sx={{ color: '#B4B4B4', fontFamily: '"Nunito", sans-serif', fontWeight: '700' }}>
                          Modern. Innovative. Advanced. Unparalleled.
                        </Typography>
                      </Typography>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/glite" color="inherit" underline="none">
                      <Typography sx={{ fontFamily: '"Nunito", sans-serif', fontWeight: '700', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                        G-Lite
                        <Typography sx={{ color: '#B4B4B4', fontFamily: '"Nunito", sans-serif', fontWeight: '700' }}>
                          Classic. Timeless. Secure. Upgraded.
                        </Typography>
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box sx={{ mr: 12 }}>
                  <Box sx={{ mb: 3 }}>
                    <Link href="/gone" color="inherit" underline="none">
                      <Typography sx={{ fontFamily: '"Nunito", sans-serif', fontWeight: '700', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                        G-One
                        <Typography sx={{ color: '#B4B4B4', fontFamily: '"Nunito", sans-serif', fontWeight: '700' }}>
                          Sportier. Speedier. Safer.
                        </Typography>
                      </Typography>
                    </Link>
                  </Box>
                  <Box>
                    <Typography sx={{ fontFamily: '"Nunito", sans-serif', fontWeight: '700', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                      Astino
                      <Typography sx={{ color: '#B4B4B4', fontFamily: '"Nunito", sans-serif', fontWeight: '700' }}>
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
          <Box sx={{ bgcolor: '#f9f9f9', width: '100%', py: 6 }}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography fontWeight="bold" sx={{ mb: 1, fontFamily: '"Nunito", sans-serif', color: '#B4B4B4', fontSize: 33, display: 'flex', justifyContent: 'end' }}>
                  DEALER
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ mx: 8 }}>
                  <Link href="/dealerlocator" color="inherit" underline="none">
                    <Typography sx={{ fontFamily: '"Nunito", sans-serif', fontWeight: '700', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                      Dealer Locator
                      <Typography sx={{ color: '#B4B4B4', fontFamily: '"Nunito", sans-serif', fontWeight: '700' }}>
                        Find a Wayonaa showroom near you
                      </Typography>
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ mr: 12 }}>
                  <Link href="/becomedealer" color="inherit" underline="none">
                    <Typography sx={{ fontFamily: '"Nunito", sans-serif', fontWeight: '700', transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                      Become a Dealer
                      <Typography sx={{ color: '#B4B4B4', fontFamily: '"Nunito", sans-serif', fontWeight: '700' }}>
                        Join the Electric Revolution
                      </Typography>
                    </Typography>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </Menu>

      {/* Mobile Drawer for Menu */}
      <Drawer anchor="left" open={mobileMenuOpen} onClose={toggleMobileMenu}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}>
            <Link href="/" color="inherit" underline="none">
              E-Scooters
            </Link>
          </Typography>
          <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}>
            <Link href="/aboutus" color="inherit" underline="none">
              About Us
            </Link>
          </Typography>
          <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}>Dealer</Typography>
          <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}>
            <Link href="/contactus" color="inherit" underline="none">
              Contact Us
            </Link>
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
