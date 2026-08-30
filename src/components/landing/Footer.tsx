"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 3h-3.2v12.4a2.6 2.6 0 1 1-2.6-2.6c.24 0 .47.03.7.08V9.7a5.8 5.8 0 1 0 5.1 5.76V9.2a7.6 7.6 0 0 0 4.4 1.4V7.4a4.4 4.4 0 0 1-4.4-4.4Z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 3h4.3l4.1 5.6L17 3h3l-6.3 7.9L20.4 21h-4.3l-4.5-6.1L6 21H3l6.7-8.4L4 3Z" />
    </svg>
  );
}

const QUICK_LINKS = [
  { label: "Get Quote", href: "/get-quote" },
  { label: "Become a Partner", href: "/become-a-partner" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Help Desk", href: "/contact" },
  { label: "Business Model", href: "/business-model" },
];

const LEGAL_LINKS = [
  { label: "Terms & Condition", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
];

const SOCIALS = [
  { icon: LinkedinIcon, href: "#", label: "LinkedIn", colorClass: "text-[#0A66C2]" },
  { icon: InstagramIcon, href: "#", label: "Instagram", colorClass: "text-[#8134AF]" },
  { icon: TiktokIcon, href: "#", label: "TikTok", colorClass: "text-black" },
  { icon: XIcon, href: "#", label: "X", colorClass: "text-black" },
];

const CONTACT_DETAILS = [
  { icon: Mail, label: "Email Us", value: "Support@JustVanIt.uk" },
  { icon: Phone, label: "Call Us", value: "+441 5985 55446" },
  { icon: MapPin, label: "Office", value: "4, Fleet Street, London, EC4A 2DQ" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 pt-16 text-white/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Join Our Community</h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">
              Stay ahead of the curve with exclusive updates and unbeatable offers from
              JustVanIt. Subscribe now to be the first to discover the latest news from
              JustVanIt.
            </p>
            <form
              className="mt-5 flex max-w-md items-center justify-between gap-2 rounded-full border border-white/30 p-1.5 pl-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-600 transition-colors hover:bg-zinc-100"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-8 text-2xl text-white">
              The Future of Moving is <span className="font-bold">just made easier.</span>
            </p>
            <div className="mt-4 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label, colorClass }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`flex size-10 items-center justify-center rounded-xl bg-white transition-opacity hover:opacity-90 ${colorClass}`}
                >
                  <Icon className="size-4.5" />
                </a>
              ))}
            </div>
            <p className="mt-3 text-sm text-white/50">Give us a follow on our socials.</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Quick link</p>
            <ul className="mt-4 flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Legal</p>
            <ul className="mt-4 flex flex-col gap-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          {CONTACT_DETAILS.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Icon className="size-4.5 text-white" />
              </span>
              <div>
                <p className="text-xs text-white/50">{label}</p>
                <p className="text-sm font-semibold text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[10rem] font-black leading-none tracking-tight text-white/5"
        >
          JUSTVANIT
        </span>

        <div className="relative flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 JustVanIt. Made to make relocation easier.</p>
          <div className="flex items-center gap-5">
            <Link href="/terms" className="hover:text-white/70">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-white/70">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-white/70">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
