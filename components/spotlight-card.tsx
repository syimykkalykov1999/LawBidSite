"use client";

import { useRef } from "react";
import { motion } from "motion/react";

export function SpotlightCard({ className = "", children, delay = 0 }: { className?: string; children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
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
    </motion.div>
  );
}
