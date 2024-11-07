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
        title: 'Vacuuming'
      },
      {
        featureid:2, 
        icon: '/Features/5.svg',
        title: 'Surface Cleaning'
      },
      {
        featureid:3, 
        icon: '/Features/3.svg',
        title: 'Air freshener'
      },
      {
        featureid:3, 
        icon: '/Features/4.svg',
        title: 'Towel Dry Finish'
      }
    ]
  },
  {
    id : 2,
    name: 'Plus',
    basePrice: 149,
    frecuency: '2 times at month',
    description: 'Basic Three times at Month',
    image:  '/plans/Plusx.png', 
    features : [ 
      {
        featureid:1, 
        icon: '/Features/1.svg',
        title: 'Vacuuming'
      },
      {
        featureid:2, 
        icon: '/Features/5.svg',
        title: 'Surface Cleaning'
      },
      {
        featureid:3, 
        icon: '/Features/3.svg',
        title: 'Air freshener'
      },
      {
        featureid:3, 
        icon: '/Features/4.svg',
        title: 'Towel Dry Finish'
      }
    ]
  },
  {
    id : 3,
    name: 'Ultra',
    basePrice: 199,
    frecuency: '2 times at month',
    description: 'Basic Clean every Week',
    image: '/plans/Premium.png', 
    features : [ 
      {
        featureid:1, 
        icon: '/Features/1.svg',
        title: 'Vacuuming'
      },
      {
        featureid:2, 
        icon: '/Features/5.svg',
        title: 'Surface Cleaning'
      },
      {
        featureid:3, 
        icon: '/Features/3.svg',
        title: 'Air freshener'
      },
      {
        featureid:3, 
        icon: '/Features/4.svg',
        title: 'Towel Dry Finish'
      }
    ]
  },
 
];

export default Plans;