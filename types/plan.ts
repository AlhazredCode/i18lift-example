interface Feature {
    featureid: number;
    icon: string;
    title: string;
  }
  
  interface Plan {
    id: number;
    name: string;
    basePrice: number ;
    frecuency: string;
    description: string;
    image: string;
    features: Feature[]; 
  }
  

  export type { Feature, Plan }; 