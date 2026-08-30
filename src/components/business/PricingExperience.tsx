import { Percent, Scale, ShieldCheck, Truck } from "lucide-react";

const FEATURED_CARD = {
  icon: Truck,
  title: "Dynamic Quoting",
  description:
    "Our partners assess your inventory and the distance of routes to deliver personalized and reliable quote offers tailored to your needs.",
  ringClass: "ring-fuchsia-200",
};

const CARDS = [
  {
    icon: Scale,
    title: "Compare Quoting",
    description:
      "Request quotes from trusted moving companies, compare their prices, and pick the one that fits your budget.",
    ringClass: "ring-indigo-200",
  },
  {
    icon: Percent,
    title: "Zero Platform Fees",
    description: "Customers pay exactly what was quoted by the partner, with no surprise fees.",
    ringClass: "ring-indigo-200",
  },
  {
    icon: ShieldCheck,
    title: "Escrow Protection",
    description:
      "Your funds are kept safe and will only be released once you confirm everything, and our moving is completed.",
    ringClass: "ring-indigo-200",
  },
];

function PricingCard({ card }: { card: (typeof CARDS)[number] }) {
  return (
    <div className={`rounded-2xl bg-zinc-50 p-6 ring-1 ${card.ringClass}`}>
      <span className="flex size-9 items-center justify-center rounded-lg bg-zinc-200/70 text-zinc-700">
        <card.icon className="size-4.5" />
      </span>
      <p className="mt-4 text-base font-semibold text-navy-900">{card.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500">{card.description}</p>
    </div>
  );
}

export function PricingExperience() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="text-base font-semibold text-navy-900">The Pricing Experiences</p>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PricingCard card={FEATURED_CARD} />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <PricingCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
