import React, { createContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import VehicleSelector from '@/views/planSelector/VehicleSelector';
import PlanSelector from '@/views/planSelector/PlanSelector';
import { Vehicle } from '@/types/vehicle';
import Vehicles from '@/api/vehicles';

// Define el tipo del contexto incluyendo setSelectedVehicle
interface VehicleContextType {
  selectedVehicle: Vehicle;
  setSelectedVehicle: React.Dispatch<React.SetStateAction<Vehicle>>;
}

// Crea el contexto con el tipo definido
export const VehicleContext = createContext<VehicleContextType>({
  selectedVehicle: Vehicles[0],
  setSelectedVehicle: () => {}, // Inicializa con una función vacía para evitar errores
});

function Customize() {
  // Inicializa selectedVehicle en la primera posición de Vehicles
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(Vehicles[0]);

  return (
    <VehicleContext.Provider value={{ selectedVehicle, setSelectedVehicle }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <VehicleSelector />
        </Grid>
        <Grid item my={0} py={0} xs={12}>
          <PlanSelector />
        </Grid>
      </Grid>
    </VehicleContext.Provider>
  );
}

export default Customize;
