import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

import I1 from '../../assest/img/Headlight/SvgjsSvg1001.webp';
import I2 from '../../assest/img/Headlight/SvgjsG1013.webp';
import I3 from '../../assest/img/Headlight/SvgjsG1023.webp';
import I4 from '../../assest/img/Headlight/SvgjsG1029.webp';

const Headlight = () => {
  return (
    <Box sx={{ backgroundColor: '#CFCFCF', py: 1, textAlign: 'center', my: 3 }}>
      <Container>
        <Grid container spacing={2}>
          {/* First Item */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography component="img" src={I1} sx={{ width: '30px', color: '#1E1E1E' }} />
              <Box sx={{ ml: 2, fontSize: 15, fontFamily: '"Nunito", sans-serif' }}>
                LED Headlight with DRL
              </Box>
            </Box>
          </Grid>

          {/* Second Item */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography component="img" src={I2} sx={{ width: '30px', color: '#1E1E1E' }} />
              <Box sx={{ ml: 2, fontSize: 15, fontFamily: '"Nunito", sans-serif' }}>
                Smart Digital Meter
              </Box>
            </Box>
          </Grid>

          {/* Third Item */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography component="img" src={I3} sx={{ width: '30px', color: '#1E1E1E' }} />
              <Box sx={{ ml: 2, fontSize: 15, fontFamily: '"Nunito", sans-serif' }}>
                160 kgs Load Capacity
              </Box>
            </Box>
          </Grid>

          {/* Fourth Item */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography component="img" src={I4} sx={{ width: '30px', color: '#1E1E1E' }} />
              <Box sx={{ ml: 2, fontSize: 15, fontFamily: '"Nunito", sans-serif' }}>
                Alloy Rim 3.00-10”
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Headlight;
