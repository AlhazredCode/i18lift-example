import React, { useState } from 'react'
import Image from 'next/image'
import { Box, TextField, Grid, Step, Stepper, StepLabel, Typography, Button } from '@mui/material'
import One from './Steps/One'
import Two from './Steps/Two'
import Three from './Steps/Three'

function FreeWashModal() {
  const [stepIndex, setStepIndex] = useState(0);
  const steps = [
    'Availability',
    'User Information',
    'Checkout',
  ];

  const handleNext = () => {
    setStepIndex((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setStepIndex((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <>
      <Box display="flex" justifyContent="center" height="90%">
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={stepIndex} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ mt: 4, height: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box sx={{ height: '80%' }}>
              {stepIndex === 0 && (
            <One/>
              )}

              {stepIndex === 1 && (
                <Two/>
              )}

              {stepIndex === 2 && (
                 <Three/>
              )}
            </Box>

          
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '10%', pt: 'auto' }}>
              {stepIndex > 0 && (
                <Button onClick={handleBack} sx={{ mx: 'auto' }}>
                  Back
                </Button>
              )}
              {stepIndex < steps.length - 1 && (
                <Button variant="contained" onClick={handleNext} sx={{ mx: 'auto' }}>
                  Next
                </Button>
              )}
            </Box>
        </Box>
      </Box>
    </>
  );
}

export default FreeWashModal
