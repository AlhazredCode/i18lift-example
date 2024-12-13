'use client';

import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface HomeTranslations {
  ctaTitle: string;
  ctaSubtitle: string;
}


const Cta = () => {
  const { t } = useTranslation('home');

  return (
    <Box
      sx={{
        bgcolor: 'gray',
        py: { xs: 6, md: 12 },
        backgroundImage: 'url(/cta.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        opacity: 0.7, // Increased opacity slightly for better visibility
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
          {t('ctaTitle')}
        </Typography>
        <Typography variant="h5" align="center" sx={{ color: 'white', mb: 4 }}>
          {t('ctaSubtitle')}
        </Typography>
      </Container>
    </Box>
  );
};

export default Cta;