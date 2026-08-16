import { Box } from "lucide-react";

const ITEMS = ["Tv", "3- Seater Sofa", "3- Seater Sofa", "3- Seater Sofa", "3- Seater Sofa", "3- Seater Sofa", "3- Seater Sofa", "3- Seater Sofa"];

export function InventoryOverview() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <p className="text-base font-semibold text-zinc-900">Inventory Overview</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600"
          >
            <Box className="size-3.5 text-zinc-400" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
