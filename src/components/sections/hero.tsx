"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTime,
  useTransform,
  type MotionValue,
} from "motion/react";
import { ArrowDown, FileText, Gavel, SealCheck, Star } from "@phosphor-icons/react";
import { Scales } from "@/components/illustrations/scales";
import { seeded } from "@/lib/random";
import { StoreButtons } from "@/components/ui/store-buttons";

const particles = Array.from({ length: 28 }, (_, i) => ({
  left: `${(seeded(i) * 100).toFixed(2)}%`,
  size: `${(1.5 + seeded(i + 100) * 2.5).toFixed(1)}px`,
  duration: `${(12 + seeded(i + 200) * 16).toFixed(1)}s`,
  delay: `${(-seeded(i + 300) * 20).toFixed(1)}s`,
}));

const bids = [
  { name: "Sarah Klein", area: "Family law", price: "$450", rating: "4.9" },
  { name: "Daniel Ortiz", area: "Family law", price: "$380", rating: "4.8" },
  { name: "Amira Hassan", area: "Family law", price: "$520", rating: "5.0" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  // Story: the case weighs left, bids tip it right, then it settles in balance.
  const targetAngle = useTransform(progress, [0, 0.1, 0.5, 0.74, 1], [-7, -7, 9, 0, 0]);
  const time = useTime();
  const angle = useTransform(() => {
    const a = targetAngle.get();
    return reduce ? a : a + Math.sin(time.get() / 1100) * 1.1;
  });

  // Pointer parallax for a little depth.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotY = useSpring(useTransform(px, [-1, 1], [-6, 6]), { stiffness: 60, damping: 18 });
  const rotX = useSpring(useTransform(py, [-1, 1], [5, -5]), { stiffness: 60, damping: 18 });

  const headlineOpacity = useTransform(progress, [0, 0.09], [1, 0]);
  const headlineY = useTransform(progress, [0, 0.09], [0, -80]);
  const scalesY = useTransform(progress, [0, 0.1, 0.9, 1], ["30vh", "4vh", "4vh", "-4vh"]);
  const scalesScale = useTransform(progress, [0, 0.1, 0.9, 1], [0.82, 1, 1, 0.86]);
  const sceneOpacity = useTransform(progress, [0.9, 1], [1, 0.25]);
  const hintOpacity = useTransform(progress, [0, 0.05], [1, 0]);
  const glowOpacity = useTransform(progress, [0, 0.5, 0.74], [0.6, 0.85, 1]);

  return (
    <section
      ref={ref}
      className="relative h-[420vh]"
      onPointerMove={(e) => {
        px.set((e.clientX / window.innerWidth) * 2 - 1);
        py.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      <div className="grain sticky top-0 h-svh overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#10255a_0%,#0a1a3f_45%,#0b0b0d_100%)]" />
        <div className="grid-lines absolute inset-0" />
        <motion.div
          className="absolute top-[38%] left-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/20 blur-[120px]"
          style={{ opacity: glowOpacity }}
        />
        <div className="pointer-events-none absolute inset-0">
          {particles.map((p, i) => (
            <span
              key={i}
              className="particle"
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                animationDuration: p.duration,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>

        {/* Scales */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center [perspective:1200px]"
          style={{ opacity: sceneOpacity }}
        >
          <motion.div
            className="h-[min(78vh,92vw)] w-[min(82vh,96vw)]"
            style={{ y: scalesY, scale: scalesScale, rotateX: rotX, rotateY: rotY }}
          >
            <Scales angle={angle} progress={progress} />
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.div
          style={{ opacity: headlineOpacity, y: headlineY }}
          className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 text-center sm:pt-32"
        >
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-gold-300"
          >
            <Gavel size={14} weight="light" /> The legal marketplace where attorneys compete for you
          </motion.span>
          <h1 className="font-serif text-[clamp(2.8rem,8vw,6.6rem)] leading-[0.95] tracking-[-0.02em] text-ivory">
            {["Justice,", "weighed"].map((w, i) => (
              <motion.span
                key={w}
                className={`mr-[0.25em] inline-block ${i === 1 ? "text-gold-gradient italic" : ""}`}
                initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.35 + i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                {w}
              </motion.span>
            ))}
            <br />
            {["in", "your", "favor."].map((w, i) => (
              <motion.span
                key={w}
                className="mr-[0.25em] inline-block"
                initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.65 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                {w}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-6 max-w-xl text-base text-balance text-mist sm:text-lg"
          >
            Post your case for free. Verified attorneys send transparent bids. Compare, chat and hire the right one, all
            in one app.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <StoreButtons className="mt-8 justify-center" />
          </motion.div>
        </motion.div>

        {/* Story captions */}
        <Caption
          progress={progress}
          range={[0.1, 0.16, 0.34, 0.4]}
          side="left"
          step="01"
          title="Post your case"
          icon={<FileText size={18} weight="light" />}
        >
          Describe what happened and what you need. It is free and takes a couple of minutes.
        </Caption>
        <Caption
          progress={progress}
          range={[0.4, 0.46, 0.6, 0.65]}
          side="right"
          step="02"
          title="Attorneys bid"
          icon={<Gavel size={18} weight="light" />}
        >
          Verified attorneys in your practice area send offers with their price and approach.
        </Caption>
        <BidCards progress={progress} />
        <Caption
          progress={progress}
          range={[0.66, 0.72, 0.9, 0.96]}
          side="center"
          step="03"
          title="You choose. Fairly."
          icon={<SealCheck size={18} weight="light" />}
        >
          Compare profiles, ratings and fees side by side, then hire with confidence.
        </Caption>

        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2 text-xs text-mist"
        >
          <span className="tracking-[0.2em] uppercase">Scroll to weigh it</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <ArrowDown size={16} />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}

function Caption({
  progress,
  range,
  side,
  step,
  title,
  icon,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number, number, number];
  side: "left" | "right" | "center";
  step: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, range, [40, 0, 0, -40]);
  const pos =
    side === "left"
      ? "md:left-[6%] md:top-1/2 md:-translate-y-1/2 md:bottom-auto"
      : side === "right"
        ? "md:right-[6%] md:left-auto md:top-[22%] md:bottom-auto"
        : "md:right-[6%] md:left-auto md:top-1/2 md:-translate-y-1/2 md:bottom-auto";
  return (
    <motion.div
      style={{ opacity, y }}
      className={`pointer-events-none absolute inset-x-4 bottom-[6%] z-20 mx-auto max-w-sm md:inset-x-auto md:mx-0 md:w-[340px] ${pos}`}
    >
      <div className="rounded-3xl border border-white/10 bg-ink-900/70 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        <div className="mb-3 flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold-400/15 text-gold-300">{icon}</span>
          <span className="font-mono text-xs tracking-widest text-gold-400">{step}</span>
        </div>
        <h3 className="font-serif text-3xl text-ivory">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-mist">{children}</p>
      </div>
    </motion.div>
  );
}

function BidCards({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="pointer-events-none absolute top-[18%] left-[5%] z-20 hidden w-[300px] flex-col gap-3 lg:flex">
      {bids.map((b, i) => (
        <BidCard key={b.name} progress={progress} index={i} {...b} />
      ))}
    </div>
  );
}

function BidCard({
  progress,
  index,
  name,
  area,
  price,
  rating,
}: {
  progress: MotionValue<number>;
  index: number;
  name: string;
  area: string;
  price: string;
  rating: string;
}) {
  const start = 0.42 + index * 0.04;
  const opacity = useTransform(progress, [start, start + 0.04, 0.62, 0.66], [0, 1, 1, 0]);
  const x = useTransform(progress, [start, start + 0.04], [-60, 0]);
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("");
  return (
    <motion.div
      style={{ opacity, x }}
      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-850/80 p-3 backdrop-blur-xl"
    >
      <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-sm font-semibold text-ink-950">
        {initials}
      </span>
      <div className="flex-1">
        <div className="text-sm font-medium text-ivory">{name}</div>
        <div className="flex items-center gap-1 text-xs text-mist">
          {area} · <Star size={11} weight="fill" className="text-gold-400" /> {rating}
        </div>
      </div>
      <span className="rounded-lg bg-mint/15 px-2 py-1 text-sm font-semibold text-mint">{price}</span>
    </motion.div>
  );
}
