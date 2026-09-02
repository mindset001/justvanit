export type RequestStatus = "new" | "pending" | "declined";

export type InventoryItem = { label: string };

export type MovingRequest = {
  id: string;
  trackingId: string;
  date: string;
  from: string;
  to: string;
  estimatedPrice: number;
  quotedPrice: number | null;
  status: RequestStatus;
  receivedOn: string;
  propertyType: string;
  floorLevel: string;
  elevator: boolean;
  parking: boolean;
  timeWindow: string;
  inventory: InventoryItem[];
  eliteServices: string[];
  specialHandling: string;
  mediaCount: number;
  customerName: string;
  customerPhotoUrl: string;
  payment: {
    estimatedAmount: number | null;
    resubmittedQuoteAmount: number | null;
    grossQuotedAmount: number;
    platformFee: number;
    insurancePremium: number;
    vat: number;
  };
};

const INVENTORY: InventoryItem[] = [
  { label: "Tv" },
  { label: "3- Seater Sofa" },
  { label: "3- Seater Sofa" },
  { label: "3- Seater Sofa" },
  { label: "3- Seater Sofa" },
  { label: "3- Seater Sofa" },
  { label: "3- Seater Sofa" },
  { label: "3- Seater Sofa" },
];

export const MOVING_REQUESTS: MovingRequest[] = [
  {
    id: "jv-88291-new-1",
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B1 1QU",
    estimatedPrice: 320,
    quotedPrice: null,
    status: "new",
    receivedOn: "Oct 24, 2026 at 10:45 AM",
    propertyType: "3 Bed Room Apartment",
    floorLevel: "4th Floor",
    elevator: true,
    parking: true,
    timeWindow: "08:00 AM - 11:00 AM",
    inventory: INVENTORY,
    eliteServices: ["Full Concierge Packing", "Professional Dismantling"],
    specialHandling: "Fragile Item:",
    mediaCount: 6,
    customerName: "John Doe",
    customerPhotoUrl: "/images/lady2.jpg",
    payment: {
      estimatedAmount: null,
      resubmittedQuoteAmount: null,
      grossQuotedAmount: 1240,
      platformFee: 148.8,
      insurancePremium: 25,
      vat: 25,
    },
  },
  {
    id: "jv-88291-new-2",
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B1 1QU",
    estimatedPrice: 320,
    quotedPrice: null,
    status: "new",
    receivedOn: "Oct 24, 2026 at 10:45 AM",
    propertyType: "3 Bed Room Apartment",
    floorLevel: "4th Floor",
    elevator: true,
    parking: true,
    timeWindow: "08:00 AM - 11:00 AM",
    inventory: INVENTORY,
    eliteServices: ["Full Concierge Packing", "Professional Dismantling"],
    specialHandling: "Fragile Item:",
    mediaCount: 6,
    customerName: "John Doe",
    customerPhotoUrl: "/images/lady2.jpg",
    payment: {
      estimatedAmount: null,
      resubmittedQuoteAmount: null,
      grossQuotedAmount: 1240,
      platformFee: 148.8,
      insurancePremium: 25,
      vat: 25,
    },
  },
  {
    id: "jv-88291-pending-1",
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B1 1QU",
    estimatedPrice: 420,
    quotedPrice: 650,
    status: "pending",
    receivedOn: "Oct 24, 2026 at 10:45 AM",
    propertyType: "3 Bed Room Apartment",
    floorLevel: "4th Floor",
    elevator: true,
    parking: true,
    timeWindow: "08:00 AM - 11:00 AM",
    inventory: INVENTORY,
    eliteServices: ["Full Concierge Packing", "Professional Dismantling"],
    specialHandling: "Fragile Item:",
    mediaCount: 6,
    customerName: "John Doe",
    customerPhotoUrl: "/images/lady2.jpg",
    payment: {
      estimatedAmount: 420,
      resubmittedQuoteAmount: 650,
      grossQuotedAmount: 650,
      platformFee: 40.8,
      insurancePremium: 5,
      vat: 25,
    },
  },
  {
    id: "jv-88291-pending-2",
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B1 1QU",
    estimatedPrice: 320,
    quotedPrice: 450,
    status: "pending",
    receivedOn: "Oct 24, 2026 at 10:45 AM",
    propertyType: "3 Bed Room Apartment",
    floorLevel: "4th Floor",
    elevator: true,
    parking: true,
    timeWindow: "08:00 AM - 11:00 AM",
    inventory: INVENTORY,
    eliteServices: ["Full Concierge Packing", "Professional Dismantling"],
    specialHandling: "Fragile Item:",
    mediaCount: 6,
    customerName: "John Doe",
    customerPhotoUrl: "/images/lady2.jpg",
    payment: {
      estimatedAmount: 320,
      resubmittedQuoteAmount: 450,
      grossQuotedAmount: 450,
      platformFee: 54,
      insurancePremium: 5,
      vat: 25,
    },
  },
  {
    id: "jv-88291-pending-3",
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B1 1QU",
    estimatedPrice: 125,
    quotedPrice: 250,
    status: "pending",
    receivedOn: "Oct 24, 2026 at 10:45 AM",
    propertyType: "3 Bed Room Apartment",
    floorLevel: "4th Floor",
    elevator: true,
    parking: true,
    timeWindow: "08:00 AM - 11:00 AM",
    inventory: INVENTORY,
    eliteServices: ["Full Concierge Packing", "Professional Dismantling"],
    specialHandling: "Fragile Item:",
    mediaCount: 6,
    customerName: "John Doe",
    customerPhotoUrl: "/images/lady2.jpg",
    payment: {
      estimatedAmount: 125,
      resubmittedQuoteAmount: 250,
      grossQuotedAmount: 250,
      platformFee: 30,
      insurancePremium: 5,
      vat: 25,
    },
  },
  {
    id: "jv-88291-declined-1",
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B1 1QU",
    estimatedPrice: 320,
    quotedPrice: 320,
    status: "declined",
    receivedOn: "Oct 24, 2026 at 10:45 AM",
    propertyType: "3 Bed Room Apartment",
    floorLevel: "4th Floor",
    elevator: true,
    parking: true,
    timeWindow: "08:00 AM - 11:00 AM",
    inventory: INVENTORY,
    eliteServices: ["Full Concierge Packing", "Professional Dismantling"],
    specialHandling: "Fragile Item:",
    mediaCount: 6,
    customerName: "John Doe",
    customerPhotoUrl: "/images/lady2.jpg",
    payment: {
      estimatedAmount: null,
      resubmittedQuoteAmount: null,
      grossQuotedAmount: 1240,
      platformFee: 148.8,
      insurancePremium: 25,
      vat: 25,
    },
  },
  {
    id: "jv-88291-declined-2",
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B1 1QU",
    estimatedPrice: 320,
    quotedPrice: 320,
    status: "declined",
    receivedOn: "Oct 24, 2026 at 10:45 AM",
    propertyType: "3 Bed Room Apartment",
    floorLevel: "4th Floor",
    elevator: true,
    parking: true,
    timeWindow: "08:00 AM - 11:00 AM",
    inventory: INVENTORY,
    eliteServices: ["Full Concierge Packing", "Professional Dismantling"],
    specialHandling: "Fragile Item:",
    mediaCount: 6,
    customerName: "John Doe",
    customerPhotoUrl: "/images/lady2.jpg",
    payment: {
      estimatedAmount: null,
      resubmittedQuoteAmount: null,
      grossQuotedAmount: 1240,
      platformFee: 148.8,
      insurancePremium: 25,
      vat: 25,
    },
  },
];

export function getMovingRequest(id: string) {
  return MOVING_REQUESTS.find((r) => r.id === id);
}

export function netPayout(payment: MovingRequest["payment"]) {
  return payment.grossQuotedAmount - payment.platformFee - payment.insurancePremium - payment.vat;
}
