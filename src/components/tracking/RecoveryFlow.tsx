"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarSearch, Mail } from "lucide-react";
import { Modal } from "@/components/modals/Modal";
import { StatusModal } from "@/components/modals/StatusModal";
import { Select } from "@/components/ui/Select";

const MOVING_TYPES = [
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

const RECOVERED_CODE = "JK08-I8";

const INPUT_CLASS =
  "w-full rounded-xl border border-zinc-200 py-3 px-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100";

type Stage = "wrong-code" | "email" | "questions" | "verified" | "failed";

export function RecoveryFlow({
  initialStage,
  onClose,
}: {
  initialStage: "wrong-code" | "email";
  onClose: () => void;
}) {
  const router = useRouter();
  const [stage, setStage] = useState<Stage>(initialStage);
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");
  const [movingDate, setMovingDate] = useState("");
  const [movingType, setMovingType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [floorLevel, setFloorLevel] = useState("");

  if (stage === "wrong-code") {
    return (
      <StatusModal
        open
        onClose={onClose}
        variant="error"
        title="Wrong Tracking Code"
        description="Please check your email inbox for the tracking code sent on the day you made your payment. If you still can't find it, would you like assistance in retrieving your tracking code?"
        actions={[{ label: "Recovery Tracking Code", variant: "primary", onClick: () => setStage("email") }]}
      />
    );
  }

  if (stage === "verified") {
    return (
      <StatusModal
        open
        onClose={onClose}
        variant="success"
        title="Verified !"
        description={
          <>
            Your new Tracking Code is <span className="font-bold text-zinc-900">{RECOVERED_CODE}</span>, It
            has also been sent to your email
          </>
        }
        actions={[
          {
            label: "Track Moving",
            variant: "primary",
            onClick: () => router.push(`/tracking/dashboard/${RECOVERED_CODE}`),
          },
        ]}
      />
    );
  }

  if (stage === "failed") {
    return (
      <StatusModal
        open
        onClose={onClose}
        variant="error"
        title="Failed !"
        description="You failed to answer the security question regarding our moving . Would you like to try again or speak with our support team?"
        actions={[
          { label: "Contact Support", variant: "outline", href: "/contact" },
          { label: "Retry", variant: "primary", onClick: () => setStage("questions") },
        ]}
      />
    );
  }

  if (stage === "email") {
    return (
      <Modal open onClose={onClose}>
        <h2 className="text-xl font-bold text-zinc-900">Recovery Tracking Code</h2>
        <p className="mt-1.5 text-sm text-zinc-500">
          Please share the email address you used to get in touch so we can move forward.
        </p>

        <form
          className="mt-6 flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            setStage("questions");
          }}
        >
          <label className="text-sm font-semibold text-zinc-900">Email</label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="email"
              required
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${INPUT_CLASS} pl-10`}
            />
          </div>

          <button
            type="submit"
            className="mt-6 rounded-full bg-brand-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Submit
          </button>
        </form>
      </Modal>
    );
  }

  return (
    <Modal open onClose={onClose}>
      <h2 className="text-xl font-bold text-zinc-900">Recovery Tracking Code</h2>
      <p className="mt-1.5 text-sm text-zinc-500">
        Kindly answer some personal questions related to your moving.
      </p>

      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setStage(destination.toLowerCase().includes("london") ? "verified" : "failed");
        }}
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-zinc-900">What&apos;s Your Moving Destination</span>
          <input
            type="text"
            required
            placeholder="Zip Code or City"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={INPUT_CLASS}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-zinc-900">What&apos;s Your Proposed Moving Date</span>
          <div className="relative">
            <input
              type="text"
              required
              placeholder="MM/DD/YYYY"
              value={movingDate}
              onChange={(e) => setMovingDate(e.target.value)}
              className={`${INPUT_CLASS} pr-10`}
            />
            <CalendarSearch className="pointer-events-none absolute right-3.5 top-1/2 size-4.5 -translate-y-1/2 text-zinc-400" />
          </div>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-zinc-900">What&apos;s Your Moving Type</span>
          <Select
            value={movingType}
            onChange={setMovingType}
            options={MOVING_TYPES}
            placeholder="Select Moving Type"
            triggerClassName={INPUT_CLASS}
          />
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-zinc-900">Select Your Property Type</span>
            <Select
              value={propertyType}
              onChange={setPropertyType}
              options={PROPERTY_TYPES}
              placeholder="Select property/Residenc..."
              triggerClassName={INPUT_CLASS}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-zinc-900">Floor Level</span>
            <input
              type="number"
              min={0}
              required
              placeholder="0"
              value={floorLevel}
              onChange={(e) => setFloorLevel(e.target.value)}
              className={INPUT_CLASS}
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-2 rounded-full bg-brand-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
}
