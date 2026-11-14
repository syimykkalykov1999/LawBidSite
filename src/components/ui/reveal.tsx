"use client";

import * as m from "motion/react-m";
import { REVEAL_OFFSET, revealTransition, revealViewport } from "@/lib/motion";

/** Fades content up once when it scrolls into view. Transform and opacity only. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: REVEAL_OFFSET }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={revealTransition(delay)}
      className={className}
    >
      {children}
    </m.div>
  );
}
