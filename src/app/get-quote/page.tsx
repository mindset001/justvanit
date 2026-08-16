import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { QuoteBanner } from "@/components/landing/QuoteBanner";
import { Faq } from "@/components/landing/Faq";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Get a Moving Quote — JustVanIt",
  description:
    "Compare quotes from verified, independent moving partners across the UK in three quick steps.",
};

export default function GetQuotePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <QuoteBanner />
      <Faq />
      <Testimonials />
      <Footer />
    </div>
  );
}
