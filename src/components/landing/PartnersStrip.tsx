const PARTNERS = [
  { name: "getmovers.com", className: "text-zinc-500" },
  { name: "findmymoving", className: "text-pink-500" },
  { name: "CANVAN", className: "text-sky-600" },
  { name: "Pickfords", className: "text-indigo-700" },
  { name: "Pickfords", className: "text-indigo-700" },
  { name: "Britannia", className: "text-red-600" },
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
            <span
              key={`${partner.name}-${i}`}
              className={`text-lg font-bold tracking-tight ${partner.className}`}
            >
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
