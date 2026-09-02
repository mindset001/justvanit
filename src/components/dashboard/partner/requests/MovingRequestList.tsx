"use client";

import { useMemo, useState } from "react";
import { CalendarDays, ChevronDown, ChevronLeft, ChevronRight, Search, Truck } from "lucide-react";
import { MOVING_REQUESTS, type RequestStatus } from "@/lib/movingRequests";
import { RequestListCard } from "./RequestListCard";
import { MonthlyInsights } from "./MonthlyInsights";

const TABS: { key: RequestStatus; label: string }[] = [
  { key: "new", label: "New Request" },
  { key: "pending", label: "Pending Quote" },
  { key: "declined", label: "Declined Quote" },
];

export function MovingRequestList() {
  const [tab, setTab] = useState<RequestStatus>("new");
  const [query, setQuery] = useState("");

  const counts = useMemo(
    () => ({
      new: MOVING_REQUESTS.filter((r) => r.status === "new").length,
      pending: MOVING_REQUESTS.filter((r) => r.status === "pending").length,
      declined: MOVING_REQUESTS.filter((r) => r.status === "declined").length,
    }),
    []
  );

  const isSearching = query.trim().length > 0;

  const results = useMemo(() => {
    const base = MOVING_REQUESTS.filter((r) => r.status === tab);
    if (!isSearching) return base;
    const q = query.trim().toLowerCase();
    return base.filter(
      (r) =>
        r.trackingId.toLowerCase().includes(q) ||
        r.from.toLowerCase().includes(q) ||
        r.to.toLowerCase().includes(q)
    );
  }, [tab, query, isSearching]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-2xl font-bold text-zinc-900">Moving Request</p>
          <p className="mt-1 text-sm text-zinc-500">
            Review and quote for new residential and commercial moves.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
        >
          <CalendarDays className="size-4 text-zinc-400" />
          All
          <ChevronDown className="size-4 text-zinc-400" />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-100">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-500">New Request</p>
            <Truck className="size-4 text-zinc-400" />
          </div>
          <p className="mt-3 text-2xl font-bold text-zinc-900">{counts.new}</p>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-100">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-500">Pending Request</p>
            <Truck className="size-4 text-zinc-400" />
          </div>
          <p className="mt-3 text-2xl font-bold text-zinc-900">{counts.pending}</p>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-100">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-500">Declined Jobs</p>
            <Truck className="size-4 text-zinc-400" />
          </div>
          <p className="mt-3 text-2xl font-bold text-zinc-900">{counts.declined}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex rounded-full bg-zinc-100 p-1">
              {TABS.map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTab(key)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    tab === key
                      ? "bg-white text-zinc-900 shadow-sm"
                      : "text-zinc-500 hover:text-zinc-700"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search Here..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-56 rounded-full border border-zinc-200 py-2.5 pl-4 pr-10 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
              <Search className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
            </div>
          </div>

          {isSearching && (
            <p className="mt-4 text-sm text-zinc-500">
              Search Results: <span className="font-semibold text-zinc-900">{results.length} Found</span>
            </p>
          )}

          <div className="mt-4 flex flex-col gap-4">
            {results.length ? (
              results.map((request) => <RequestListCard key={request.id} request={request} />)
            ) : (
              <p className="rounded-2xl bg-white p-8 text-center text-sm text-zinc-400 ring-1 ring-zinc-100">
                No requests found.
              </p>
            )}
          </div>

          {!isSearching && (
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <label className="flex items-center gap-2 text-sm text-zinc-500">
                Rows per page
                <span className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 px-2.5 py-1 text-zinc-700">
                  1
                  <ChevronDown className="size-3.5 text-zinc-400" />
                </span>
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-500 hover:bg-zinc-50"
                >
                  <ChevronLeft className="size-4" />
                  Previous
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-500 hover:bg-zinc-50"
                >
                  Next
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        <MonthlyInsights />
      </div>
    </div>
  );
}
