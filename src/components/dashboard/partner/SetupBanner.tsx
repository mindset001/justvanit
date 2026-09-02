import { ArrowRight, Bell, MessageSquare } from "lucide-react";

export function SetupBanner({ name = "John Doe" }: { name?: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-500 p-8">
      <div className="pointer-events-none absolute -left-10 top-0 size-48 rounded-full border-8 border-white/10" />
      <span className="pointer-events-none absolute right-40 top-8 flex size-9 rotate-6 items-center justify-center rounded-xl bg-white/15">
        <MessageSquare className="size-4 text-white/70" />
      </span>
      <span className="pointer-events-none absolute right-16 top-24 flex size-10 -rotate-6 items-center justify-center rounded-full bg-white/15">
        <Bell className="size-4.5 text-white/70" />
      </span>
      <span className="pointer-events-none absolute right-6 top-6 size-8 rotate-12 rounded-lg bg-rose-400/40" />
      <span className="pointer-events-none absolute right-32 bottom-6 flex gap-1">
        <span className="size-1.5 rounded-full bg-white/50" />
        <span className="size-1.5 rounded-full bg-white/50" />
        <span className="size-1.5 rounded-full bg-white/50" />
      </span>

      <div className="relative max-w-lg">
        <p className="text-xl font-bold text-white sm:text-2xl">
          Complete Your Account Set Up, {name}!
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/80">
          You&apos;re almost there in landing your first job! Please share your payout bank
          details, and take a moment to review your availability and revenue structure to ensure
          everything is in order.
        </p>
        <a
          href="/partner/dashboard/account"
          className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
        >
          Account Set Up
          <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}
