"use client";

import { useState } from "react";
import { Truck } from "lucide-react";

const SLIDES = [
  {
    title: "Customers finds you with ease",
    description:
      "With our solution, you can stop stressing over marketing, running ads, or attracting attention. Now, you can concentrate solely on your business, providing top-notch services and earning great reviews while we handle all the heavy lifting.",
  },
  {
    title: "Get paid without the chase",
    description:
      "Every job is backed by secure escrow payments, released the moment the move is confirmed complete — no invoices to chase, no waiting on bank transfers.",
  },
];

const AVATAR_POSITIONS = [
  "left-2 top-6",
  "left-20 top-0",
  "right-24 top-2",
  "right-0 top-16",
  "left-0 top-40",
  "left-28 top-56",
  "right-32 top-52",
  "right-4 top-64",
];

const AVATAR_GRADIENTS = [
  "from-brand-400 to-brand-600",
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-600",
  "from-fuchsia-400 to-purple-600",
  "from-rose-400 to-red-500",
  "from-sky-400 to-blue-600",
  "from-lime-400 to-green-600",
  "from-violet-400 to-indigo-600",
];

export function BenefitCarousel() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];

  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <span className="inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600">
            Benefit of Choosing JustVanIt
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {slide.title}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-500">
            {slide.description}
          </p>

          <div className="mt-8 flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-brand-600" : "w-2 bg-zinc-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-80 w-full max-w-md">
          {AVATAR_POSITIONS.map((position, i) => (
            <span
              key={i}
              className={`absolute size-10 rounded-full border-4 border-zinc-50 bg-gradient-to-br shadow-sm ${AVATAR_GRADIENTS[i]} ${position}`}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex size-40 items-center justify-center rounded-full bg-gradient-to-br from-zinc-200 via-zinc-300 to-zinc-500 shadow-xl">
              <Truck className="size-16 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
