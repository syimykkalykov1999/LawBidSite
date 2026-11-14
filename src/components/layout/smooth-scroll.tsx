"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";

/**
 * Light wheel smoothing. A high lerp keeps the page responsive (it settles in a
 * few frames instead of gliding for a second), and touch devices keep native
 * scrolling. Lenis is fetched with import() after hydration, so it is not part
 * of any page's first-load JavaScript and is never downloaded with reduced motion.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let raf = 0;
    let instance: Lenis | null = null;
    import("lenis")
      .then(({ default: LenisClass }) => {
        if (cancelled) return;
        instance = new LenisClass({ lerp: 0.16, wheelMultiplier: 1, smoothWheel: true, anchors: { offset: -80 } });
        lenis.current = instance;
        const loop = (time: number) => {
          instance?.raf(time);
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
      })
      // Without Lenis the page keeps native scrolling, which is a safe fallback.
      .catch(() => {});
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      instance?.destroy();
      lenis.current = null;
    };
  }, []);

  // Start every new page at the top, without gliding there from the old position.
  useEffect(() => {
    lenis.current?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return <>{children}</>;
}
