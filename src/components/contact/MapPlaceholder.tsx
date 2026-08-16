import { MapPin } from "lucide-react";

const PINS = [
  { top: "18%", left: "58%" },
  { top: "38%", left: "48%" },
  { top: "46%", left: "62%" },
  { top: "62%", left: "40%" },
  { top: "70%", left: "58%" },
];

export function MapPlaceholder() {
  return (
    <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-slate-100">
      <svg viewBox="0 0 400 220" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          d="M40 20 C60 40 50 70 70 90 C90 110 80 140 100 160 C120 180 110 200 130 210 L180 210 C190 190 210 190 220 170 C230 150 260 150 270 130 C280 110 310 100 320 80 C330 60 360 50 360 30 L360 10 L40 10 Z"
          fill="#cbd5e1"
        />
        <path
          d="M120 40 L150 90 L140 150 M200 60 L220 120 L260 140 M90 100 L160 130"
          stroke="#5eead4"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      {PINS.map((pin, i) => (
        <span
          key={i}
          className="absolute flex size-5 -translate-x-1/2 -translate-y-full items-center justify-center rounded-full bg-brand-600 text-white shadow"
          style={{ top: pin.top, left: pin.left }}
        >
          <MapPin className="size-3" fill="currentColor" />
        </span>
      ))}
    </div>
  );
}
