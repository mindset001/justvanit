import Link from "next/link";
import { Bell, LayoutGrid, Settings, Truck } from "lucide-react";

export function SetupHeader() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-zinc-100 bg-white px-8 py-4">
      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-400">
        <LayoutGrid className="size-3.5" />
        Mainmenu
        <span className="text-zinc-300">/</span>
        <span className="text-zinc-900">Account Set Up</span>
      </div>
      <Link href="/" className="hidden text-xl font-extrabold tracking-tight text-zinc-900 sm:block">
        JUST<span className="text-brand-600">VANIT.</span>
      </Link>
      <div className="flex items-center gap-2.5">
        <button
          type="button"
          aria-label="Settings"
          className="flex size-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-500 hover:bg-zinc-50"
        >
          <Settings className="size-4.5" />
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="flex size-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-500 hover:bg-zinc-50"
        >
          <Bell className="size-4.5" />
        </button>
        <button
          type="button"
          aria-label="Moving requests"
          className="relative flex size-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-500 hover:bg-zinc-50"
        >
          <Truck className="size-4.5" />
          <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
            3+
          </span>
        </button>
      </div>
    </header>
  );
}
