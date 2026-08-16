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
    <div className="w-full rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-100">
      <span className="flex size-8 items-center justify-center rounded-full bg-zinc-100 text-xs font-bold text-navy-900">
        {stage.number}
      </span>
      <p className="mt-3 text-base font-semibold text-navy-900">{stage.title}</p>
      <p className="mt-2 text-xs leading-relaxed text-zinc-500">{stage.description}</p>
    </div>
  );
}

function Connector() {
  return <div className="hidden h-px flex-1 self-start bg-zinc-300 mt-9 sm:block" />;
}

export function MovingCycle() {
  const row1 = STAGES.slice(0, 4);
  const row2 = STAGES.slice(4, 8).reverse();

  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-500 ring-1 ring-inset ring-zinc-200">
          Moving Cycle
        </span>
        <h2 className="mx-auto mt-4 max-w-xl text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          Explore the <span className="text-4xl sm:text-5xl">8</span> Stages of the Moving Cycle !
        </h2>

        <div className="relative mt-12">
          <div className="flex items-start gap-0">
            {row1.map((stage, i) => (
              <div key={stage.number} className="flex flex-1 items-start gap-0">
                <StageCard stage={stage} />
                {i < row1.length - 1 && <Connector />}
              </div>
            ))}
          </div>

          <div className="ml-auto hidden h-6 w-px bg-zinc-300 sm:block" style={{ marginRight: "calc(12.5% - 1px)" }} />

          <div className="mt-6 flex items-start gap-0">
            {row2.map((stage, i) => (
              <div key={stage.number} className="flex flex-1 items-start gap-0">
                <StageCard stage={stage} />
                {i < row2.length - 1 && <Connector />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
