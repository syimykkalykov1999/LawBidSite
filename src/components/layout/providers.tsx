"use client";

import { MotionConfig } from "motion/react";
import { SmoothScroll } from "./smooth-scroll";

/** Client-side wrappers shared by every page: reduced-motion support and smooth scrolling. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>{children}</SmoothScroll>
    </MotionConfig>
  );
}
