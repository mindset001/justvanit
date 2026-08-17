import { ArrowRight, ShieldCheck, Wallet, Target, CalendarClock, Truck } from "lucide-react";
import Grow from "../../../public/images/grow.jpg";
import Image from "next/image";
export type GrowBusinessFeature = {
  icon: typeof Wallet;
  title: string;
  description: string;
  stat?: string;
  highlight?: boolean;
  outlined?: boolean;
};

const DEFAULT_FEATURES: GrowBusinessFeature[] = [
  {
    icon: Wallet,
    title: "Zero Upfront Costs",
    description: "No registration fees. Commission only on moving job.",
    outlined: true,
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
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-col rounded-3xl justify-center gap-5 p-10 text-white sm:p-14 bg-gradient-to-br from-brand-600 via-brand-500 to-fuchsia-500 lg:w-[60%]">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Grow Your Moving Business
            </h2>
            <p className=" text-sm leading-relaxed text-white/85">
              Join the JustVanIt network to access highly qualified leads, streamline your
              booking process, and grow your business with our trusted platform.
            </p>
            <a
              href="/become-a-partner"
              className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
            >
              Become a Partner
            </a>
          </div>
          <div className="lg:flex-1">
            <div className="h-full w-full overflow-hidden">
              <Image src={Grow} alt="Grow Business" className="size-full object-cover rounded-3xl" />
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center justify-center gap-1 rounded-2xl p-6 text-left shadow-sm ${
                feature.highlight
                  ? "bg-navy-900 text-white"
                  : feature.outlined
                    ? "bg-white text-navy-900 ring-2 ring-brand-500"
                    : "bg-white text-navy-900 ring-1 ring-zinc-100"
              }`}
            >
              <span
                className={`inline-flex size-9 items-center justify-center rounded-lg ${
                  feature.highlight ? "bg-white/10 text-white" : "bg-brand-50 text-brand-600"
                } ${feature.outlined ? "border border-dashed border-brand-400/60 p-1" : ""}`}
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
                } ${feature.outlined ? "rounded-md border border-dashed border-brand-400/60 p-1.5" : ""}`}
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
