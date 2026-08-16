import { StatusHeader } from "./StatusHeader";
import { ProgressStepper } from "./ProgressStepper";
import { MoveInformationCard } from "./MoveInformationCard";
import { InventoryOverview } from "./InventoryOverview";
import { EliteServices } from "./EliteServices";
import { RatingReview } from "./RatingReview";
import { MovingPartnerCard } from "./MovingPartnerCard";
import { EscrowBanner } from "./EscrowBanner";
import { MediaGallery } from "./MediaGallery";

export function TrackPanel({ trackingId }: { trackingId: string }) {
  return (
    <div className="flex flex-col gap-6">
      <StatusHeader trackingId={trackingId} />

      <div className="rounded-2xl border border-zinc-200 bg-white p-6">
        <ProgressStepper currentStep={8} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="flex flex-col gap-6">
          <MoveInformationCard />
          <InventoryOverview />
          <EliteServices />
          <RatingReview />
        </div>

        <div className="flex flex-col gap-6">
          <MovingPartnerCard />
          <EscrowBanner />
          <MediaGallery />
        </div>
      </div>
    </div>
  );
}
