import { faqs } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 md:py-28">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <SectionHeading
            label="FAQ"
            title="Questions Clients Ask Us"
            intro="If your question is not covered here, call us or send a message — we are happy to talk it through."
          />
          <div>
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.2)}>
                <details className="group border-b border-brand-border py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-base font-bold text-brand-charcoal marker:content-none [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span
                      aria-hidden="true"
                      className="text-xl font-normal text-brand-red transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-brand-grey md:text-base">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
