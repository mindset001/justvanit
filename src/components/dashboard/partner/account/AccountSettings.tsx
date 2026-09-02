"use client";

import { useState } from "react";
import { CompanyTab } from "./CompanyTab";
import { BankInfoTab } from "./BankInfoTab";
import { AvailabilityRevenueTab } from "./AvailabilityRevenueTab";
import { PasswordSettingsTab } from "./PasswordSettingsTab";

type Tab = "company" | "bank" | "availability" | "password";

const TABS: { key: Tab; label: string }[] = [
  { key: "company", label: "Company" },
  { key: "bank", label: "Bank Info" },
  { key: "availability", label: "Availability & Revenue Structure" },
  { key: "password", label: "Password Settings" },
];

export function AccountSettings({ userId = "CP7KD28202" }: { userId?: string }) {
  const [tab, setTab] = useState<Tab>("company");

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-2xl font-bold text-zinc-900">Account Settings</p>
        <p className="mt-1 text-sm text-zinc-500">
          User- <span className="font-semibold text-zinc-900">{userId}</span>
        </p>
      </div>

      <div className="inline-flex w-fit flex-wrap rounded-full bg-zinc-100 p-1">
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setTab(key)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              tab === key ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "company" && <CompanyTab />}
      {tab === "bank" && <BankInfoTab />}
      {tab === "availability" && <AvailabilityRevenueTab />}
      {tab === "password" && <PasswordSettingsTab />}
    </div>
  );
}
