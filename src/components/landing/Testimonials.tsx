"use client";

import { useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    quote:
      "I recently moved apartment and I couldn't be happier with the affordable moving companies I found on JustVanIt.",
    name: "John Dobi",
    location: "Manchester, UK",
  },
  {
    quote:
      "This was my first experience and overall it was pleasant, and I was pleasantly surprised by how easy it was.",
    name: "John Dobi",
    location: "Manchester, UK",
  },
  {
    quote:
      "I recently used JustVanIt to move my apartment and I couldn't find multiple quotes so quickly and easily.",
    name: "John Dobi",
    location: "Manchester, UK",
  },
  {
    quote:
      "I recently moved my apartment and I couldn't be happier with the professional moving partners I found.",
    name: "John Dobi",
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
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-500 ring-1 ring-inset ring-zinc-200">
              Testimonial
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Read Reviews, Move with confidence.
            </h2>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-zinc-500">4.5/5 Rating, Based on 5210 reviews</span>
            </div>

            <Quote className="mt-8 size-10 text-brand-200" />
            <p className="mt-2 text-2xl font-bold tracking-tight text-navy-900">
              What Our Customers are saying
            </p>

            <div className="mt-8 hidden gap-3 sm:flex">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                aria-label="Previous reviews"
                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:bg-white"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                aria-label="Next reviews"
                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:bg-white"
              >
                <ChevronRight className="size-4" />
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
                className="w-72 shrink-0 snap-start rounded-2xl bg-white p-6 ring-1 ring-zinc-100"
              >
                <div className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">{review.quote}</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="size-9 rounded-full bg-gradient-to-br from-brand-400 to-brand-600" />
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
