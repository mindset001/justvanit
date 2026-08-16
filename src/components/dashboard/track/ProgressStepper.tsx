import { Check, Clock } from "lucide-react";

const STEP_LABELS = [
  "Provide\nMoving Details",
  "Compare\nQuote",
  "Secure\nBooking",
  "Payment\nCompleted",
  "Job/Move\nConfirmed",
  "Moving\nCompleted",
  "Customer\nConfirmation",
  "Payment\nReleased",
];

export function ProgressStepper({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-start">
      {STEP_LABELS.map((label, i) => {
        const step = i + 1;
        const isDone = step < currentStep;
        const isCurrent = step === currentStep;

        return (
          <div key={step} className="flex flex-1 items-start last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                  isDone
                    ? "bg-emerald-600 text-white"
                    : isCurrent
                      ? "border-2 border-indigo-500 bg-white text-indigo-600"
                      : "bg-zinc-200 text-zinc-500"
                }`}
              >
                {isDone ? <Check className="size-4" /> : isCurrent ? <Clock className="size-4" /> : step}
              </span>
              <p
                className={`whitespace-pre-line text-center text-[11px] leading-tight ${
                  isCurrent ? "font-semibold text-indigo-600" : "text-zinc-500"
                }`}
              >
                {step}. {label}
              </p>
            </div>
            {step < STEP_LABELS.length && (
              <div
                className={`mt-4 h-px flex-1 ${isDone ? "bg-emerald-600" : "bg-zinc-200"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
