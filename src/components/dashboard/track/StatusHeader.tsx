import { CheckCircle2, Download, Lock, RotateCcw } from "lucide-react";

export function StatusHeader({ trackingId }: { trackingId: string }) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <div>
          <p className="text-xs text-zinc-500">Tracking ID</p>
          <p className="text-sm font-bold text-zinc-900">{trackingId}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
          <CheckCircle2 className="size-3.5" />
          Move Completed
        </span>
        <div>
          <p className="text-xs text-zinc-500">Moving Date</p>
          <p className="text-sm font-bold text-zinc-900">Oct 24, 2026</p>
        </div>
        <div>
          <p className="flex items-center gap-1 text-xs text-zinc-500">
            <Lock className="size-3" />
            Escrow Status
          </p>
          <p className="text-sm font-bold text-zinc-900">Payment Secured</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
        >
          <Download className="size-3.5" />
          Download Receipts
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
        >
          <Download className="size-3.5" />
          Download Invoice
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-700"
        >
          <RotateCcw className="size-3.5" />
          Rebook Mover
        </button>
      </div>
    </div>
  );
}
