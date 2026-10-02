"use client";

import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

/** Opening block of an inner page: eyebrow, serif title, lead text, optional actions and visual. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  visual,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  children?: React.ReactNode;
  visual?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-5 pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,#10255a_0%,#0a1a3f_40%,#0b0b0d_100%)]" />
      <div className="grid-lines absolute inset-0 -z-10" />
      <div
        className={`mx-auto grid max-w-6xl items-center gap-14 ${visual ? "lg:grid-cols-[1.1fr_0.9fr]" : "text-center"}`}
      >
        <div className={visual ? "" : "mx-auto max-w-3xl"}>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-5 inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] text-gold-400 uppercase"
          >
            <span className="h-px w-6 bg-gold-400/60" /> {eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease }}
            className="font-serif text-[clamp(2.6rem,6.5vw,5.2rem)] leading-[0.98] tracking-[-0.02em] text-balance text-ivory"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className={`mt-6 max-w-xl text-lg text-balance text-mist ${visual ? "" : "mx-auto"}`}
          >
            {lead}
          </motion.p>
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease }}
              className={`mt-9 flex flex-wrap gap-3 ${visual ? "" : "justify-center"}`}
            >
              {children}
            </motion.div>
          )}
        </div>
        {visual && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="glow-gold absolute top-1/2 left-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 opacity-60" />
            {visual}
          </motion.div>
        )}
      </div>
    </section>
  );
}
