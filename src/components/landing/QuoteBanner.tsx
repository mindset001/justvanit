import { QuoteForm } from "./QuoteForm";

export function QuoteBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(7,12,36,0.75), rgba(7,12,36,0.55)), radial-gradient(circle at 70% 30%, rgba(47,107,255,0.3), transparent 45%), linear-gradient(200deg, #1a2554 0%, #0b1130 55%, #05070f 100%)",
        }}
      />
      <div className="relative mx-auto flex max-w-3xl justify-center px-6 py-14 lg:py-20">
        <QuoteForm />
      </div>
    </section>
  );
}
