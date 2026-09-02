import type { Metadata } from "next";
import { PartnerDashboardShell } from "@/components/dashboard/partner/PartnerDashboardShell";
import { SupportCentre } from "@/components/dashboard/partner/support/SupportCentre";

export const metadata: Metadata = {
  title: "Help & Support Centre — JustVanIt Partner",
  description: "Lodge a complaint or get in touch with the JustVanIt team.",
};

export default function SupportCentrePage() {
  return (
    <PartnerDashboardShell active="Help & Support Centre">
      <SupportCentre />
    </PartnerDashboardShell>
  );
}
