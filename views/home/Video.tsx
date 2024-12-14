'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const VideoEmbed = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Container maxWidth="lg" sx={{ px: 4, pt: 8, textAlign: 'center', pb: '8vh' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
       {t('Video.Title')}
      </Typography>
      <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
       {t('Video.Description')}
      </Typography>
      <Box sx={{ 
      
        position: 'relative', 
        paddingBottom: '56.25%', 
    
        height:  isMobile ? '480px' : '700px', 
        overflow: 'visible', 
        display: 'flex', 
        justifyContent: 'center' 
      }}>
        <iframe
        
          width={isMobile ? '300px' : '480px'}
          height={isMobile ? '480px' : '700px'}
          src="https://www.instagram.com/reel/DDXlpihOG_T/embed" 
          title="Instagram video player"
          frameBorder="0"
          scrolling="no"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: 'absolute', top: 0 , borderRadius: '8px'}}
        />
      </Box>
    </Container>
  );
};

export default VideoEmbed;