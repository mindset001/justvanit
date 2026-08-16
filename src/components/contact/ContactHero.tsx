import { Header } from "@/components/landing/Header";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(5,8,20,0.8) 0%, rgba(5,8,20,0.4) 38%, rgba(5,8,20,0.05) 68%), linear-gradient(120deg, #e9e2d3 0%, #d8cdb6 30%, #b9ac8f 55%, #8f8770 80%, #6b6a5c 100%)",
        }}
      />
      <Header variant="dark" />

      <div className="relative mx-auto max-w-3xl px-6 pb-20 pt-36 lg:pb-28 lg:pt-44">
        <p className="text-sm font-medium text-white/80">Get in touch with us</p>
        <h1 className="mt-2 max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
          We&apos;re available to assist you around the clock!
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75">
          Feel free to contact us through email, phone, or by visiting our office. You can also
          submit your complaint using the form provided. We guarantee a quick response in no
          time!
        </p>
      </div>
    </section>
  );
}
