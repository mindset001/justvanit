"use client";

import { useState } from "react";
import { Landmark, Pencil } from "lucide-react";

const BANK_DETAILS = {
  bankName: "HSBC Holdings plc (UK)",
  accountName: "Favi design",
  sortCode: "912347",
  accountNo: "206248262471",
};

export function BankInfoTab() {
  const [hasBankDetails, setHasBankDetails] = useState(true);

  return (
    <div>
      <p className="text-lg font-bold text-zinc-900">Bank Information</p>

      <div className="mt-4 max-w-md rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
        <div className="flex items-start justify-between">
          <p className="text-base font-bold text-zinc-900">Bank Pay Out Details</p>
          <button
            type="button"
            aria-label="Edit bank details"
            onClick={() => setHasBankDetails((v) => !v)}
            className="text-zinc-400 hover:text-zinc-600"
          >
            <Pencil className="size-4" />
          </button>
        </div>

        <div className="mt-4 flex items-start gap-3 rounded-xl bg-zinc-50 p-4">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-zinc-200 text-zinc-500">
            <Landmark className="size-4" />
          </span>

          {hasBankDetails ? (
            <div>
              <p className="text-sm font-bold text-zinc-900">{BANK_DETAILS.bankName}</p>
              <p className="mt-1.5 text-sm text-zinc-500">
                Account Name: <span className="font-semibold text-zinc-900">{BANK_DETAILS.accountName}</span>
              </p>
              <p className="text-sm text-zinc-500">
                Sort Code: <span className="font-semibold text-zinc-900">{BANK_DETAILS.sortCode}</span>
              </p>
              <p className="text-sm text-zinc-500">
                Account No: <span className="font-semibold text-zinc-900">{BANK_DETAILS.accountNo}</span>
              </p>
            </div>
          ) : (
            <div>
              <p className="text-sm font-semibold text-indigo-600">Note</p>
              <p className="mt-1 text-sm text-zinc-700">
                Ensure the company on your JustVanIt account is the same as your bank account
                details.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
