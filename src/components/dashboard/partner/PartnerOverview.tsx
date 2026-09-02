import { CalendarDays, ChevronDown, Sparkles, Truck, Wallet } from "lucide-react";
import { SetupBanner } from "./SetupBanner";
import { StatCard } from "./StatCard";
import { EarningChart } from "./EarningChart";
import { JobRequestCard, type JobRequest } from "./JobRequestCard";
import { RecentActivity } from "./RecentActivity";

const JOB_REQUESTS: JobRequest[] = [
  {
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B1 1QU",
    price: "£320",
  },
  {
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B1 1QU",
    price: "£320",
  },
  {
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B1 1QU",
    price: "£320",
  },
];

export function PartnerOverview({
  companyName = "Delly Moving Ltd",
  hasData = true,
}: {
  companyName?: string;
  hasData?: boolean;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-2xl font-bold text-zinc-900">Hello, {companyName}</p>
          <p className="mt-1 text-sm text-zinc-500">
            Here are the latest insight and overview from your customer interactions
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

      {!hasData && <SetupBanner name="John Doe" />}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="All Earnings"
          value={hasData ? "£ 42,961.93" : "£ 0.00"}
          change={hasData ? "+15%" : "+0%"}
          changeLabel="Vs Last Week"
          icon={Wallet}
          hasData={hasData}
        />
        <StatCard
          label="Total Jobs"
          value={hasData ? "238" : "0"}
          change={hasData ? "+15%" : "+0%"}
          changeLabel="Vs Last Week"
          icon={Truck}
          hasData={hasData}
        />
        <StatCard
          label="Active Jobs"
          value={hasData ? "4" : "0"}
          change={hasData ? "+15%" : "+0%"}
          changeLabel="Vs Last Week"
          icon={Truck}
          hasData={hasData}
        />
        <StatCard
          label="Ratings"
          value={hasData ? "4.5" : "0"}
          change={hasData ? "No. 15" : "No. 0"}
          changeLabel="Ranking"
          icon={Sparkles}
          hasData={hasData}
        />
      </div>

      <EarningChart hasData={hasData} />

      {hasData && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-zinc-900">Job Request</p>
              <a href="#" className="text-sm font-medium text-zinc-400 hover:text-zinc-600">
                View All
              </a>
            </div>
            <div className="mt-4 flex flex-col gap-4">
              {JOB_REQUESTS.map((job, i) => (
                <JobRequestCard key={i} job={job} />
              ))}
            </div>
          </div>

          <RecentActivity />
        </div>
      )}
    </div>
  );
}
