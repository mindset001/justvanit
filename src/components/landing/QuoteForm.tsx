"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarSearch,
  CheckCircle2,
  Clock,
  MapPin,
  Package,
  Truck,
  X,
} from "lucide-react";
import { QuoteCompareModal } from "./QuoteCompareModal";
import { ProgressRing } from "./ProgressRing";
import { Select } from "../ui/Select";
import { MultiSelect } from "../ui/MultiSelect";

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
  "Bed Frame",
  "Bed",
  "Freezer",
  "Sitting Room Chairs",
  "Sofas",
  "Dinning Table Set",
  "Kitchen Appliances",
  "Washing Machine",
  "House Heater",
  "Tv",
  "Others",
];

const ACCESS_OPTIONS = [
  "Lift Available",
  "Narrow Staircase Access",
  "Long walking distance to truck",
  "Restricted moving hours",
  "Permit required",
];

const ELITE_SERVICES = [
  "Packing Service",
  "Unpacking Service",
  "Furniture Assembly",
  "Cleaning Service",
];

const HANDLING_REQUIREMENTS = [
  "Fragile items",
  "Heavy lifting required",
  "Disassembly & reassembly needed",
  "Packing service required",
  "Storage required",
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
  accessOptions: string[];
  eliteServices: string;
  handlingRequirement: string[];
  mediaFiles: File[];
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
  accessOptions: [],
  eliteServices: "",
  handlingRequirement: [],
  mediaFiles: [],
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
  const [compareOpen, setCompareOpen] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const goNext = () => setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  const goPrev = () => setStep((s) => Math.max(1, s - 1));

  const elevator = form.accessOptions.includes("Lift Available") ? "Yes" : "No";
  const permit = form.accessOptions.includes("Permit required") ? "Required" : "Not Required";

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
                placeholder="Select"
              />
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Property Type">
                <Select
                  value={form.propertyType}
                  onChange={(v) => update("propertyType", v)}
                  options={PROPERTY_TYPES}
                  placeholder="Select "
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
              <MultiSelect
                value={form.movingItems}
                onChange={(v) => update("movingItems", v)}
                options={MOVING_ITEMS}
                placeholder="Select all items"
                panelTitle="Select House Hold Item"
              />
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Access Options & Restraint">
                <MultiSelect
                  value={form.accessOptions}
                  onChange={(v) => update("accessOptions", v)}
                  options={ACCESS_OPTIONS}
                  placeholder="Select access option & restr..."
                  panelTitle="Select Access Options & Restraints"
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
              <MultiSelect
                value={form.handlingRequirement}
                onChange={(v) => update("handlingRequirement", v)}
                options={HANDLING_REQUIREMENTS}
                placeholder="Select handling requirement"
                panelTitle="Select Special handling Requirements"
              />
            </Field>

            <Field label="Media" required>
              <div className="flex items-center justify-between gap-3 rounded-2xl border border-zinc-200 py-3 pl-4 pr-2">
                <span className={`truncate text-sm ${form.mediaFiles.length ? "text-zinc-900" : "text-zinc-400"}`}>
                  {form.mediaFiles.length
                    ? `${form.mediaFiles.length} file(s) selected`
                    : "Select file to upload"}
                </span>
                <label className="shrink-0 cursor-pointer rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50">
                  Select
                  <input
                    type="file"
                    accept="image/*,video/*"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      const files = Array.from(e.target.files ?? []);
                      if (files.length) update("mediaFiles", [...form.mediaFiles, ...files]);
                      e.target.value = "";
                    }}
                  />
                </label>
              </div>
              <span className="text-xs font-normal text-zinc-500">
                Kindly select &amp; upload image &amp; videos of item/equipment you want to move.
              </span>
              {form.mediaFiles.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {form.mediaFiles.map((file, i) => (
                    <MediaThumb
                      key={`${file.name}-${i}`}
                      file={file}
                      onRemove={() =>
                        update(
                          "mediaFiles",
                          form.mediaFiles.filter((_, idx) => idx !== i)
                        )
                      }
                    />
                  ))}
                </div>
              )}
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
                    Elevator : <span className="font-semibold">{form.accessOptions.length ? elevator : "—"}</span>
                  </p>
                  <p className="text-sm text-zinc-700">
                    Permit : <span className="font-semibold">{form.accessOptions.length ? permit : "—"}</span>
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
                      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-sm text-zinc-700"
                    >
                      <Package className="size-3.5 text-zinc-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-zinc-400">No items selected yet.</p>
              )}
            </div>

            {(form.eliteServices || form.handlingRequirement.length > 0) && (
              <div className="rounded-2xl border border-zinc-200 p-5">
                <p className="text-base font-semibold text-zinc-900">
                  Elite Services & Special Handling
                </p>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {form.eliteServices && (
                    <span className="inline-flex items-center gap-1.5 text-sm text-zinc-700">
                      <CheckCircle2 className="size-4 text-emerald-500" />
                      {form.eliteServices}
                    </span>
                  )}
                  {form.handlingRequirement.map((requirement) => (
                    <span
                      key={requirement}
                      className="inline-flex items-center gap-1.5 text-sm text-zinc-700"
                    >
                      <CheckCircle2 className="size-4 text-emerald-500" />
                      {requirement}
                    </span>
                  ))}
                </div>
              </div>
            )}
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

function MediaThumb({ file, onRemove }: { file: File; onRemove: () => void }) {
  const url = useMemo(() => URL.createObjectURL(file), [file]);
  useEffect(() => () => URL.revokeObjectURL(url), [url]);
  const isVideo = file.type.startsWith("video/");

  return (
    <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
      {isVideo ? (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video src={url} className="size-full object-cover" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt={file.name} className="size-full object-cover" />
      )}
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove ${file.name}`}
        className="absolute right-1 top-1 flex size-5 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
      >
        <X className="size-3" />
      </button>
    </div>
  );
}

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
