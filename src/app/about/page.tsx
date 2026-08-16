import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { PartnersStrip } from "@/components/landing/PartnersStrip";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { OurJourney } from "@/components/about/OurJourney";
import { OurMission } from "@/components/about/OurMission";
import { FounderQuote } from "@/components/about/FounderQuote";

export const metadata: Metadata = {
  title: "About Us — JustVanIt",
  description:
    "Connecting you to the cheapest and budget friendly moving companies in your area.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <AboutHero />
      <PartnersStrip />
      <OurJourney />
      <OurMission />
      <FounderQuote />
      <Testimonials />
      <Footer />
    </div>
  );
}
