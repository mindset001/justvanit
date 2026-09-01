"use client";

import { useState } from "react";
import Image from "next/image";
import Bus from "../../../public/images/bus.png";
import Bus2 from "../../../public/images/bus2.png";

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

export function BenefitCarousel() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];

  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <span className="inline-flex items-center rounded-full border border-brand-500 px-3 py-1 text-xs font-semibold text-zinc-600">
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

        <div className="relative mx-auto aspect-[760/639] w-full max-w-2xl">
          <Image src={Bus2} alt="" fill sizes="(max-width: 1024px) 90vw, 672px" className="object-contain" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src={Bus} alt="Moving truck" className="w-[58%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
