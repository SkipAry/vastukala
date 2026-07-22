import Image from "next/image";
import TrackedLink from "./TrackedLink";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end">
      {/* Background image */}
      <Image
        src="/projects/hero.webp"
        alt="Evening design visualization of a contemporary luxury residence designed by Vastukala Associates at Sanaswadi, Pune"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Legibility overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/55 to-brand-charcoal/25"
        aria-hidden="true"
      />
      {/* Fine architectural grid overlay */}
      <div className="blueprint-grid-dark absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-site px-4 pb-20 pt-32 sm:px-6 md:pb-28 md:pt-36 lg:px-8">
        {/* Coordinates annotation */}
        <p className="annotation-line mb-6 font-mono text-[11px] uppercase tracking-caps text-white/70">
          Shikrapur, Pune · 18.69° N, 74.13° E
        </p>

        <h1 className="max-w-4xl font-heading text-[clamp(2rem,7.5vw,4.5rem)] font-bold leading-[1.1] text-white">
          We Design Spaces That Inspire, Perform&nbsp;&amp;&nbsp;Endure.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
          From distinctive residences to large-scale commercial developments,
          Vastukala Associates transforms ideas into thoughtfully planned,
          technically sound and timeless spaces.
        </p>

        <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm font-medium tracking-wide text-white/70">
          <li>1000+ Projects</li>
          <li aria-hidden="true" className="text-white/40">|</li>
          <li>Pan-India Experience</li>
          <li aria-hidden="true" className="text-white/40">|</li>
          <li>Architecture to Approvals</li>
        </ul>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <TrackedLink
            href="#contact"
            event="cta_book_consultation"
            placement="hero"
            className="inline-flex items-center justify-center rounded-sm bg-brand-red px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-redDark"
          >
            Book a Design Consultation
          </TrackedLink>
          <TrackedLink
            href="#projects"
            event="cta_view_projects"
            placement="hero"
            className="inline-flex items-center justify-center rounded-sm border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            View Selected Projects
          </TrackedLink>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#stats"
        aria-label="Scroll to explore"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
          <span className="scroll-cue-dot block h-1.5 w-1.5 rounded-full bg-white" />
        </span>
      </a>
    </section>
  );
}
