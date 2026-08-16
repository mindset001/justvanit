import type { Metadata } from "next";
import { Rocket, Wallet, ClipboardList, ShieldCheck } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { PartnersStrip } from "@/components/landing/PartnersStrip";
import { GrowBusiness } from "@/components/landing/GrowBusiness";
import { ProofStats } from "@/components/landing/ProofStats";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";
import { BusinessModelHero } from "@/components/business/BusinessModelHero";
import { MoveSmarter } from "@/components/business/MoveSmarter";
import { PricingExperience } from "@/components/business/PricingExperience";
import { MovingCycle } from "@/components/tracking/MovingCycle";

export const metadata: Metadata = {
  title: "Business Model — JustVanIt",
  description:
    "JustVanIt's digital marketplace model — how we connect customers with verified moving partners and keep pricing transparent.",
};

const GROW_BUSINESS_FEATURES = [
  {
    icon: Rocket,
    title: "Smooth Onboarding",
    description: "Simple and straightforward. Set your pricing metrics and availability.",
  },
  {
    icon: Wallet,
    title: "Zero Upfront Costs",
    description: "No registration fees. Commission only when a job is completed.",
  },
  {
    icon: ClipboardList,
    title: "Manage Quote",
    description:
      "Based on your preset pricing, your quotes will be automated. However, you must accept the moving order once a customer selects your quote.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Payments",
    description:
      "Our secure escrow protection guarantees that you will be paid for every completed move.",
  },
];

export default function BusinessModelPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <BusinessModelHero />
      <MoveSmarter />
      <PricingExperience />
      <PartnersStrip />
      <MovingCycle />
      <GrowBusiness id="grow-business" features={GROW_BUSINESS_FEATURES} />
      <ProofStats />
      <Testimonials />
      <Footer />
    </div>
  );
}
