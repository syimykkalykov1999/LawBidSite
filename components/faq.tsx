"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "@phosphor-icons/react";
import { SectionHeading } from "./section-heading";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "Is it free to post a case?",
    a: "Yes. Posting a case and receiving bids is free for clients. You only agree on a fee with the attorney you decide to hire.",
  },
  {
    q: "How does bidding work?",
    a: "When you publish a case, attorneys who practice in that area are notified. Each one can send a bid with a price and a short note on how they would handle it. You compare the bids and profiles and choose.",
  },
  {
    q: "Can I talk to an attorney before hiring?",
    a: "Yes. You can message attorneys in the in-app chat, send voice notes and files, and call them in the app to ask questions before you decide.",
  },
  {
    q: "How do I know an attorney is real?",
    a: "Attorneys verify their license and list the states and practice areas they cover. Verified profiles show a badge, and you can read reviews and their posts before hiring.",
  },
  {
    q: "Which areas of law are covered?",
    a: "42 practice categories, from family, criminal and immigration to real estate, business, employment and tax. Attorneys choose the areas and states they cover, so your case reaches the right people.",
  },
  {
    q: "I am an attorney. How do I join?",
    a: "Licensed attorneys and attorneys' assistants can join. Download the app, choose Attorney (PRO), verify your license and pick your practice areas and states. Then you can start bidding on matching cases.",
  },
  {
    q: "How much does it cost?",
    a: "Clients use LawBid for free. Attorneys pay $399 per month plus $100 per month for each assistant seat, or $9,590 per year with 6 assistant seats included.",
  },
  {
    q: "Where is LawBid available?",
    a: "LawBid works with licensed attorneys in the United States. The app is available in English and Russian.",
  },
  {
    q: "Can my assistants use LawBid too?",
    a: "Yes. Attorneys can add assistants to their team, assign tasks in the planner, approve their work and follow their activity.",
  },
  {
    q: "Is LawBid a law firm?",
    a: "No. LawBid is a technology platform that connects clients with independent attorneys. It does not give legal advice; the attorney you hire does.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative px-5 py-28 sm:py-36">
      <SectionHeading eyebrow="FAQ" title={<>Questions, <span className="italic text-gold-gradient">answered.</span></>} />
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
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-gold-300">
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
