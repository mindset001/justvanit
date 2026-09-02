export type Transaction = {
  jobId: string;
  type: string;
  amount: number;
  status: "Successful" | "Failed";
  date: string;
};

export const TRANSACTIONS: Transaction[] = [
  { jobId: "JV-88291", type: "Escrow Held", amount: 520, status: "Successful", date: "22/01/25" },
  { jobId: "JV-88291", type: "Payout", amount: 245, status: "Failed", date: "22/01/25" },
  { jobId: "JV-88291", type: "Payout", amount: 135, status: "Successful", date: "22/01/25" },
];
