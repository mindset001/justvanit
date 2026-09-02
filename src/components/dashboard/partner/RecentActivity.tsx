import { Banknote, CheckCircle2, Clock, Star, Truck } from "lucide-react";

export type ActivityItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  time: string;
};

const DEFAULT_ACTIVITY: ActivityItem[] = [
  {
    icon: CheckCircle2,
    title: "Booking Confirmed",
    description: "Job JV-88291 from John Doe",
    time: "2H ago",
  },
  {
    icon: Truck,
    title: "Moving Completed",
    description: "Job JV-88291 from John Doe",
    time: "2H ago",
  },
  {
    icon: Banknote,
    title: "Payment Disbursed",
    description: "Payment from Job JV-88291 has been paid",
    time: "2H ago",
  },
  {
    icon: Star,
    title: "New Review",
    description: "4.9 stars rating from John Doe",
    time: "2H ago",
  },
  {
    icon: Truck,
    title: "Moving Completed",
    description: "Job JV-88291 from John Doe",
    time: "2H ago",
  },
  {
    icon: Truck,
    title: "Moving Completed",
    description: "Job JV-88291 from John Doe",
    time: "2H ago",
  },
];

export function RecentActivity({ items = DEFAULT_ACTIVITY }: { items?: ActivityItem[] }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-100">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-lg font-bold text-zinc-900">
          <Clock className="size-4.5 text-zinc-400" />
          Recent Activity
        </p>
        <a href="#" className="text-sm font-medium text-zinc-400 hover:text-zinc-600">
          View All
        </a>
      </div>

      <div className="mt-4 flex flex-col divide-y divide-zinc-100">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 py-3.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
              <item.icon className="size-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-zinc-900">{item.title}</p>
              <p className="truncate text-xs text-zinc-500">{item.description}</p>
            </div>
            <span className="shrink-0 text-xs text-zinc-400">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
