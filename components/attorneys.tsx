"use client";

import { motion } from "motion/react";
import {
  Briefcase,
  CalendarCheck,
  ChatsCircle,
  CheckCircle,
  CurrencyDollar,
  Gavel,
  House,
  IdentificationCard,
  Scales,
  UsersThree,
} from "@phosphor-icons/react";
import { SectionHeading } from "./section-heading";

const perks = [
  "Cases arrive filtered by the qualifications you practice",
  "You set your own fee in every bid",
  "Planner, tasks and assistants built in",
  "Posts and videos that grow your reputation",
  "Chat and calls with clients in one place",
];

const orbit = [
  { Icon: Briefcase, label: "Business" },
  { Icon: House, label: "Real estate" },
  { Icon: IdentificationCard, label: "Immigration" },
  { Icon: UsersThree, label: "Family" },
  { Icon: CurrencyDollar, label: "Tax" },
  { Icon: Scales, label: "Civil" },
];

export function Attorneys() {
  return (
    <section id="attorneys" className="relative overflow-hidden px-5 py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_75%_50%,rgba(212,166,74,0.12),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="For attorneys"
            title={
              <>
                Clients who already <span className="italic text-gold-gradient">need you.</span>
              </>
            }
            sub="Stop paying for ads and directories. On LawBid, people with real cases come to you, and you decide which ones to bid on."
          />
          <ul className="mt-8 space-y-3">
            {perks.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-start gap-3 text-ivory"
              >
                <CheckCircle size={22} weight="fill" className="mt-0.5 shrink-0 text-gold-400" />
                {p}
              </motion.li>
            ))}
          </ul>
          <a
            href="#download"
            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-gold-400 px-6 py-3.5 font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
          >
            <Gavel size={18} weight="bold" /> Join as an attorney
          </a>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          {[1, 0.72, 0.44].map((s, i) => (
            <div key={i} className="absolute inset-0 m-auto rounded-full border border-white/8" style={{ width: `${s * 100}%`, height: `${s * 100}%` }} />
          ))}
          <motion.div className="absolute inset-0" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }}>
            {orbit.map(({ Icon, label }, i) => {
              const a = (i / orbit.length) * Math.PI * 2;
              const r = 44;
              return (
                <div key={label} className="absolute" style={{ left: `${(50 + r * Math.cos(a)).toFixed(3)}%`, top: `${(50 + r * Math.sin(a)).toFixed(3)}%`, transform: "translate(-50%,-50%)" }}>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                    className="flex items-center gap-1.5 whitespace-nowrap rounded-2xl border border-white/10 bg-ink-850/90 px-2.5 py-1.5 text-xs text-ivory shadow-xl backdrop-blur sm:gap-2 sm:px-3 sm:py-2 sm:text-sm"
                  >
                    <Icon size={18} weight="light" className="text-gold-300" /> {label}
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
          <div className="absolute inset-0 m-auto grid h-28 w-28 place-items-center rounded-full sm:h-36 sm:w-36 border border-gold-400/40 bg-gradient-to-br from-ink-700 to-ink-900 shadow-[0_0_80px_rgba(226,188,110,0.35)]">
            <Gavel size={56} weight="light" className="text-gold-300" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-[14%] right-0 hidden items-center sm:flex gap-3 rounded-2xl border border-white/10 bg-ink-850/95 px-4 py-3 shadow-2xl backdrop-blur"
          >
            <ChatsCircle size={20} className="text-mint" />
            <div>
              <div className="text-xs text-mist">Bid accepted</div>
              <div className="text-sm font-medium text-ivory">You were hired · $450</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="absolute left-0 top-[12%] hidden items-center sm:flex gap-3 rounded-2xl border border-white/10 bg-ink-850/95 px-4 py-3 shadow-2xl backdrop-blur"
          >
            <CalendarCheck size={20} className="text-gold-300" />
            <div>
              <div className="text-xs text-mist">Tomorrow, 11:00</div>
              <div className="text-sm font-medium text-ivory">Mediation session</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
