"use client";

import Image from "next/image";
import { useState } from "react";
import { services, type Service } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/* Minimal custom line icons drawn as SVG paths */
function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const paths: Record<Service["icon"], React.ReactNode> = {
    plan: (
      <>
        <path {...common} d="M6 42V14L24 6l18 8v28" />
        <path {...common} d="M18 42V26h12v16" />
        <path {...common} d="M2 42h44" />
      </>
    ),
    interior: (
      <>
        <path {...common} d="M8 26v12h32V26" />
        <path {...common} d="M8 30h32" />
        <path {...common} d="M12 26v-8a4 4 0 0 1 8 0v2h8v-2a4 4 0 0 1 8 0v8" />
        <path {...common} d="M10 38v4M38 38v4" />
      </>
    ),
    render: (
      <>
        <path {...common} d="M24 4 6 13v22l18 9 18-9V13L24 4Z" />
        <path {...common} d="M6 13l18 9 18-9M24 22v22" />
      </>
    ),
    approval: (
      <>
        <path {...common} d="M12 6h18l8 8v28H12V6Z" />
        <path {...common} d="M30 6v8h8" />
        <path {...common} d="M19 28l4 4 8-9" />
      </>
    ),
    layout: (
      <>
        <path {...common} d="M6 8h36v32H6z" />
        <path {...common} d="M22 8v18M6 26h36M30 26v14" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-11 w-11 text-brand-red"
      role="presentation"
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}

export default function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="bg-white py-16 md:py-28">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            label="Our Services"
            title="Complete Design Expertise, Under One Roof"
            intro="Architecture, interiors, visualization and approvals — a single team accountable for your project from first sketch to sanctioned drawings."
          />
          <span className="section-number hidden lg:block" aria-hidden="true">
            05
          </span>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden border border-brand-border bg-brand-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, i) => {
            const expanded = active === service.id;
            return (
              <Reveal as="li" key={service.id} delay={i * 0.06} className="bg-white">
                <div className="group relative flex h-full flex-col p-7 transition-colors hover:bg-brand-offwhite">
                  <span className="mb-6 font-mono text-xs text-brand-grey">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ServiceIcon icon={service.icon} />
                  <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-brand-charcoal">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-grey">
                    {service.description}
                  </p>

                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`service-visual-${service.id}`}
                    onClick={() => setActive(expanded ? null : service.id)}
                    className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-brand-red"
                  >
                    Learn More
                    <span
                      aria-hidden="true"
                      className={`transition-transform ${expanded ? "rotate-90" : ""}`}
                    >
                      →
                    </span>
                  </button>

                  <div
                    id={`service-visual-${service.id}`}
                    hidden={!expanded}
                    className="mt-5"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`Vastukala Associates project visualization illustrating ${service.title.toLowerCase()}`}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
