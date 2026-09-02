import { Pencil } from "lucide-react";

const COMPANY_INFO = [
  { label: "Company Name", value: "Delly Moving Company" },
  { label: "Date Joined", value: "23rd July, 2026" },
  { label: "Company Address", value: "dellymovingltd@outlook.com" },
  { label: "Phone Number", value: "+441 5985 55446" },
  { label: "Company House Reg No.", value: "JHandwd99w9wd4d" },
];

const MOVING_SERVICES = ["Residential & Apartment Moving", "Commercial & Office Moving"];
const OPERATIONAL_BOUND = ["Manchester", "Spur"];
const VEHICLES = ["Ford Van", "3-Wheeler"];

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-zinc-200 px-3 py-1.5 text-sm text-zinc-700">
      {label}
    </span>
  );
}

export function CompanyTab() {
  return (
    <div>
      <p className="text-lg font-bold text-zinc-900">Company Details</p>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
                DM
              </span>
              <div>
                <p className="text-base font-bold text-zinc-900">Delly Moving Ltd</p>
                <p className="text-xs text-zinc-400">CP7KD28202</p>
              </div>
            </div>
            <button type="button" aria-label="Edit company" className="text-zinc-400 hover:text-zinc-600">
              <Pencil className="size-4" />
            </button>
          </div>

          <p className="mt-5 text-sm font-semibold text-zinc-900">Company Information</p>
          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-4">
            {COMPANY_INFO.map((item) => (
              <div key={item.label}>
                <p className="text-xs text-zinc-400">{item.label}</p>
                <p className="mt-0.5 text-sm font-semibold text-zinc-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
          <div className="flex items-start justify-between">
            <p className="text-base font-bold text-zinc-900">Operational Information</p>
            <button type="button" aria-label="Edit operational information" className="text-zinc-400 hover:text-zinc-600">
              <Pencil className="size-4" />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs text-zinc-400">Moving Services</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {MOVING_SERVICES.map((s) => (
                  <Tag key={s} label={s} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-zinc-400">Operational Bound</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {OPERATIONAL_BOUND.map((s) => (
                  <Tag key={s} label={s} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-zinc-400">No. Of Fleet</p>
              <p className="mt-0.5 text-sm font-semibold text-zinc-900">5</p>
            </div>
            <div>
              <p className="text-xs text-zinc-400">Vehicle Of Operation</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {VEHICLES.map((s) => (
                  <Tag key={s} label={s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
