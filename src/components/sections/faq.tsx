"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "@phosphor-icons/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/lib/site";
import { faqs } from "@/content/faq";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative px-5 py-28 sm:py-36">
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Questions, <span className="text-gold-gradient italic">answered.</span>
          </>
        }
      />
      <div className="mx-auto mt-14 max-w-3xl divide-y divide-white/8 rounded-3xl border border-white/8 bg-white/[0.02]">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                type="button"
                aria-expanded={isOpen}
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
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
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
      <p className="mt-8 text-center text-mist">
        Still have questions?{" "}
        <a href={`mailto:${site.supportEmail}`} className="text-gold-300 underline-offset-4 hover:underline">
          {site.supportEmail}
        </a>
      </p>
    </section>
  );
}
