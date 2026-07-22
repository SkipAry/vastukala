import { processSteps } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="process" className="blueprint-grid bg-brand-offwhite py-16 md:py-28">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="How We Work"
          title="A Clear Path From Idea to Execution"
          intro="A structured process keeps your project predictable — you always know what has been decided, what comes next and why."
          align="center"
        />

        {/* Horizontal on desktop, vertical on mobile */}
        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-x-8 md:gap-y-14 lg:grid-cols-6">
          {/* connector line */}
          <span
            aria-hidden="true"
            className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-brand-border md:hidden"
          />
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 0.07} className="relative pl-14 md:pl-0">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border border-brand-red bg-white font-mono text-sm font-bold text-brand-red md:static md:mb-5"
              >
                {step.number}
              </span>
              <span
                aria-hidden="true"
                className="mb-4 hidden h-px w-full bg-brand-border md:block"
              />
              <h3 className="font-heading text-base font-bold text-brand-charcoal">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-grey">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
