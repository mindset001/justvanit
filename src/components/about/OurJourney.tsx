const STATS = [
  {
    value: "100+",
    description:
      "Since our launch, over 100 customers have utilized our platform and shared positive feedback.",
    tinted: true,
  },
  {
    value: "50+",
    description: "We have partnered with more than 50 verified moving companies across the UK.",
    tinted: false,
  },
  {
    value: "UK Approved",
    description:
      "We possess all the necessary legal documents and requirements to operate within the UK.",
    tinted: false,
  },
  {
    value: "Escrow Security",
    description:
      "Our system includes an escrow feature that safeguards funds for both customers and moving partners until the move is successfully completed.",
    tinted: true,
  },
];

function StatCard({ stat }: { stat: (typeof STATS)[number] }) {
  return (
    <div
      className={`rounded-2xl bg-white shadow-md ${
        stat.tinted ? "p-8 ring-1 ring-brand-500" : "p-5 ring-1 ring-zinc-200"
      }`}
    >
      <p className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
        {stat.value}
      </p>
      <p
        className={`mt-2 text-xs leading-relaxed text-zinc-500 sm:text-sm ${
          stat.tinted ? "" : "line-clamp-2"
        }`}
      >
        {stat.description}
      </p>
    </div>
  );
}

export function OurJourney() {
  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-500 ring-1 ring-inset ring-zinc-200">
            Our Journey
          </span>
          <h2 className="mx-auto mt-4 max-w-lg text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Our Legacy of Building JustVanIt
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
            Over the years, many users, myself included, have faced the hassle of
            moving—whether it&apos;s relocating to a new apartment, shifting your office, or
            changing storage facilities. The need for reliable moving companies becomes crucial
            during these times. However, the stress of browsing through countless websites to
            gather quotes and find one that fits your budget can be overwhelming. This common
            frustration inspired the creation of JustVanIt. Our platform connects you with
            multiple moving companies, allowing you to easily compare quotes and select the one
            that best suits your financial needs.
          </p>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-[3fr_2fr] items-start gap-4">
              <StatCard stat={STATS[0]} />
              <StatCard stat={STATS[1]} />
            </div>
            <div className="grid grid-cols-[2fr_3fr] items-start gap-4">
              <StatCard stat={STATS[2]} />
              <StatCard stat={STATS[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
