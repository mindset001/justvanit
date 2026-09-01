"use client";

import { useState } from "react";
import { CalendarDays, CheckCircle2, Mail, Package, Phone, ShieldCheck, Star, Truck, User, Users } from "lucide-react";
import { PartnerBadge, FeaturePill } from "./QuoteCompareModal";
import type { Quote } from "@/lib/quotes";

type ContactState = {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
};

const INITIAL_CONTACT: ContactState = { email: "", phone: "", firstName: "", lastName: "" };

const INPUT_CLASS =
  "w-full rounded-2xl border border-zinc-200 py-3.5 px-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-base font-semibold text-zinc-900">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}

export function PaymentPreview({ quote }: { quote: Quote }) {
  const [contact, setContact] = useState<ContactState>(INITIAL_CONTACT);

  const updateContact = <K extends keyof ContactState>(key: K, value: ContactState[K]) =>
    setContact((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="w-full rounded-3xl bg-white p-6 shadow-2xl shadow-black/20 sm:p-8">
      <p className="text-2xl font-bold text-zinc-900">Preview Your Quotes</p>
      <p className="mt-1.5 text-sm text-zinc-500">
        Preview your quote, provide few information and proceed to payment
      </p>

      <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50/40 p-5">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="flex flex-col gap-2">
            <PartnerBadge company={quote.company} tagline={quote.tagline} />
            <p className="text-lg font-semibold leading-tight text-zinc-900">{quote.company}</p>
            <span className="inline-flex w-fit items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
              <CheckCircle2 className="size-3.5" />
              Verified
            </span>
            <div className="flex items-center gap-1 text-sm text-zinc-600">
              <span className="font-semibold text-zinc-900">{quote.rating}</span>
              <Star className="size-3.5 fill-amber-400 text-amber-400" />
              <span className="text-zinc-400">({quote.reviews} Reviews)</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-zinc-500">
              <Truck className="size-3.5 text-indigo-500" />
              {quote.completedMoves} Complete Move
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-3">
            <div className="flex items-center gap-1.5 text-sm text-zinc-600">
              <CalendarDays className="size-4 text-zinc-400" />
              Est Arrival: <span className="font-semibold text-zinc-900">{quote.arrival}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-zinc-600">
              <Truck className="size-4 text-zinc-400" />
              Vehicle <span className="font-semibold text-zinc-900">{quote.vehicle}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {quote.insurance && <FeaturePill icon={ShieldCheck} label="Insurance Included" />}
              <FeaturePill icon={Users} label={`${quote.movers} Movers`} />
              {quote.packingMaterial && <FeaturePill icon={Package} label="Packing Material" />}
            </div>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Total Price</p>
            <p className="text-2xl font-bold text-zinc-900">£{quote.price}</p>
          </div>
        </div>
      </div>

      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <p className="text-base font-semibold text-zinc-900">Provide Contact Information</p>
          <p className="text-sm text-zinc-500">
            Provide your personal information &amp; contact details
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Email" required>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
              <input
                type="email"
                required
                placeholder="linda@framcreative.com"
                value={contact.email}
                onChange={(e) => updateContact("email", e.target.value)}
                className={`${INPUT_CLASS} pl-10`}
              />
            </div>
          </Field>
          <Field label="Phone" required>
            <div className="relative">
              <Phone className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
              <input
                type="tel"
                required
                placeholder="+441 000 5505"
                value={contact.phone}
                onChange={(e) => updateContact("phone", e.target.value)}
                className={`${INPUT_CLASS} pl-10`}
              />
            </div>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Field label="First Name">
            <div className="relative">
              <User className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Enter First Name"
                value={contact.firstName}
                onChange={(e) => updateContact("firstName", e.target.value)}
                className={`${INPUT_CLASS} pl-10`}
              />
            </div>
          </Field>
          <Field label="Last Name">
            <div className="relative">
              <User className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Enter Last Name"
                value={contact.lastName}
                onChange={(e) => updateContact("lastName", e.target.value)}
                className={`${INPUT_CLASS} pl-10`}
              />
            </div>
          </Field>
        </div>

        <div className="mt-2 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
}
