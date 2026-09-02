import { TrendingUp } from "lucide-react";

export function MonthlyInsights() {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-100">
      <p className="flex items-center gap-2 text-lg font-bold text-zinc-900">
        <span className="flex size-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500">
          <TrendingUp className="size-4" />
        </span>
        Monthly Insights
      </p>

      <div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-500">Conversation Rate</span>
          <span className="font-semibold text-zinc-900">24.8%</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
          <div className="h-full rounded-full bg-indigo-500" style={{ width: "24.8%" }} />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-500">Quote Accuracy</span>
          <span className="font-semibold text-zinc-900">92%</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
          <div className="h-full rounded-full bg-emerald-500" style={{ width: "92%" }} />
        </div>
      </div>

      <div className="rounded-xl bg-indigo-50 p-4">
        <p className="text-sm font-semibold text-indigo-900">Pro Tip</p>
        <p className="mt-1 text-xs leading-relaxed text-indigo-700">
          Accepting moving quote or resend quotes sent within 1 hour have a 3x higher booking
          rate.
        </p>
      </div>
    </div>
  );
}
