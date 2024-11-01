'use client';
import React, { useState, useContext } from 'react';
import { Box, Stepper, Step, StepLabel, Typography, TextField, Grid, Button, Paper , Divider } from '@mui/material';
import Image from 'next/image';
import { Plan } from '@/types/plan';
import { Vehicle } from '@/types/vehicle';
import { VehicleContext } from '@/components/customize';

interface BuyModalProps {
  plan: Plan ;
  price: number;
}

const steps = [
  'Car Information',
  'User Information',
  'Checkout',
];




const BuyModal: React.FC<BuyModalProps> = ({ plan  , price}) => {
  const [stepIndex, setStepIndex] = useState(0);
  const { selectedVehicle } = useContext(VehicleContext);
  const handleNext = () => {
    setStepIndex((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setStepIndex((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={stepIndex} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4 }}>
        {stepIndex === 0 && (
         <Box sx={{ mt: 4 }}>
         <Paper
           sx={{
             p: 3,
             mb: 2,
             bgcolor: 'rgba(255, 255, 255, 0.07)',
             borderRadius: 3,
             overflow: 'hidden',
             position: 'relative',
             minHeight: 400,
           }}
         >
           {/* Imagen de fondo del vehículo */}
           <Box
             sx={{
               position: 'absolute',
               top: 0,
               left: 0,
               width: '100%',
               height: '100%',
               opacity: 0.2,
               backgroundImage: `url(${selectedVehicle.Image})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               zIndex: -1,
             }}
           />
           {/* Encabezado del plan con miniatura */}
           <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
             <Image src={plan.image} alt={plan.name} width={20} height={40} />
             <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold' }}>
               {plan.name} Plan
             </Typography>
           </Box>
           {/* Detalles del plan */}
           <Grid container spacing={2} justifyContent="center">
             <Grid item xs={12} sm={6}>
               <Typography variant="body2" color="text.secondary">
                 <strong>Vehicle:</strong> {selectedVehicle.name}
               </Typography>
             </Grid>
             <Grid item xs={12} sm={6}>
               <Typography variant="body2" color="text.secondary">
                 <strong>Price:</strong> ${price}
               </Typography>
             </Grid>
             <Grid item xs={12}>
               <Typography variant="body2" color="text.secondary">
                 <strong>Frequency:</strong> {plan.frecuency}
               </Typography>
             </Grid>
             <Grid item xs={12}>
               <Typography variant="body2" color="text.secondary">
                 <strong>Description:</strong> {plan.description}
               </Typography>
             </Grid>
           </Grid>
           <Divider sx={{ my: 2 }} />
           {/* Características del plan */}
           <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
             Features
           </Typography>
           <Grid container spacing={1}>
             {plan.features.map((feature) => (
               <Grid item xs={12} sm={6} key={feature.featureid}>
                 <Box display="flex" alignItems="center" sx={{ p: 1, bgcolor: 'rgba(255, 255, 255, 0.14)', borderRadius: 1 }}>
                   <Image src={feature.icon} alt={feature.title} width={20} height={20} style={{ marginRight: 8 }} />
                   <Typography variant="body2">{feature.title}</Typography>
                 </Box>
               </Grid>
             ))}
           </Grid>
         </Paper>
       </Box>
        )}

{stepIndex === 1 && (
  <Box sx={{ mt: 4, position: 'relative', overflow: 'hidden', minHeight: 400 }}>
    {/* Imagen de fondo */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.2,
        backgroundImage: `url('/userStep.png')`, // Cambia el path de la imagen
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1,
      }}
    />
    
    <Paper
      sx={{
        p: 4,
        bgcolor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 2,
        backdropFilter: 'blur(5px)',
      }}
    >
      <Typography variant="h6" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
        User Information
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="name"
            label="Name"
            fullWidth
            inputProps={{ maxLength: 50 }}
            sx={{ bgcolor: 'rgba(255, 255, 255, 0.07)', borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            label="Address"
            fullWidth
            inputProps={{ maxLength: 50 }}
            sx={{ bgcolor: 'rgba(255, 255, 255, 0.14)', borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phone"
            label="Phone"
            fullWidth
            inputProps={{ maxLength: 15 }}
            sx={{ bgcolor: 'rgba(255, 255, 255, 0.21)', borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            label="Email"
            fullWidth
            inputProps={{ maxLength: 50 }}
            sx={{ bgcolor: 'rgba(255, 255, 255, 0.28)', borderRadius: 1 }}
          />
        </Grid>
      </Grid>
    </Paper>
  </Box>
)}


        {stepIndex === 2 && (
          <Box>
            <Typography variant="h6">Additional Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField id="details" label="Details" multiline rows={3} fullWidth inputProps={{ maxLength: 100 }} />
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>

      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button disabled={stepIndex === 0} onClick={handleBack} variant="contained" color="primary">Back</Button>
        <Button onClick={handleNext} variant="contained" color="primary">{stepIndex === steps.length - 1 ? 'Finish' : 'Next'}</Button>
      </Box>
    </Box>
  );
};

export default BuyModal;
