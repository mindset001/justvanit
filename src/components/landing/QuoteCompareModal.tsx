"use client";

import { useState } from "react";
import {
  Box,
  CalendarDays,
  Check,
  CheckCircle2,
  ShieldCheck,
  Star,
  Truck,
  Users,
  X,
} from "lucide-react";
import { QUOTES, type Quote } from "@/lib/quotes";

export type { Quote };

export function PartnerBadge({ company, tagline }: { company: string; tagline?: string }) {
  return (
    <span className="inline-flex flex-col items-start rounded-lg border border-zinc-200 bg-white px-2.5 py-1">
      <span className="text-xs font-bold text-indigo-600">{company}</span>
      {tagline && <span className="text-[10px] text-zinc-400">{tagline}</span>}
    </span>
  );
}

export function FeaturePill({ icon: Icon, label }: { icon: typeof ShieldCheck; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600">
      <Icon className="size-3.5 text-zinc-400" />
      {label}
    </span>
  );
}

function QuoteCard({
  quote,
  selected,
  onSelect,
}: {
  quote: Quote;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full rounded-2xl border p-5 text-left transition-colors ${
        selected ? "border-indigo-400 bg-indigo-50/50" : "border-zinc-200 bg-zinc-50 hover:bg-zinc-100"
      }`}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        {selected && (
          <span className="flex size-5 shrink-0 items-center justify-center rounded-md border border-indigo-500 bg-white text-indigo-600">
            <Check className="size-3.5" />
          </span>
        )}

        <div className="flex min-w-0 flex-col gap-2 sm:w-48 sm:shrink-0">
          <PartnerBadge company={quote.company} tagline={quote.tagline} />
          <p className="text-lg font-semibold leading-tight text-zinc-900">{quote.company}</p>
          <span className="inline-flex w-fit items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
            <CheckCircle2 className="size-3.5" />
            Verified
          </span>
          <div className="flex items-center gap-1 text-sm text-zinc-600">
            <span className="font-semibold text-zinc-900">{quote.rating}</span>
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            <span className="text-zinc-400">({quote.reviews} Reviews)</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-zinc-500">
            <Truck className="size-3.5 text-indigo-500" />
            {quote.completedMoves} Complete Move
          </div>
        </div>

        <div className="hidden self-stretch border-l border-zinc-200 sm:block" />

        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <div className="flex items-center gap-1.5 text-sm text-zinc-600">
            <CalendarDays className="size-4 text-zinc-400" />
            Est Arrival: <span className="font-semibold text-zinc-900">{quote.arrival}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-zinc-600">
            <Truck className="size-4 text-zinc-400" />
            Vehicle <span className="font-semibold text-zinc-900">{quote.vehicle}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {quote.insurance && <FeaturePill icon={ShieldCheck} label="Insurance Included" />}
            <FeaturePill icon={Users} label={`${quote.movers} Movers`} />
            {quote.packingMaterial && <FeaturePill icon={Box} label="Packing Material" />}
          </div>
        </div>

        <div className="hidden self-stretch border-l border-zinc-200 sm:block" />

        <div className="sm:w-28 sm:shrink-0">
          <p className="text-sm text-zinc-500">Total Price</p>
          <p className="text-2xl font-bold text-zinc-900">£{quote.price}</p>
        </div>
      </div>
    </button>
  );
}

export function QuoteCompareModal({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (quote: Quote) => void;
}) {
  const [selectedId, setSelectedId] = useState(QUOTES[0].id);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col rounded-3xl bg-white shadow-2xl">
        <div className="flex items-start justify-between gap-4 p-8 pb-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900">
              Compare Your Quotes
            </h2>
            <p className="mt-2 max-w-md text-sm text-zinc-500">
              Select the moving partner that best fits your needs and budget. All movers are
              verified and secure.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex size-8 shrink-0 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex flex-col gap-4 overflow-y-auto px-8 pb-4">
          {QUOTES.map((quote) => (
            <QuoteCard
              key={quote.id}
              quote={quote}
              selected={selectedId === quote.id}
              onSelect={() => setSelectedId(quote.id)}
            />
          ))}
        </div>

        <div className="flex justify-end border-t border-zinc-100 p-6">
          <button
            type="button"
            onClick={() => {
              const quote = QUOTES.find((q) => q.id === selectedId);
              if (quote) onSubmit(quote);
            }}
            className="inline-flex items-center rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
