import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PartnerDashboardShell } from "@/components/dashboard/partner/PartnerDashboardShell";
import { MovingJobDetail } from "@/components/dashboard/partner/management/MovingJobDetail";
import { getManagedJob } from "@/lib/movingManagement";

export async function generateMetadata(
  props: PageProps<"/partner/dashboard/management/[id]">
): Promise<Metadata> {
  const { id } = await props.params;
  const job = getManagedJob(id);
  return { title: job ? `${job.trackingId} — JustVanIt Partner` : "Moving Job" };
}

export default async function MovingJobDetailPage(
  props: PageProps<"/partner/dashboard/management/[id]">
) {
  const { id } = await props.params;
  const job = getManagedJob(id);

  if (!job) notFound();

  return (
    <PartnerDashboardShell active="Moving Management">
      <MovingJobDetail job={job} />
    </PartnerDashboardShell>
  );
}
