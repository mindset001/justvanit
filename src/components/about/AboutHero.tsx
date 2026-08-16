import { Package, Sofa, Truck, Warehouse } from "lucide-react";

const COLLAGE = [
  { icon: Truck, offset: "mt-10", from: "from-zinc-700", to: "to-zinc-900" },
  { icon: Sofa, offset: "mt-0", from: "from-indigo-600", to: "to-indigo-900" },
  { icon: Package, offset: "mt-14", from: "from-zinc-800", to: "to-black" },
  { icon: Warehouse, offset: "mt-4", from: "from-brand-600", to: "to-brand-900" },
];

export function AboutHero() {
  return (
    <section className="bg-white pb-16 pt-16 sm:pt-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">About Us</h1>
        <p className="mt-3 text-sm text-zinc-500 sm:text-base">
          Connecting you to the cheapest and budget friendly Moving company in your area.
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-start justify-center gap-4 px-6">
        {COLLAGE.map(({ icon: Icon, offset, from, to }, i) => (
          <div
            key={i}
            className={`h-56 w-44 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br sm:h-64 sm:w-56 ${offset} ${from} ${to}`}
          >
            <div className="flex h-full items-center justify-center">
              <Icon className="size-10 text-white/20" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
