import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PartnerDashboardShell } from "@/components/dashboard/partner/PartnerDashboardShell";
import { TicketConversation } from "@/components/dashboard/partner/support/TicketConversation";
import { getSupportTicket } from "@/lib/supportTickets";

export async function generateMetadata(
  props: PageProps<"/partner/dashboard/support/[id]">
): Promise<Metadata> {
  const { id } = await props.params;
  const ticket = getSupportTicket(id);
  return { title: ticket ? `${ticket.code} — JustVanIt Partner` : "Support Ticket" };
}

export default async function SupportTicketPage(props: PageProps<"/partner/dashboard/support/[id]">) {
  const { id } = await props.params;
  const ticket = getSupportTicket(id);

  if (!ticket) notFound();

  return (
    <PartnerDashboardShell active="Help & Support Centre">
      <TicketConversation ticket={ticket} />
    </PartnerDashboardShell>
  );
}
