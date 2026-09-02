export type Message = {
  author: string;
  role: "customer" | "support";
  timestamp: string;
  text: string;
  attachment?: string;
};

export type SupportTicket = {
  id: string;
  code: string;
  title: string;
  status: "Active" | "Resolved";
  createdAt: string;
  preview: string;
  timeAgo: string;
  messages: Message[];
};

export const SUPPORT_TICKETS: SupportTicket[] = [
  {
    id: "jv-98231-fragile",
    code: "#JV-98231",
    title: "Fragile Item damage claim",
    status: "Active",
    createdAt: "2024-01-15 14:30",
    preview: "Mirror arrived with a massive crack across the center. Need immediate replacement…",
    timeAgo: "2m ago",
    messages: [
      {
        author: "Delly Moving Ltd",
        role: "customer",
        timestamp: "2024-01-15 14:30",
        text: "Mirror arrived with a massive crack across the center. Need immediate replacement or compensation for the damage.",
      },
      {
        author: "Alice Johnson",
        role: "support",
        timestamp: "2024-01-15 15:15",
        text: "Hello! I'm sorry to hear about the damage. Could you share a photo of the item so we can process your claim?",
      },
    ],
  },
  {
    id: "jv-98231-missing",
    code: "#JV-98231",
    title: "Missing Appliances Report During Relocation",
    status: "Resolved",
    createdAt: "2024-01-10 09:12",
    preview:
      "Hello, I wanted to bring to your attention that during my last move (#JV-mv962g7) with your company, several household appliances went missing. We would greatly appreciate your help in resolving this issue.",
    timeAgo: "2m ago",
    messages: [
      {
        author: "Delly Moving Ltd",
        role: "customer",
        timestamp: "2024-01-10 09:12",
        text: "Hello, I wanted to bring to your attention that during my last move (#JV-mv962g7) with your company, several household appliances went missing. We would greatly appreciate your help in resolving this issue.",
      },
      {
        author: "Alice Johnson",
        role: "support",
        timestamp: "2024-01-10 10:02",
        text: "Thanks for flagging this — we located the appliances and arranged redelivery. Let us know if anything else is missing!",
      },
    ],
  },
  {
    id: "tx380273094u88",
    code: "TICKET-TX380273094u88",
    title: "Staff Misconduct",
    status: "Active",
    createdAt: "2024-01-15 14:30",
    preview:
      "Hi, I'm really frustrated with how my apartment move was handled. The staff were unprofessional and didn't follow through on their commitments.",
    timeAgo: "2h ago",
    messages: [
      {
        author: "Delly Moving Ltd",
        role: "customer",
        timestamp: "2024-01-15 14:30",
        text: "Hi, I'm really frustrated with how my apartment move was handled. The staff were unprofessional and didn't follow through on their commitments. Can someone help me address this?",
        attachment: "screenshot-error.png",
      },
      {
        author: "Alice Johnson",
        role: "support",
        timestamp: "2024-01-15 15:15",
        text: "Hello! Thanks for reaching out. I'm sorry to hear about your experience during the move. Let me look into this for you. Could you provide more details about what happened?",
      },
      {
        author: "Delly Moving Ltd",
        role: "customer",
        timestamp: "2024-01-15 15:45",
        text: "I had issues with the movers not showing up on time and being careless with my belongings. I expected better service, especially since I paid for a premium package.",
      },
      {
        author: "Alice Johnson",
        role: "support",
        timestamp: "2024-01-15 15:15",
        text: "I appreciate you sharing that with me. I'll investigate this matter further. Can you let me know the date of your move and any specific incidents that stood out?",
      },
    ],
  },
];

export function getSupportTicket(id: string) {
  return SUPPORT_TICKETS.find((t) => t.id === id);
}
