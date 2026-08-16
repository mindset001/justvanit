import { Star, ArrowRight, PlayCircle } from "lucide-react";
import { QuoteForm } from "./QuoteForm";

const AVATAR_COLORS = [
  "from-brand-400 to-brand-600",
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-600",
  "from-fuchsia-400 to-purple-600",
];

function AvatarStack({ count = 4 }: { count?: number }) {
  return (
    <div className="flex -space-x-2.5">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`size-8 rounded-full border-2 border-navy-900 bg-gradient-to-br ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(7,12,36,0.75), rgba(7,12,36,0.55)), radial-gradient(circle at 30% 20%, rgba(47,107,255,0.35), transparent 45%), linear-gradient(200deg, #1a2554 0%, #0b1130 55%, #05070f 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24 lg:px-10">
        <div className="text-white">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-white/10 py-1.5 pl-1.5 pr-4 backdrop-blur-sm">
            <AvatarStack />
            <span className="text-xs font-medium text-white/90">
              100+ Partners Served 5k+ Customer
            </span>
          </div>

          <h1 className="max-w-xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Moving Made More Easy Within the UK
          </h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            Moving made easy, stress-free, and cheap with JustVanIt, where you can{" "}
            <span className="font-semibold text-white">
              COMPARE QUOTE
            </span>{" "}
            from different verified, independent moving Partners that permits all within the UK.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {AVATAR_COLORS.map((gradient, i) => (
                <span
                  key={i}
                  className={`size-9 rounded-full border-2 border-navy-900 bg-gradient-to-br ${gradient}`}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-white/60">5k+ Satisfied Customers</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#tracking"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Track Moving
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
            >
              <PlayCircle className="size-8" />
              How It Work
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
