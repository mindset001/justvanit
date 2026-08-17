"use client";

import { useRef } from "react";
import { Star, User, ChevronLeft, ChevronRight, ArrowBigLeft, ArrowLeft, ArrowRight } from "lucide-react";
import Testimonial from "../../../public/images/testimonial.png";
import Image from "next/image";
const REVIEWS = [
  {
    quote:
      "I recently moved using JustVanIt, and I couldn't be happier with the experience! The compare quote feature allowed me to easily find affordable moving companies that fit my budget. I received multiple quotes within minutes, which made it simple to choose the best option.",
    name: "John Dabi",
    location: "Manchester, UK",
  },
  {
    quote:
      "The movers were professional and efficient, ensuring my belongings arrived safely. I highly recommend JustVanIt to anyone looking to save money on their next move!",
    name: "John Dabi",
    location: "Manchester, UK",
  },
  {
    quote:
      "I recently moved using JustVanIt, and I couldn't be happier with the experience! The compare quote feature allowed me to easily find affordable moving companies that fit my budget. I received multiple quotes within minutes, which made it simple to choose the best option. The movers were professional an...",
    name: "John Dabi",
    location: "Manchester, UK",
  },
  {
    quote:
      "I recently moved using JustVanIt, and I couldn't be happier with the experience! The compare quote feature allowed me to easily find affordable moving companies that fit my budget. I received multiple quotes within minutes, which made it simple to choose the best option. The mover...",
    name: "John Dabi",
    location: "Manchester, UK",
  },
];

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full shadow bg-white px-3 py-1 text-xs font-light text-zinc-500 ring-1 ring-inset ring-zinc-200">
            Testimonial
          </span>
          <h2 className="mx-auto mt-4 max-w-md text-[36px] tracking-tight text-navy-900 sm:text-4xl">
            Read Reviews, <span className="font-bold">Move <br></br> with confidence.</span>
          </h2>
          <p className="mt-4 text-sm text-zinc-500">
            <span className="font-bold text-navy-900">4.5</span>/5 Rating, Based on 5270 reviews
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:flex lg:items-start">
          <div className="flex flex-col text-left lg:w-[30%]">
            <span className="font-serif text-6xl font-black leading-none text-brand-600">
            
              <Image src={Testimonial} alt="Testimonial" className="size-16 rounded-full" />
            </span>
            <p className="text-[36px] font-light tracking-tight text-navy-900">
              What Our Customers are saying
            </p>

            <div className="mt-8 hidden gap-3 sm:flex justify-between">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                aria-label="Previous reviews"
                className="flex size-8 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:bg-white"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                aria-label="Next reviews"
                className="flex size-8 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:bg-white"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="w-72 shrink-0 snap-start rounded-2xl bg-white p-4 ring-1 ring-zinc-100"
              >
                
                <p className="mt-4 text-[12px] leading-relaxed text-zinc-600">{review.quote}</p>
                <div className="flex items-center gap-0.5 mt-4 text-amber-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="size-3.5 fill-current" />
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#E6F5EE] text-zinc-500">
                    <User className="size-4.5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">{review.name}</p>
                    <p className="text-xs text-zinc-500">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
