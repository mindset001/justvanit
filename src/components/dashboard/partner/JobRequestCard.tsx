"use client";

import { useState } from "react";
import { ArrowDown, Locate, Truck } from "lucide-react";
import { SuccessModal } from "./SuccessModal";
import { ResubmitQuoteModal } from "./ResubmitQuoteModal";

export type JobRequest = {
  trackingId: string;
  date: string;
  from: string;
  to: string;
  price: string;
};

type ModalState = "accepted" | "quote-form" | "quote-submitted" | null;

export function JobRequestCard({ job }: { job: JobRequest }) {
  const [modal, setModal] = useState<ModalState>(null);

  return (
    <div className="rounded-2xl bg-white ring-1 ring-zinc-100">
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-x-2 text-sm text-zinc-500">
          <span>Tracking ID</span>
          <span className="font-semibold text-zinc-900">{job.trackingId}</span>
          <span className="text-zinc-300">|</span>
          <span>{job.date}</span>
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <Locate className="size-4 shrink-0 text-zinc-400" />
              Moving From <span className="font-semibold text-zinc-900">{job.from}</span>
            </div>
            <div className="my-1 mx-auto flex size-6 items-center justify-center rounded-full bg-zinc-100 text-zinc-400">
              <ArrowDown className="size-3.5" />
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <Truck className="size-4 shrink-0 text-zinc-400" />
              Moving To <span className="font-semibold text-zinc-900">{job.to}</span>
            </div>
          </div>

          <div className="hidden self-stretch border-l border-zinc-200 sm:block" />

          <div className="sm:pl-6 sm:text-right">
            <p className="text-sm text-zinc-500">Estimated Price</p>
            <p className="text-2xl font-bold text-zinc-900">{job.price}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-3 rounded-b-2xl border-t border-zinc-100 bg-zinc-50 px-5 py-4">
        <button
          type="button"
          className="rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
        >
          View Details
        </button>
        <button
          type="button"
          onClick={() => setModal("quote-form")}
          className="rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
        >
          Submit Quote
        </button>
        <button
          type="button"
          onClick={() => setModal("accepted")}
          className="rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          Accept
        </button>
      </div>

      {modal === "accepted" && (
        <SuccessModal
          title="Moving Order Accepted"
          description="You've accepted the moving request. The customer has been notified to pay and secure the booking. Once payment is confirmed, the order will be finalized and added to your Moving Tasks for execution."
          onClose={() => setModal(null)}
        />
      )}

      {modal === "quote-form" && (
        <ResubmitQuoteModal
          onClose={() => setModal(null)}
          onSubmit={() => setModal("quote-submitted")}
        />
      )}

      {modal === "quote-submitted" && (
        <SuccessModal
          title="Quote Submitted"
          description="We've sent an email to the customer about the new quote."
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}
