"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { Logo } from "./logo";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#attorneys", label: "For attorneys" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${
          scrolled
            ? "border border-white/10 bg-ink-900/70 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border border-transparent"
        }`}
      >
        <Link href="/" aria-label="LawBid home">
          <Logo />
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3.5 py-2 text-sm text-mist transition-colors hover:bg-white/5 hover:text-ivory"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="/#download"
            className="group relative hidden overflow-hidden rounded-xl bg-gold-400 px-4 py-2 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <span className="relative z-10">Get the app</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-4 top-20 rounded-2xl border border-white/10 bg-ink-900/95 p-3 backdrop-blur-xl md:hidden"
          >
            {[...links, { href: "/#download", label: "Get the app" }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-ivory hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
