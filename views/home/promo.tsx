'use client'
import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import Badges from './badges';
import { useTranslation } from 'react-i18next';

const Promo = () => {
  const { t } = useTranslation('home'); // Asegúrate de que 'home' es el namespace correcto

  return (
    <Box
      sx={{
        bgcolor: 'red',
        py: { xs: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 2,
        animation: 'neonGlow 2s linear infinite alternate', 
      }}
    >
      <Badges />
      <Box maxWidth="sm">
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
          {t('promo.freeTrialTitle')} 
        </Typography>
        <Typography variant="h5" align="center" sx={{ color: 'black', mb: 2 }}>
          {t('promo.freeTrialSubtitle')}
        </Typography>
      </Box>
      <style jsx>{` 
        @keyframes neonGlow {
          from {
            box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
          }
          to {
            box-shadow: 0 0 30px 20px rgba(255, 0, 0, 0.8);
          }
        }
      `}</style>
    </Box>
  );
};

export default Promo;