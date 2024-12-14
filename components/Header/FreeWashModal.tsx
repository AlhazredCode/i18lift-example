import React, { useState } from 'react'
import Image from 'next/image'
import { Box, TextField, Grid, Step, Stepper, StepLabel, Typography, Button , Container} from '@mui/material'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from '@mui/material';
function FreeWashModal() {


  const { t } = useTranslation('home');
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box display="flex" justifyContent="center" height="90%">

        <Grid container spacing={2}>

          <Grid item xs={12} justifyContent="center" display="flex">

            <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              <Image src="/UpTicket.webp" alt="Logo" width={isMobile ? 300 : 500} height={isMobile ? 300 : 500} layout='intrinsic' objectFit='cover' />
            </motion.div>
          </Grid>
          <Grid item xs={12} justifyContent="center" display="flex">

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <Container maxWidth="md">
              <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                {t('Modal.Title')}
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
                {t('Modal.Description')}
              </Typography>
              </Container>
            </motion.div>
            </Grid>
            <Grid item xs={12} justifyContent="center" display="flex">

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}>

                <Button variant="contained" color="primary" size='large' sx={{ mt: 2, mb: 2, backgroundColor : 'red' }} onClick={() => { }}>
                  {t('Modal.Button')}
                </Button>
              </motion.div>
            </Grid>
            
          

        </Grid>
      </Box>
    </>
  );
}

export default FreeWashModal
