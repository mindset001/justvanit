import Link from "next/link";
import { Bell, User } from "lucide-react";

export function DashboardTopbar() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-100 bg-white px-8 py-4">
      <Link href="/" className="text-xl font-extrabold tracking-tight text-zinc-900">
        JUST<span className="text-brand-600">VANIT.</span>
      </Link>

      <div className="flex items-center gap-4">
        <span className="relative flex size-9 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-50">
          <Bell className="size-4.5" />
          <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
            23
          </span>
        </span>
        <span className="flex size-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
          <User className="size-4" />
        </span>
      </div>
    </header>
  );
}
