import Image from "next/image";
import { projectTypes } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ProjectTypes() {
  return (
    <section className="bg-white py-16 md:py-28">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Design"
          title="Every Kind of Space, Considered With the Same Care"
        />

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projectTypes.map((type, i) => (
            <Reveal as="li" key={type.title} delay={Math.min(i * 0.05, 0.25)}>
              <div className="group relative h-80 overflow-hidden">
                <Image
                  src={type.image}
                  alt={type.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {type.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                    {type.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
