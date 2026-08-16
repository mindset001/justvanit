const NOTIFICATIONS = [
  {
    emoji: "🚚",
    title: "Exciting News: Your Move is Just Around the Corner!",
    time: "2Hrs Ago",
    subEmoji: "⏰",
    subtitle: "Countdown to Moving Day: Just 24 Hours Left!",
    paragraphs: [
      "Hey there! Your big moving day is just around the corner—less than 24 hours to go! 🎉 We hope you're as thrilled as we are about this exciting new journey. Make sure everything is packed and ready to roll!",
      "Just a friendly reminder that your moving day is almost here! Are you all set and packed up? We can't wait for you to kick off this new chapter in your new home! 🏡",
    ],
  },
  {
    emoji: "🚛",
    title: "Great News: Your Moving Truck Has Arrived!",
    time: "3Mins Ago",
    subEmoji: "⏰",
    subtitle: "Moving Day is Here: Your Truck is Waiting!",
    paragraphs: [
      "Hey there! The moment has finally arrived—your moving truck is outside and ready to go! 🎉 We hope you're just as excited as we are about this new adventure. Double-check that everything is packed and ready to load!",
      "Just a quick reminder that it's time to start your journey in your new home! 🏡",
    ],
  },
];

export function NotificationPanel() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-zinc-900">Notification</h1>
      <p className="mt-1 text-sm text-zinc-500">View all your notification here</p>

      <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
        <p className="text-sm font-bold text-red-600">New</p>

        <div className="mt-3 flex flex-col divide-y divide-zinc-100">
          {NOTIFICATIONS.map((notification, i) => (
            <div key={i} className="py-4 first:pt-0 last:pb-0">
              <div className="flex flex-wrap items-baseline gap-2">
                <p className="text-sm font-bold text-zinc-900">
                  {notification.emoji} {notification.title}
                </p>
                <span className="text-xs text-zinc-400">{notification.time}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-600">
                {notification.subEmoji} {notification.subtitle}
              </p>
              <div className="mt-2 flex flex-col gap-2">
                {notification.paragraphs.map((paragraph, j) => (
                  <p key={j} className="text-sm leading-relaxed text-zinc-500">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
