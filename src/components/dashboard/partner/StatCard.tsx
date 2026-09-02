import { ArrowUp } from "lucide-react";
import { MiniSparkline } from "./MiniSparkline";

export function StatCard({
  label,
  value,
  change,
  changeLabel,
  icon: Icon,
  hasData,
}: {
  label: string;
  value: string;
  change: string;
  changeLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  hasData: boolean;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">{label}</p>
        <Icon className="size-4 text-zinc-400" />
      </div>
      <div className="mt-3 flex items-end justify-between gap-2">
        <p className="text-2xl font-bold text-zinc-900">{value}</p>
        <MiniSparkline flat={!hasData} />
      </div>
      <p className="mt-2 flex items-center gap-1 text-xs">
        {hasData && <ArrowUp className="size-3 text-emerald-500" />}
        <span className={hasData ? "font-semibold text-emerald-500" : "font-semibold text-zinc-400"}>
          {change}
        </span>
        <span className="text-zinc-400">{changeLabel}</span>
      </p>
    </div>
  );
}
