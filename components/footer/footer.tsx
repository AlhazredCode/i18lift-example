'use client';

import React from 'react';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { InstagramOutlined, FacebookOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

interface FooterTranslations {
  copyright: string;
  description: string;
}

const Footer: React.FC = () => {
  const { t } = useTranslation('home'); // Using 'home' namespace as requested

  return (
    <Box sx={{ mt: 'auto', textAlign: 'center' }}> {/* Added background color */}
      <Grid container alignItems="center" justifyContent="center" direction="column" p={2}>
        <Grid item xs={12} container justifyContent="center" alignItems="center">
          <img src="/icons/Logo.svg" alt="Logo" width="50" height="50" />
          <Typography variant="body2" color="text.secondary" ml={1}> {/* Use theme colors */}
            © {new Date().getFullYear()} Uplift
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center" mt={2} > {/* Added margin top */}
          <Typography variant="body2" color="text.secondary"> {/* Use theme colors */}
            {t('description')}  {/* Translated description */}
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center" spacing={2} mt={2}>
          <Grid item mx={2}>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer"> {/* Added target and rel */}
              <InstagramOutlined style={{ fontSize: '32px' }} /> {/* Ant Design icon */}
            </Link>
          </Grid>
          <Grid item mx={2}>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined style={{ fontSize: '32px' }} />
            </Link>
          </Grid>
          <Grid item mx={2}>
            <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <WhatsAppOutlined style={{ fontSize: '32px' }} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;