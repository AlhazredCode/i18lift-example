import React from 'react'
import Image from 'next/image'
import { Box, TextField, Grid, Step, Stepper, StepLabel, Typography, Button } from '@mui/material'

function One() {
  return (
    <Box sx={{ height: '80%' }}>
    <Grid container spacing={2}>
      <Grid item xs={12} justifyContent="center" display="flex">
        <Image src="/Freetrial.png" alt="Logo" width={100} height={100} />
      </Grid>
      <Grid item xs={12} justifyContent="center" display="flex">
        <Typography variant="h3" align="center"  sx={{ fontWeight: 'bold' }}>15 Days Free Trial</Typography>
      </Grid>
      <Grid item xs={12} justifyContent="center" display="flex">
        <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 'light', fontSize: '12px' }}>Get a full service coverage of all our services for the first 15 days after that you will be automatically charged as member of the Basic Plan</Typography>
      </Grid>
      <Grid item xs={12} justifyContent="center" display="flex">
        <Typography variant="h6" align="center"  sx={{ fontWeight: 'medium' }}>Check if your location is elegible for free</Typography>
      </Grid>
     
      
      <Grid item xs={12}>
        <TextField
          id="ZipCode"
          label="Enter Yor Zip Code"
          fullWidth
          size='small'
          inputProps={{ maxLength: 50 }}
          sx={{ bgcolor: 'rgba(255, 255, 255, 0.07)', borderRadius: 1 }}
        />
      </Grid>
    </Grid>
  </Box>
  )
}

export default One