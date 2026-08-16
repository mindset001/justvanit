import type { Metadata } from "next";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { TrackingHero } from "@/components/tracking/TrackingHero";
import { MovingCycle } from "@/components/tracking/MovingCycle";

export const metadata: Metadata = {
  title: "Track your Moving — JustVanIt",
  description: "Enter your tracking number to follow your move from booking to completion.",
};

export default function TrackingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <TrackingHero />
      <MovingCycle />
      <Faq />
      <Footer />
    </div>
  );
}
