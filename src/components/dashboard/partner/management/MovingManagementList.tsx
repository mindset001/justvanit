"use client";

import { useMemo, useState } from "react";
import { CalendarDays, ChevronDown, ChevronLeft, ChevronRight, Search, Sparkles, Truck } from "lucide-react";
import { MANAGED_JOBS, type JobStatus } from "@/lib/movingManagement";
import { JobListCard } from "./JobListCard";
import { StatCard } from "../StatCard";

const TABS: { key: JobStatus; label: string }[] = [
  { key: "active", label: "Active Jobs" },
  { key: "completed", label: "Completed Jobs" },
  { key: "cancelled", label: "Declined & Cancel Jobs" },
];

export function MovingManagementList({ companyName = "Delly Moving Ltd" }: { companyName?: string }) {
  const [tab, setTab] = useState<JobStatus>("active");
  const [query, setQuery] = useState("");

  const counts = useMemo(
    () => ({
      active: MANAGED_JOBS.filter((j) => j.status === "active").length,
      completed: MANAGED_JOBS.filter((j) => j.status === "completed").length,
      cancelled: MANAGED_JOBS.filter((j) => j.status === "cancelled").length,
    }),
    []
  );

  const isSearching = query.trim().length > 0;

  const results = useMemo(() => {
    const base = MANAGED_JOBS.filter((j) => j.status === tab);
    if (!isSearching) return base;
    const q = query.trim().toLowerCase();
    return base.filter(
      (j) =>
        j.trackingId.toLowerCase().includes(q) ||
        j.from.toLowerCase().includes(q) ||
        j.to.toLowerCase().includes(q)
    );
  }, [tab, query, isSearching]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-2xl font-bold text-zinc-900">Hello, {companyName}</p>
          <p className="mt-1 text-sm text-zinc-500">
            Manage &amp; keep track of all activity regarding your moving job here
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <StatCard label="Total Jobs" value="238" change="+15%" changeLabel="Vs Last Week" icon={Truck} hasData />
        <StatCard
          label="Completed Jobs"
          value="234"
          change="+15%"
          changeLabel="Vs Last Week"
          icon={Truck}
          hasData
        />
        <StatCard label="Active Jobs" value="4" change="+15%" changeLabel="Vs Last Week" icon={Truck} hasData />
        <StatCard
          label="Declined & Cancel Jobs"
          value="0"
          change="+0%"
          changeLabel="Vs Last Week"
          icon={Truck}
          hasData
        />
        <StatCard label="Ratings" value="4.5" change="No. 15" changeLabel="Ranking" icon={Sparkles} hasData />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full bg-zinc-100 p-1">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                tab === key ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700"
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
        <p className="-mt-2 text-sm text-zinc-500">
          Search Results: <span className="font-semibold text-zinc-900">{results.length} Found</span>
        </p>
      )}

      <div className="flex flex-col gap-4">
        {results.length ? (
          results.map((job) => <JobListCard key={job.id} job={job} />)
        ) : (
          <p className="rounded-2xl bg-white p-8 text-center text-sm text-zinc-400 ring-1 ring-zinc-100">
            No jobs found.
          </p>
        )}
      </div>

      {!isSearching && (
        <div className="flex flex-wrap items-center justify-between gap-3">
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
  );
}
