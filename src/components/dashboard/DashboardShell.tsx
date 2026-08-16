"use client";

import { useState } from "react";
import { DashboardSidebar, type DashboardTab } from "./DashboardSidebar";
import { DashboardTopbar } from "./DashboardTopbar";
import { TrackPanel } from "./track/TrackPanel";
import { HistoryPanel } from "./history/HistoryPanel";
import { SupportPanel } from "./support/SupportPanel";
import { NotificationPanel } from "./notification/NotificationPanel";

export function DashboardShell({ trackingId }: { trackingId: string }) {
  const [tab, setTab] = useState<DashboardTab>("track");

  return (
    <div className="flex min-h-screen flex-1 bg-zinc-50">
      <DashboardSidebar active={tab} onChange={setTab} />

      <div className="flex flex-1 flex-col">
        <DashboardTopbar />

        <main className="flex-1 p-8">
          {tab === "track" && <TrackPanel trackingId={trackingId} />}
          {tab === "history" && <HistoryPanel />}
          {tab === "support" && <SupportPanel />}
          {tab === "notification" && <NotificationPanel />}
        </main>
      </div>
    </div>
  );
}
