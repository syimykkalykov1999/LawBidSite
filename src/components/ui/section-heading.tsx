"use client";

import { motion } from "motion/react";

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}
    >
      <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] text-gold-400 uppercase">
        <span className="h-px w-6 bg-gold-400/60" /> {eyebrow}
      </span>
      <h2 className="font-serif text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[1] tracking-[-0.015em] text-ivory">
        {title}
      </h2>
      {sub && (
        <p className={`mt-5 text-lg text-mist ${align === "center" ? "mx-auto" : ""} max-w-2xl text-balance`}>{sub}</p>
      )}
    </motion.div>
  );
}
