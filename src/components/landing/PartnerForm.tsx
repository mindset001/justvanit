"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown, Eye, EyeOff, Mail, Plus } from "lucide-react";
import { ProgressRing } from "./ProgressRing";
import { MOVING_TYPES } from "./QuoteForm";

const VEHICLE_TYPES = [
  "Small Van",
  "Luton Van (Tail Lift)",
  "7.5 Tonne Truck",
  "Transit Van",
  "Articulated Lorry",
];

const CITIES = [
  "London",
  "Manchester",
  "Birmingham",
  "Leeds",
  "Glasgow",
  "Bristol",
  "Liverpool",
  "Edinburgh",
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;
type Day = (typeof DAYS)[number];

type Availability = Record<Day, { enabled: boolean; start: string; end: string; period: "AM" | "PM" }>;

const INITIAL_AVAILABILITY: Availability = DAYS.reduce((acc, day) => {
  acc[day] = { enabled: day !== "Sunday", start: "", end: "", period: "AM" };
  return acc;
}, {} as Availability);

const TOTAL_STEPS = 3;

const STEP_COPY: Record<number, { title: string; description: string }> = {
  1: {
    title: "Provide Business Identity",
    description: "Tell us about your registered removal business.",
  },
  2: {
    title: "Provide Business Identity & Revenue Structure",
    description: "Enter details about your business identity and how your revenue is structured.",
  },
  3: {
    title: "Set Your Revenue structure,  Availability & Set Password",
    description: "Configure your payment structure, set your availability, and create a secure password.",
  },
};

type FormState = {
  businessEmail: string;
  companyName: string;
  companyRegNo: string;
  mediaFileName: string;
  movingService: string;
  fleetCount: string;
  vehiclesInOperation: string;
  operationalBounds: string[];
  baseHourlyRate: string;
  mileageRate: string;
  password: string;
};

const INITIAL_STATE: FormState = {
  businessEmail: "",
  companyName: "",
  companyRegNo: "",
  mediaFileName: "",
  movingService: "",
  fleetCount: "",
  vehiclesInOperation: "",
  operationalBounds: [],
  baseHourlyRate: "",
  mileageRate: "",
  password: "",
};

const INPUT_CLASS =
  "w-full rounded-xl border border-zinc-200 py-3 px-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-zinc-900">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${INPUT_CLASS} appearance-none bg-white pr-10`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
    </div>
  );
}

export function PartnerForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [availability, setAvailability] = useState<Availability>(INITIAL_AVAILABILITY);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleCity = (city: string) =>
    setForm((prev) => ({
      ...prev,
      operationalBounds: prev.operationalBounds.includes(city)
        ? prev.operationalBounds.filter((c) => c !== city)
        : [...prev.operationalBounds, city],
    }));

  const updateDay = <K extends keyof Availability[Day]>(day: Day, key: K, value: Availability[Day][K]) =>
    setAvailability((prev) => ({ ...prev, [day]: { ...prev[day], [key]: value } }));

  const goNext = () => setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  const goPrev = () => setStep((s) => Math.max(1, s - 1));

  const copy = STEP_COPY[step];

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col">
      <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900">Become a Partners</h1>
      <p className="mt-3 text-zinc-500">
        The UK&apos;s most exclusive network for elite removal professionals. Join the elite.
      </p>

      <div className="mt-8 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-zinc-900">{copy.title}</h2>
          <p className="mt-1 text-sm text-zinc-500">{copy.description}</p>
        </div>
        <ProgressRing step={step} totalSteps={TOTAL_STEPS} size="size-10" showLabel={false} />
      </div>

      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (step < TOTAL_STEPS) goNext();
        }}
      >
        {step === 1 && (
          <>
            <Field label="Business Email" required>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
                <input
                  type="email"
                  placeholder="linda@framcreative.com"
                  value={form.businessEmail}
                  onChange={(e) => update("businessEmail", e.target.value)}
                  className={`${INPUT_CLASS} pl-10`}
                />
              </div>
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Registered Company Name" required>
                <input
                  type="text"
                  placeholder="e.g. London Elite Removal Ltd"
                  value={form.companyName}
                  onChange={(e) => update("companyName", e.target.value)}
                  className={INPUT_CLASS}
                />
              </Field>
              <Field label="Companies House Reg. No.">
                <input
                  type="text"
                  placeholder="e.g. 12345678"
                  value={form.companyRegNo}
                  onChange={(e) => update("companyRegNo", e.target.value)}
                  className={INPUT_CLASS}
                />
              </Field>
            </div>

            <Field label="Media" required>
              <div className="flex items-center justify-between gap-3 rounded-xl border border-zinc-200 py-2.5 pl-4 pr-2">
                <span className={`truncate text-sm ${form.mediaFileName ? "text-zinc-900" : "text-zinc-400"}`}>
                  {form.mediaFileName || "Select file to upload"}
                </span>
                <label className="shrink-0 cursor-pointer rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50">
                  Select
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => update("mediaFileName", e.target.files?.[0]?.name ?? "")}
                  />
                </label>
              </div>
              <span className="text-xs font-normal text-zinc-500">
                Kindly select &amp; upload public liability insurance document.
              </span>
            </Field>
          </>
        )}

        {step === 2 && (
          <>
            <Field label="Select Moving Service">
              <Select
                value={form.movingService}
                onChange={(v) => update("movingService", v)}
                options={MOVING_TYPES}
                placeholder="Select Moving Type"
              />
            </Field>

            <Field label="Number of Fleets">
              <input
                type="number"
                min={0}
                placeholder="0"
                value={form.fleetCount}
                onChange={(e) => update("fleetCount", e.target.value)}
                className={INPUT_CLASS}
              />
            </Field>

            <Field label="Select Vehicles in Operation">
              <Select
                value={form.vehiclesInOperation}
                onChange={(v) => update("vehiclesInOperation", v)}
                options={VEHICLE_TYPES}
                placeholder="Select Moving Vehicles"
              />
            </Field>

            <Field label="Select Operational Bounds">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCitiesOpen((open) => !open)}
                  className={`${INPUT_CLASS} flex items-center justify-between text-left`}
                >
                  <span className={form.operationalBounds.length ? "text-zinc-900" : "text-zinc-400"}>
                    {form.operationalBounds.length
                      ? `${form.operationalBounds.length} cities selected`
                      : "Select all cities you serve"}
                  </span>
                  <ChevronDown className="size-4 shrink-0 text-zinc-400" />
                </button>
                {citiesOpen && (
                  <div className="absolute z-10 mt-1.5 max-h-56 w-full overflow-y-auto rounded-xl border border-zinc-200 bg-white p-2 shadow-lg">
                    {CITIES.map((city) => (
                      <label
                        key={city}
                        className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
                      >
                        <input
                          type="checkbox"
                          checked={form.operationalBounds.includes(city)}
                          onChange={() => toggleCity(city)}
                          className="size-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-200"
                        />
                        {city}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </Field>

            <div>
              <p className="text-sm font-semibold text-zinc-900">Revenue Structure</p>
              <p className="text-xs text-zinc-500">Set your base rates for the marketplace.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Base Hourly Rate (Inc. 2 Crew)" required>
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-zinc-400">
                    £
                  </span>
                  <input
                    type="number"
                    min={0}
                    step="0.01"
                    placeholder="0.00"
                    value={form.baseHourlyRate}
                    onChange={(e) => update("baseHourlyRate", e.target.value)}
                    className={`${INPUT_CLASS} pl-7`}
                  />
                </div>
              </Field>
              <Field label="Mileage Rate (Out of Area)">
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-zinc-400">
                    £
                  </span>
                  <input
                    type="number"
                    min={0}
                    step="0.01"
                    placeholder="0.00"
                    value={form.mileageRate}
                    onChange={(e) => update("mileageRate", e.target.value)}
                    className={`${INPUT_CLASS} pl-7`}
                  />
                </div>
              </Field>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div>
              <p className="text-sm font-semibold text-zinc-900">Availability</p>
              <p className="text-xs text-zinc-500">Select and input you availability days and time.</p>
            </div>

            <div className="flex flex-col divide-y divide-zinc-100">
              {DAYS.map((day) => {
                const entry = availability[day];
                return (
                  <div key={day} className="flex items-center gap-3 py-2.5">
                    <label className="flex w-28 shrink-0 items-center gap-2.5 text-sm font-medium text-zinc-900">
                      <input
                        type="checkbox"
                        checked={entry.enabled}
                        onChange={(e) => updateDay(day, "enabled", e.target.checked)}
                        className="size-4 rounded border-zinc-300 text-amber-500 focus:ring-amber-200"
                      />
                      {day}
                    </label>

                    {entry.enabled ? (
                      <div className="flex flex-1 items-center gap-2">
                        <input
                          type="text"
                          placeholder="09:00"
                          value={entry.start}
                          onChange={(e) => updateDay(day, "start", e.target.value)}
                          className="w-full rounded-lg border border-zinc-200 py-2 px-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none"
                        />
                        <span className="text-zinc-300">–</span>
                        <input
                          type="text"
                          placeholder="09:00"
                          value={entry.end}
                          onChange={(e) => updateDay(day, "end", e.target.value)}
                          className="w-full rounded-lg border border-zinc-200 py-2 px-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none"
                        />
                        <div className="relative shrink-0">
                          <select
                            value={entry.period}
                            onChange={(e) => updateDay(day, "period", e.target.value as "AM" | "PM")}
                            className="appearance-none rounded-lg border border-zinc-200 py-2 pl-3 pr-7 text-sm text-zinc-900 focus:border-indigo-500 focus:outline-none"
                          >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-2 top-1/2 size-3.5 -translate-y-1/2 text-zinc-400" />
                        </div>
                      </div>
                    ) : (
                      <span className="flex-1 text-sm text-zinc-400">Unavailable</span>
                    )}

                    <button
                      type="button"
                      aria-label={`Add another time range for ${day}`}
                      className="flex size-7 shrink-0 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600"
                    >
                      <Plus className="size-4" />
                    </button>
                  </div>
                );
              })}
            </div>

            <div>
              <p className="text-sm font-semibold text-zinc-900">Password</p>
              <p className="text-xs text-zinc-500">
                Craft a password to protect your account from hackers and fraudsters, ensuring your
                online security is both sound and reassuring.
              </p>
            </div>

            <Field label="Password">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Set Account Password"
                  value={form.password}
                  onChange={(e) => update("password", e.target.value)}
                  className={`${INPUT_CLASS} pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((show) => !show)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </Field>
          </>
        )}

        <div className="mt-2 flex items-center justify-between gap-3">
          {step > 1 ? (
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-200"
            >
              <ArrowLeft className="size-4" />
              Prev Step
            </button>
          ) : (
            <span />
          )}
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            {step < TOTAL_STEPS ? "Continue" : "Become a Partner"}
            <ArrowRight className="size-4" />
          </button>
        </div>
      </form>

      <div className="mt-8 flex flex-col items-center gap-3 border-t border-zinc-100 pt-6 text-center text-sm text-zinc-500">
        <p>
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-700">
            Sign In
          </Link>
        </p>
        <p>
          By clicking continue, you agree to our{" "}
          <Link href="/terms" className="font-medium text-zinc-700 underline hover:text-zinc-900">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="font-medium text-zinc-700 underline hover:text-zinc-900">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
