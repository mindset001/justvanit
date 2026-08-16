"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Phone, User } from "lucide-react";
import { MapPlaceholder } from "./MapPlaceholder";

const CONTACT_ROWS = [
  { icon: Phone, label: "+441 5985 55446" },
  { icon: Mail, label: "Support@JustVanIt.uk" },
  { icon: MapPin, label: "4, Fleet Street, London, EC4A 2DQ" },
  { icon: Clock, label: "Monday- Saturday, 9:00am - 7:00pm. Sunday, 11:00am - 5:00pm." },
];

const INPUT_CLASS =
  "w-full rounded-xl border border-zinc-200 py-2.5 pl-10 pr-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100";

export function ContactPanel() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-navy-900 px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy-900">Contact Information</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              We assist you in navigating your move, provide support throughout the process, and
              ensure your business continues to thrive.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {CONTACT_ROWS.map((row, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
                    <row.icon className="size-4" />
                  </span>
                  <span className="text-sm font-medium text-navy-900">{row.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <MapPlaceholder />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900">Send Us a Message</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Fill up the form and our team will get back to you within 24 hours
            </p>

            <form
              className="mt-6 flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid grid-cols-2 gap-3">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-zinc-500">First Name</span>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
                    <input type="text" placeholder="Enter First Name" className={INPUT_CLASS} />
                  </div>
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-zinc-500">Last Name</span>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
                    <input type="text" placeholder="Enter First Name" className={INPUT_CLASS} />
                  </div>
                </label>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-zinc-500">Email</span>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
                    <input
                      type="email"
                      placeholder="linda@framcreative.com"
                      className={INPUT_CLASS}
                    />
                  </div>
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-zinc-500">Phone</span>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
                    <input type="tel" placeholder="+441 000 5505" className={INPUT_CLASS} />
                  </div>
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-zinc-500">Subject</span>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="w-full rounded-xl border border-zinc-200 py-2.5 px-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-zinc-500">Message</span>
                <textarea
                  rows={4}
                  placeholder="Enter a description..."
                  className="w-full resize-none rounded-xl border border-zinc-200 py-2.5 px-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </label>

              <button
                type="submit"
                className="mt-1 inline-flex w-fit items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                Send Message
              </button>

              {submitted && (
                <p className="text-xs text-brand-600">
                  Thanks — we&apos;ll get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
