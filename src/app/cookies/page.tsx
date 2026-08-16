import type { Metadata } from "next";
import { LegalPageContent } from "@/components/legal/LegalPageContent";

export const metadata: Metadata = {
  title: "Cookies Policy — JustVanIt",
  description: "How JustVanIt uses cookies to collect, use, and protect your information.",
};

export default function CookiesPage() {
  return <LegalPageContent slug="cookies" />;
}
