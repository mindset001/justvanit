import Link from "next/link";
import { BadgeCheck, ShieldX } from "lucide-react";
import { Modal } from "./Modal";

export type StatusAction = {
  label: string;
  variant: "primary" | "outline";
  onClick?: () => void;
  href?: string;
};

function ActionButton({ action }: { action: StatusAction }) {
  const className =
    action.variant === "primary"
      ? "flex-1 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      : "flex-1 rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50";

  if (action.href) {
    return (
      <Link href={action.href} className={`${className} text-center`}>
        {action.label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={action.onClick} className={className}>
      {action.label}
    </button>
  );
}

export function StatusModal({
  open,
  onClose,
  variant,
  title,
  description,
  actions = [],
}: {
  open: boolean;
  onClose: () => void;
  variant: "success" | "error";
  title: string;
  description: React.ReactNode;
  actions?: StatusAction[];
}) {
  const isSuccess = variant === "success";

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col items-center text-center">
        <span
          className={`flex size-32 items-center justify-center rounded-full ${
            isSuccess ? "bg-indigo-50" : "bg-red-50"
          }`}
        >
          <span
            className={`flex size-20 items-center justify-center rounded-full bg-gradient-to-br shadow-lg ${
              isSuccess
                ? "from-blue-600 to-purple-600 shadow-indigo-200"
                : "from-red-600 to-red-900 shadow-red-200"
            }`}
          >
            {isSuccess ? (
              <BadgeCheck className="size-10 text-white" />
            ) : (
              <ShieldX className="size-10 text-white" />
            )}
          </span>
        </span>

        <h2 className="mt-6 text-xl font-bold text-zinc-900">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">{description}</p>

        {actions.length > 0 && (
          <div className="mt-6 flex w-full gap-3">
            {actions.map((action) => (
              <ActionButton key={action.label} action={action} />
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
}
