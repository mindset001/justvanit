import type { Metadata } from "next";
import { PartnerDashboardShell } from "@/components/dashboard/partner/PartnerDashboardShell";
import { MovingRequestList } from "@/components/dashboard/partner/requests/MovingRequestList";

export const metadata: Metadata = {
  title: "Moving Requests — JustVanIt Partner",
  description: "Review and quote for new residential and commercial moves.",
};

export default function MovingRequestPage() {
  return (
    <PartnerDashboardShell active="Moving Request">
      <MovingRequestList />
    </PartnerDashboardShell>
  );
}
