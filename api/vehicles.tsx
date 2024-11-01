import React from 'react';
import { Vehicle } from '@/types/vehicle';

const Vehicles: Vehicle[] = [
  {
    id: 1,
    name: 'Sedan',
    description: 'A regular Vehicletype',
    priceFactor: 1,
    Image: '/Vehicles/Sedan.png', // Agregar una imagen por defecto
  },

  {
    id: 2,
    name: 'Sport',
    description: 'A sport Vehicle type',
    priceFactor: 1.3,
    Image: '/Vehicles/Racing.png', // Agregar una imagen por defecto
  },

  {
    id: 3,
    name: 'Truck',
    description: 'A Truck Vehicletype',
    priceFactor: 1.5,
    Image:  '/Vehicles/Truck.png', // Agregar una imagen por defecto
  },

  {
    id: 4,
    name: 'Vintage',
    description: 'A regular Vehicletype',
    priceFactor: 1.2,
    Image:  '/Vehicles/Vintage.png', // Agregar una imagen por defecto
  },


  {
    id: 5,
    name: 'XXL',
    description: 'A regular Vehicletype',
    priceFactor: 1.2,
    Image: '/Vehicles/XXL.png', // Agregar una imagen por defecto
  },


  
];

export default Vehicles;