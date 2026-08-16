"use client";

import { useState } from "react";
import { AlertTriangle, Headphones, MessageSquare, Paperclip, Send, Smile } from "lucide-react";

type Message = {
  author: "John Doe" | "Alice Johnson";
  role?: "Support";
  timestamp: string;
  body: string;
  attachment?: string;
};

const INITIAL_THREAD: Message[] = [
  {
    author: "John Doe",
    timestamp: "2024-01-15 14:30",
    body: "Hi, I'm really frustrated with how my apartment move was handled. The staff were unprofessional and didn't follow through on their commitments. Can someone help me address this?",
    attachment: "screenshot-error.png",
  },
  {
    author: "Alice Johnson",
    role: "Support",
    timestamp: "2024-01-15 15:15",
    body: "Hello! Thanks for reaching out. I'm sorry to hear about your experience during the move. Let me look into this for you. Could you provide more details about what happened?",
  },
  {
    author: "John Doe",
    timestamp: "2024-01-15 15:45",
    body: "I had issues with the movers not showing up on time and being careless with my belongings. I expected better service, especially since I paid for a premium package.",
  },
  {
    author: "Alice Johnson",
    role: "Support",
    timestamp: "2024-01-15 15:15",
    body: "I appreciate you sharing that with me. I'll investigate this matter further. Can you let me know the date of your move and any specific incidents that stood out?",
  },
];

function MessageBubble({ message }: { message: Message }) {
  const isSupport = message.author === "Alice Johnson";
  return (
    <div className={`flex flex-col gap-1.5 ${isSupport ? "items-end" : "items-start"}`}>
      <div className={`flex items-center gap-2 text-xs text-zinc-500 ${isSupport ? "flex-row-reverse" : ""}`}>
        <span className="size-6 rounded-full bg-zinc-200" />
        {isSupport && (
          <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-600">
            Support
          </span>
        )}
        <span className="font-medium text-zinc-900">{message.author}</span>
        <span>{message.timestamp}</span>
      </div>
      <div
        className={`max-w-lg rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isSupport ? "bg-indigo-600 text-white" : "bg-zinc-100 text-zinc-700"
        }`}
      >
        {message.body}
      </div>
      {message.attachment && (
        <span className="flex items-center gap-1.5 text-xs text-zinc-400">
          <Paperclip className="size-3" />
          {message.attachment}
        </span>
      )}
    </div>
  );
}

function EmptyHelpDesk({ onStart }: { onStart: (message: string) => void }) {
  const [draft, setDraft] = useState("");

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200">
      <div className="flex items-center gap-2.5 border-b border-zinc-100 px-6 py-4">
        <Headphones className="size-5 text-indigo-600" />
        <p className="text-base font-semibold text-zinc-900">Help Desk</p>
      </div>

      <div className="flex flex-col items-center gap-4 px-6 py-16">
        <div className="relative flex flex-col gap-3">
          <span className="flex items-center gap-2 rounded-2xl rounded-bl-sm bg-teal-600/80 px-4 py-2.5 text-white">
            <span className="size-6 rounded-full bg-rose-200" />
            <span className="h-1.5 w-24 rounded-full bg-white/70" />
          </span>
          <span className="ml-8 flex items-center gap-2 rounded-2xl rounded-br-sm bg-amber-500/80 px-4 py-2.5 text-white">
            <span className="h-1.5 w-20 rounded-full bg-white/70" />
            <span className="size-6 rounded-full bg-amber-200" />
          </span>
          <span className="flex items-center gap-2 rounded-2xl rounded-bl-sm bg-teal-600/80 px-4 py-2.5 text-white">
            <span className="size-6 rounded-full bg-rose-200" />
            <span className="h-1.5 w-24 rounded-full bg-white/70" />
          </span>
        </div>
        <p className="text-center text-sm text-zinc-500">
          You can seek help from the customer support here!!!
        </p>
      </div>

      <form
        className="flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-brand-600 p-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (draft.trim()) onStart(draft.trim());
        }}
      >
        <Smile className="size-5 shrink-0 text-white/80" />
        <input
          type="text"
          placeholder="Type a message"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          className="w-full bg-transparent text-sm text-white placeholder:text-white/70 focus:outline-none"
        />
        <button type="submit" aria-label="Send" className="shrink-0 text-white">
          <Send className="size-5" />
        </button>
      </form>
    </div>
  );
}

export function SupportPanel() {
  const [thread, setThread] = useState<Message[] | null>(null);
  const [response, setResponse] = useState("");

  const startTicket = (message: string) => {
    setThread([
      { author: "John Doe", timestamp: new Date().toISOString().slice(0, 16).replace("T", " "), body: message },
      ...INITIAL_THREAD.slice(1),
    ]);
  };

  const sendResponse = () => {
    if (!response.trim() || !thread) return;
    setThread([...thread, { author: "John Doe", timestamp: "Just now", body: response.trim() }]);
    setResponse("");
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900">Customer Support</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Lodge complaint to the customer support and get response within 10 mins.
        </p>
      </div>

      {!thread ? (
        <EmptyHelpDesk onStart={startTicket} />
      ) : (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <div className="flex flex-wrap items-center gap-3">
            <AlertTriangle className="size-5 text-amber-500" />
            <p className="text-base font-bold text-zinc-900">
              TICKET-TX380273094u88 - Staff Misconduct
            </p>
          </div>
          <div className="mt-1.5 flex items-center gap-2 text-xs text-zinc-500">
            Created: 2024-01-15 14:30
            <span className="rounded-full bg-indigo-50 px-2 py-0.5 font-medium text-indigo-600">
              Active
            </span>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
              <MessageSquare className="size-4" />
              Conversation History
            </div>

            <div className="mt-5 flex flex-col gap-5">
              {thread.map((message, i) => (
                <MessageBubble key={i} message={message} />
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-zinc-100 pt-5">
              <label className="text-sm font-medium text-zinc-700">Your Response</label>
              <textarea
                rows={3}
                placeholder="Enter a description..."
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                className="w-full resize-none rounded-xl border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
                >
                  <Paperclip className="size-3.5" />
                  Attach File
                </button>
                <button
                  type="button"
                  onClick={sendResponse}
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2 text-xs font-semibold text-white hover:bg-brand-700"
                >
                  <Send className="size-3.5" />
                  Send Response
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
