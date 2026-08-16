import type { Metadata } from "next";
import { PartnersStrip } from "@/components/landing/PartnersStrip";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { PartnerMarketingHero } from "@/components/partner/PartnerMarketingHero";
import { BenefitCarousel } from "@/components/partner/BenefitCarousel";
import { RegisterChecklist } from "@/components/partner/RegisterChecklist";

export const metadata: Metadata = {
  title: "Become a Partner — JustVanIt",
  description:
    "Increase your business revenue and reach more customers by joining the JustVanIt moving partner network.",
};

export default function BecomeAPartnerMarketingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PartnerMarketingHero />
      <PartnersStrip label="Join other 50+ Moving Partners Companies" />
      <BenefitCarousel />
      <RegisterChecklist />
      <Faq />
      <Footer />
    </div>
  );
}
