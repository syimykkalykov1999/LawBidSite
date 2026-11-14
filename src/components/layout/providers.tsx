"use client";

import { LazyMotion, MotionConfig } from "motion/react";

// Animation features arrive in a separate chunk, so the first load ships only the
// small `m` components (motion.dev "Reduce bundle size").
const loadFeatures = () => import("@/lib/motion-features").then((res) => res.default);

/** Client-side wrappers shared by every page: lazy animation features, and reduced-motion support. Native scrolling, no wheel inertia (owner 13.11, as Instagram and Telegram web). */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
