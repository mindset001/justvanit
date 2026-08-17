const STATS = [
  { value: "5k+", label: "Customers served" },
  {
    value: "Compare quote",
    label: "Get quote from different moving companies and select one that suits your budget.",
  },
  { value: "Escrow", label: "Secured payment/Deposit with escrow feature." },
  { value: "99%", label: "Uptime" },
];

export function ProofStats() {
  return (
    <section className="bg-white px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-fuchsia-500/60 via-brand-500/60 to-fuchsia-500/60 p-[1.5px]">
        <div className="rounded-3xl bg-navy-900 px-8 py-14 text-center sm:px-14">
          <span className="inline-flex items-center rounded-full border border-white/30 px-3 py-1 text-xs font-semibold text-white/80">
            Proof
          </span>
          <h2 className="mt-4 text-3xl tracking-tight text-white sm:text-4xl">
            Customers Trust <span className="font-bold">JustVanIt.</span>
          </h2>
          <p className="mt-2 text-sm text-white/50">Data doesn&apos;t lie, 100% Transparent.</p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.value} className="rounded-2xl bg-navy-800 p-5 text-left">
                <p className="text-xl font-bold text-white sm:text-2xl">{stat.value}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
