"use client";

import { useState } from "react";
import { AlertTriangle, MessageSquare, Paperclip, Send, User } from "lucide-react";
import type { SupportTicket } from "@/lib/supportTickets";

export function TicketConversation({ ticket }: { ticket: SupportTicket }) {
  const [response, setResponse] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <div>
        <a href="/partner/dashboard/support" className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-700">
          ← Back
        </a>
        <span className="ml-2 text-lg font-bold text-zinc-900">Customer Support</span>
      </div>

      <div className="max-w-3xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
        <p className="flex items-center gap-2 text-lg font-bold text-zinc-900">
          <AlertTriangle className="size-4.5 text-amber-500" />
          {ticket.code} - {ticket.title}
        </p>
        <div className="mt-2 flex items-center gap-3 text-sm text-zinc-500">
          <span>Created: {ticket.createdAt}</span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              ticket.status === "Active" ? "bg-indigo-50 text-indigo-600" : "bg-emerald-50 text-emerald-600"
            }`}
          >
            {ticket.status}
          </span>
        </div>

        <div className="mt-5 rounded-2xl border border-zinc-100 p-5">
          <p className="flex items-center gap-2 text-sm font-bold text-zinc-900">
            <MessageSquare className="size-4 text-zinc-400" />
            Conversation History
          </p>

          <div className="mt-4 flex flex-col gap-5">
            {ticket.messages.map((message, i) => {
              const isSupport = message.role === "support";
              return (
                <div key={i} className={`flex flex-col ${isSupport ? "items-end" : "items-start"}`}>
                  <div className={`mb-1.5 flex items-center gap-2 text-xs text-zinc-500 ${isSupport ? "flex-row-reverse" : ""}`}>
                    <span className="flex size-6 items-center justify-center rounded-full bg-zinc-100 text-zinc-400">
                      <User className="size-3" />
                    </span>
                    <span className="font-semibold text-zinc-900">{message.author}</span>
                    {isSupport && (
                      <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold text-zinc-500">
                        Support
                      </span>
                    )}
                    <span>{message.timestamp}</span>
                  </div>
                  <div
                    className={`max-w-md rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      isSupport ? "bg-indigo-50 text-indigo-900" : "bg-zinc-100 text-zinc-700"
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.attachment && (
                    <span className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-zinc-400">
                      <Paperclip className="size-3" />
                      {message.attachment}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <form
          className="mt-5 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            setResponse("");
          }}
        >
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-zinc-900">Your Response</span>
            <textarea
              rows={4}
              placeholder="Enter a description..."
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              className="w-full resize-none rounded-xl border border-zinc-200 py-3 px-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </label>

          <div className="flex items-center justify-between">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
            >
              <Paperclip className="size-4" />
              Attach File
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              <Send className="size-4" />
              Send Response
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
