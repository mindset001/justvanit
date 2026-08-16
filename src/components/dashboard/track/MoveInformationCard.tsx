import { Building2, MapPin, Truck } from "lucide-react";

export function MoveInformationCard() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="flex items-center gap-2.5 text-zinc-900">
        <Truck className="size-5" />
        <span className="text-base font-semibold">Move Information</span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-start gap-2.5">
          <Building2 className="mt-0.5 size-4 shrink-0 text-zinc-400" />
          <div>
            <p className="text-sm text-zinc-500">Moving From</p>
            <p className="text-sm font-semibold text-zinc-900">4, Fleet Street, London, EC4A 2DQ</p>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <MapPin className="mt-0.5 size-4 shrink-0 text-zinc-400" />
          <div>
            <p className="text-sm text-zinc-500">Moving To</p>
            <p className="text-sm font-semibold text-zinc-900">4, Fleet Street, London, EC4A 2DQ</p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 border-t border-zinc-100 pt-5 sm:grid-cols-3">
        <div>
          <p className="text-xs text-zinc-500">Property Type</p>
          <p className="mt-0.5 text-sm font-semibold text-zinc-900">3 Bed Room Apartment</p>
        </div>
        <div>
          <p className="text-xs text-zinc-500">Floor Level</p>
          <p className="mt-0.5 text-sm font-semibold text-zinc-900">4th Floor</p>
        </div>
        <div>
          <p className="text-xs text-zinc-500">Logistics</p>
          <p className="mt-0.5 text-sm text-zinc-700">
            Elevator : <span className="font-semibold">Yes</span>
          </p>
          <p className="text-sm text-zinc-700">
            Parking : <span className="font-semibold">Provided</span>
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-indigo-50/60 p-4">
          <p className="text-xs text-zinc-500">Moving Date</p>
          <p className="mt-0.5 text-sm font-semibold text-zinc-900">Oct 24, 2026</p>
        </div>
        <div className="rounded-xl bg-indigo-50/60 p-4">
          <p className="text-xs text-zinc-500">Time Window</p>
          <p className="mt-0.5 text-sm font-semibold text-zinc-900">08:00 AM - 11:00 AM</p>
        </div>
      </div>
    </div>
  );
}
