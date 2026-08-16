import type { Metadata } from "next";
import { LegalPageContent } from "@/components/legal/LegalPageContent";

export const metadata: Metadata = {
  title: "Privacy Policy — JustVanIt",
  description:
    "How JustVanIt collects, uses, and protects your personal information while you use our services.",
};

export default function PrivacyPage() {
  return <LegalPageContent slug="privacy" />;
}
