import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    title: "Design tailored to you",
    text: "Every project starts with your brief, your site and your budget — never a stock template.",
  },
  {
    title: "Architecture backed by engineering",
    text: "Founded by a civil engineer, the practice designs buildings that are as sound as they are striking.",
  },
  {
    title: "One team, end to end",
    text: "Planning, interiors, 3D visualization and approvals handled together — no coordination gaps.",
  },
  {
    title: "Clear communication",
    text: "Decisions are made with you, not for you, at every stage of the design.",
  },
  {
    title: "Breadth of experience",
    text: "Residences, commercial, industrial, institutional and layouts — across Maharashtra and India.",
  },
  {
    title: "Value that lasts",
    text: "A steady focus on practicality, aesthetics and the long-term worth of your investment.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-16 md:py-28">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Visual split — project image with plan overlay */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/projects/karde-bungalow.webp"
                alt="Design visualization of a classical bungalow at Karde, Shirur by Vastukala Associates"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-2 hidden w-56 border border-brand-border bg-white p-2 shadow-[0_16px_48px_-16px_rgba(21,24,29,0.3)] sm:block md:w-64">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/projects/floor-plan-3d.webp"
                  alt="Three-dimensional floor plan visualization by Vastukala Associates"
                  fill
                  sizes="16rem"
                  className="object-cover"
                />
              </div>
              <p className="px-2 py-2 font-mono text-[10px] uppercase tracking-caps text-brand-grey">
                Plan · Visualization · Detail
              </p>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              label="Why Vastukala"
              title="From the First Sketch to the Final Vision"
            />
            <ul className="mt-10 space-y-6">
              {reasons.map((reason, i) => (
                <Reveal as="li" key={reason.title} delay={i * 0.05} className="flex gap-4">
                  <span
                    className="mt-2 h-px w-8 shrink-0 bg-brand-red"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-heading text-base font-bold text-brand-charcoal">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-grey">
                      {reason.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
