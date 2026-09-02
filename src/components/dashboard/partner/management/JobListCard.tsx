"use client";

import { useRouter } from "next/navigation";
import { ArrowDown, Locate, Truck } from "lucide-react";
import type { ManagedJob } from "@/lib/movingManagement";

export function JobListCard({ job }: { job: ManagedJob }) {
  const router = useRouter();
  const payout = job.listNetPayout;

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
            <p className="text-sm text-zinc-500">Net Payout</p>
            <p className="text-2xl font-bold text-zinc-900">{payout === null ? "Nil" : `£${payout}`}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-3 rounded-b-2xl border-t border-zinc-100 bg-zinc-50 px-5 py-4">
        <button
          type="button"
          onClick={() => router.push(`/partner/dashboard/management/${job.id}`)}
          className="rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
