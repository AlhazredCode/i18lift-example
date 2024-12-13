'use client';
import { useState, useEffect } from 'react';
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
const images = [
  { src: '/carousel/1.jpg', alt: 'Image 1 Description' },
  { src: '/carousel/2.jpg', alt: 'Image 2 Description' },
  { src: '/carousel/3.jpg', alt: 'Image 3 Description' },
  { src: '/carousel/4.jpg', alt: 'Image 4 Description' },
  { src: '/carousel/5.jpg', alt: 'Image 5 Description' },
  { src: '/carousel/6.jpg', alt: 'Image 6 Description' },
];
export default function ImageCarousel() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const imageWidth = isMobile ? 300 : 400;
  const imageHeight = isMobile ? 300 : 400;

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Box sx={{ overflowX: 'hidden', width: '100%' }}>
        <Marquee gradient={false} speed={40}> 
          {images.map((image, index) => (
            <Box key={index} sx={{ display: 'inline-block', mx: 2 }}>
              <Image
                layout="intrinsic"
                objectFit="cover"
                src={image.src}
                alt={image.alt}
                width={imageWidth}
                height={imageHeight}
                style={{
                  display: 'block',
                  borderRadius: 2,
                }}
              />
            </Box>
          ))}
        </Marquee>
      </Box>
    </Container>
  );
}
