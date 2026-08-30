import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Grow from "../../../public/images/grow.jpg";
import House from "../../../public/images/house.jpg";
import VanitHero from "../../../public/images/vanit-hero.jpg";

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

        <div className="flex gap-4">
          <div className="flex w-1/2 flex-col gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={Grow}
                alt="Office & Commercial Moving"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={House}
                alt="Careful item handling"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative w-1/2 overflow-hidden rounded-2xl">
            <Image
              src={VanitHero}
              alt="Full-service moving"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
