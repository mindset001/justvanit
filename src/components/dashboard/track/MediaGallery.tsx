import { Play } from "lucide-react";

export function MediaGallery() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <p className="text-base font-semibold text-zinc-900">Media Gallery</p>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-lg bg-zinc-100" />
        ))}
        <div className="flex aspect-square items-center justify-center rounded-lg bg-zinc-200">
          <Play className="size-5 text-zinc-500" />
        </div>
      </div>
    </div>
  );
}
