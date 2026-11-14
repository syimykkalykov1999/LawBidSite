// Loaded on demand by <LazyMotion> in providers.tsx, so the animation and layout
// engine is a separate async chunk instead of part of every page's first load
// (motion.dev, "Reduce bundle size" → lazy loading).
// domMax, not domAnimation: the nav, pricing and how-it-works pills slide with
// layoutId, and only domMax includes layout animations.
import { domMax } from "motion/react";

export default domMax;
