import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PartnerDashboardShell } from "@/components/dashboard/partner/PartnerDashboardShell";
import { MovingRequestDetail } from "@/components/dashboard/partner/requests/MovingRequestDetail";
import { getMovingRequest } from "@/lib/movingRequests";

export async function generateMetadata(
  props: PageProps<"/partner/dashboard/requests/[id]">
): Promise<Metadata> {
  const { id } = await props.params;
  const request = getMovingRequest(id);
  return { title: request ? `${request.trackingId} — JustVanIt Partner` : "Moving Request" };
}

export default async function MovingRequestDetailPage(
  props: PageProps<"/partner/dashboard/requests/[id]">
) {
  const { id } = await props.params;
  const request = getMovingRequest(id);

  if (!request) notFound();

  return (
    <PartnerDashboardShell active="Moving Request">
      <MovingRequestDetail request={request} />
    </PartnerDashboardShell>
  );
}
