"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { ReviewFlow } from "./ReviewFlow";

export function RatingReview() {
  const [flowOpen, setFlowOpen] = useState(false);
  const [submitted, setSubmitted] = useState<{ text: string; rating: number; anonymous: boolean } | null>(
    null,
  );

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <p className="text-base font-semibold text-zinc-900">Rating &amp; Review</p>

      {submitted ? (
        <div className="mt-4 rounded-xl border border-zinc-200 p-4">
          <p className="text-sm leading-relaxed text-zinc-600">
            {submitted.text}
            {submitted.anonymous && <span className="ml-2 text-xs text-zinc-400">— Anonymous</span>}
          </p>
          <div className="mt-3 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`size-4 ${i < submitted.rating ? "fill-amber-400 text-amber-400" : "text-zinc-200"}`}
              />
            ))}
            <span className="ml-1.5 text-xs text-zinc-500">{submitted.rating.toFixed(1)} rating</span>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setFlowOpen(true)}
          className="mt-4 flex w-full flex-col items-center gap-2 rounded-xl border border-dashed border-indigo-200 bg-indigo-50/40 px-6 py-8 text-center transition-colors hover:bg-indigo-50"
        >
          <Star className="size-8 text-indigo-500" />
          <span className="text-sm font-semibold text-zinc-900">Drop a Feedback</span>
          <span className="max-w-xs text-xs text-zinc-500">
            Write a review and give rating on our services and the moving Team.
          </span>
        </button>
      )}

      {flowOpen && (
        <ReviewFlow
          onClose={() => setFlowOpen(false)}
          onSubmitted={(review) => setSubmitted(review)}
        />
      )}
    </div>
  );
}
