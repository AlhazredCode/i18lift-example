import React from 'react'
import Image from 'next/image'
import { Box, TextField, Grid, Step, Stepper, StepLabel, Typography, Button } from '@mui/material'

function Two() {
  return (
    <Box sx={{ height: '80%' }}>
    <Grid container spacing={2}>
    <Grid item xs={12} justifyContent="center" display="flex">
        <Image src="/Racer.png" alt="Logo" width={100} height={100} />
      </Grid>
    <Grid item xs={12} >
      <Typography variant="h6" gutterBottom textAlign={'center'}>
        Please enter your user information.
      </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          id="firstName"
          label="First Name"
          fullWidth
          size='small'
          inputProps={{ maxLength: 50 }}
          sx={{ bgcolor: 'rgba(255, 255, 255, 0.07)', borderRadius: 1 }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          id="lastName"
          label="Last Name"
          fullWidth
          size='small'
          inputProps={{ maxLength: 50 }}
          sx={{ bgcolor: 'rgba(255, 255, 255, 0.07)', borderRadius: 1 }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="email"
          label="Email"
          fullWidth
          size='small'
          inputProps={{ maxLength: 50 }}
          sx={{ bgcolor: 'rgba(255, 255, 255, 0.07)', borderRadius: 1 }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="phone"
          label="Phone"
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

export default Two