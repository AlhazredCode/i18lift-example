'use client';
import Image from 'next/image';
import { Typography, Box, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import featuresData from '@/api/features.json';
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation('home');

  return (
    <Container sx={{ mt: { md: 15, xs: 10 } }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          {t('home.dontLetBags')}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
          {t('home.elevateExperience')}
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
      >
        <Grid container alignItems="stretch" justifyContent="center" spacing={2} sx={{ mt: { md: 5, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
          {featuresData.map((feature, index) => (
            <Grid item xs={12} sm={12} md={4} key={index} sx={{ display: 'flex' }}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 4,
                  bgcolor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 0 20px 5px rgba(255, 0, 0, 0.5)',
                  },
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: { xs: '120px', md: '150px' }, // Added minHeight for consistency
                  alignItems: 'center',                // Align items to center
                }}
              >
                <Grid container alignItems="center" spacing={2} sx={{ flexGrow: 1 }}>
                  <Grid item xs={12} sm={12} md={4} sx={{ display: 'flex', justifyContent: {sm:'left' , md: 'center' } }}>
                     <Image src={feature.image} alt={feature.title} width={48} height={48} /> 
                  </Grid>
                  <Grid item xs={12} sm={8} md={8} >
                    <Box sx={{ textAlign: {sm:'left' , md: 'right' } , width: '100%'}} > {/* Added Box for text alignment */}
                      <Typography variant="h5" color="primary" sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: '2', /* Limit to two lines */
                          WebkitBoxOrient: 'vertical',
                          width: '100%'

                      }}> {/* Limit title to a maximum of two lines */}
                        {t(`home.features.${feature.title.replace(/ /g, '_')}`)}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: '2', /* Limit to two lines */
                          WebkitBoxOrient: 'vertical',
                            width: '100%'
                      }}> {/* Limit subtitle to a maximum of two lines */}
                        {t(`home.features.${feature.subtitle.replace(/ /g, '_')}`)}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}