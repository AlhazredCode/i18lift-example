import React from 'react';
import { Vehicle } from '@/types/vehicle';

const Vehicles: Vehicle[] = [
  {
    id: 1,
    name: 'Sedan',
    description: 'A regular Vehicletype',
    Basic : 50,
    Deluxe : 80,
    Premium : 135,
    Elite : 200,
    Image: '/Vehicles/Sedan.webp', 
  },

  {
    id: 2,
    name: 'SUV',
    description: 'A sport Vehicle type',
    Basic : 65,
    Deluxe : 104,
    Premium : 175,
    Elite : 260,
    Image: '/Vehicles/SUV.webp', // Agregar una imagen por defecto
  },

  {
    id: 3,
    name: 'Truck',
    description: 'A Truck Vehicletype',
    Basic : 80,
    Deluxe : 135,
    Premium : 225,
    Elite : 300,
    Image:  '/Vehicles/Truck.webp', // Agregar una imagen por defecto
  }

  
];

export default Vehicles;