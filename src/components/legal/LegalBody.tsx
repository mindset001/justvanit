import { LEGAL_CLAUSES, type LegalPage } from "./legalContent";

function ClauseList() {
  return (
    <div className="mt-6 flex flex-col gap-6">
      {LEGAL_CLAUSES.map((clause, i) => (
        <div key={i}>
          <p className="text-sm font-bold text-navy-900">
            {i + 1}. {clause.title}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{clause.body}</p>
        </div>
      ))}
    </div>
  );
}

export function LegalBody({ page }: { page: LegalPage }) {
  return (
    <div className="min-w-0 flex-1">
      <h2 className="text-3xl font-bold tracking-tight text-navy-900">{page.welcomeHeading}</h2>
      <p className="mt-2 text-sm text-zinc-500">Last Updated: June 2026</p>

      <div className="mt-6 flex flex-col gap-5">
        {page.introParagraphs.map((paragraph, i) => (
          <p key={i} className="text-sm leading-relaxed text-zinc-600">
            {paragraph}
          </p>
        ))}
      </div>

      <h3 className="mt-10 text-2xl font-bold text-navy-900">{page.contentHeadings[0]}</h3>
      <ClauseList />

      <h3 className="mt-10 text-2xl font-bold text-navy-900">{page.contentHeadings[1]}</h3>
      <ClauseList />
    </div>
  );
}
