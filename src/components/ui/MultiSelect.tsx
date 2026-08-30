"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export function MultiSelect({
  value,
  onChange,
  options,
  placeholder,
  panelTitle,
  triggerClassName = "",
}: {
  value: string[];
  onChange: (value: string[]) => void;
  options: string[];
  placeholder: string;
  panelTitle: string;
  triggerClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
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

  const filtered = useMemo(
    () => options.filter((option) => option.toLowerCase().includes(query.toLowerCase())),
    [options, query]
  );

  const toggle = (option: string) =>
    onChange(value.includes(option) ? value.filter((v) => v !== option) : [...value, option]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center justify-between gap-2 rounded-2xl border border-zinc-200 px-4 py-3.5 text-left text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 ${triggerClassName}`}
      >
        <span className={value.length ? "text-zinc-900" : "text-zinc-400"}>
          {value.length ? `${value.length} item(s) selected` : placeholder}
        </span>
        <ChevronDown
          className={`size-4.5 shrink-0 text-zinc-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-full rounded-3xl bg-white p-5 shadow-2xl shadow-black/20 ring-1 ring-zinc-100">
          <p className="text-base font-bold text-zinc-900">{panelTitle}</p>

          <div className="relative mt-3">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full rounded-full border border-zinc-200 py-2.5 pl-10 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div className="mt-3 max-h-56 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-indigo-400 [&::-webkit-scrollbar-track]:bg-transparent">
            {filtered.length ? (
              filtered.map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-2.5 text-sm text-zinc-700 hover:bg-zinc-50"
                >
                  <input
                    type="checkbox"
                    checked={value.includes(option)}
                    onChange={() => toggle(option)}
                    className="size-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-200"
                  />
                  {option}
                </label>
              ))
            ) : (
              <p className="px-1 py-2.5 text-sm text-zinc-400">No matches found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
