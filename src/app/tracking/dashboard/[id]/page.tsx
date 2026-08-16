import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export async function generateMetadata(
  props: PageProps<"/tracking/dashboard/[id]">,
): Promise<Metadata> {
  const { id } = await props.params;
  return { title: `Tracking ${id} — JustVanIt` };
}

export default async function TrackingDashboardPage(props: PageProps<"/tracking/dashboard/[id]">) {
  const { id } = await props.params;

  return <DashboardShell trackingId={id} />;
}
