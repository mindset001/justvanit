"use client";

import { useState } from "react";
import { Headphones, Send, Smile } from "lucide-react";

export function NewChatPanel() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <div>
        <a
          href="/partner/dashboard/support"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-700"
        >
          ← Back
        </a>
        <span className="ml-2 text-lg font-bold text-zinc-900">Customer Support</span>
      </div>

      <div className="flex max-w-2xl flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-indigo-200">
        <p className="flex items-center gap-2 border-b border-zinc-100 px-6 py-5 text-base font-bold text-zinc-900">
          <Headphones className="size-4.5 text-indigo-500" />
          Help Desk
        </p>

        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-16">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2 self-start">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-rose-200 text-xs">🙂</span>
              <div className="h-6 w-40 rounded-2xl rounded-bl-sm bg-teal-600/80" />
            </div>
            <div className="ml-10 flex items-center gap-2 self-end">
              <div className="h-6 w-32 rounded-2xl rounded-br-sm bg-teal-600/80" />
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs">🤖</span>
            </div>
            <div className="flex items-center gap-2 self-start">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-rose-200 text-xs">🙂</span>
              <div className="h-6 w-40 rounded-2xl rounded-bl-sm bg-teal-600/80" />
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-zinc-500">
            You can seek help from the customer support here!!!
          </p>
        </div>

        <form
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-500 p-3"
          onSubmit={(e) => {
            e.preventDefault();
            setMessage("");
          }}
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white/80">
            <Smile className="size-4" />
          </span>
          <input
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-full bg-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/70 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
