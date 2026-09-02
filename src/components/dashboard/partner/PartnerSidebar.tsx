"use client";

import Link from "next/link";
import {
  Award,
  Headphones,
  LayoutGrid,
  LogOut,
  PackageSearch,
  Settings2,
  Star,
  User,
  Wallet,
  Bell,
} from "lucide-react";

const MAIN_MENU = [
  { label: "Overview", href: "/partner/dashboard", icon: LayoutGrid },
  { label: "Moving Request", href: "/partner/dashboard/requests", icon: PackageSearch },
  { label: "Moving Management", href: "/partner/dashboard/management", icon: Settings2 },
  { label: "Earnings", href: "/partner/dashboard/earnings", icon: Wallet },
];

const SETTINGS_MENU = [
  { label: "Account", href: "/partner/dashboard/account", icon: User },
  { label: "Review & Rating", href: "/partner/dashboard/reviews", icon: Star },
  { label: "Help & Support Centre", href: "/partner/dashboard/support", icon: Headphones },
  { label: "Notifications", href: "/partner/dashboard/notifications", icon: Bell },
  { label: "Monetization/ Badge", href: "/partner/dashboard/monetization", icon: Award },
];

export function PartnerSidebar({ active = "Overview" }: { active?: string }) {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-zinc-100 bg-white">
      <div className="px-6 py-6">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-zinc-900">
          JUST<span className="text-brand-600">VANIT.</span>
        </Link>
      </div>

      <nav className="flex flex-1 flex-col gap-6 overflow-y-auto px-4">
        <div>
          <p className="px-2 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">
            Mainmenu
          </p>
          <div className="mt-2 flex flex-col gap-1">
            {MAIN_MENU.map(({ label, href, icon: Icon }) => {
              const isActive = label === active;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "border border-indigo-100 bg-indigo-50 text-indigo-600"
                      : "text-zinc-500 hover:bg-zinc-50"
                  }`}
                >
                  <Icon className="size-4.5" />
                  {label}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <p className="px-2 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">
            Settings
          </p>
          <div className="mt-2 flex flex-col gap-1">
            {SETTINGS_MENU.map(({ label, href, icon: Icon }) => {
              const isActive = label === active;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "border border-indigo-100 bg-indigo-50 text-indigo-600"
                      : "text-zinc-500 hover:bg-zinc-50"
                  }`}
                >
                  <Icon className="size-4.5" />
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="flex items-center gap-3 border-t border-zinc-100 p-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
          DM
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-zinc-900">Delly Moving Ltd</p>
          <p className="truncate text-xs text-zinc-400">dellymovingltd@hotm...</p>
        </div>
        <button
          type="button"
          aria-label="Log out"
          className="flex size-8 shrink-0 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600"
        >
          <LogOut className="size-4" />
        </button>
      </div>
    </aside>
  );
}
