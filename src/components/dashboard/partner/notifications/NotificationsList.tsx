import { CalendarDays, ChevronDown } from "lucide-react";
import { NOTIFICATIONS } from "@/lib/notifications";

export function NotificationsList() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-2xl font-bold text-zinc-900">Notification</p>
          <p className="mt-1 text-sm text-zinc-500">View all your notification here</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
        >
          <CalendarDays className="size-4 text-zinc-400" />
          All
          <ChevronDown className="size-4 text-zinc-400" />
        </button>
      </div>

      <div>
        <p className="text-sm font-bold text-red-500">New</p>

        <div className="flex flex-col">
          {NOTIFICATIONS.map((item, i) => (
            <div
              key={i}
              className={`py-5 ${i < NOTIFICATIONS.length - 1 ? "border-b border-zinc-100" : ""}`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-base font-bold text-zinc-900">
                  {item.emoji} {item.title}
                </p>
                <span className="shrink-0 text-sm text-zinc-400">{item.timeAgo}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">
                {item.subEmoji} {item.subtitle}
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {item.body.map((paragraph, j) => (
                  <p key={j} className="text-sm leading-relaxed text-zinc-600">
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
