'use client';
import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { AppleFilled, AndroidFilled } from '@ant-design/icons';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';


interface DownloadOption {
  title: string;
  description: string;
  imageSrc: React.ReactElement;
  link: string;
}

const Downloads: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <Box sx={{ mx: '5vw' }}>
      <Box sx={{ width: '100%', mt: { xs: '15vh', md: '10vh' }, p: 2, minHeight: '70vh', alignContent: 'center' }}>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: t('download.appleTitle'),
              description: t('download.appleDescription'),
              imageSrc: <AppleFilled style={{ fontSize: '32px' }} />,
              link: 'https://example.com/download/apple', 

            },
            {
              title: t('download.androidTitle'),
              description: t('download.androidDescription'),
              imageSrc: <AndroidFilled style={{ fontSize: '32px' }} />,
              link: 'https://example.com/download/android',
            },
          ].map((option) => (
            <Grid item xs={12} sm={6} md={4} key={option.title}>
              <Card
                sx={{
                  p: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.07)',
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 250,
                }}
                variant="outlined"
              >
                {option.imageSrc}
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {option.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {option.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={option.link}
                    target="_blank"
                    sx={{ mt: 1, backgroundColor: 'red' }}
                  >
                    {t('download.button')}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Downloads;