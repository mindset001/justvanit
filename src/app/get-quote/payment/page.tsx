import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Header } from "@/components/landing/Header";
import { PaymentBanner } from "@/components/landing/PaymentBanner";
import { Faq } from "@/components/landing/Faq";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";
import { QUOTES } from "@/lib/quotes";

export const metadata: Metadata = {
  title: "Payment — JustVanIt",
  description: "Review your selected quote and complete your booking payment.",
};

export default async function PaymentPage(props: PageProps<"/get-quote/payment">) {
  const searchParams = await props.searchParams;
  const quoteId = typeof searchParams.quote === "string" ? searchParams.quote : undefined;
  const quote = QUOTES.find((q) => q.id === quoteId);

  if (!quote) {
    redirect("/get-quote");
  }

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <PaymentBanner quote={quote} />
      <Faq />
      <Testimonials />
      <Footer />
    </div>
  );
}
