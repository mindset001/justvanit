import type { Metadata } from "next";
import { LegalPageContent } from "@/components/legal/LegalPageContent";

export const metadata: Metadata = {
  title: "Terms & Condition — JustVanIt",
  description:
    "The rules for using JustVanIt's services, including user responsibilities, payment terms, and dispute resolution.",
};

export default function TermsPage() {
  return <LegalPageContent slug="terms" />;
}
