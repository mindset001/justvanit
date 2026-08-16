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

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className={`rounded-2xl border p-5 ${
                  stat.tinted ? "border-indigo-100 bg-indigo-50/60" : "border-zinc-200 bg-white"
                }`}
              >
                <p className="text-lg font-bold text-navy-900">{stat.value}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
