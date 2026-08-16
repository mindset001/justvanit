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
  const percent = (step / totalSteps) * 100;
  return (
    <span className={`relative flex ${size} shrink-0 items-center justify-center rounded-full bg-indigo-50`}>
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(#4f46e5 ${percent}%, transparent ${percent}%)`,
          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
        }}
      />
      {showLabel && (
        <span className="text-xs font-semibold text-indigo-600">
          {step}/{totalSteps}
        </span>
      )}
    </span>
  );
}
