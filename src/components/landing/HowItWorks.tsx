const STEPS = [
  {
    number: "01",
    title: "Provide all moving information",
    description:
      "Provide moving location (Pick up & Relocation Point), Type of moving, Resident type, Date of moving, Lists of moving items, Type of goods, special handling requirement, Media etc.",
  },
  {
    number: "02",
    title: "Compare Quote",
    description:
      "You get different quotes from different moving Partner companies, then you compare and choose the Moving Partner you choose to go with.",
  },
  {
    number: "03",
    title: "Secure Booking",
    description:
      "Once you choose your moving partner, you'll proceed to make the payment and enter your contact details. After payment, you'll receive a digital code sent to your email. Then head over to the Tracking page to monitor your moving process.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-500 ring-1 ring-inset ring-zinc-200">
          How It Works
        </span>
        <h2 className="mx-auto mt-4 max-w-xl text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          Get & Compare Moving quote in <span className="text-brand-600">three</span> clicks
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-zinc-500">
          No Account creation, no multiple registration, just get quote, compare quote, secure
          booking, start moving.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 text-left sm:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100"
            >
              <span className="text-sm font-bold text-brand-600">{step.number}</span>
              <p className="mt-3 text-base font-semibold text-navy-900">{step.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
