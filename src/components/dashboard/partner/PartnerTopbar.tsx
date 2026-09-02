import { Bell, LayoutGrid, Search, Settings, Truck } from "lucide-react";

export function PartnerTopbar({ section = "Overview" }: { section?: string }) {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-zinc-100 bg-white px-8 py-4">
      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-400">
        <LayoutGrid className="size-3.5" />
        Mainmenu
        <span className="text-zinc-300">/</span>
        <span className="text-zinc-900">{section}</span>
      </div>

      <div className="relative hidden max-w-sm flex-1 sm:block">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-full border border-zinc-200 bg-white py-2.5 pl-10 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        />
      </div>

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
