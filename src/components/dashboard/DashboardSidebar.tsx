"use client";

import { Bell, ClipboardList, Headphones, LogOut, MapPin, User } from "lucide-react";

export type DashboardTab = "track" | "history" | "support" | "notification";

const NAV_ITEMS: { key: DashboardTab; label: string; icon: typeof MapPin }[] = [
  { key: "track", label: "Track", icon: MapPin },
  { key: "history", label: "History", icon: ClipboardList },
  { key: "support", label: "Support", icon: Headphones },
  { key: "notification", label: "Notification", icon: Bell },
];

export function DashboardSidebar({
  active,
  onChange,
}: {
  active: DashboardTab;
  onChange: (tab: DashboardTab) => void;
}) {
  return (
    <aside className="flex w-24 shrink-0 flex-col items-center justify-between border-r border-zinc-100 bg-white py-6">
      <nav className="flex flex-col items-center gap-5">
        {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onChange(key)}
              className="flex flex-col items-center gap-1.5"
            >
              <span
                className={`flex size-10 items-center justify-center rounded-xl ${
                  isActive ? "bg-indigo-50 text-indigo-600" : "text-zinc-400 hover:bg-zinc-50"
                }`}
              >
                <Icon className="size-4.5" />
              </span>
              <span
                className={`text-[11px] font-medium ${isActive ? "text-indigo-600" : "text-zinc-400"}`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="flex flex-col items-center gap-3">
        <button
          type="button"
          aria-label="Log out"
          className="flex size-9 items-center justify-center rounded-lg text-red-500 hover:bg-red-50"
        >
          <LogOut className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Profile"
          className="flex size-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700"
        >
          <User className="size-4" />
        </button>
      </div>
    </aside>
  );
}
