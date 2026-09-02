import { Pencil, Timer, Wallet } from "lucide-react";

const DAYS: { label: string; state: "primary" | "selected" | "off" }[] = [
  { label: "Monday", state: "primary" },
  { label: "Tuesday", state: "selected" },
  { label: "Wednesday", state: "selected" },
  { label: "Thursday", state: "off" },
  { label: "Friday", state: "selected" },
  { label: "Saturday", state: "selected" },
  { label: "Sunday", state: "off" },
];

const TIME_SLOTS = ["8:00 am - 12 Noon", "4:00 pm - 11 pm"];

export function AvailabilityRevenueTab() {
  return (
    <div>
      <p className="text-lg font-bold text-zinc-900">Availability &amp; Revenue Structure Settings</p>

      <div className="mt-4 flex max-w-md flex-col gap-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
          <div className="flex items-start justify-between">
            <p className="flex items-center gap-2 text-base font-bold text-zinc-900">
              <span className="flex size-8 items-center justify-center rounded-full ring-1 ring-zinc-200 text-zinc-500">
                <Timer className="size-4" />
              </span>
              Availability Settings
            </p>
            <button type="button" aria-label="Edit availability" className="text-zinc-400 hover:text-zinc-600">
              <Pencil className="size-4" />
            </button>
          </div>

          <p className="mt-5 text-sm font-semibold text-zinc-900">Availability</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {DAYS.map(({ label, state }) => (
              <span
                key={label}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  state === "primary"
                    ? "bg-indigo-600 text-white"
                    : state === "selected"
                      ? "border border-zinc-900 text-zinc-900"
                      : "text-zinc-300"
                }`}
              >
                {label}
              </span>
            ))}
          </div>

          <p className="mt-5 text-sm font-semibold text-zinc-900">Time Slots</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {TIME_SLOTS.map((slot) => (
              <span key={slot} className="rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700">
                {slot}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
          <div className="flex items-start justify-between">
            <p className="flex items-center gap-2 text-base font-bold text-zinc-900">
              <span className="flex size-8 items-center justify-center rounded-full ring-1 ring-zinc-200 text-zinc-500">
                <Wallet className="size-4" />
              </span>
              Revenue Structure Settings
            </p>
            <button type="button" aria-label="Edit revenue structure" className="text-zinc-400 hover:text-zinc-600">
              <Pencil className="size-4" />
            </button>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-zinc-400">Base Hourly Rate (Inc. 2 Crew)</p>
              <p className="mt-0.5 text-lg font-bold text-zinc-900">£ 25</p>
            </div>
            <div>
              <p className="text-xs text-zinc-400">Mileage Rate (Out of Area)</p>
              <p className="mt-0.5 text-lg font-bold text-zinc-900">£ 50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
