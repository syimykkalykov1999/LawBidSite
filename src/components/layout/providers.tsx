"use client";

import { LazyMotion, MotionConfig } from "motion/react";
import { SmoothScroll } from "./smooth-scroll";

// Animation features arrive in a separate chunk, so the first load ships only the
// small `m` components (motion.dev "Reduce bundle size").
const loadFeatures = () => import("@/lib/motion-features").then((res) => res.default);

/** Client-side wrappers shared by every page: lazy animation features, reduced-motion support and smooth scrolling. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">
        <SmoothScroll>{children}</SmoothScroll>
      </MotionConfig>
    </LazyMotion>
  );
}
