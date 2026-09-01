import Image, { type StaticImageData } from "next/image";
import VanitHero from "../../../public/images/vanit-hero.jpg";
import Grow from "../../../public/images/grow.jpg";
import Move1 from "../../../public/images/move1.jpg";
import Move2 from "../../../public/images/move2.jpg";

const COLLAGE: { src: StaticImageData; alt: string; offset: string; height: string }[] = [
  {
    src: VanitHero,
    alt: "Movers carrying boxes down a ramp into a home",
    offset: "",
    height: "h-56 sm:h-64",
  },
  {
    src: Grow,
    alt: "Movers loading office equipment into a truck",
    offset: "mt-10",
    height: "h-56 sm:h-64",
  },
  {
    src: Move1,
    alt: "Movers carrying a wrapped sofa to a truck",
    offset: "",
    height: "h-64 sm:h-80",
  },
  {
    src: Move2,
    alt: "Movers loading high-value fine art into a truck",
    offset: "mt-14",
    height: "h-56 sm:h-64",
  },
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
        {COLLAGE.map(({ src, alt, offset, height }, i) => (
          <div
            key={i}
            className={`relative w-44 shrink-0 overflow-hidden rounded-2xl shadow-sm sm:w-56 ${height} ${offset}`}
          >
            <Image src={src} alt={alt} fill sizes="(max-width: 640px) 45vw, 224px" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
