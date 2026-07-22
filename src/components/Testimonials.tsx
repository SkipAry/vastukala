import Image from "next/image";
import { testimonials } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Testimonials render only when genuine, verified entries exist in
 * src/data/site.ts. No fabricated reviews are ever displayed.
 * Until entries are added, the section is omitted from the page.
 */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-brand-offwhite py-16 md:py-28">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Client Voices"
          title="What Our Clients Say"
          align="center"
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={`${t.clientName}-${i}`} delay={i * 0.07}>
              <figure className="flex h-full flex-col border border-brand-border bg-white p-7">
                <span className="font-heading text-4xl leading-none text-brand-red" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="mt-3 flex-1 text-base leading-relaxed text-brand-ink/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-brand-border pt-5">
                  {t.image ? (
                    <span className="relative block h-12 w-12 overflow-hidden">
                      <Image
                        src={t.image}
                        alt={`${t.projectType} project for ${t.clientName}`}
                        fill
                        sizes="3rem"
                        className="object-cover"
                      />
                    </span>
                  ) : null}
                  <span>
                    <span className="block font-heading text-sm font-bold text-brand-charcoal">
                      {t.clientName}
                    </span>
                    <span className="block text-xs text-brand-grey">
                      {t.projectType} · {t.location}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
