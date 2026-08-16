import { ArrowUpRight, Package, Sofa, Truck } from "lucide-react";

const COLLAGE = [
  { icon: Truck, offset: "", from: "from-zinc-700", to: "to-zinc-950" },
  { icon: Package, offset: "sm:mt-8", from: "from-indigo-600", to: "to-indigo-900" },
  { icon: Sofa, offset: "", from: "from-brand-600", to: "to-brand-900" },
  { icon: Truck, offset: "sm:mt-8", from: "from-zinc-800", to: "to-black" },
];

export function MoveSmarter() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Move Smarter. Compare Trusted Movers in Minutes.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-500">
            Get quotes from verified moving companies, compare prices, secure your payment with
            escrow, and move with confidence.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <a
              href="/get-quote"
              className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Get Moving Quote
            </a>
            <a
              href="/tracking"
              className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-700 hover:text-navy-900"
            >
              Track Moving
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {COLLAGE.map(({ icon: Icon, offset, from, to }, i) => (
            <div
              key={i}
              className={`aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br ${from} ${to} ${offset}`}
            >
              <div className="flex h-full items-center justify-center">
                <Icon className="size-8 text-white/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
