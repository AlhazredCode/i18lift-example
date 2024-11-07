import React from 'react'
import Image from 'next/image'
import { Box, TextField, Grid, Step, Stepper, StepLabel, Typography, Button } from '@mui/material'

function Three() {
  return (
    <Box sx={{ height: '80%' }}>
                  <Grid container spacing={2}>
                  <Grid item xs={12} justifyContent="center" display="flex">
        <Image src="/Mechanic.png" alt="Logo" width={100} height={100} />
      </Grid>

      <Grid item xs={12} >
      <Typography variant="h6" gutterBottom textAlign={'center'}>
        Please enter your checkout information.
      </Typography>
      </Grid>
    

      <Grid item xs={12}>
        <TextField
          id="Adress"
          label="Adress"
          fullWidth
          size='small'
          inputProps={{ maxLength: 50 }}
          sx={{ bgcolor: 'rgba(255, 255, 255, 0.07)', borderRadius: 1 }}
        />
      </Grid>
     

      <Grid item xs={12}>
        <TextField
          id="checkoutCardNumber"
          label="Card Number"
          fullWidth
          size='small'
          inputProps={{ maxLength: 16 }}
          sx={{ bgcolor: 'rgba(255, 255, 255, 0.07)', borderRadius: 1 }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          id="checkoutCardExpiration"
          label="Expiration"
          fullWidth
          size='small'
          inputProps={{ maxLength: 4 }}
          sx={{ bgcolor: 'rgba(255, 255, 255, 0.07)', borderRadius: 1 }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          id="checkoutCardCvv"
          label="CVV"
          fullWidth
          size='small'
          inputProps={{ maxLength: 3 }}
          sx={{ bgcolor: 'rgba(255, 255, 255, 0.07)', borderRadius: 1 }}
        />
      </Grid>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'center' , width: '100%'}}>
                        <Button sx={{ width: '50%', mt: 2}}>
                          Checkout
                        </Button>
                    </Box>
                  </Grid>
                </Box>
  )
}

export default Three