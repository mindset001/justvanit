import { PaymentPreview } from "./PaymentPreview";
import type { Quote } from "@/lib/quotes";

export function PaymentBanner({ quote }: { quote: Quote }) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(7,12,36,0.85), rgba(7,12,36,0.65)), radial-gradient(circle at 70% 30%, rgba(47,107,255,0.3), transparent 45%), url(/images/vanit-hero.jpg)",
        }}
      />
      <div className="relative mx-auto flex max-w-3xl justify-center px-6 py-14 lg:py-20">
        <PaymentPreview quote={quote} />
      </div>
    </section>
  );
}
