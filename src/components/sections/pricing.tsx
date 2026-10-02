"use client";

import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { Check, Crown, UserCircle } from "@phosphor-icons/react";
import { SectionHeading } from "@/components/ui/section-heading";
import Link from "next/link";
import { MoreLink } from "@/components/ui/button-link";
import { billingFacts, clientFeatures, plans, proFeatures } from "@/content/pricing";

type Billing = "monthly" | "yearly";

function Price({ value }: { value: number }) {
  const mv = useMotionValue(value);
  const text = useTransform(mv, (v) => `$${Math.round(v).toLocaleString("en-US")}`);
  useEffect(() => {
    const controls = animate(mv, value, { duration: 0.6, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [mv, value]);
  return <motion.span>{text}</motion.span>;
}

export function Pricing({ heading = true }: { heading?: boolean }) {
  const [billing, setBilling] = useState<Billing>("monthly");
  const yearly = billing === "yearly";

  return (
    <section id="pricing" className={`relative px-5 ${heading ? "py-28 sm:py-36" : "pb-16"}`}>
      {heading && (
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Free for clients. <span className="text-gold-gradient italic">Simple for attorneys.</span>
            </>
          }
          sub="Clients never pay to post a case. Attorneys choose one plan and add assistants as the practice grows."
        />
      )}

      <div className={`${heading ? "mt-10" : ""} flex justify-center`}>
        <div className="relative flex rounded-full border border-white/10 bg-white/[0.04] p-1">
          {(["monthly", "yearly"] as const).map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBilling(b)}
              className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${billing === b ? "text-ink-950" : "text-mist hover:text-ivory"}`}
            >
              {billing === b && (
                <motion.span
                  layoutId="billing-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-ivory"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {b === "monthly" ? "Monthly" : "Yearly · Prime"}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-[1fr_1.25fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8"
        >
          <div className="flex items-center gap-2 text-mist">
            <UserCircle size={22} weight="light" /> Clients
          </div>
          <div className="mt-6 font-serif text-6xl text-ivory">$0</div>
          <div className="mt-1 text-sm text-mist">Always free</div>
          <ul className="mt-8 space-y-3">
            {clientFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[15px] text-ivory">
                <Check size={18} className="mt-0.5 shrink-0 text-gold-400" /> {f}
              </li>
            ))}
          </ul>
          <Link
            href="/clients"
            className="mt-auto block rounded-[14px] border border-white/15 py-3.5 text-center font-medium text-ivory transition-colors hover:bg-white/5 max-md:mt-8 md:mt-10"
          >
            Post a case
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative flex flex-col overflow-hidden rounded-3xl border border-gold-400/40 bg-gradient-to-b from-navy to-ink-900 p-8 shadow-[0_40px_120px_-40px_rgba(201,162,74,0.45)]"
        >
          <div className="glow-gold absolute -top-40 -right-40 h-96 w-96 opacity-70" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2 text-gold-300">
              <Crown size={22} weight="light" /> Attorney · {yearly ? plans.yearly.name : plans.monthly.name}
            </div>
            {yearly && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-ink-950"
              >
                6 assistants included
              </motion.span>
            )}
          </div>
          <div className="relative mt-6 flex items-end gap-2">
            <span className="font-serif text-6xl text-ivory">
              <Price value={yearly ? plans.yearly.price : plans.monthly.price} />
            </span>
            <span className="mb-2 text-mist">/{yearly ? "year" : "month"}</span>
          </div>
          <div className="relative mt-1 text-sm text-mist">{yearly ? plans.yearly.note : plans.monthly.note}</div>
          <ul className="relative mt-8 space-y-3">
            {[...proFeatures, yearly ? plans.yearly.seats : plans.monthly.seats].map((f) => (
              <li key={f} className="flex items-start gap-3 text-[15px] text-ivory">
                <Check size={18} className="mt-0.5 shrink-0 text-gold-400" /> {f}
              </li>
            ))}
          </ul>
          <Link
            href="/attorneys"
            className="relative mt-10 block rounded-[14px] bg-ivory py-3.5 text-center font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
          >
            Start 7 days free
          </Link>
        </motion.div>
      </div>
      <ul className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-mist">
        {billingFacts.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <Check size={14} className="text-gold-400" /> {f}
          </li>
        ))}
      </ul>
      {heading && (
        <p className="mt-6 text-center">
          <MoreLink href="/pricing">Compare plans in detail</MoreLink>
        </p>
      )}
    </section>
  );
}
