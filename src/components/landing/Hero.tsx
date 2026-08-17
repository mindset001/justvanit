import { Star, ArrowRight, PlayCircle, ArrowUpRight } from "lucide-react";
import { QuoteForm } from "./QuoteForm";
import Image from "next/image";
import Truck from "../../../public/images/truck.png";
import Lady from "../../../public/images/lady.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(#000000CC, #000000CC), url(/images/vanit-hero.jpg)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24 lg:px-10">
        <div className="text-white">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full ">
            <span className="flex size-10 items-center justify-center rounded-full bg-white">
              <Image src={Truck} alt="Truck" className="size-6" />
            </span>
            <span className="text-xs font-medium leading-tight text-white/90">
              <span className="font-semibold text-white">100+</span> Partners
              <br />
              Served <span className="font-semibold text-white">5k+</span> Customer
            </span>
          </div>

          <h1 className="max-w-xl text-[64px] font-[600] leading-[1.1] tracking-tight sm:text-[64px]">
            Moving Made More Easy Within the UK
          </h1>

          <div className="my-5 h-px w-full bg-white/20" />

          <p className="max-w-md text-[20px] leading-relaxed text-white/70 sm:text-sm">
            Moving made easy, stress-free, and cheap with JustVanIt, where you can{" "}
            <span className="font-semibold text-white">
              COMPARE QUOTE
            </span>{" "}
            from our different verified, independent Moving partners, that operate all within the UK.
          </p>



          <div className="flex items-center gap-3 mt-10">
            <span className="flex size-8 items-center justify-center rounded-full bg-white">
              <Image src={Lady} alt="Lady" className="size-7 rounded-full" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Loved the services</p>
              <p className="text-xs text-white/60">100% Satisfied</p>
            </div>
            <span className="text-white/30">/</span>
            <div className="flex items-center gap-1">
              <Star className="size-4 fill-[#787A7D] text-[#787A7D]" />
              <span className="text-sm font-semibold text-white">4.9</span>
            </div>
          </div>
          <div className="my-5 h-px w-full bg-white/20" />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#tracking"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Track Moving
            </a>
            <a
              href="#tracking"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              How It Works
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
