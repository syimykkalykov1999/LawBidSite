"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  BellSimple,
  CalendarCheck,
  ChatCircle,
  Checks,
  House,
  MagnifyingGlass,
  PaperPlaneRight,
  Phone as PhoneIcon,
  Plus,
  SealCheck,
  Star,
  User,
  UsersThree,
  VideoCamera,
} from "@phosphor-icons/react";

export type ScreenId =
  | "post"
  | "bids"
  | "profile"
  | "chat"
  | "verify"
  | "feed"
  | "bid"
  | "planner";

export function Phone({ screen, className = "" }: { screen: ScreenId; className?: string }) {
  return (
    <div
      className={`relative aspect-[9/19] w-[280px] rounded-[46px] border border-white/15 bg-gradient-to-b from-ink-700 to-ink-900 p-[10px] shadow-[0_40px_120px_-30px_rgba(226,188,110,0.35),inset_0_0_0_1px_rgba(255,255,255,0.05)] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[37px] bg-ink-950">
        <div className="absolute left-1/2 top-2.5 z-30 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-ivory/90">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-3.5 rounded-[3px] border border-ivory/70" />
          </span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 bottom-14 top-9 overflow-hidden px-4 pt-3"
          >
            <Screen id={screen} />
          </motion.div>
        </AnimatePresence>
        <TabBar active={screen === "chat" ? 2 : screen === "planner" ? 3 : screen === "profile" || screen === "verify" ? 4 : 0} />
      </div>
    </div>
  );
}

function TabBar({ active }: { active: number }) {
  const icons = [House, MagnifyingGlass, ChatCircle, CalendarCheck, User];
  return (
    <div className="absolute inset-x-0 bottom-0 flex h-14 items-center justify-around border-t border-white/5 bg-ink-900/90 px-4 backdrop-blur">
      {icons.map((Icon, i) => (
        <Icon key={i} size={20} weight={i === active ? "fill" : "light"} className={i === active ? "text-gold-400" : "text-mist/70"} />
      ))}
    </div>
  );
}

function Title({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-3">
      <div className="text-[17px] font-semibold text-ivory">{children}</div>
      {sub && <div className="text-[11px] text-mist">{sub}</div>}
    </div>
  );
}

function Avatar({ initials, tone = "gold" }: { initials: string; tone?: "gold" | "azure" | "mint" }) {
  const bg =
    tone === "gold" ? "from-gold-300 to-gold-600" : tone === "azure" ? "from-azure to-ink-600" : "from-mint to-ink-600";
  return (
    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br ${bg} text-[11px] font-bold text-ink-950`}>
      {initials}
    </span>
  );
}

const card = "rounded-2xl border border-white/8 bg-white/[0.04] p-3";

function Screen({ id }: { id: ScreenId }) {
  switch (id) {
    case "post":
      return (
        <div>
          <Title sub="Free · takes 2 minutes">New case</Title>
          <div className="mb-2 text-[10px] uppercase tracking-wider text-mist">Practice area</div>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {["Family", "Immigration", "Real estate", "Business"].map((c, i) => (
              <span key={c} className={`rounded-full px-2.5 py-1 text-[11px] ${i === 0 ? "bg-gold-400 text-ink-950" : "bg-white/5 text-mist"}`}>
                {c}
              </span>
            ))}
          </div>
          <div className={`${card} mb-2`}>
            <div className="text-[10px] text-mist">Title</div>
            <div className="text-[13px] text-ivory">Custody agreement review</div>
          </div>
          <div className={`${card} mb-2`}>
            <div className="text-[10px] text-mist">Describe your situation</div>
            <div className="mt-1 space-y-1.5">
              <div className="h-1.5 w-full rounded bg-white/10" />
              <div className="h-1.5 w-11/12 rounded bg-white/10" />
              <div className="h-1.5 w-3/4 rounded bg-white/10" />
            </div>
          </div>
          <div className={`${card} mb-4 flex items-center justify-between`}>
            <div>
              <div className="text-[10px] text-mist">Budget</div>
              <div className="text-[13px] text-ivory">$300 – $600</div>
            </div>
            <span className="text-[11px] text-gold-300">Optional</span>
          </div>
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="rounded-2xl bg-gold-400 py-3 text-center text-[13px] font-semibold text-ink-950"
          >
            Publish case
          </motion.div>
        </div>
      );
    case "bids":
      return (
        <div>
          <Title sub="Custody agreement review">3 new bids</Title>
          {[
            ["SK", "Sarah Klein", "$450", "4.9", "12 yrs"],
            ["DO", "Daniel Ortiz", "$380", "4.8", "8 yrs"],
            ["AH", "Amira Hassan", "$520", "5.0", "15 yrs"],
          ].map(([i, n, p, r, y], idx) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + idx * 0.15 }}
              className={`${card} mb-2`}
            >
              <div className="flex items-center gap-2.5">
                <Avatar initials={i} tone={idx === 1 ? "azure" : "gold"} />
                <div className="flex-1">
                  <div className="flex items-center gap-1 text-[12px] font-medium text-ivory">
                    {n} <SealCheck size={12} weight="fill" className="text-azure" />
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-mist">
                    <Star size={9} weight="fill" className="text-gold-400" /> {r} · {y}
                  </div>
                </div>
                <div className="text-[14px] font-semibold text-mint">{p}</div>
              </div>
              <div className="mt-2 h-1.5 w-4/5 rounded bg-white/10" />
            </motion.div>
          ))}
          <div className="mt-1 text-center text-[10px] text-mist">Bids close in 2 days</div>
        </div>
      );
    case "profile":
      return (
        <div className="text-center">
          <div className="mx-auto mb-2 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-lg font-bold text-ink-950">
            AH
          </div>
          <div className="flex items-center justify-center gap-1 text-[15px] font-semibold text-ivory">
            Amira Hassan <SealCheck size={14} weight="fill" className="text-azure" />
          </div>
          <div className="text-[11px] text-mist">Family law · 15 years</div>
          <div className="my-3 grid grid-cols-3 gap-1.5">
            {[
              ["5.0", "Rating"],
              ["128", "Cases"],
              ["98%", "Success"],
            ].map(([v, l]) => (
              <div key={l} className={card}>
                <div className="text-[14px] font-semibold text-gold-300">{v}</div>
                <div className="text-[9px] text-mist">{l}</div>
              </div>
            ))}
          </div>
          <div className={`${card} mb-2 text-left`}>
            <div className="mb-1 text-[10px] text-mist">Qualifications</div>
            <div className="flex flex-wrap gap-1">
              {["Custody", "Divorce", "Mediation", "Alimony"].map((q) => (
                <span key={q} className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-ivory">
                  {q}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 rounded-2xl border border-white/10 py-2.5 text-[12px] text-ivory">Message</div>
            <div className="flex-1 rounded-2xl bg-gold-400 py-2.5 text-[12px] font-semibold text-ink-950">Hire · $520</div>
          </div>
        </div>
      );
    case "chat":
      return (
        <div className="flex h-full flex-col">
          <div className="mb-3 flex items-center gap-2.5 border-b border-white/5 pb-3">
            <Avatar initials="AH" />
            <div className="flex-1">
              <div className="text-[13px] font-medium text-ivory">Amira Hassan</div>
              <div className="flex items-center gap-1 text-[10px] text-mint">
                <span className="h-1.5 w-1.5 rounded-full bg-mint" /> online
              </div>
            </div>
            <PhoneIcon size={18} className="text-gold-300" />
            <VideoCamera size={18} className="text-gold-300" />
          </div>
          <div className="flex flex-1 flex-col gap-2 text-[12px]">
            <div className="max-w-[80%] self-start rounded-2xl rounded-bl-md bg-white/[0.06] px-3 py-2 text-ivory">
              I reviewed your documents. We can file on Monday.
            </div>
            <div className="max-w-[80%] self-end rounded-2xl rounded-br-md bg-gold-400 px-3 py-2 text-ink-950">
              Perfect, thank you!
              <span className="ml-1 inline-flex translate-y-0.5 text-ink-700">
                <Checks size={13} weight="bold" />
              </span>
            </div>
            <div className="max-w-[80%] self-start rounded-2xl rounded-bl-md bg-white/[0.06] px-3 py-2 text-ivory">
              I added the hearing to your planner 📅
            </div>
            <div className="flex items-center gap-1 self-start rounded-2xl bg-white/[0.06] px-3 py-2.5">
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-mist" />
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-mist" />
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-mist" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
            <span className="flex-1 text-[11px] text-mist">Message…</span>
            <PaperPlaneRight size={16} weight="fill" className="text-gold-400" />
          </div>
        </div>
      );
    case "verify":
      return (
        <div>
          <Title sub="Step 3 of 4">Attorney profile</Title>
          <div className={`${card} mb-2 flex items-center gap-3`}>
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-400/15">
              <User size={22} className="text-gold-300" />
            </div>
            <div>
              <div className="text-[13px] text-ivory">Profile photo</div>
              <div className="text-[10px] text-mint">Uploaded ✓</div>
            </div>
          </div>
          <div className={`${card} mb-2`}>
            <div className="mb-1.5 text-[10px] text-mist">Your qualifications</div>
            <div className="flex flex-wrap gap-1.5">
              {["Family", "Criminal", "Immigration", "Tax", "Contracts"].map((q, i) => (
                <motion.span
                  key={q}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                  className={`rounded-full px-2.5 py-1 text-[11px] ${i < 3 ? "bg-gold-400 text-ink-950" : "bg-white/5 text-mist"}`}
                >
                  {q}
                </motion.span>
              ))}
            </div>
          </div>
          <div className={`${card} mb-4`}>
            <div className="text-[10px] text-mist">Bar license</div>
            <div className="flex items-center justify-between text-[13px] text-ivory">
              License #A-20418 <SealCheck size={16} weight="fill" className="text-azure" />
            </div>
          </div>
          <div className="rounded-2xl bg-gold-400 py-3 text-center text-[13px] font-semibold text-ink-950">Submit for review</div>
        </div>
      );
    case "feed":
      return (
        <div>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[17px] font-semibold text-ivory">New cases</div>
            <span className="relative">
              <BellSimple size={20} className="text-ivory" />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-gold-400" />
            </span>
          </div>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mb-2 rounded-2xl border border-gold-400/40 bg-gold-400/10 p-3"
          >
            <div className="text-[10px] font-medium uppercase tracking-wider text-gold-300">Matches your qualifications</div>
            <div className="text-[12px] text-ivory">Custody agreement review · Family</div>
          </motion.div>
          {[
            ["Work visa extension", "Immigration", "3 bids"],
            ["Lease dispute with landlord", "Real estate", "1 bid"],
            ["Startup shareholder deal", "Business", "5 bids"],
          ].map(([t, a, b]) => (
            <div key={t} className={`${card} mb-2`}>
              <div className="text-[12px] text-ivory">{t}</div>
              <div className="mt-1 flex justify-between text-[10px] text-mist">
                <span>{a}</span>
                <span className="text-gold-300">{b}</span>
              </div>
            </div>
          ))}
        </div>
      );
    case "bid":
      return (
        <div className="flex h-full flex-col">
          <Title sub="Family · posted 12 min ago">Custody agreement review</Title>
          <div className={`${card} mb-2 space-y-1.5`}>
            <div className="h-1.5 w-full rounded bg-white/10" />
            <div className="h-1.5 w-5/6 rounded bg-white/10" />
            <div className="h-1.5 w-2/3 rounded bg-white/10" />
          </div>
          <div className="mt-auto rounded-t-3xl border border-white/10 bg-ink-850 p-4">
            <div className="mb-2 text-[13px] font-semibold text-ivory">Your bid</div>
            <div className="mb-2 flex items-baseline gap-1">
              <span className="font-serif text-4xl text-gold-300">$450</span>
              <span className="text-[11px] text-mist">fixed fee</span>
            </div>
            <div className="mb-3 rounded-xl bg-white/[0.04] p-2 text-[11px] text-mist">
              I will review the draft, negotiate terms and attend mediation.
            </div>
            <div className="rounded-2xl bg-gold-400 py-3 text-center text-[13px] font-semibold text-ink-950">Send bid</div>
          </div>
        </div>
      );
    case "planner":
      return (
        <div>
          <Title sub="Thursday, 14 tasks this week">Planner</Title>
          <div className="mb-3 flex gap-1.5">
            {["M", "T", "W", "T", "F"].map((d, i) => (
              <div key={i} className={`flex-1 rounded-xl py-1.5 text-center text-[11px] ${i === 3 ? "bg-gold-400 text-ink-950" : "bg-white/5 text-mist"}`}>
                {d}
                <div className="text-[12px] font-semibold">{12 + i}</div>
              </div>
            ))}
          </div>
          {[
            ["09:30", "Call with client", "Sarah · Custody", true],
            ["11:00", "Court hearing", "District court, room 4", false],
            ["15:00", "Draft agreement", "Assigned to assistant", false],
          ].map(([t, n, s, done]) => (
            <div key={n as string} className={`${card} mb-2 flex items-center gap-3`}>
              <span className={`grid h-5 w-5 place-items-center rounded-md border ${done ? "border-mint bg-mint text-ink-950" : "border-white/20"}`}>
                {done ? <Checks size={11} weight="bold" /> : null}
              </span>
              <div className="flex-1">
                <div className={`text-[12px] ${done ? "text-mist line-through" : "text-ivory"}`}>{n}</div>
                <div className="text-[10px] text-mist">{s}</div>
              </div>
              <span className="text-[10px] text-gold-300">{t}</span>
            </div>
          ))}
          <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] p-3">
            <span className="flex items-center gap-2 text-[11px] text-ivory">
              <UsersThree size={16} className="text-gold-300" /> Team · 2 assistants
            </span>
            <Plus size={14} className="text-gold-300" />
          </div>
        </div>
      );
  }
}
