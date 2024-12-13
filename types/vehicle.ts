interface Vehicle {
  id: number;
  name: string;
  description: string;
  Basic?: number; 
  Deluxe?: number;
  Premium?: number;
  Elite?: number;
  Image: string; 
}

export type { Vehicle }; 