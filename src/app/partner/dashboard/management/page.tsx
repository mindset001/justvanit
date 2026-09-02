import type { Metadata } from "next";
import { PartnerDashboardShell } from "@/components/dashboard/partner/PartnerDashboardShell";
import { MovingManagementList } from "@/components/dashboard/partner/management/MovingManagementList";

export const metadata: Metadata = {
  title: "Moving Management — JustVanIt Partner",
  description: "Manage and keep track of all activity regarding your moving jobs.",
};

export default function MovingManagementPage() {
  return (
    <PartnerDashboardShell active="Moving Management">
      <MovingManagementList />
    </PartnerDashboardShell>
  );
}
