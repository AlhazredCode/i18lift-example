'use client';
import React, { useContext, useState } from 'react';
import Vehicles from '@/api/vehicles';
import { Grid, Box, Typography, Stack, Container, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { Vehicle } from '@/types/vehicle';
import { VehicleContext } from '@/components/customize';


function VehicleSelector() {
  const { setSelectedVehicle } = useContext(VehicleContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedVehicleLocal, setSelectedVehicleLocal] = useState(Vehicles[0]); // Estado local para el estilo

  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle); // Actualiza el contexto
    setSelectedVehicleLocal(vehicle); // Actualiza el estado local
  };


  return (
    <Box sx={{ width: '100%' , mt: '10vh'}}>
      <Container maxWidth="lg" sx={{ py: { md: 4, lg: 8 }, display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={4} sx={{ width: '100%' }}>
          {/* Select Your Model Section */}
          <Grid item xs={12} sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', px: 2, py: 2, borderRadius: 2 }}>
            <Grid item sx={{ mb: 2 }}>
              <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
                Select Your Vehicle Type
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary">
                Choose from our models
              </Typography>
            </Grid>

            {/* Product Images */}
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}> {/* Added flexWrap */}
              {Vehicles.map((vehicle) => (
                <Stack
                  key={vehicle.id}
                  onClick={() => handleVehicleSelect(vehicle)}
                  sx={{
                    cursor: 'pointer',
                    mx: 2,
                    my: 1,  // Added vertical margin for better spacing in flexWrap
                    border: selectedVehicleLocal.id === vehicle.id ? '2px solid white' : '1px solid #333333',
                    backgroundColor: selectedVehicleLocal.id === vehicle.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    borderRadius: 2,
                    p: 2,
                    alignItems: 'center',
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Image src={vehicle.Image} alt={vehicle.name} width={isMobile ? 80 : 100} height={isMobile ? 80 : 100} style={{ borderRadius: 4 }} />
                  <Typography variant="body2" sx={{ color:selectedVehicleLocal.id === vehicle.id ? 'white' : '#cccccc', mt: 1, fontSize: '0.9rem', fontWeight: 'bold' }}>
                    {vehicle.name}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default VehicleSelector;