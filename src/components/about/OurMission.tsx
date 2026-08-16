"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SLIDES = [
  {
    title: "Our Mission",
    description:
      "Our mission is to bridge the gap between users and moving companies, ensuring a seamless and efficient relocation experience. We strive to provide the best options tailored to your needs, making your move as stress-free as possible.",
  },
  {
    title: "Our Vision",
    description:
      "To become the UK's most trusted moving marketplace, where every relocation—home, office, or storage—is handled by a verified partner at a fair, transparent price.",
  },
];

export function OurMission() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];

  return (
    <section className="bg-white px-6 py-16 lg:px-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">
        <div
          className="flex h-[26rem] flex-col justify-end p-8 sm:p-12"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(5,8,20,0.85) 0%, rgba(5,8,20,0.35) 55%, rgba(5,8,20,0.1) 100%), linear-gradient(160deg, #c9b48a 0%, #8d7452 30%, #4a3f33 55%, #1c1c22 80%, #0a0a0d 100%)",
          }}
        >
          <div className="max-w-lg text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{slide.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">{slide.description}</p>
          </div>

          <div className="absolute bottom-8 right-8 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)}
              aria-label="Previous"
              className="flex size-10 items-center justify-center rounded-full bg-white text-navy-900 transition-colors hover:bg-white/90"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % SLIDES.length)}
              aria-label="Next"
              className="flex size-10 items-center justify-center rounded-full bg-white text-navy-900 transition-colors hover:bg-white/90"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
