import { CheckCircle2, Mail, Phone, ShieldCheck, Star, Truck } from "lucide-react";

export function MovingPartnerCard() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <p className="text-base font-semibold text-zinc-900">Moving Partners</p>

      <div className="mt-4 flex items-center gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white">
          <Truck className="size-5" />
        </span>
        <div>
          <div className="flex items-center gap-1.5">
            <p className="text-sm font-semibold text-zinc-900">Prime Mover Ltd</p>
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-medium text-indigo-600">
              <CheckCircle2 className="size-3" />
              Verified
            </span>
          </div>
          <div className="mt-0.5 flex items-center gap-1 text-xs text-zinc-500">
            <span className="font-semibold text-zinc-900">4.9</span>
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            <span>4.9 Star rating</span>
          </div>
        </div>
      </div>

      <span className="mt-3 inline-flex w-fit items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
        <ShieldCheck className="size-3.5" />
        Fully Insured
      </span>

      <div className="mt-4 flex flex-col gap-3 border-t border-zinc-100 pt-4">
        <div className="flex items-center gap-2.5">
          <Mail className="size-4 text-zinc-400" />
          <div>
            <p className="text-xs text-zinc-500">Contact Email</p>
            <p className="text-sm font-medium text-zinc-900">primemoverltd.outmail.uk</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <Phone className="size-4 text-zinc-400" />
          <div>
            <p className="text-xs text-zinc-500">Phone Number</p>
            <p className="text-sm font-medium text-zinc-900">+442 586 2794</p>
          </div>
        </div>
      </div>
    </div>
  );
}
