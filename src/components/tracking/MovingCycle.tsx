const STAGES = [
  {
    number: "01",
    title: "Provide all moving information",
    description:
      "Provide moving location (Picking Up & Relocation Point), Type of Moving, Resident type, Date of moving, Lists of moving items, type of services, special handling requirement, Media.",
  },
  {
    number: "02",
    title: "Submit  & Compare Quote",
    description:
      "You get different quote from different moving partner companies, then you compare and choose the Moving Partner you choose to go with.",
  },
  {
    number: "03",
    title: "Secure Booking",
    description:
      "After you choose a partner, they'll review and accept your request. Once confirmed, your booking is secured then payment can be processed.",
  },
  {
    number: "04",
    title: "Payment",
    description:
      "Secure your move with our protected escrow payment. After you provide your contact details. You'll receive a 6-digit tracking code via email. Head to the Tracking page to monitor your move every step of the way",
  },
  {
    number: "05",
    title: "Job / Moving Confirmed",
    description:
      "Your booking is officially confirmed! We've shared your details with your moving partner, and they'll contact you 24-48 hours before your moving date to sync on the final plan. We'll see you on the big day.",
  },
  {
    number: "06",
    title: "Moving Completed",
    description:
      "Move complete! We hope everything went smoothly. You can now mark the moving completed on your tracking page and rate the moving partner.",
  },
  {
    number: "07",
    title: "Customer Confirmation",
    description:
      "Your move is to be marked as complete! Please visit the tracking page within the next 24 hours to confirm the service, leave a review, or lodge a complaint. If no action is taken, funds will be automatically released to your moving partner.",
  },
  {
    number: "08",
    title: "Payment Released",
    description:
      "Payment is released to the moving partner company. Your booking is now closed. Thank you for using our service!",
  },
];

function StageCard({ stage }: { stage: (typeof STAGES)[number] }) {
  return (
    <div className="relative w-full rounded-2xl bg-white p-6 pt-16 text-left shadow-sm ring-1 ring-zinc-200">
      <span className="absolute top-4 left-6 flex size-10 items-center justify-center rounded-full border border-navy-900 bg-white text-sm font-bold text-navy-900">
        {stage.number}
      </span>
      <p className="text-base font-semibold text-navy-900 mt-4">{stage.title}</p>
      <p className="mt-2 text-xs leading-relaxed text-zinc-500">{stage.description}</p>
    </div>
  );
}

export function MovingCycle() {
  const row1 = STAGES.slice(0, 4);
  const row2 = STAGES.slice(4, 8).reverse();

  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <span className="inline-flex shadow items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-500 ring-1 ring-inset ring-zinc-200">
          Moving Cycle
        </span>
        <h2 className="mx-auto mt-4 max-w-xl text-3xl font-light tracking-tight text-navy-900 sm:text-4xl">
          Explore the <span className="text-4xl sm:text-5xl">8</span> Stages of the Moving Cycle !
        </h2>

        <div className="relative mt-16">
          <div className="relative flex items-start gap-5">
            <div className="pointer-events-none absolute inset-x-6 top-6 hidden h-px bg-zinc-300 sm:block" />
            {row1.map((stage) => (
              <div key={stage.number} className="flex-1">
                <StageCard stage={stage} />
              </div>
            ))}
          </div>

          <div className="ml-auto hidden h-16 w-px bg-zinc-300 sm:block" style={{ marginRight: "calc(12.5% - 1px)" }} />

          <div className="relative flex items-start gap-5">
            <div className="pointer-events-none absolute inset-x-6 top-6 hidden h-px bg-zinc-300 sm:block" />
            {row2.map((stage) => (
              <div key={stage.number} className="flex-1">
                <StageCard stage={stage} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
