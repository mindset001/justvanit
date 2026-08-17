import { useId } from "react";

export function ProgressRing({
  step,
  totalSteps,
  size = "size-14",
  showLabel = true,
}: {
  step: number;
  totalSteps: number;
  size?: string;
  showLabel?: boolean;
}) {
  const gradientId = useId();
  const wobbleId = useId();
  const percent = step / totalSteps;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference * percent;

  return (
    <span className={`relative flex ${size} shrink-0 items-center justify-center`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#e0e7ff" strokeWidth="10" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
          filter={`url(#${wobbleId})`}
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <filter id={wobbleId} x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      {showLabel && (
        <span className="relative text-xs font-semibold text-indigo-600">
          {step}/{totalSteps}
        </span>
      )}
    </span>
  );
}
