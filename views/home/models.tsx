import React from 'react';
import { Grid, Typography, Box, Container, useMediaQuery, useTheme } from '@mui/material';

const Models = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const models = [
    {
      image: '/assets/images/landing/model1.jpg', // Replace with actual image paths
      name: 'Model A',
    },
    {
      image: '/assets/images/landing/model2.jpg',
      name: 'Model B',
    },
    {
      image: '/assets/images/landing/model3.jpg',
      name: 'Model C',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Our Models
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {models.map((model, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 250 }}>
              <Box
                sx={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  width: isMobile ? 120 : 150, // Reduced image size
                  height: isMobile ? 120 : 150,
                  boxShadow: 3, // Added a subtle box shadow
                }}
              >
                <img
                  src={model.image}
                  alt={model.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Typography variant="h6" align="center" sx={{ mt: 2 }}>
                {model.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Models;