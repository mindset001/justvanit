import type { Metadata } from "next";
import { PartnerDashboardShell } from "@/components/dashboard/partner/PartnerDashboardShell";
import { AccountSettings } from "@/components/dashboard/partner/account/AccountSettings";

export const metadata: Metadata = {
  title: "Account Settings — JustVanIt Partner",
  description: "Manage your company, bank, availability, and password settings.",
};

export default function PartnerAccountPage() {
  return (
    <PartnerDashboardShell active="Account">
      <AccountSettings />
    </PartnerDashboardShell>
  );
}
