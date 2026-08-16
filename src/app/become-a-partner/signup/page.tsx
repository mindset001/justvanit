import type { Metadata } from "next";
import { PartnerForm } from "@/components/landing/PartnerForm";
import { PartnerHeroPanel } from "@/components/landing/PartnerHeroPanel";

export const metadata: Metadata = {
  title: "Become a Partner — JustVanIt",
  description:
    "Join the UK's most exclusive network for elite removal professionals and access highly qualified leads.",
};

export default function BecomeAPartnerPage() {
  return (
    <div className="grid flex-1 lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 py-14 sm:px-10 lg:px-16">
        <PartnerForm />
      </div>
      <PartnerHeroPanel />
    </div>
  );
}
