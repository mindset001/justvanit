"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Ban,
  CalendarClock,
  CheckCircle2,
  Clock,
  Download,
  Film,
  Locate,
  Mail,
  MapPin,
  Package,
  Phone,
  PlayCircle,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import type { ManagedJob } from "@/lib/movingManagement";
import { jobNetPayout } from "@/lib/movingManagement";
import { SuccessModal } from "../SuccessModal";

function money(n: number) {
  return `£${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function StatusBadge({ status }: { status: ManagedJob["status"] }) {
  if (status === "completed") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
        <CheckCircle2 className="size-3.5" />
        Completed
      </span>
    );
  }
  if (status === "cancelled") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
        <Ban className="size-3.5" />
        Cancelled
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
      <Truck className="size-3.5" />
      Active Order
    </span>
  );
}

export function MovingJobDetail({ job }: { job: ManagedJob }) {
  const [modal, setModal] = useState<"completed" | "cancelled" | null>(null);
  const payout = jobNetPayout(job.payment);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <a href="/partner/dashboard/management" className="text-sm font-medium text-zinc-500 hover:text-zinc-700">
          ← Back
        </a>
        <span className="ml-2 text-lg font-bold uppercase tracking-wide text-zinc-900">
          Moving Job Details
        </span>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-zinc-500">
              Tracking ID <span className="font-semibold text-zinc-900">{job.trackingId}</span>
            </span>
            <StatusBadge status={job.status} />
            <span className="flex items-center gap-1.5 text-sm text-zinc-500">
              <CalendarClock className="size-4 text-zinc-400" />
              Moving Date <span className="font-semibold text-zinc-900">{job.date}</span>
            </span>
          </div>
        </div>

        {job.status === "active" && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setModal("cancelled")}
              className="rounded-full border border-red-200 px-5 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
            >
              Cancel Order
            </button>
            <button
              type="button"
              onClick={() => setModal("completed")}
              className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              <CheckCircle2 className="size-4" />
              Mark Order Completed
            </button>
          </div>
        )}

        {job.status === "completed" && (
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
          >
            <Download className="size-4" />
            Download Receipts
          </button>
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
                  <p className="font-semibold text-zinc-900">{job.from.split(" - ")[0]}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <MapPin className="mt-0.5 size-4 shrink-0 text-zinc-400" />
                <div>
                  <p className="text-zinc-500">Moving To</p>
                  <p className="font-semibold text-zinc-900">{job.to.split(" - ")[0]}</p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 border-t border-zinc-100 pt-5 sm:grid-cols-3">
              <div>
                <p className="text-xs text-zinc-500">Property Type</p>
                <p className="mt-0.5 text-sm font-semibold text-zinc-900">{job.propertyType}</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500">Floor Level</p>
                <p className="mt-0.5 text-sm font-semibold text-zinc-900">{job.floorLevel}</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500">Logistics</p>
                <p className="mt-0.5 text-sm text-zinc-700">
                  Elevator : <span className="font-semibold">{job.elevator ? "Yes" : "No"}</span>
                </p>
                <p className="text-sm text-zinc-700">
                  Parking : <span className="font-semibold">{job.parking ? "Provided" : "Not Provided"}</span>
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-indigo-50/60 p-4">
                <p className="text-xs text-zinc-500">Moving Date</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-zinc-900">
                  <CalendarClock className="size-4 text-zinc-400" />
                  {job.date}
                </p>
              </div>
              <div className="rounded-xl bg-indigo-50/60 p-4">
                <p className="text-xs text-zinc-500">Time Window</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-zinc-900">
                  <Clock className="size-4 text-zinc-400" />
                  {job.timeWindow}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
            <p className="text-lg font-bold text-zinc-900">Inventory Overview</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.inventory.map((item, i) => (
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
              {job.eliteServices.map((service) => (
                <span key={service} className="inline-flex items-center gap-1.5 text-sm text-zinc-700">
                  <ShieldCheck className="size-4 text-emerald-500" />
                  {service}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 text-sm text-zinc-700">
                <ShieldCheck className="size-4 text-emerald-500" />
                {job.specialHandling}
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
            <p className="text-lg font-bold text-zinc-900">Media Gallery</p>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {Array.from({ length: job.mediaCount - 1 }).map((_, i) => (
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
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Gross Quoted Amount</span>
                <span className="font-semibold text-zinc-900">{money(job.payment.grossQuotedAmount)}</span>
              </div>
              <div className="flex items-center justify-between text-red-600">
                <span>Platform Fee (12%)</span>
                <span className="font-semibold">
                  {job.payment.platformFee === null ? "Nil" : `-${money(job.payment.platformFee)}`}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Insurance Premium</span>
                <span className="font-semibold text-zinc-900">
                  {job.payment.insurancePremium === null ? "Nil" : `-${money(job.payment.insurancePremium)}`}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">VAT</span>
                <span className="font-semibold text-zinc-900">
                  {job.payment.vat === null ? "Nil" : `-${money(job.payment.vat)}`}
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between border-t border-zinc-100 pt-4">
                <span className="font-semibold text-zinc-900">Net Payout</span>
                <span className="text-2xl font-bold text-zinc-900">
                  {payout === null ? "Nil" : money(payout)}
                </span>
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
            <p className="text-lg font-bold text-zinc-900">
              {job.status === "active" ? "Moving Customer Details" : "Moving Customer Details & Rating"}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <span className="relative size-9 shrink-0 overflow-hidden rounded-full bg-zinc-100">
                <Image src={job.customerPhotoUrl} alt={job.customerName} fill sizes="36px" className="object-cover" />
              </span>
              <p className="text-sm font-semibold text-zinc-900">{job.customerName}</p>
            </div>

            {job.status === "active" && (
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-100 pt-4">
                <div className="flex items-center gap-2">
                  <Mail className="size-4 text-zinc-400" />
                  <div>
                    <p className="text-xs text-zinc-500">Contact Email</p>
                    <p className="text-sm font-semibold text-zinc-900">{job.customerEmail}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="size-4 text-zinc-400" />
                  <div>
                    <p className="text-xs text-zinc-500">Phone Number</p>
                    <p className="text-sm font-semibold text-zinc-900">{job.customerPhone}</p>
                  </div>
                </div>
                <div className="flex w-full items-center gap-3">
                  <button
                    type="button"
                    className="flex-1 rounded-full border border-zinc-200 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
                  >
                    Send Email
                  </button>
                  <button
                    type="button"
                    className="flex-1 rounded-full bg-indigo-600 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
                  >
                    Call
                  </button>
                </div>
              </div>
            )}

            {job.status === "completed" && job.review && (
              <div className="mt-4 rounded-xl border border-zinc-100 p-4">
                <p className="text-sm leading-relaxed text-zinc-600">{job.review.text}</p>
                <div className="mt-3 flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`size-4 ${
                        i < Math.round(job.review!.rating) ? "fill-amber-400 text-amber-400" : "text-zinc-200"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-zinc-500">{job.review.rating} rating</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {modal === "completed" && (
        <SuccessModal
          title="Order Marked Completed"
          description="Great work! This job has been marked as completed and moved to your Completed Jobs. The payout will be released once the customer confirms."
          onClose={() => setModal(null)}
        />
      )}

      {modal === "cancelled" && (
        <SuccessModal
          title="Order Cancelled"
          description="This order has been cancelled and the customer has been notified. No funds will be transferred for this job."
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}
