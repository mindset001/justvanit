import Image from "next/image";
import Map from "../../../public/images/map.jpg";

export function MapPlaceholder() {
  return (
    <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-slate-100">
      <Image
        src={Map}
        alt="Map of the UK highlighting London, JustVanIt's head office location"
        fill
        sizes="(max-width: 1024px) 100vw, 480px"
        className="object-cover object-[75%_85%]"
      />
    </div>
  );
}
