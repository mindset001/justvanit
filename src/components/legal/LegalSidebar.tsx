import Link from "next/link";
import { LEGAL_PAGES } from "./legalContent";

export function LegalSidebar({ activeSlug }: { activeSlug: string }) {
  const activeIndex = LEGAL_PAGES.findIndex((page) => page.slug === activeSlug);
  const active = LEGAL_PAGES[activeIndex];
  const preceding = LEGAL_PAGES.slice(0, activeIndex);
  const following = LEGAL_PAGES.slice(activeIndex + 1);

  return (
    <nav className="flex w-full flex-col gap-4 lg:sticky lg:top-24 lg:w-64 lg:shrink-0 lg:self-start">
      <p className="text-sm font-semibold text-navy-900">Table of Content</p>

      {preceding.map((page) => (
        <Link
          key={page.slug}
          href={page.href}
          className="text-sm font-medium text-indigo-600 underline hover:text-indigo-700"
        >
          {page.navLabel}
        </Link>
      ))}

      <span className="w-fit rounded-lg bg-navy-900 px-4 py-2 text-sm font-semibold text-white">
        {active.navLabel}
      </span>

      {active.tocSections.map((section) => (
        <div key={section}>
          <p className="text-sm font-semibold text-navy-900">{section}</p>
          <ul className="mt-2 flex flex-col gap-2">
            {[1, 2, 3, 4].map((n) => (
              <li key={n} className="text-sm text-zinc-500">
                Sub- Content {n}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {following.map((page) => (
        <Link
          key={page.slug}
          href={page.href}
          className="text-sm font-medium text-indigo-600 underline hover:text-indigo-700"
        >
          {page.navLabel}
        </Link>
      ))}
    </nav>
  );
}
