"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "@phosphor-icons/react";
import type { FaqItem } from "@/content/faq";

/** Accordion of questions. One answer is open at a time. */
export function FaqList({ items, defaultOpen = 0 }: { items: readonly FaqItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();
  return (
    <div className="divide-y divide-white/8 rounded-3xl border border-white/8 bg-white/[0.02]">
      {items.map((f, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-${i}`;
        return (
          <div key={f.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8"
              >
                <span className={`text-lg transition-colors ${isOpen ? "text-gold-300" : "text-ivory"}`}>{f.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-gold-300"
                >
                  <Plus size={16} />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 leading-relaxed text-mist sm:px-8">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
