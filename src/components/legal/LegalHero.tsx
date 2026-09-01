import { Header } from "@/components/landing/Header";

export function LegalHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="px-4 pt-4 sm:px-6 sm:pt-6 lg:px-10">
      <div
        className="relative min-h-[420px] overflow-hidden rounded-3xl bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(5,8,20,0.8) 0%, rgba(5,8,20,0.4) 38%, rgba(5,8,20,0.15) 68%), url(/images/lady2.jpg)",
        }}
      >
        <Header variant="dark" />

        <div className="relative mx-auto max-w-2xl px-6 pb-16 pt-28 text-center lg:pb-20 lg:pt-32">
          <p className="text-xs font-medium text-white/70">24th June, 2026: Last Updated</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/80">{description}</p>
        </div>
      </div>
    </section>
  );
}
