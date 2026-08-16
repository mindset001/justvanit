import { CheckCircle2 } from "lucide-react";

const SERVICES = ["Full Concierge Packing", "Professional Dismantling"];

export function EliteServices() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <p className="text-base font-semibold text-zinc-900">Elite Services &amp; Special Handling</p>
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
        {SERVICES.map((service) => (
          <span key={service} className="inline-flex items-center gap-1.5 text-sm text-zinc-700">
            <CheckCircle2 className="size-4 text-emerald-600" />
            {service}
          </span>
        ))}
        <span className="inline-flex items-center gap-1.5 text-sm text-zinc-700">
          <CheckCircle2 className="size-4 text-emerald-600" />
          Fragile Item:
        </span>
      </div>
    </div>
  );
}
