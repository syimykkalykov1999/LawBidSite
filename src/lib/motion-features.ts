// Animation features for <LazyMotion>, loaded in their own chunk after the page is
// interactive (motion.dev "Reduce bundle size" > "Lazy-loading"). domMax, not
// domAnimation, because the nav, pricing and how-it-works pills slide with layoutId.
import { domMax } from "motion/react";

export default domMax;
