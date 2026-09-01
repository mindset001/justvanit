export type Quote = {
  id: string;
  company: string;
  tagline?: string;
  rating: number;
  reviews: number;
  completedMoves: number;
  arrival: string;
  vehicle: string;
  insurance: boolean;
  movers: number;
  packingMaterial: boolean;
  price: number;
};

export const QUOTES: Quote[] = [
  {
    id: "reallymoving",
    company: "Reallymoving Ltd",
    rating: 4.9,
    reviews: 124,
    completedMoves: 52,
    arrival: "Oct 24, 08:00 AM",
    vehicle: "Luton Van (Tail Lift)",
    insurance: true,
    movers: 2,
    packingMaterial: true,
    price: 450,
  },
  {
    id: "anyvan",
    company: "ANYVAN Ltd",
    tagline: "Move Anything, Anywhere",
    rating: 4.4,
    reviews: 205,
    completedMoves: 200,
    arrival: "Oct 24, 08:00 AM",
    vehicle: "Luton Van (Tail Lift)",
    insurance: true,
    movers: 2,
    packingMaterial: true,
    price: 320,
  },
  {
    id: "pickfords",
    company: "Pickfords",
    rating: 4.6,
    reviews: 312,
    completedMoves: 480,
    arrival: "Oct 24, 09:30 AM",
    vehicle: "Luton Van (Tail Lift)",
    insurance: true,
    movers: 3,
    packingMaterial: true,
    price: 410,
  },
  {
    id: "britannia",
    company: "Britannia Movers",
    rating: 4.3,
    reviews: 178,
    completedMoves: 96,
    arrival: "Oct 24, 10:00 AM",
    vehicle: "Transit Van",
    insurance: true,
    movers: 2,
    packingMaterial: false,
    price: 295,
  },
];
