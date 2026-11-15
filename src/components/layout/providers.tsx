"use client";

import { LazyMotion, MotionConfig } from "motion/react";
import { SmoothScroll } from "./smooth-scroll";

// `strict` makes any full-bundle `motion.*` component throw, so the lazy setup
// cannot silently regress; components use `m.*` from "motion/react-m".
const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

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
