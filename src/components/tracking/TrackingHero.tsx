"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/landing/Header";
import { RecoveryFlow } from "./RecoveryFlow";

const VALID_DEMO_CODE = "JV-88291";

export function TrackingHero() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [recovery, setRecovery] = useState<"wrong-code" | "email" | null>(null);
  const router = useRouter();

  return (
    <section
      className="relative overflow-hidden rounded-b-3xl"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(5,8,20,0.78) 0%, rgba(5,8,20,0.45) 45%, rgba(5,8,20,0.2) 100%), linear-gradient(160deg, #c9b48a 0%, #8d7452 30%, #4a3f33 55%, #1c1c22 80%, #0a0a0d 100%)",
      }}
    >
      <Header variant="dark" />

      <div className="relative mx-auto max-w-xl px-6 pb-20 pt-32 text-center lg:pb-24 lg:pt-40">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Track your Moving
        </h1>
        <p className="mt-3 text-sm text-white/75">
          Enter your tracking number to track your moving process.
        </p>

        <form
          className="mt-8 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            const value = trackingNumber.trim();
            if (value && value.toUpperCase() !== VALID_DEMO_CODE) {
              setRecovery("wrong-code");
              return;
            }
            router.push(`/tracking/dashboard/${value || VALID_DEMO_CODE}`);
          }}
        >
          <label className="text-xs font-semibold text-white/90">Tracking Number</label>
          <div className="mt-2 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1.5 pl-5 pr-1.5 backdrop-blur-sm">
            <input
              type="text"
              placeholder="Enter your tracking Number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Track Now
            </button>
          </div>
          <p className="mt-2 text-right text-xs text-white/60">
            <button
              type="button"
              onClick={() => setRecovery("email")}
              className="hover:text-white"
            >
              Forgot Tracking Number?
            </button>
          </p>
        </form>
      </div>

      {recovery !== null && (
        <RecoveryFlow initialStage={recovery} onClose={() => setRecovery(null)} />
      )}
    </section>
  );
}
