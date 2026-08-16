import { ArrowUpRight, Store } from "lucide-react";

export function BusinessModelHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 pb-16 pt-16 text-center lg:pb-20 lg:pt-20">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-600">
          <Store className="size-3.5" />
          Moving Marketplace
        </span>

        <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
          JustVanIt is your go-to digital{" "}
          <span className="text-brand-600">marketplace</span> that seamlessly{" "}
          <span className="text-brand-600 underline decoration-brand-300 underline-offset-4">
            connects
          </span>{" "}
          client with top-notch moving partner companies, making your relocation experience
          effortless and efficient.
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-500">
          Get quotes from verified moving companies, compare prices, secure your payment with
          escrow, and move with confidence. Join us, let connect your business to a larger
          audiences and customers all within the UK.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/get-quote"
            className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Get Moving Quote
          </a>
          <a
            href="/become-a-partner"
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
          >
            Become a Moving Partner
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
