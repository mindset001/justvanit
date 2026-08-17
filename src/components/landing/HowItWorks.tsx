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
      "Once you've chosen your moving partner, you'll proceed to make the payment and enter your contact details. After payment, you'll receive a 6-digit code sent to your email. Then, head over to the Tracking page to monitor your moving process.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <span className="shadow inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-500 ring-1 ring-inset ring-zinc-200">
          How It Works
        </span>
        <h2 className="mx-auto mt-4 max-w-xl text-3xl font-light tracking-tight text-navy-900 sm:text-4xl">
          Get & Compare Moving quote in{" "} <br></br>
          <span className="font-caveat text-4xl font-bold text-brand-600 sm:text-5xl">
            three
          </span>{" "}
          clicks
        </h2>
        <p className=" mt-3 text-[14px] text-zinc-500">
          No Account creation, no multiple registration, just get quote, compare quote, secure
          booking, start moving.
        </p>

        <div className="relative mt-12 grid grid-cols-1 gap-7 text-left sm:grid-cols-3">
          <div className="pointer-events-none absolute inset-x-6 top-8 hidden h-px bg-zinc-200 sm:block" />
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100"
            >
              <span className=" border border-[#8258D7] left-6 flex size-10 items-center justify-center rounded-full  bg-white text-sm font-bold text-navy-900">
                {step.number}
              </span>
              <p className="mt-3 text-base font-semibold text-navy-900">{step.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
