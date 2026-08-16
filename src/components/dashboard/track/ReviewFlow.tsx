"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Modal } from "@/components/modals/Modal";
import { StatusModal } from "@/components/modals/StatusModal";
import { Switch } from "@/components/modals/Switch";

type Stage = "prompt" | "form" | "submitted";

export function ReviewFlow({
  onClose,
  onSubmitted,
}: {
  onClose: () => void;
  onSubmitted: (review: { text: string; rating: number; anonymous: boolean }) => void;
}) {
  const [stage, setStage] = useState<Stage>("prompt");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [anonymous, setAnonymous] = useState(false);

  if (stage === "prompt") {
    return (
      <StatusModal
        open
        onClose={onClose}
        variant="success"
        title="Move Completed"
        description="Share your thoughts and give us a rating!"
        actions={[{ label: "Submit Review", variant: "primary", onClick: () => setStage("form") }]}
      />
    );
  }

  if (stage === "submitted") {
    return (
      <StatusModal
        open
        onClose={onClose}
        variant="success"
        title="Rating & Review Submitted !"
        description="Thank you for giving a review."
      />
    );
  }

  return (
    <Modal open onClose={onClose}>
      <h2 className="text-xl font-bold text-zinc-900">Write Review</h2>

      <form
        className="mt-6 flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitted({ text, rating: rating || 4, anonymous });
          setStage("submitted");
        }}
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm text-zinc-500">Write a review</span>
          <textarea
            rows={4}
            required
            placeholder="Write a review on the video"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full resize-none rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
        </label>

        <div>
          <p className="text-sm text-zinc-500">Rating</p>
          <div className="mt-2 flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <button key={i} type="button" onClick={() => setRating(i + 1)} aria-label={`Rate ${i + 1} stars`}>
                <Star
                  className={`size-6 ${i < rating ? "fill-amber-400 text-amber-400" : "text-zinc-200"}`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-zinc-900">Remain Anonymous</span>
          <Switch checked={anonymous} onChange={setAnonymous} />
        </div>

        <button
          type="submit"
          className="rounded-full bg-brand-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Submit Review
        </button>
      </form>
    </Modal>
  );
}
