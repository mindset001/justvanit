import { ArrowDown, ChevronDown, Download, Eye, MapPin, RotateCcw, Search, Star, Truck } from "lucide-react";

const RECORDS = [
  {
    status: "Completed" as const,
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B11QU",
    partner: "ANYVAN Ltd",
    rating: 4.4,
    reviews: 205,
    paymentStatus: "Payment Released",
    priceLabel: "Total Price",
    price: "£320",
  },
  {
    status: "Completed" as const,
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B11QU",
    partner: "ANYVAN Ltd",
    rating: 4.4,
    reviews: 205,
    paymentStatus: "Payment Released",
    priceLabel: "Total Price",
    price: "£320",
  },
  {
    status: "Cancelled" as const,
    trackingId: "JV-88291",
    date: "Oct 24, 2026",
    from: "Bristol, United Kingdom - BS1 5TY",
    to: "Birmingham, United Kingdom - B11QU",
    partner: "ANYVAN Ltd",
    rating: 4.4,
    reviews: 205,
    paymentStatus: "Fully Refunded",
    priceLabel: "Quoted Price",
    price: "£320",
  },
];

function RecordCard({ record }: { record: (typeof RECORDS)[number] }) {
  const isCancelled = record.status === "Cancelled";

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white">
      <div className="grid grid-cols-1 gap-4 p-5 lg:grid-cols-[1fr_1.3fr_1fr] lg:items-center lg:divide-x lg:divide-zinc-100">
        <div className="flex flex-wrap items-center gap-3 lg:pr-4">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
              isCancelled ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-700"
            }`}
          >
            {isCancelled ? "✕" : "✓"} {record.status}
          </span>
          <span className="text-xs text-zinc-500">
            Tracking ID <span className="font-semibold text-zinc-900">{record.trackingId}</span>
          </span>
          <span className="text-xs text-zinc-500">{record.date}</span>
        </div>

        <div className="flex flex-col gap-1.5 lg:px-4">
          <div className="flex items-center gap-2 text-sm text-zinc-700">
            <MapPin className="size-3.5 text-zinc-400" />
            Moving From <span className="font-semibold text-zinc-900">{record.from}</span>
          </div>
          <ArrowDown className="ml-1 size-3.5 text-zinc-300" />
          <div className="flex items-center gap-2 text-sm text-zinc-700">
            <Truck className="size-3.5 text-zinc-400" />
            Moving To <span className="font-semibold text-zinc-900">{record.to}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:px-4">
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded bg-indigo-50 text-[10px] font-bold text-indigo-600">
              AV
            </span>
            <p className="text-sm font-semibold text-zinc-900">{record.partner}</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-zinc-500">
            <span className="font-semibold text-zinc-900">{record.rating}</span>
            <Star className="size-3 fill-amber-400 text-amber-400" />
            <span>({record.reviews} Reviews)</span>
          </div>
          <span
            className={`w-fit rounded-full px-2 py-0.5 text-[11px] font-medium ${
              isCancelled ? "bg-zinc-100 text-zinc-500" : "bg-emerald-50 text-emerald-700"
            }`}
          >
            {record.paymentStatus}
          </span>
        </div>

        <div className="lg:pl-4">
          <p className="text-xs text-zinc-500">{record.priceLabel}</p>
          <p className="text-xl font-bold text-zinc-900">{record.price}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 border-t border-zinc-100 bg-zinc-50/60 px-5 py-3">
        <button className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50">
          <Download className="size-3.5" />
          Download Receipts
        </button>
        <button className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50">
          <Eye className="size-3.5" />
          View Details
        </button>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-700">
          <RotateCcw className="size-3.5" />
          Rebook Mover
        </button>
      </div>
    </div>
  );
}

export function HistoryPanel() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">History</h1>
          <p className="mt-1 text-sm text-zinc-500">Keep track of all your moving history here</p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full border border-zinc-200 bg-white py-2.5 pl-10 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {RECORDS.map((record, i) => (
          <RecordCard key={i} record={record} />
        ))}
      </div>

      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          Rows per page
          <div className="relative">
            <select className="appearance-none rounded-lg border border-zinc-200 bg-white py-1.5 pl-3 pr-7 text-sm text-zinc-900 focus:outline-none">
              <option>1</option>
              <option>5</option>
              <option>10</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 size-3.5 -translate-y-1/2 text-zinc-400" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-500 hover:bg-zinc-50">
            Previous
          </button>
          <button className="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-500 hover:bg-zinc-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
