import Image from "next/image";
import Piano from "../../../public/images/piano.jpg";
import Equipment from "../../../public/images/equip.png";
import House from "../../../public/images/house.jpg";
import Grow from "../../../public/images/grow.jpg";

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
          <div className="relative overflow-hidden rounded-2xl sm:row-span-1">
            <Image src={Piano} alt="Piano" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
            <div className="relative flex h-56 flex-col justify-between bg-gradient-to-b from-black/70 via-black/20 to-black/70 p-5">
              <div className="rounded-xl border border-brand-400/60 p-3">
                <p className="text-sm font-semibold text-white">
                  Move Pianos, pool tables, safes, glass/ art, antiques
                </p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-white/70">
                  Our expert moving partners use padded trucks and a skilled crew to ensure your
                  belongings are safe. We handle fragile items and instruments with the utmost
                  care, so you can trust us to protect what matters most.
                </p>
              </div>
              <p className="text-lg font-semibold text-white">Piano & Specialty Moving.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-zinc-50 ring-1 ring-zinc-100 sm:row-span-1">
            <div className="flex h-full flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-base font-semibold text-navy-900">Office & Commercial Moving</p>
                <p className="mt-1 text-2xl font-bold text-navy-900">100% Save</p>
                <p className="mt-3 max-w-[16rem] text-xs leading-relaxed text-zinc-500">
                  Office & Shop relocation Made easy with our moving partners to move your Desks,
                  chairs, filing cabinets, computers, servers, goods and others...
                </p>
              </div>
              <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl sm:h-full sm:w-40">
                <Image src={Grow} alt="Office & Commercial Moving" fill sizes="160px" className="object-cover" />
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-zinc-100 sm:row-span-2">
            <div className="relative flex h-full min-h-[19rem] flex-col justify-end p-4">
              <Image
                src={Equipment}
                alt="Heavy Equipment & Storage Moving"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-contain object-bottom p-4"
              />
              <div className="relative rounded-2xl bg-navy-900/95 p-5">
                <p className="text-base font-semibold text-white">
                  Heavy Equipment & Storage Moving
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/60">
                  Heavy Equipment like Gym equipment, Generators, storage items etc. are handled
                  by specialized Moving Partners.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-zinc-50 ring-1 ring-zinc-100 sm:col-span-2">
            <div className="flex h-full flex-col justify-between gap-6 sm:flex-row sm:items-stretch">
              <div className="flex flex-col justify-between p-6">
                <p className="text-lg font-semibold text-navy-900">
                  Household & Residential & Apartment Moving
                </p>
                <p className="mt-2 max-w-sm text-xs leading-relaxed text-zinc-500">
                  Household Items & Appliances such as Furniture, clothes, kitchen stuff, TV,
                  bed, fridge, washing machine, etc were moved and handled by specialised Moving
                  Companies with uttermost care.
                </p>
              </div>
              <div className="relative h-48 w-full shrink-0 sm:h-auto sm:w-64">
                <Image src={House} alt="Household Moving" fill sizes="(max-width: 640px) 100vw, 256px" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
