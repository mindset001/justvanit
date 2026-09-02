import type { Metadata } from "next";
import { PartnerDashboardShell } from "@/components/dashboard/partner/PartnerDashboardShell";
import { PartnerOverview } from "@/components/dashboard/partner/PartnerOverview";

export const metadata: Metadata = {
  title: "Partner Dashboard — JustVanIt",
  description: "Overview of your moving business on JustVanIt.",
};

export default async function PartnerDashboardPage(props: PageProps<"/partner/dashboard">) {
  const searchParams = await props.searchParams;
  const hasData = searchParams.empty !== "1";

  return (
    <PartnerDashboardShell active="Overview">
      <PartnerOverview hasData={hasData} />
    </PartnerDashboardShell>
  );
}
