import { FileText, Percent, Scale, ShieldCheck } from "lucide-react";

const CARDS = [
  {
    icon: FileText,
    title: "Dynamic Quoting",
    description:
      "Our platform assess your inventory and the distance of routes to deliver personalized and reliable quote offers tailored to your needs.",
  },
  {
    icon: Scale,
    title: "Compare Quoting",
    description:
      "Request quotes from trusted moving companies, compare their prices, and pick the one that fits your budget.",
  },
  {
    icon: Percent,
    title: "Zero Platform Fees",
    description: "Customers pay exactly what was quoted by the partner, with no surprise fees.",
  },
  {
    icon: ShieldCheck,
    title: "Escrow Protection",
    description:
      "Your funds are kept safe and will only be released once you confirm everything, and our moving is completed.",
  },
];

export function PricingExperience() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="text-sm font-semibold text-zinc-500">The Pricing Experience</p>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <div key={card.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <span className="flex size-9 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <card.icon className="size-4.5" />
              </span>
              <p className="mt-4 text-sm font-semibold text-navy-900">{card.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
