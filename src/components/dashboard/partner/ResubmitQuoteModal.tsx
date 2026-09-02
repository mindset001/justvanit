"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

export function ResubmitQuoteModal({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (amount: string) => void;
}) {
  const [amount, setAmount] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl">
        <div className="flex items-start justify-between">
          <p className="text-2xl font-bold text-zinc-900">Resubmit Quote</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-zinc-400 hover:text-zinc-600"
          >
            <X className="size-5" />
          </button>
        </div>

        <form
          className="mt-6 flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(amount);
          }}
        >
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-zinc-900">Amount</span>
            <div className="flex overflow-hidden rounded-xl border border-zinc-200 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
              <span className="flex items-center gap-1 bg-indigo-50 px-4 text-sm font-semibold text-zinc-700">
                £
                <ChevronDown className="size-3.5 text-zinc-400" />
              </span>
              <input
                type="number"
                min={0}
                step="0.01"
                required
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full py-3.5 px-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
              />
            </div>
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-indigo-600 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Submit Quote
          </button>
        </form>
      </div>
    </div>
  );
}
