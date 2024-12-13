import React from 'react';
import { Plan, Feature } from '@/types/plan';

const Plans: Plan[] = [
  // Gloss Variants
  {
    id : 1,
    name: 'Basic',
    basePrice: 40,
    frecuency: '2 times at month',
    description: 'Basic Clean every 15 days',
    image: '/plans/Mini.webp',
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
    name: 'Deluxe',
    basePrice: 60,
    frecuency: '2 times at month',
    description: 'Basic Three times at Month',
    image: '/plans/Basic.webp',
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
    name: 'Premium',
    basePrice: 199,
    frecuency: '2 times at month',
    description: 'Basic Clean every Week',
    image: '/plans/Plusx.webp',
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
    id : 4,
    name: 'Elite',
    basePrice: 199,
    frecuency: '2 times at month',
    description: 'Basic Clean every Week',
    image: '/plans/Premium.webp',
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
  }
 
];

export default Plans;