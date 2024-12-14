import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
const EcoFriendly = () => {

    const { t } = useTranslation('home');

  return (
    <Box
      sx={{
        bgcolor: 'gray',
        py: { xs: 6, md: 12 },
        backgroundImage: 'url(/EcoFriendly.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
       {t('EcoFriendly.Title')}
        </Typography>
        <Typography variant="h5" fontSize="1.2rem" align="center" sx={{ color: 'white', mb: 4 }}>
         {t('EcoFriendly.Description')}
        </Typography>
      </Container>
    </Box>
  );
};

export default EcoFriendly;