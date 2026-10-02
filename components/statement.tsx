"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

const text =
  "No more cold calls. No more guessing what a lawyer costs. Post your case once and let qualified attorneys compete for it, openly and fairly.";

export function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.4"] });
  const words = text.split(" ");
  return (
    <section className="relative px-5 py-32 sm:py-44">
      <div ref={ref} className="mx-auto max-w-5xl">
        <p className="flex flex-wrap font-serif text-[clamp(2rem,4.6vw,3.9rem)] leading-[1.12] tracking-[-0.01em]">
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} gold={/fairly|compete|once/.test(w)}>
              {w}
            </Word>
          ))}
        </p>
      </div>
    </section>
  );
}

function Word({ children, progress, range, gold }: { children: string; progress: MotionValue<number>; range: [number, number]; gold: boolean }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [8, 0]);
  return (
    <motion.span style={{ opacity, y }} className={`mr-[0.28em] inline-block ${gold ? "italic text-gold-300" : "text-ivory"}`}>
      {children}
    </motion.span>
  );
}
