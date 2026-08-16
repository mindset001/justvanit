import { Footer } from "@/components/landing/Footer";
import { LEGAL_PAGES } from "./legalContent";
import { LegalHero } from "./LegalHero";
import { LegalSidebar } from "./LegalSidebar";
import { LegalBody } from "./LegalBody";

export function LegalPageContent({ slug }: { slug: string }) {
  const page = LEGAL_PAGES.find((p) => p.slug === slug);
  if (!page) return null;

  return (
    <div className="flex flex-1 flex-col">
      <LegalHero title={page.heroTitle} description={page.heroDescription} />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:px-10">
        <LegalSidebar activeSlug={slug} />
        <LegalBody page={page} />
      </div>

      <Footer />
    </div>
  );
}
