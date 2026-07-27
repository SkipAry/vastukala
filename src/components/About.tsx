import Image from "next/image";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import StudioVideo from "./StudioVideo";
import TrackedLink from "./TrackedLink";

const tailoredTo = [
  "Vision",
  "Lifestyle",
  "Site conditions",
  "Budget",
  "Functional requirements",
  "Long-term aspirations",
];

export default function About() {
  return (
    <section id="about" className="blueprint-grid bg-brand-offwhite py-16 md:py-28">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Copy */}
          <div>
            <SectionHeading
              label="About the Practice"
              title="Designing More Than Buildings"
            />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-brand-ink/85 md:text-lg">
                <p>
                  At Vastukala Associates, architecture goes beyond structure.
                  Every project brings together imagination, engineering
                  discipline, sustainability and a close understanding of how
                  people actually live and work in a space.
                </p>
                <p>
                  Founded by{" "}
                  <strong className="font-semibold text-brand-charcoal">
                    Er. Rushikesh Pingale, B.Tech and M.Tech in Civil
                    Engineering from MIT Pune
                  </strong>
                  , Vastukala Associates has grown into a multidisciplinary
                  practice with more than 1000 projects across India — from
                  private bungalows and apartment buildings to commercial,
                  institutional and industrial developments.
                </p>
                <p>Every design is tailored to the client&rsquo;s:</p>
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
                {tailoredTo.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm font-medium text-brand-charcoal"
                  >
                    <span className="h-px w-4 shrink-0 bg-brand-red" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <TrackedLink
                href="#contact"
                event="cta_book_consultation"
                placement="about"
                className="mt-10 inline-flex items-center gap-2 rounded-sm border border-brand-charcoal px-7 py-3.5 text-sm font-semibold text-brand-charcoal transition-colors hover:bg-brand-charcoal hover:text-white"
              >
                Meet Vastukala Associates
                <span aria-hidden="true">→</span>
              </TrackedLink>
            </Reveal>
          </div>

          {/* Founder panel */}
          <Reveal delay={0.15} className="relative">
            <figure className="relative">
              <div className="relative aspect-[3/4] max-w-md overflow-hidden bg-brand-charcoal/5">
                <Image
                  src="/projects/founder.webp"
                  alt={`${site.founder.name}, founder of Vastukala Associates`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover object-top"
                />
              </div>
              {/* Credentials panel */}
              <figcaption className="relative z-10 -mt-14 ml-6 max-w-sm border-l-2 border-brand-red bg-white p-6 shadow-[0_12px_40px_-12px_rgba(21,24,29,0.25)] md:ml-12">
                <p className="font-heading text-lg font-bold text-brand-charcoal">
                  {site.founder.name}
                </p>
                <p className="mt-1 text-sm text-brand-grey">{site.founder.role}</p>
                <p className="mt-3 text-sm font-medium text-brand-ink">
                  {site.founder.credentials}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Studio video */}
        <Reveal delay={0.1} className="mt-16 md:mt-20">
          <p className="text-[11px] font-semibold uppercase tracking-caps text-brand-red">
            Inside the Studio
          </p>
          <h3 className="mt-2 font-heading text-2xl font-bold text-brand-charcoal md:text-3xl">
            Where Every Design Begins
          </h3>
          <StudioVideo />
        </Reveal>
      </div>
    </section>
  );
}
