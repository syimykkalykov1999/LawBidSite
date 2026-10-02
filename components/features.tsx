"use client";

import { motion } from "motion/react";
import {
  BellRinging,
  CalendarCheck,
  ChatsCircle,
  Checks,
  FilmStrip,
  Gavel,
  LockKey,
  Phone,
  Play,
  SealCheck,
  UsersThree,
  VideoCamera,
} from "@phosphor-icons/react";
import { SectionHeading } from "./section-heading";
import { SpotlightCard } from "./spotlight-card";

function CardText({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="relative z-10">
      <span className="mb-4 grid h-11 w-11 place-items-center rounded-2xl border border-gold-400/25 bg-gold-400/10 text-gold-300">{icon}</span>
      <h3 className="text-xl font-semibold tracking-tight text-ivory">{title}</h3>
      <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-mist">{body}</p>
    </div>
  );
}

const ticker = [
  ["Real estate", "$1,200"],
  ["Immigration", "$640"],
  ["Family law", "$450"],
  ["Employment", "$300"],
  ["Business", "$2,000"],
  ["Criminal", "$900"],
];

export function Features() {
  return (
    <section id="features" className="relative px-5 py-28 sm:py-36">
      <SectionHeading
        eyebrow="Features"
        title={
          <>
            Everything a case needs, <span className="italic text-gold-gradient">in your pocket.</span>
          </>
        }
        sub="Built for real legal work: from the first message to the final hearing."
      />

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-6">
        {/* Bidding */}
        <SpotlightCard className="min-h-[340px] p-7 md:col-span-4">
          <CardText
            icon={<Gavel size={22} weight="light" />}
            title="Transparent bidding"
            body="Attorneys compete for your case with clear fees up front. No hidden rates, no endless calls to compare prices."
          />
          <div className="pointer-events-none relative mt-6 h-44 overflow-hidden sm:absolute sm:bottom-0 sm:right-7 sm:top-0 sm:mt-0 sm:h-auto sm:w-64 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
            <motion.div animate={{ y: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 14, ease: "linear" }} className="flex flex-col gap-3">
              {[...ticker, ...ticker].map(([a, p], i) => (
                <div key={i} className="flex w-full items-center justify-between rounded-2xl border border-white/8 bg-ink-850/80 px-4 py-3 backdrop-blur">
                  <div>
                    <div className="text-[11px] text-mist">New bid · {a}</div>
                    <div className="text-sm text-ivory">Verified attorney</div>
                  </div>
                  <span className="font-semibold text-mint">{p}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </SpotlightCard>

        {/* Chat */}
        <SpotlightCard className="min-h-[340px] p-7 md:col-span-2" delay={0.1}>
          <CardText icon={<ChatsCircle size={22} weight="light" />} title="Real-time chat" body="Online status, last seen, read receipts and typing indicators." />
          <div className="mt-6 space-y-2 text-[13px]">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="w-fit rounded-2xl rounded-bl-md bg-white/[0.07] px-3 py-2 text-ivory">
              Documents received.
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="ml-auto flex w-fit items-center gap-1 rounded-2xl rounded-br-md bg-gold-400 px-3 py-2 text-ink-950">
              Great! <Checks size={14} weight="bold" />
            </motion.div>
            <div className="flex w-fit gap-1 rounded-2xl bg-white/[0.07] px-3 py-2.5">
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-mist" />
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-mist" />
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-mist" />
            </div>
          </div>
        </SpotlightCard>

        {/* Calls */}
        <SpotlightCard className="min-h-[300px] p-7 md:col-span-2">
          <CardText icon={<VideoCamera size={22} weight="light" />} title="Voice and video calls" body="Talk face to face with your attorney, right inside the app." />
          <div className="relative mx-auto mt-8 grid h-20 w-20 place-items-center">
            <span className="pulse-ring absolute inset-0 rounded-full border border-gold-400/50" />
            <span className="pulse-ring absolute inset-0 rounded-full border border-gold-400/50 [animation-delay:0.8s]" />
            <span className="pulse-ring absolute inset-0 rounded-full border border-gold-400/50 [animation-delay:1.6s]" />
            <span className="grid h-14 w-14 place-items-center rounded-full bg-mint text-ink-950">
              <Phone size={24} weight="fill" />
            </span>
          </div>
        </SpotlightCard>

        {/* Planner */}
        <SpotlightCard className="min-h-[300px] p-7 md:col-span-2" delay={0.1}>
          <CardText icon={<CalendarCheck size={22} weight="light" />} title="Planner and tasks" body="Hearings, calls and deadlines for attorneys and clients alike." />
          <div className="mt-6 space-y-2">
            {["Call with client", "Court hearing", "Send documents"].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2 text-sm"
              >
                <motion.span
                  initial={{ backgroundColor: "rgba(0,0,0,0)" }}
                  whileInView={{ backgroundColor: i === 0 ? "#4fd1a5" : "rgba(0,0,0,0)" }}
                  transition={{ delay: 0.8 }}
                  className="grid h-4 w-4 place-items-center rounded border border-white/25 text-ink-950"
                >
                  {i === 0 && <Checks size={10} weight="bold" />}
                </motion.span>
                <span className={i === 0 ? "text-mist line-through" : "text-ivory"}>{t}</span>
              </motion.div>
            ))}
          </div>
        </SpotlightCard>

        {/* Team */}
        <SpotlightCard className="min-h-[300px] p-7 md:col-span-2" delay={0.2}>
          <CardText icon={<UsersThree size={22} weight="light" />} title="Team and assistants" body="Invite assistants, share tasks and see their activity in one feed." />
          <div className="mt-8 flex -space-x-3">
            {["SK", "DO", "AH", "+2"].map((a, i) => (
              <motion.span
                key={a}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.12 }}
                className={`grid h-12 w-12 place-items-center rounded-full border-2 border-ink-900 text-sm font-semibold ${i === 3 ? "bg-ink-700 text-ivory" : "bg-gradient-to-br from-gold-300 to-gold-600 text-ink-950"}`}
              >
                {a}
              </motion.span>
            ))}
          </div>
        </SpotlightCard>

        {/* Alerts */}
        <SpotlightCard className="min-h-[300px] p-7 md:col-span-3">
          <CardText icon={<BellRinging size={22} weight="light" />} title="Smart case alerts" body="Attorneys only hear about cases in the areas they actually practice." />
          <div className="mt-6 space-y-2">
            {["New case · Immigration", "New case · Family law", "Your bid was accepted 🎉"].map((n, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: -16, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.25, type: "spring" }}
                className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${i === 2 ? "border-gold-400/40 bg-gold-400/10" : "border-white/10 bg-ink-800"}`}
              >
                <BellRinging size={16} className="text-gold-300" />
                <span className="text-sm text-ivory">{n}</span>
                <span className="ml-auto text-[11px] text-mist">now</span>
              </motion.div>
            ))}
          </div>
        </SpotlightCard>

        {/* Feed */}
        <SpotlightCard className="min-h-[300px] p-7 md:col-span-3" delay={0.1}>
          <CardText icon={<FilmStrip size={22} weight="light" />} title="Posts, news and reels" body="Attorneys share explainers and short videos, so you can get to know them before you hire." />
          <div className="mt-6 flex gap-3">
            {[
              ["SK", "5 tips before you sign a lease", "from-azure/40"],
              ["AH", "Custody: what judges look at", "from-gold-500/40"],
              ["DO", "Your rights at work", "from-mint/30"],
            ].map(([who, caption, tint], i) => (
              <motion.div
                key={who}
                whileHover={{ y: -6 }}
                className={`relative flex aspect-[9/14] flex-1 flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${tint} via-ink-800 to-ink-900 p-2.5`}
              >
                <span className="absolute left-1/2 top-[40%] grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/15 backdrop-blur">
                  <Play size={14} weight="fill" className="text-ivory" />
                </span>
                <span className="mb-1.5 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-[9px] font-bold text-ink-950">{who}</span>
                <span className="text-[11px] leading-tight text-ivory">{caption}</span>
                {i === 0 && <span className="absolute right-2 top-2 rounded-full bg-black/40 px-1.5 py-0.5 text-[9px] text-ivory">0:42</span>}
              </motion.div>
            ))}
          </div>
        </SpotlightCard>

        <SpotlightCard className="p-7 md:col-span-3">
          <CardText icon={<SealCheck size={22} weight="light" />} title="Verified attorneys" body="Attorneys build profiles with their license, experience and qualifications. Verified profiles carry the badge." />
        </SpotlightCard>
        <SpotlightCard className="p-7 md:col-span-3" delay={0.1}>
          <CardText icon={<LockKey size={22} weight="light" />} title="Private by default" body="Your case, chats and calls stay inside the app, and you decide which attorney you work with." />
        </SpotlightCard>
      </div>
    </section>
  );
}
