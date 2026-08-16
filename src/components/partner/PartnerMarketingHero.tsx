import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/landing/Header";

export function PartnerMarketingHero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(47,107,255,0.25), transparent 45%), linear-gradient(200deg, #1a2554 0%, #0b1130 55%, #05070f 100%)",
        }}
      />
      <Header variant="dark" />

      <div className="relative mx-auto max-w-3xl px-6 pb-16 pt-40 text-center lg:pb-24 lg:pt-48">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Increase your business revenue, get more audiences with our solution.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          Become a Moving Partner on our platform, get access to large audiences and customers ,
          by registering your company to become a Partner.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/become-a-partner/signup"
            className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Become a Partner
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            How It Work
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
