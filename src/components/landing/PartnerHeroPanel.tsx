const AVATAR_COLORS = ["from-brand-400 to-brand-600", "from-amber-400 to-orange-500", "from-emerald-400 to-teal-600"];

export function PartnerHeroPanel() {
  return (
    <div className="relative hidden min-h-[32rem] overflow-hidden bg-navy-900 lg:block">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,14,30,0.35), rgba(5,8,20,0.85) 60%, rgba(2,4,10,0.96) 100%), linear-gradient(135deg, #d8c9a3 0%, #b9a77e 22%, #6b5b46 42%, #2a2a2e 62%, #0b0d16 82%, #05060b 100%)",
        }}
      />

      <div className="relative flex h-full flex-col justify-between p-10">
        <span className="text-xl font-extrabold tracking-tight text-white">
          JUSTVANIT<span className="text-brand-400">.</span>
        </span>

        <div className="max-w-md">
          <h2 className="text-5xl leading-[1.05] text-white">
            <span className="font-extrabold">The Gold Standard</span>
            <br />
            <span className="font-medium">for UK Removals.</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Join the premium marketplace for seamless transitions. Connect, manage, and move with
            unprecedented ease.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {AVATAR_COLORS.map((gradient, i) => (
                <span
                  key={i}
                  className={`size-9 rounded-full border-2 border-navy-900 bg-gradient-to-br ${gradient}`}
                />
              ))}
            </div>
            <p className="text-sm text-white">
              <span className="font-bold">5k+</span> <span className="text-white/70">UK Residences</span>
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/15 pt-5 text-xs text-white/60">
            <div className="flex items-center gap-4">
              <a href="/terms" className="hover:text-white">
                Terms
              </a>
              <a href="/privacy" className="hover:text-white">
                Privacy
              </a>
            </div>
            <span className="text-white/40">© 2026 JustVanIt. Inc.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
