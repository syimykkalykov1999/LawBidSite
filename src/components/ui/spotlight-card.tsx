"use client";

import { useRef } from "react";
import * as m from "motion/react-m";
import { REVEAL_OFFSET, revealTransition, revealViewport } from "@/lib/motion";

export function SpotlightCard({
  className = "",
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: REVEAL_OFFSET }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={revealTransition(delay)}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - r.left}px`);
        el.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}
      className={`spotlight-card overflow-hidden rounded-3xl ${className}`}
    >
      {children}
    </m.div>
  );
}
