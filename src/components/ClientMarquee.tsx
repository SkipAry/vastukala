import Image from "next/image";
import { clientsRow1, clientsRow2, type ClientLogo } from "@/data/site";

/**
 * Two-row continuously scrolling client logo marquee.
 * Row 1 scrolls left, row 2 scrolls right. Pure CSS animation
 * (no JS), pauses on hover and disables under reduced motion —
 * see the `.marquee-*` rules in globals.css.
 */
function Row({
  items,
  direction,
}: {
  items: ClientLogo[];
  direction: "left" | "right";
}) {
  // Content is duplicated once; the track animates by exactly 50%
  // of its own width, so the loop is seamless.
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <ul
        className={`marquee-track flex w-max items-center gap-4 md:gap-6 ${
          direction === "left" ? "marquee-left" : "marquee-right"
        }`}
      >
        {doubled.map((client, i) => (
          <li
            key={`${client.name}-${i}`}
            aria-hidden={i >= items.length ? true : undefined}
            className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl border border-brand-border bg-white px-6 py-3 shadow-[0_2px_10px_-4px_rgba(21,24,29,0.08)] md:h-24 md:w-56 md:px-8"
          >
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              width={160}
              height={64}
              className="max-h-12 w-auto max-w-full object-contain md:max-h-14"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ClientMarquee() {
  return (
    <div className="border-t border-brand-border py-10 md:py-12">
      <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-caps text-brand-grey">
        Trusted by clients including
      </p>
      <div className="space-y-4 md:space-y-6">
        <Row items={clientsRow1} direction="left" />
        <Row items={clientsRow2} direction="right" />
      </div>
    </div>
  );
}
