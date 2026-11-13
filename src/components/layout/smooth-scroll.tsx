"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

// Lenis runs only for a mouse wheel or trackpad on a desktop browser. Visitors who ask
// for reduced motion, and touch devices (where Lenis leaves scrolling native anyway,
// syncTouch is off), get the browser's own scroll and no animation-frame loop.
const SKIP_QUERY = "(prefers-reduced-motion: reduce), (hover: none), (pointer: coarse)";

/**
 * Light wheel smoothing. A high lerp keeps the page responsive (it settles in a
 * few frames instead of gliding for a second).
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const skip = window.matchMedia(SKIP_QUERY);
    const stop = () => {
      lenis.current?.destroy();
      lenis.current = null;
    };
    const sync = () => {
      if (skip.matches) return stop();
      if (lenis.current) return;
      lenis.current = new Lenis({
        lerp: 0.16,
        wheelMultiplier: 1,
        smoothWheel: true,
        anchors: { offset: -80 },
        autoRaf: true,
      });
    };
    sync();
    skip.addEventListener("change", sync);
    return () => {
      skip.removeEventListener("change", sync);
      stop();
    };
  }, []);

  // Start every new page at the top, without gliding there from the old position.
  useEffect(() => {
    lenis.current?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return <>{children}</>;
}
