import Image from "next/image";
import { whatsappLink } from "@/data/site";
import Reveal from "./Reveal";
import TrackedLink from "./TrackedLink";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Image
        src="/projects/khandoba-temple-aerial.webp"
        alt=""
        role="presentation"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-charcoal/85" aria-hidden="true" />
      <div className="blueprint-grid-dark absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-site px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-heading text-[clamp(1.75rem,5.5vw,3rem)] font-bold leading-tight text-white">
            Have a Project in Mind? Let&rsquo;s Shape It Together.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            Tell us about your site, requirements and vision. Our team will help
            you identify the right way forward.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <TrackedLink
              href="#contact"
              event="cta_book_consultation"
              placement="cta_section"
              className="inline-flex w-full items-center justify-center rounded-sm bg-brand-red px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-redDark sm:w-auto"
            >
              Book a Consultation
            </TrackedLink>
            <TrackedLink
              href={whatsappLink}
              event="cta_whatsapp"
              placement="cta_section"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-sm border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10 sm:w-auto"
            >
              Chat on WhatsApp
            </TrackedLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
