import { ShieldCheck } from "lucide-react";

export function EscrowBanner() {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-gradient-to-br from-brand-600 to-indigo-700 p-5 text-white">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15">
        <ShieldCheck className="size-5" />
      </span>
      <div>
        <p className="text-sm font-semibold">Escrow Protection</p>
        <p className="mt-1 text-xs leading-relaxed text-white/80">
          Your Funds are held securely in escrow until the job is successfully completed and
          verified. Rest easy.
        </p>
      </div>
    </div>
  );
}
