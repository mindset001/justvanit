"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const FAQS = [
  {
    question: "How many quote can I get ???",
    answer:
      "You can receive multiple quotes from various moving partner companies on our platform. We will filter these to show you the top 10 most affordable options.",
  },
  {
    question: "How do I book a moving partner?",
    answer:
      "Once you compare quotes, choose the partner that suits you, make a secure payment, and enter your contact details. You'll get a digital code by email to track the move.",
  },
  {
    question: "Is my payment protected?",
    answer:
      "Yes. All payments are held in escrow and only released to your moving partner once the job is completed to your satisfaction.",
  },
  {
    question: "Can I track my move in real time?",
    answer:
      "Yes, once your booking is confirmed you can monitor the full moving process from the Tracking page using your digital code.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
        <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-500">
          FAQ
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          Questions? We&apos;ve got answers.
        </h2>
        <p className="mt-3 text-sm text-zinc-500">
          Everything you need to know about JustVanIt. Can&apos;t find what you&apos;re looking
          for? Contact our support team.
        </p>

        <div className="mt-10 flex flex-col gap-3 text-left">
          {FAQS.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-zinc-200 bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-navy-900">{faq.question}</span>
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
                    {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-xs leading-relaxed text-zinc-500">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-zinc-500">Still have questions?</p>
        <a
          href="/contact"
          className="mt-3 inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Contact Support
        </a>
      </div>
    </section>
  );
}
