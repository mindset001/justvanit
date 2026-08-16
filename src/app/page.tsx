import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { PartnersStrip } from "@/components/landing/PartnersStrip";
import { Services } from "@/components/landing/Services";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { GrowBusiness } from "@/components/landing/GrowBusiness";
import { Faq } from "@/components/landing/Faq";
import { ProofStats } from "@/components/landing/ProofStats";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <Hero />
      <PartnersStrip />
      <Services />
      <HowItWorks />
      <GrowBusiness />
      <Faq />
      <ProofStats />
      <Testimonials />
      <Footer />
    </div>
  );
}
