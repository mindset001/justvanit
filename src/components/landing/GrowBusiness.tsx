import { ArrowRight, ShieldCheck, Wallet, Target, CalendarClock, Truck } from "lucide-react";

export type GrowBusinessFeature = {
  icon: typeof Wallet;
  title: string;
  description: string;
  stat?: string;
  highlight?: boolean;
};

const DEFAULT_FEATURES: GrowBusinessFeature[] = [
  {
    icon: Wallet,
    title: "Zero Upfront Costs",
    description: "No registration fees. Commission only on moving job.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Payments",
    description: "Secure escrow protection ensures you get paid for every completed move.",
  },
  {
    icon: Target,
    title: "Qualified Leads",
    stat: "500+",
    description: "Monthly High-Intent leads",
    highlight: true,
  },
  {
    icon: CalendarClock,
    title: "Schedule Availability",
    description: "No registration fees. Commission only on moving job.",
  },
];

export function GrowBusiness({
  id = "become-a-partner",
  features = DEFAULT_FEATURES,
}: {
  id?: string;
  features?: GrowBusinessFeature[];
}) {
  return (
    <section id={id} className="bg-brand-50/40 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-fuchsia-500 lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-5 p-10 text-white sm:p-14">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Grow Your Moving Business
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-white/85">
              Join the JustVanIt network to access highly qualified leads, streamline your
              booking process, and grow your business with our trusted platform.
            </p>
            <a
              href="/become-a-partner"
              className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
            >
              Become a Partner
              <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="relative min-h-[16rem] bg-gradient-to-br from-navy-800 to-navy-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <Truck className="size-24 text-white/15" />
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`rounded-2xl p-6 ${
                feature.highlight
                  ? "bg-navy-900 text-white"
                  : "bg-white text-navy-900 ring-1 ring-zinc-100"
              }`}
            >
              <span
                className={`inline-flex size-9 items-center justify-center rounded-lg ${
                  feature.highlight ? "bg-white/10 text-white" : "bg-brand-50 text-brand-600"
                }`}
              >
                <feature.icon className="size-4.5" />
              </span>
              {feature.stat ? (
                <p className="mt-4 text-2xl font-bold">{feature.stat}</p>
              ) : (
                <p className="mt-4 text-sm font-semibold">{feature.title}</p>
              )}
              <p
                className={`mt-1.5 text-xs leading-relaxed ${
                  feature.highlight ? "text-white/60" : "text-zinc-500"
                }`}
              >
                {feature.stat ? feature.title : feature.description}
              </p>
              {feature.stat && (
                <p className="mt-0.5 text-xs leading-relaxed text-white/60">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
