export function MiniSparkline({ flat = false }: { flat?: boolean }) {
  const path = flat
    ? "M0,20 L100,20"
    : "M0,26 L10,22 L20,28 L30,14 L40,20 L50,8 L60,18 L70,12 L80,22 L90,10 L100,16";

  return (
    <svg viewBox="0 0 100 32" preserveAspectRatio="none" className="h-8 w-20">
      <path
        d={path}
        fill="none"
        stroke={flat ? "#e4e4e7" : "#34d399"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
