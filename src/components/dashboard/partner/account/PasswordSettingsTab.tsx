"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const REQUIREMENTS = [
  "One Special Character",
  "One Number",
  "One Uppercase character",
  "8 Character Min",
  "One Lowercase character",
];

function PasswordField({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-zinc-900">{label}</span>
      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-zinc-200 py-3 pl-4 pr-11 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
        >
          {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
    </label>
  );
}

export function PasswordSettingsTab() {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div>
      <p className="text-lg font-bold text-zinc-900">Password Settings</p>

      <div className="mt-4 max-w-md rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
        <p className="text-base font-bold text-zinc-900">Change Password</p>

        <form
          className="mt-5 flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <PasswordField
            label="Current Password"
            placeholder="Current Password"
            value={current}
            onChange={setCurrent}
          />

          <div>
            <PasswordField label="New Password" placeholder="Password" value={next} onChange={setNext} />
            <div className="mt-2 flex flex-wrap gap-2">
              {REQUIREMENTS.map((req) => (
                <span
                  key={req}
                  className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-500"
                >
                  {req}
                </span>
              ))}
            </div>
          </div>

          <PasswordField
            label="Confirm Password"
            placeholder="Password"
            value={confirm}
            onChange={setConfirm}
          />

          <button
            type="submit"
            className="mt-1 w-fit rounded-full bg-indigo-600 px-10 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
