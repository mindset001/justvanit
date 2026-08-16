import { Music2, Truck, Dumbbell, Home } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col items-start gap-4">
          <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 ring-1 ring-inset ring-brand-100">
            Service Covered
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            <span className="text-navy-900">Moving Services</span>{" "}
            <span className="text-zinc-400">our moving partners offers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:grid-rows-2">
          <div className="overflow-hidden rounded-2xl bg-zinc-100 sm:row-span-1">
            <div className="relative flex h-56 flex-col justify-end bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-950 p-5">
              <Music2 className="absolute right-5 top-5 size-10 text-white/20" />
              <p className="text-lg font-semibold text-white">Piano & Specialty Moving</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-zinc-50 ring-1 ring-zinc-100 sm:row-span-1">
            <div className="flex h-full flex-col justify-between p-5">
              <div>
                <p className="text-base font-semibold text-navy-900">Office & Commercial Moving</p>
                <p className="mt-1 text-2xl font-bold text-brand-600">100% Save</p>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-zinc-500">
                Office & Commercial Moving made easy with your trusted moving Partners for
                Desks, chairs, filing cabinets, goods and offices.
              </p>
              <Truck className="mt-4 size-8 text-brand-300" />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-navy-900 sm:row-span-2">
            <div className="relative flex h-full min-h-[19rem] flex-col justify-end bg-gradient-to-b from-navy-800 via-navy-900 to-black p-6">
              <Dumbbell className="absolute right-6 top-6 size-12 text-white/15" />
              <p className="text-lg font-semibold text-white">Heavy Equipment & Storage Moving</p>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                Heavy Equipment like Gym equipment, Generator, storage etc, are handled by
                specialized Moving Partners.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-zinc-50 ring-1 ring-zinc-100 sm:col-span-2">
            <div className="flex h-full flex-col justify-between gap-6 p-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-lg font-semibold text-navy-900">
                  Household & Residential & Apartment Moving
                </p>
                <p className="mt-2 max-w-sm text-xs leading-relaxed text-zinc-500">
                  Household items & Appliances such as Furniture, clothes, kitchen stuff, TV,
                  bed, fridge, washing machine, etc, are moved and handled by Moving Companies
                  with utmost care.
                </p>
              </div>
              <div className="flex h-32 w-full items-center justify-center rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 sm:w-40 sm:shrink-0">
                <Home className="size-10 text-brand-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
