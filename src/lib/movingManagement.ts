export type JobStatus = "active" | "completed" | "cancelled";

export type ManagedJob = {
  id: string;
  trackingId: string;
  date: string;
  from: string;
  to: string;
  status: JobStatus;
  listNetPayout: number | null;
  propertyType: string;
  floorLevel: string;
  elevator: boolean;
  parking: boolean;
  timeWindow: string;
  inventory: { label: string }[];
  eliteServices: string[];
  specialHandling: string;
  mediaCount: number;
  customerName: string;
  customerPhotoUrl: string;
  customerEmail?: string;
  customerPhone?: string;
  review?: { text: string; rating: number };
  payment: {
    grossQuotedAmount: number;
    platformFee: number | null;
    insurancePremium: number | null;
    vat: number | null;
  };
};

const INVENTORY = [
  { label: "Tv" },
  { label: "3- Seater Sofa" },
  { label: "3- Seater Sofa" },
  { label: "3- Seater Sofa" },
  { label: "3- Seater Sofa" },
  { label: "3- Seater Sofa" },
  { label: "3- Seater Sofa" },
  { label: "3- Seater Sofa" },
];

const SHARED_DETAILS = {
  propertyType: "3 Bed Room Apartment",
  floorLevel: "4th Floor",
  elevator: true,
  parking: true,
  timeWindow: "08:00 AM - 11:00 AM",
  inventory: INVENTORY,
  eliteServices: ["Full Concierge Packing", "Professional Dismantling"],
  specialHandling: "Fragile Item:",
  mediaCount: 6,
};

export const MANAGED_JOBS: ManagedJob[] = [
  {
    id: "jv-88291-active-1",
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B1 1QU",
    status: "active",
    listNetPayout: 320,
    ...SHARED_DETAILS,
    customerName: "John Doe",
    customerPhotoUrl: "/images/lady2.jpg",
    customerEmail: "johndoe@gmail.com",
    customerPhone: "+44 2586 2794",
    payment: { grossQuotedAmount: 1240, platformFee: 148.8, insurancePremium: 25, vat: 25 },
  },
  {
    id: "jv-88291-active-2",
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B1 1QU",
    status: "active",
    listNetPayout: 320,
    ...SHARED_DETAILS,
    customerName: "John Doe",
    customerPhotoUrl: "/images/lady2.jpg",
    customerEmail: "johndoe@gmail.com",
    customerPhone: "+44 2586 2794",
    payment: { grossQuotedAmount: 1240, platformFee: 148.8, insurancePremium: 25, vat: 25 },
  },
  {
    id: "jv-88291-completed-1",
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B1 1QU",
    status: "completed",
    listNetPayout: 320,
    ...SHARED_DETAILS,
    customerName: "Elizabeth Mei",
    customerPhotoUrl: "/images/lady2.jpg",
    review: {
      text: "I recently moved using JustVanIt, and I couldn't be happier with the experience! The compare quote feature allowed me to easily find affordable moving companies that fit my budget. I received multiple quotes within minutes, which made it simple to choose the best option.",
      rating: 4.1,
    },
    payment: { grossQuotedAmount: 1240, platformFee: 148.8, insurancePremium: 25, vat: 25 },
  },
  {
    id: "jv-88291-completed-2",
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B1 1QU",
    status: "completed",
    listNetPayout: 320,
    ...SHARED_DETAILS,
    customerName: "Elizabeth Mei",
    customerPhotoUrl: "/images/lady2.jpg",
    review: {
      text: "The movers were professional and efficient, ensuring my belongings arrived safely. I highly recommend JustVanIt to anyone looking to save money on their next move!",
      rating: 4.9,
    },
    payment: { grossQuotedAmount: 1240, platformFee: 148.8, insurancePremium: 25, vat: 25 },
  },
  {
    id: "jv-88291-cancelled-1",
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B1 1QU",
    status: "cancelled",
    listNetPayout: null,
    ...SHARED_DETAILS,
    customerName: "Elizabeth Mei",
    customerPhotoUrl: "/images/lady2.jpg",
    payment: { grossQuotedAmount: 1240, platformFee: null, insurancePremium: null, vat: null },
  },
  {
    id: "jv-88291-cancelled-2",
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B1 1QU",
    status: "cancelled",
    listNetPayout: null,
    ...SHARED_DETAILS,
    customerName: "Elizabeth Mei",
    customerPhotoUrl: "/images/lady2.jpg",
    payment: { grossQuotedAmount: 1240, platformFee: null, insurancePremium: null, vat: null },
  },
];

export function getManagedJob(id: string) {
  return MANAGED_JOBS.find((j) => j.id === id);
}

export function jobNetPayout(payment: ManagedJob["payment"]) {
  if (payment.platformFee === null || payment.insurancePremium === null || payment.vat === null) {
    return null;
  }
  return payment.grossQuotedAmount - payment.platformFee - payment.insurancePremium - payment.vat;
}
