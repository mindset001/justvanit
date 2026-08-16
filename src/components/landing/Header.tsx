"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Truck } from "lucide-react";

const NAV_LINKS = [
  { label: "Tracking", href: "/tracking" },
  { label: "Business Model", href: "/business-model" },
  { label: "Become A Partner", href: "/become-a-partner" },
  { label: "About us", href: "/about" },
  { label: "Get help", href: "/contact" },
];

export function Header({ variant = "light" }: { variant?: "light" | "dark" }) {
  const pathname = usePathname();
  const isDark = variant === "dark";

  const isActive = (href: string) =>
    href.startsWith("/") && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header
      className={
        isDark
          ? "absolute inset-x-0 top-0 z-30"
          : "sticky top-0 z-30 border-b border-zinc-100 bg-white"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className={`text-xl font-extrabold tracking-tight ${isDark ? "text-white" : "text-zinc-900"}`}
        >
          JUST<span className={isDark ? "text-brand-400" : "text-brand-600"}>VANIT.</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`border-b-2 pb-1 text-sm font-medium transition-colors ${
                  active
                    ? isDark
                      ? "border-white text-white"
                      : "border-brand-600 text-zinc-900"
                    : isDark
                      ? "border-transparent text-white/70 hover:text-white"
                      : "border-transparent text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className={`hidden rounded-full px-4 py-2.5 text-sm font-medium transition-colors sm:block ${
              isDark
                ? "border border-white/20 bg-white/10 text-white hover:bg-white/20"
                : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
            }`}
          >
            Login
          </Link>
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            <Truck className="size-4" />
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
