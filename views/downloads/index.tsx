'use client';
import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Button, Badge } from '@mui/material';
import {AppleFilled, AndroidFilled,ApiFilled} from '@ant-design/icons';
import Image from 'next/image';

interface DownloadOption {
  title: string;
  description: string;
  imageSrc: React.ReactElement;
  link: string;
  isDisabled?: boolean;
  badgeText?: string;
}

const downloadOptions: DownloadOption[] = [
  {
    title: 'Download for Apple',
    description: 'Get the app for iOS devices.',
    imageSrc:  <AppleFilled style={{ fontSize: '32px' }} />,
    link: 'https://example.com/download/apple',
  },
  {
    title: 'Download for Android',
    description: 'Get the app for Android devices.',
    imageSrc:  <AndroidFilled style={{ fontSize: '32px' }} />,
    link: 'https://example.com/download/android',
  },
  {
    title: 'Use for Web',
    description: 'Access the app via web browser.',
    imageSrc:  <ApiFilled style={{ fontSize: '32px' }} />,
    link: '#',
    isDisabled: true,
  
  },
];

const Downloads: React.FC = () => {
  return (
    <Box sx={{mx: '5vw'}}>
      <Box sx={{ width: '100%', mt: '10vh', p: 2, minHeight: '70vh' , alignContent: 'center'}}>
        <Grid container spacing={4} justifyContent="center">
          {downloadOptions.map((option) => (
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
                      disabled={option.isDisabled}
                      sx={{ mt: 1 }}
                    >
                      {option.isDisabled ? 'Cooming soon' : 'Download'}
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

