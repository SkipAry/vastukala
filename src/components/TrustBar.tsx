"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";
import ClientMarquee from "./ClientMarquee";

/** Animated counter that respects prefers-reduced-motion. */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(eased * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section id="stats" aria-label="Company credentials" className="border-b border-brand-border bg-white">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 divide-brand-border md:grid-cols-4 md:divide-x">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 py-8 text-center md:px-6 md:py-14">
              <dd className="font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-2 text-xs font-medium uppercase tracking-caps text-brand-grey md:text-[13px]">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>

        {/* Client logo marquee — row 1 scrolls left, row 2 right */}
        <ClientMarquee />
      </div>
    </section>
  );
}
