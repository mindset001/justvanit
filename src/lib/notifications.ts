export type NotificationItem = {
  emoji: string;
  title: string;
  timeAgo: string;
  subEmoji: string;
  subtitle: string;
  body: string[];
};

export const NOTIFICATIONS: NotificationItem[] = [
  {
    emoji: "🚚",
    title: "Great News: Your Next Order is Ready to Go!",
    timeAgo: "2 Hours Ago",
    subEmoji: "🎉",
    subtitle: "Order Completed: Just 24 Hours Until Your Next Adventure!",
    body: [
      "Hello! Your recent move is officially complete—great job! 🎉 We're excited to assist you with your next journey. Make sure you're prepared for what's next!",
      "Just a friendly reminder that we're here to help you every step of the way! 🏠",
    ],
  },
  {
    emoji: "🚚",
    title: "Awesome Update: Your Next Moving Truck is Ready!",
    timeAgo: "3 Minutes Ago",
    subEmoji: "🎊",
    subtitle: "Order Completed: Your Truck is Ready for the Next Move!",
    body: [
      "Hello! Your last move is done—time to celebrate! 🎉 We hope you're ready for your next adventure. Please ensure everything is set for loading!",
      "Just a quick reminder that we're here to support you as you move forward! 🏠",
    ],
  },
];
