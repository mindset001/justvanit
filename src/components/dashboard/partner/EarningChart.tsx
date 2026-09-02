"use client";

import { useState } from "react";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const Y_LABELS = [10000, 8000, 6000, 4000, 2000, 1000, 500, 0];

const DEFAULT_DATA = [
  { date: "Jan 15, 2026", value: 350 },
  { date: "Feb 15, 2026", value: 480 },
  { date: "Mar 15, 2026", value: 4200 },
  { date: "Apr 15, 2026", value: 1750 },
  { date: "May 15, 2026", value: 3300 },
  { date: "Jun 15, 2026", value: 2900 },
  { date: "Jul 15, 2026", value: 4650 },
  { date: "Aug 15, 2026", value: 1900 },
  { date: "Sep 15, 2026", value: 3700 },
  { date: "Oct 15, 2026", value: 3850 },
  { date: "Nov 15, 2026", value: 1550 },
  { date: "Dec 15, 2026", value: 3950 },
];

const CHART_W = 1100;
const CHART_H = 260;
const MAX_VALUE = 10000;

export function EarningChart({
  data = DEFAULT_DATA,
  hasData = true,
}: {
  data?: { date: string; value: number }[];
  hasData?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(6);

  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * CHART_W,
    y: CHART_H - (d.value / MAX_VALUE) * CHART_H,
  }));

  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const active = data[activeIndex];
  const activePoint = points[activeIndex];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold text-zinc-900">Earning Activity</p>
        <span className="flex items-center gap-2 text-sm text-zinc-500">
          <span className="size-2.5 rounded-full bg-emerald-500" />
          Total Earning
        </span>
      </div>

      <div className="mt-6 flex gap-3">
        <div className="flex flex-col justify-between py-1 text-xs text-zinc-400">
          {Y_LABELS.map((label) => (
            <span key={label}>£{label.toLocaleString()}</span>
          ))}
        </div>

        <div className="relative flex-1">
          <svg
            viewBox={`0 0 ${CHART_W} ${CHART_H}`}
            preserveAspectRatio="none"
            className="h-64 w-full overflow-visible"
          >
            {Y_LABELS.map((_, i) => (
              <line
                key={i}
                x1={0}
                x2={CHART_W}
                y1={(i / (Y_LABELS.length - 1)) * CHART_H}
                y2={(i / (Y_LABELS.length - 1)) * CHART_H}
                stroke="#f1f5f9"
                strokeWidth={1}
              />
            ))}

            {hasData && (
              <>
                <path d={path} fill="none" stroke="#22c55e" strokeWidth={2} />
                <line
                  x1={activePoint.x}
                  x2={activePoint.x}
                  y1={0}
                  y2={CHART_H}
                  stroke="#a5b4fc"
                  strokeWidth={1}
                  strokeDasharray="4 4"
                />
                {points.map((p, i) => (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r={i === activeIndex ? 6 : 10}
                    fill={i === activeIndex ? "#6366f1" : "transparent"}
                    stroke={i === activeIndex ? "white" : "transparent"}
                    strokeWidth={2}
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveIndex(i)}
                  />
                ))}
              </>
            )}
          </svg>

          {hasData && (
            <div
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-full rounded-xl bg-navy-900 px-3 py-2 text-white"
              style={{
                left: `${(activePoint.x / CHART_W) * 100}%`,
                top: `${(activePoint.y / CHART_H) * 100}%`,
                marginTop: "-10px",
              }}
            >
              <p className="whitespace-nowrap text-xs font-medium text-white/70">{active.date}</p>
              <p className="whitespace-nowrap text-sm font-semibold">
                £{active.value.toLocaleString()} Earnings
              </p>
            </div>
          )}

          <div className="mt-2 flex justify-between text-xs text-zinc-400">
            {MONTHS.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
