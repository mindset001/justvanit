import type { Metadata } from "next";
import { PartnerDashboardShell } from "@/components/dashboard/partner/PartnerDashboardShell";
import { NewChatPanel } from "@/components/dashboard/partner/support/NewChatPanel";

export const metadata: Metadata = {
  title: "New Support Chat — JustVanIt Partner",
};

export default function NewSupportChatPage() {
  return (
    <PartnerDashboardShell active="Help & Support Centre">
      <NewChatPanel />
    </PartnerDashboardShell>
  );
}
