import Image, { type StaticImageData } from "next/image";
import GetMovers from "../../../public/images/getmovers-logo.png";
import ReallyMoving from "../../../public/images/reallymoving-logo.png";
import AnyVan from "../../../public/images/anyvan-logo.png";
import Pickfords from "../../../public/images/pickfords-logo.png";
import Britannia from "../../../public/images/britannia-logo.png";

const PARTNERS: { name: string; src: StaticImageData; height: number }[] = [
  { name: "getmovers.com", src: GetMovers, height: 20 },
  { name: "reallymoving", src: ReallyMoving, height: 24 },
  { name: "AnyVan", src: AnyVan, height: 28 },
  { name: "Pickfords", src: Pickfords, height: 18 },
  { name: "Pickfords", src: Pickfords, height: 18 },
  { name: "Britannia Brytons", src: Britannia, height: 40 },
];

export function PartnersStrip({
  label = "More than 50+ Moving Partners Companies",
}: {
  label?: string;
}) {
  return (
    <section className="border-b border-zinc-100 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 lg:flex-row lg:justify-between lg:px-10">
        <p className="shrink-0 text-sm font-medium text-zinc-500">{label}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {PARTNERS.map((partner, i) => (
            <Image
              key={`${partner.name}-${i}`}
              src={partner.src}
              alt={partner.name}
              height={partner.height}
              style={{ height: partner.height, width: "auto" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
