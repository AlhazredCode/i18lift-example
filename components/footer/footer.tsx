'use client';

import React from 'react';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { InstagramOutlined  } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

interface FooterTranslations {
  copyright: string;
  description: string;
}

const Footer: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <Box sx={{ mt: 'auto', textAlign: 'center' }}>
      <Grid container alignItems="center" justifyContent="center" direction="column" p={2}>
      <Grid item xs={12} container justifyContent="center" alignItems="center">
      <img src="/icons/Logo.svg" alt="Logo" width="50" height="50" />
      </Grid>
        <Grid item xs={12} container justifyContent="center" alignItems="center">
        
          <Typography variant="body2" color="text.secondary">
            {' '}
            {new Date().getFullYear()} Uplift
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center" mt={2}>
          <Typography variant="body2" color="text.secondary">
            {t('description')}
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center" spacing={2} mt={2}>
          <Grid item mx={2}>
            <Link href="https://www.instagram.com/upliftwashapp" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined style={{ fontSize: '32px' }} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
