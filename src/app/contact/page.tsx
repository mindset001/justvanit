import type { Metadata } from "next";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactPanel } from "@/components/contact/ContactPanel";

export const metadata: Metadata = {
  title: "Contact Us — JustVanIt",
  description: "Get in touch with the JustVanIt team — we're available to help around the clock.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ContactHero />
      <ContactPanel />
      <Faq />
      <Footer />
    </div>
  );
}
