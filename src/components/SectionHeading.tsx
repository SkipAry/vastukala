import Reveal from "./Reveal";

export default function SectionHeading({
  label,
  title,
  intro,
  align = "left",
  dark = false,
}: {
  label: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`${
          align === "left" ? "annotation-line" : ""
        } mb-4 text-[11px] font-semibold uppercase tracking-caps ${
          dark ? "text-white/60" : "text-brand-red"
        }`}
      >
        {label}
      </p>
      <h2
        className={`font-heading text-[clamp(1.6rem,5vw,2.75rem)] font-bold leading-tight ${
          dark ? "text-white" : "text-brand-charcoal"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            dark ? "text-white/75" : "text-brand-grey"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
