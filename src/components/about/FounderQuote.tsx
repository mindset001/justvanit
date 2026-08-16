export function FounderQuote() {
  return (
    <section className="bg-brand-50/50 py-16">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10">
        <div className="aspect-square w-full max-w-xs rounded-2xl bg-gradient-to-br from-indigo-200 to-brand-300 sm:max-w-sm" />

        <div>
          <p className="text-lg leading-relaxed text-navy-900 sm:text-xl">
            As we reflect on our journey, it&apos;s clear that many of us have encountered the
            challenges of moving—whether it&apos;s to a new home, an office relocation, or a
            change in storage. Finding trustworthy moving companies is essential in these
            moments. It&apos;s important to do your research, read reviews, and ask for
            recommendations to ensure a smooth transition. A reliable moving company can make all
            the difference, turning a stressful experience into a manageable one.
          </p>

          <p className="mt-6 text-base font-bold text-navy-900">John Doe</p>
          <p className="text-sm text-zinc-500">CEO &amp; Co-Founder of JustVanIt</p>
          <p className="mt-2 font-serif text-sm italic text-zinc-400">Signature</p>
        </div>
      </div>
    </section>
  );
}
