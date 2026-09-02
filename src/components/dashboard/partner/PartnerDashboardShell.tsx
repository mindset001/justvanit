import { Headphones } from "lucide-react";
import { PartnerSidebar } from "./PartnerSidebar";
import { PartnerTopbar } from "./PartnerTopbar";

export function PartnerDashboardShell({
  active,
  children,
}: {
  active: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-zinc-50">
      <PartnerSidebar active={active} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <PartnerTopbar section={active} />
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>

      <button
        type="button"
        aria-label="Contact support"
        className="fixed bottom-6 right-6 flex size-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 transition-colors hover:bg-indigo-700"
      >
        <Headphones className="size-5" />
      </button>
    </div>
  );
}
