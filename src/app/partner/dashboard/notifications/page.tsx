import type { Metadata } from "next";
import { PartnerDashboardShell } from "@/components/dashboard/partner/PartnerDashboardShell";
import { NotificationsList } from "@/components/dashboard/partner/notifications/NotificationsList";

export const metadata: Metadata = {
  title: "Notifications — JustVanIt Partner",
  description: "View all your notifications here.",
};

export default function PartnerNotificationsPage() {
  return (
    <PartnerDashboardShell active="Notifications">
      <NotificationsList />
    </PartnerDashboardShell>
  );
}
