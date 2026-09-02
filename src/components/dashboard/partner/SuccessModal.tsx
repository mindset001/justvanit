"use client";

import { BadgeCheck, Check, X } from "lucide-react";

export function SuccessModal({
  title,
  description,
  onClose,
}: {
  title: string;
  description: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 text-zinc-400 hover:text-zinc-600"
        >
          <X className="size-5" />
        </button>

        <div className="mx-auto flex size-36 items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="flex size-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600">
            <div className="relative flex size-16 items-center justify-center">
              <BadgeCheck className="absolute inset-0 size-16 text-emerald-500" fill="currentColor" stroke="none" />
              <Check className="relative size-6 text-white" strokeWidth={3} />
            </div>
          </div>
        </div>

        <p className="mt-6 text-xl font-bold text-zinc-900">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">{description}</p>
      </div>
    </div>
  );
}
