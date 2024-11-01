import React from 'react';
import Image from 'next/image';
import { Typography, Box, Container } from '@mui/material';

const Dimensions = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Dimensions
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Image
          src="/assets/images/landing/dimensions.png" // Replace with your image path
          alt="Dimensions"
          width={500} // Adjust width as needed
          height={500} // Adjust height as needed
          style={{ maxWidth: '50%', height: 'auto' }} // Control size on desktop
        />
      </Box>
    </Container>
  );
};

export default Dimensions;