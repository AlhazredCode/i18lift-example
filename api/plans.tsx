import React from 'react';
import { Plan, Feature } from '@/types/plan';

const Plans: Plan[] = [
  // Gloss Variants
  {
    id : 1,
    name: 'Basic',
    basePrice: 75,
    frecuency: '2 times at month',
    description: 'Basic Clean every 15 days',
    image: '/plans/Basic.png', 
    features : [ 
      {
        featureid:1, 
        icon: '/Features/1.svg',
        title: 'Basic Vacunning'
      }
    ]
  },
  {
    id : 2,
    name: 'Plus',
    basePrice: 149,
    frecuency: '2 times at month',
    description: 'Basic Clean every 15 days',
    image:  '/plans/Plusx.png', 
    features : [ 
      {
        featureid:2, 
        icon: '/Features/1.svg',
        title: 'Basic Vacunning'
      }
    ]
  },
  {
    id : 3,
    name: 'Ultra',
    basePrice: 199,
    frecuency: '2 times at month',
    description: 'Basic Clean every 15 days',
    image: '/plans/Premium.png', 
    features : [ 
      {
        featureid:3, 
        icon: '/Features/1.svg',
        title: 'Basic Vacunning'
      }
    ]
  },
 
];

export default Plans;