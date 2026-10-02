"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { Logo } from "@/components/ui/logo";
import { mainNav, moreNav } from "@/content/navigation";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Nav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        aria-label="Main"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-[background-color,border-color,box-shadow] duration-500 ${
          scrolled || open
            ? "border border-white/10 bg-ink-900/85 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md"
            : "border border-transparent"
        }`}
      >
        <Link href="/" aria-label="LawBid home">
          <Logo />
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {mainNav.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors hover:bg-white/5 hover:text-ivory ${
                  active ? "text-ivory" : "text-mist"
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-gold-400"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/download"
            className="group relative hidden overflow-hidden rounded-[14px] bg-ivory px-4 py-2 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <span className="relative z-10">Get the app</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-2 text-ivory hover:bg-white/5 md:hidden"
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-4 top-20 max-h-[calc(100svh-6rem)] overflow-y-auto rounded-2xl border border-white/10 bg-ink-900 p-3 md:hidden"
          >
            {[...mainNav, ...moreNav].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(pathname, l.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 hover:bg-white/5 ${
                  isActive(pathname, l.href) ? "bg-white/5 text-gold-300" : "text-ivory"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/download"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl bg-ivory px-4 py-3 text-center font-semibold text-ink-950"
            >
              Get the app
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
