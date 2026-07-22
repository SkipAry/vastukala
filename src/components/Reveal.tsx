"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Subtle scroll-reveal wrapper. Fades and slides content into view once.
 * Respects prefers-reduced-motion (renders static content).
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const reduceMotion = useReducedMotion();
  const Comp = m[as];

  return (
    <LazyMotion features={domAnimation} strict>
      <Comp
        className={className}
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </Comp>
    </LazyMotion>
  );
}
