import { AlertCircle } from "lucide-react";

export function FormError({ message }: { message: string | null }) {
  if (!message) return null;

  return (
    <p className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
      <AlertCircle className="mt-0.5 size-4 shrink-0" />
      {message}
    </p>
  );
}
