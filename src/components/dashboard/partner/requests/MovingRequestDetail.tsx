"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  CalendarClock,
  Clock,
  Film,
  Locate,
  MapPin,
  Package,
  PlayCircle,
  ShieldCheck,
  Truck,
  XCircle,
} from "lucide-react";
import type { MovingRequest } from "@/lib/movingRequests";
import { netPayout } from "@/lib/movingRequests";
import { SuccessModal } from "../SuccessModal";
import { ResubmitQuoteModal } from "../ResubmitQuoteModal";

function money(n: number) {
  return `£${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function StatusBadge({ status }: { status: MovingRequest["status"] }) {
  if (status === "declined") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
        <XCircle className="size-3.5" />
        Declined
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
      <Truck className="size-3.5" />
      New Order
    </span>
  );
}

export function MovingRequestDetail({ request }: { request: MovingRequest }) {
  const [modal, setModal] = useState<"accepted" | "declined" | "quote-form" | "quote-submitted" | null>(
    null
  );
  const payout = netPayout(request.payment);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <a href="/partner/dashboard/requests" className="text-sm font-medium text-zinc-500 hover:text-zinc-700">
          ← Back
        </a>
        <span className="ml-2 text-lg font-bold uppercase tracking-wide text-zinc-900">
          Moving Request Details
        </span>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-zinc-500">
              Tracking ID <span className="font-semibold text-zinc-900">{request.trackingId}</span>
            </span>
            <StatusBadge status={request.status} />
            <span className="flex items-center gap-1.5 text-sm text-zinc-500">
              <Calendar className="size-4 text-zinc-400" />
              Moving Date <span className="font-semibold text-zinc-900">{request.date}</span>
            </span>
          </div>
          <p className="mt-2 text-sm text-zinc-400">Request received on {request.receivedOn}</p>
        </div>

        {request.status !== "declined" && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setModal("declined")}
              className="rounded-full border border-red-200 px-5 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
            >
              Decline Order
            </button>
            <button
              type="button"
              onClick={() => setModal("quote-form")}
              className="rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
            >
              Resubmit Quote
            </button>
            <button
              type="button"
              onClick={() => setModal("accepted")}
              className="rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Accept Order
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
            <p className="flex items-center gap-2 text-lg font-bold text-zinc-900">
              <Truck className="size-4.5 text-zinc-400" />
              Move Information
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-2.5 text-sm">
                <Locate className="mt-0.5 size-4 shrink-0 text-zinc-400" />
                <div>
                  <p className="text-zinc-500">Moving From</p>
                  <p className="font-semibold text-zinc-900">{request.from.split(" - ")[0]}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <MapPin className="mt-0.5 size-4 shrink-0 text-zinc-400" />
                <div>
                  <p className="text-zinc-500">Moving To</p>
                  <p className="font-semibold text-zinc-900">{request.to.split(" - ")[0]}</p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 border-t border-zinc-100 pt-5 sm:grid-cols-3">
              <div>
                <p className="text-xs text-zinc-500">Property Type</p>
                <p className="mt-0.5 text-sm font-semibold text-zinc-900">{request.propertyType}</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500">Floor Level</p>
                <p className="mt-0.5 text-sm font-semibold text-zinc-900">{request.floorLevel}</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500">Logistics</p>
                <p className="mt-0.5 text-sm text-zinc-700">
                  Elevator : <span className="font-semibold">{request.elevator ? "Yes" : "No"}</span>
                </p>
                <p className="text-sm text-zinc-700">
                  Parking : <span className="font-semibold">{request.parking ? "Provided" : "Not Provided"}</span>
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-indigo-50/60 p-4">
                <p className="text-xs text-zinc-500">Moving Date</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-zinc-900">
                  <CalendarClock className="size-4 text-zinc-400" />
                  {request.date}
                </p>
              </div>
              <div className="rounded-xl bg-indigo-50/60 p-4">
                <p className="text-xs text-zinc-500">Time Window</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-zinc-900">
                  <Clock className="size-4 text-zinc-400" />
                  {request.timeWindow}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
            <p className="text-lg font-bold text-zinc-900">Inventory Overview</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {request.inventory.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-sm text-zinc-700"
                >
                  <Package className="size-3.5 text-zinc-400" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
            <p className="text-lg font-bold text-zinc-900">Elite Services &amp; Special Handling</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
              {request.eliteServices.map((service) => (
                <span key={service} className="inline-flex items-center gap-1.5 text-sm text-zinc-700">
                  <ShieldCheck className="size-4 text-emerald-500" />
                  {service}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 text-sm text-zinc-700">
                <ShieldCheck className="size-4 text-emerald-500" />
                {request.specialHandling}
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
            <p className="text-lg font-bold text-zinc-900">Media Gallery</p>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {Array.from({ length: request.mediaCount - 1 }).map((_, i) => (
                <div key={i} className="flex aspect-square items-center justify-center rounded-xl bg-zinc-100">
                  <Film className="size-4 text-zinc-300" />
                </div>
              ))}
              <div className="flex aspect-square items-center justify-center rounded-xl bg-zinc-200">
                <PlayCircle className="size-6 text-zinc-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
            <p className="text-lg font-bold text-zinc-900">Payment Breakdown</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {request.payment.estimatedAmount !== null && (
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Estimated Amount</span>
                  <span className="font-semibold text-zinc-900">
                    {money(request.payment.estimatedAmount)}
                  </span>
                </div>
              )}
              {request.payment.resubmittedQuoteAmount !== null && (
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Resubmitted Quote Amount</span>
                  <span className="font-semibold text-zinc-900">
                    {money(request.payment.resubmittedQuoteAmount)}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Gross Quoted Amount</span>
                <span className="font-semibold text-zinc-900">
                  {money(request.payment.grossQuotedAmount)}
                </span>
              </div>
              <div className="flex items-center justify-between text-red-600">
                <span>Platform Fee (12%)</span>
                <span className="font-semibold">-{money(request.payment.platformFee)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Insurance Premium</span>
                <span className="font-semibold text-zinc-900">
                  -{money(request.payment.insurancePremium)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">VAT</span>
                <span className="font-semibold text-zinc-900">-{money(request.payment.vat)}</span>
              </div>

              <div className="mt-2 flex items-center justify-between border-t border-zinc-100 pt-4">
                <span className="font-semibold text-zinc-900">Net Payout</span>
                <span className="text-2xl font-bold text-zinc-900">{money(payout)}</span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-500 p-5">
            <div className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                <ShieldCheck className="size-4.5" />
              </span>
              <div>
                <p className="text-base font-bold text-white">Escrow Protection</p>
                <p className="mt-1 text-sm leading-relaxed text-white/80">
                  Your Funds are held securely in escrow until the job is successfully completed
                  and verified. Rest easy.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
            <p className="text-lg font-bold text-zinc-900">Moving Customer Details</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="relative size-9 shrink-0 overflow-hidden rounded-full bg-zinc-100">
                <Image src={request.customerPhotoUrl} alt={request.customerName} fill sizes="36px" className="object-cover" />
              </span>
              <p className="text-sm font-semibold text-zinc-900">{request.customerName}</p>
            </div>
          </div>
        </div>
      </div>

      {modal === "accepted" && (
        <SuccessModal
          title="Moving Order Accepted"
          description="You've accepted the moving request. The customer has been notified to pay and secure the booking. Once payment is confirmed, the order will be finalized and added to your Moving Tasks for execution."
          onClose={() => setModal(null)}
        />
      )}

      {modal === "declined" && (
        <SuccessModal
          title="Moving Order Declined"
          description="You've declined this moving request. The customer will be notified and can choose another moving partner."
          onClose={() => setModal(null)}
        />
      )}

      {modal === "quote-form" && (
        <ResubmitQuoteModal onClose={() => setModal(null)} onSubmit={() => setModal("quote-submitted")} />
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
