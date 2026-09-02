import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ChevronDown, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SUPPORT_TICKETS } from "@/lib/supportTickets";
import Map from "../../../../../public/images/map.jpg";

export function SupportCentre({ companyName = "Delly Moving Ltd" }: { companyName?: string }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-2xl font-bold text-zinc-900">Hello, {companyName}</p>
          <p className="mt-1 text-sm text-zinc-500">Have any complaint, lodge your complaint below.</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
        >
          <CalendarDays className="size-4 text-zinc-400" />
          All
          <ChevronDown className="size-4 text-zinc-400" />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-full bg-zinc-100 text-xs font-bold text-zinc-600">
                24
              </span>
              <p className="text-base font-bold text-zinc-900">Lodge a new complaint</p>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-100 pt-4">
              <p className="max-w-sm text-sm text-zinc-500">
                Create a new ticket, start a chat with our support to lodge your complaint
              </p>
              <Link
                href="/partner/dashboard/support/new"
                className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
              >
                <MessageCircle className="size-4" />
                Chat Support
              </Link>
            </div>
          </div>

          {SUPPORT_TICKETS.filter((t) => t.id !== "tx380273094u88").map((ticket) => (
            <Link
              key={ticket.id}
              href={`/partner/dashboard/support/${ticket.id}`}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100 transition-colors hover:bg-zinc-50"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-semibold text-zinc-900">{ticket.code}</p>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                    ticket.status === "Active" ? "bg-indigo-50 text-indigo-600" : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {ticket.status}
                </span>
              </div>
              <p className="mt-2 text-sm font-bold text-zinc-900">{ticket.title}</p>
              <p className="mt-1 line-clamp-2 text-sm text-zinc-500">{ticket.preview}</p>
              <p className="mt-3 text-xs text-zinc-400">{ticket.timeAgo}</p>
            </Link>
          ))}
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
          <p className="text-2xl font-bold text-zinc-900">Contact Us</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500">
            We assist you in navigating your move, provide support throughout the process, and
            ensure your business continues to thrive.
          </p>

          <div className="mt-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
                <Phone className="size-4" />
              </span>
              <span className="text-sm font-semibold text-zinc-900">+441 5985 55446</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
                <Mail className="size-4" />
              </span>
              <span className="text-sm font-semibold text-zinc-900">Support@JustVanIt.uk</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
                <MapPin className="size-4" />
              </span>
              <span className="text-sm font-semibold text-zinc-900">4, Fleet Street, London, EC4A 2DQ</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
                <Clock className="size-4" />
              </span>
              <span className="text-sm font-semibold text-zinc-900">
                Monday- Saturday, 9:00am - 7:00pm. Sunday, 11:00am - 5:00pm.
              </span>
            </div>
          </div>

          <div className="relative mt-5 h-56 w-full overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={Map}
              alt="Map of the UK showing JustVanIt's service network"
              fill
              sizes="480px"
              className="object-cover object-[50%_65%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
