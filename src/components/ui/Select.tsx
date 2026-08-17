"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export function Select({
  value,
  onChange,
  options,
  placeholder,
  triggerClassName = "",
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  triggerClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center justify-between gap-2 rounded-2xl border border-zinc-200 px-4 py-3.5 text-left text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 ${triggerClassName}`}
      >
        <span className={value ? "text-zinc-900" : "text-zinc-400"}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`size-4.5 shrink-0 text-zinc-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-3xl bg-white pb-2 shadow-2xl shadow-black/20 ring-1 ring-zinc-100">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="block w-full border-b border-zinc-100 px-6 py-4 text-left text-base text-zinc-900 hover:bg-zinc-50"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
