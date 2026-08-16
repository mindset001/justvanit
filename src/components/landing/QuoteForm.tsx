"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarSearch,
  ChevronDown,
  Clock,
  MapPin,
  Truck,
} from "lucide-react";
import { QuoteCompareModal } from "./QuoteCompareModal";
import { ProgressRing } from "./ProgressRing";

export const MOVING_TYPES = [
  "Residential & Apartment Moving",
  "Office & Commercial Moving",
  "Piano & Specialty Moving",
  "Heavy & Storage Moving",
];

const PROPERTY_TYPES = [
  "Studio Apartment",
  "1-Bedroom Apartment/Flat",
  "2-Bedroom Apartment/Flat",
  "3-Bedroom Apartment/Flat",
  "Terraced House",
  "Semi-Detached House",
  "Detached House",
  "Bungalow",
];

const MOVING_ITEMS = [
  "Sofa",
  "Bed",
  "Wardrobe",
  "Dining Table",
  "Fridge",
  "Washing Machine",
  "TV",
  "Boxes",
  "Piano",
  "Gym Equipment",
];

const ACCESS_OPTIONS = [
  "Elevator & Parking Provided",
  "Elevator Only, No Parking",
  "Parking Only, No Elevator",
  "Stairs Only, No Parking",
];

const ELITE_SERVICES = [
  "Packing Service",
  "Unpacking Service",
  "Furniture Assembly",
  "Cleaning Service",
];

const HANDLING_REQUIREMENTS = [
  "None",
  "Fragile Items",
  "Antiques",
  "Artwork",
  "Musical Instruments",
];

const TOTAL_STEPS = 3;

const STEP_LABELS: Record<number, string> = {
  1: "Location & Move type",
  2: "Moving Items/equipment, accessibility options  & media",
  3: "summary",
};

type FormState = {
  movingFrom: string;
  movingTo: string;
  movingType: string;
  propertyType: string;
  floorLevel: string;
  movingDate: string;
  movingTime: string;
  movingItems: string[];
  accessOptions: string;
  eliteServices: string;
  handlingRequirement: string;
  mediaFileName: string;
};

const INITIAL_STATE: FormState = {
  movingFrom: "",
  movingTo: "",
  movingType: "",
  propertyType: "",
  floorLevel: "",
  movingDate: "",
  movingTime: "",
  movingItems: [],
  accessOptions: "",
  eliteServices: "",
  handlingRequirement: "",
  mediaFileName: "",
};

function ordinal(value: string) {
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) return "Ground Floor";
  const suffixes = ["th", "st", "nd", "rd"];
  const remainder = n % 100;
  const suffix = suffixes[(remainder - 20) % 10] ?? suffixes[remainder] ?? suffixes[0];
  return `${n}${suffix} Floor`;
}

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [itemsOpen, setItemsOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleItem = (item: string) =>
    setForm((prev) => ({
      ...prev,
      movingItems: prev.movingItems.includes(item)
        ? prev.movingItems.filter((i) => i !== item)
        : [...prev.movingItems, item],
    }));

  const goNext = () => setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  const goPrev = () => setStep((s) => Math.max(1, s - 1));

  const elevator = form.accessOptions.startsWith("Elevator") ? "Yes" : "No";
  const parking = form.accessOptions.includes("Parking Provided")
    ? "Provided"
    : form.accessOptions.includes("Parking Only")
      ? "Provided"
      : "Not Provided";

  return (
    <div className="w-full rounded-3xl bg-white p-6 shadow-2xl shadow-black/20 sm:p-8">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-2xl font-bold text-zinc-900">Get Quote</p>
          <p className="mt-1.5 text-sm text-zinc-500">
            Step {step} of {TOTAL_STEPS} : {STEP_LABELS[step]}
          </p>
        </div>
        <ProgressRing step={step} totalSteps={TOTAL_STEPS} />
      </div>

      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (step < TOTAL_STEPS) {
            goNext();
          } else {
            setCompareOpen(true);
          }
        }}
      >
        {step === 1 && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Moving From">
                <input
                  type="text"
                  placeholder="Zip Code or City"
                  value={form.movingFrom}
                  onChange={(e) => update("movingFrom", e.target.value)}
                  className={INPUT_CLASS}
                />
              </Field>
              <Field label="Moving To">
                <input
                  type="text"
                  placeholder="Zip Code or City"
                  value={form.movingTo}
                  onChange={(e) => update("movingTo", e.target.value)}
                  className={INPUT_CLASS}
                />
              </Field>
            </div>

            <Field label="Moving Type">
              <Select
                value={form.movingType}
                onChange={(v) => update("movingType", v)}
                options={MOVING_TYPES}
                placeholder="Select Moving Type"
              />
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Property Type">
                <Select
                  value={form.propertyType}
                  onChange={(v) => update("propertyType", v)}
                  options={PROPERTY_TYPES}
                  placeholder="Select property/Residence..."
                />
              </Field>
              <Field label="Floor Level">
                <input
                  type="number"
                  min={0}
                  placeholder="0"
                  value={form.floorLevel}
                  onChange={(e) => update("floorLevel", e.target.value)}
                  className={INPUT_CLASS}
                />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Moving Date">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    value={form.movingDate}
                    onChange={(e) => update("movingDate", e.target.value)}
                    className={`${INPUT_CLASS} pr-10`}
                  />
                  <CalendarSearch className="pointer-events-none absolute right-3.5 top-1/2 size-4.5 -translate-y-1/2 text-zinc-400" />
                </div>
              </Field>
              <Field label="Moving Time">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="HH/MM"
                    value={form.movingTime}
                    onChange={(e) => update("movingTime", e.target.value)}
                    className={`${INPUT_CLASS} pr-10`}
                  />
                  <Clock className="pointer-events-none absolute right-3.5 top-1/2 size-4.5 -translate-y-1/2 text-zinc-400" />
                </div>
              </Field>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <Field label="Select Moving Items">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setItemsOpen((open) => !open)}
                  className={`${INPUT_CLASS} flex items-center justify-between text-left`}
                >
                  <span className={form.movingItems.length ? "text-zinc-900" : "text-zinc-400"}>
                    {form.movingItems.length ? `${form.movingItems.length} item(s) selected` : "Select all items"}
                  </span>
                  <ChevronDown className="size-4.5 shrink-0 text-zinc-400" />
                </button>
                {itemsOpen && (
                  <div className="absolute z-10 mt-1.5 max-h-56 w-full overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-2 shadow-lg">
                    {MOVING_ITEMS.map((item) => (
                      <label
                        key={item}
                        className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
                      >
                        <input
                          type="checkbox"
                          checked={form.movingItems.includes(item)}
                          onChange={() => toggleItem(item)}
                          className="size-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-200"
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Access Options & Restraint">
                <Select
                  value={form.accessOptions}
                  onChange={(v) => update("accessOptions", v)}
                  options={ACCESS_OPTIONS}
                  placeholder="Select access option & restr..."
                />
              </Field>
              <Field label="Elite Services" hint="(Optional)">
                <Select
                  value={form.eliteServices}
                  onChange={(v) => update("eliteServices", v)}
                  options={ELITE_SERVICES}
                  placeholder="Select elite service options"
                />
              </Field>
            </div>

            <Field label="Special Handling Requirement" required>
              <Select
                value={form.handlingRequirement}
                onChange={(v) => update("handlingRequirement", v)}
                options={HANDLING_REQUIREMENTS}
                placeholder="Select handling requirement"
              />
            </Field>

            <Field label="Media" required>
              <div className="flex items-center justify-between gap-3 rounded-2xl border border-zinc-200 py-3 pl-4 pr-2">
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
            </Field>
          </>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <div className="flex items-center gap-2.5 text-zinc-900">
                <Truck className="size-5" />
                <span className="text-base font-semibold">Move Information</span>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-start gap-2.5">
                  <Building2 className="mt-0.5 size-4 shrink-0 text-zinc-400" />
                  <div>
                    <p className="text-sm text-zinc-500">Moving From</p>
                    <p className="text-sm font-semibold text-zinc-900">{form.movingFrom || "—"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-zinc-400" />
                  <div>
                    <p className="text-sm text-zinc-500">Moving To</p>
                    <p className="text-sm font-semibold text-zinc-900">{form.movingTo || "—"}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 border-t border-zinc-100 pt-4">
                <div>
                  <p className="text-xs text-zinc-500">Property Type</p>
                  <p className="mt-0.5 text-sm font-semibold text-zinc-900">
                    {form.propertyType || "—"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Floor Level</p>
                  <p className="mt-0.5 text-sm font-semibold text-zinc-900">
                    {form.floorLevel ? ordinal(form.floorLevel) : "—"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Logistics</p>
                  <p className="mt-0.5 text-sm text-zinc-700">
                    Elevator : <span className="font-semibold">{form.accessOptions ? elevator : "—"}</span>
                  </p>
                  <p className="text-sm text-zinc-700">
                    Parking : <span className="font-semibold">{form.accessOptions ? parking : "—"}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="max-h-40 overflow-y-auto rounded-2xl border border-zinc-200 p-5">
              <p className="text-base font-semibold text-zinc-900">Inventory Overview</p>
              {form.movingItems.length ? (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {form.movingItems.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-zinc-400">No items selected yet.</p>
              )}
            </div>
          </div>
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
            {step < TOTAL_STEPS ? "Continue" : "Get Quote"}
            <ArrowRight className="size-4" />
          </button>
        </div>

      </form>

      <QuoteCompareModal open={compareOpen} onClose={() => setCompareOpen(false)} />
    </div>
  );
}

const INPUT_CLASS =
  "w-full rounded-2xl border border-zinc-200 py-3.5 px-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100";

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-base font-semibold text-zinc-900">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
        {hint && <span className="ml-1.5 text-sm font-normal text-zinc-400">{hint}</span>}
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
      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4.5 -translate-y-1/2 text-zinc-400" />
    </div>
  );
}
