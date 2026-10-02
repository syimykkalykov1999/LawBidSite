"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Phone, type ScreenId } from "./phone";
import { SectionHeading } from "./section-heading";

type Step = { screen: ScreenId; title: string; body: string };

const flows: Record<"client" | "attorney", Step[]> = {
  client: [
    { screen: "post", title: "Describe your case", body: "Pick one of 42 practice categories and your state, explain what happened and, if you like, set a budget. Posting is free." },
    { screen: "bids", title: "Receive bids", body: "Attorneys qualified in that area get notified and send offers with their price, experience and how they would handle it." },
    { screen: "profile", title: "Compare and choose", body: "Open profiles, check ratings, qualifications and past work. Pick the offer that fits you, not the loudest ad." },
    { screen: "chat", title: "Work together in one place", body: "Chat with read receipts, send voice notes and files, call in the app, and follow every step until the case is closed." },
  ],
  attorney: [
    { screen: "verify", title: "Verify your license", body: "Licensed attorney or an attorney's assistant: add your license, the states you cover and your practice areas. Clients see a verified badge next to your name." },
    { screen: "feed", title: "Get cases that match you", body: "New cases arrive in your feed only for your practice areas and states. No cold leads, no paid directories." },
    { screen: "bid", title: "Send your bid", body: "Set your fee and explain your approach in a few lines. Clients compare offers transparently and pick on merit." },
    { screen: "planner", title: "Run your practice", body: "Keep hearings and calls in the planner, assign tasks to your assistants and approve their work, and talk to clients without leaving the app." },
  ],
};

export function HowItWorks() {
  const [role, setRole] = useState<"client" | "attorney">("client");
  const [active, setActive] = useState(0);
  const steps = flows[role];

  return (
    <section id="how" className="relative px-5 py-28 sm:py-36">
      <SectionHeading
        eyebrow="How it works"
        title={
          <>
            How will you use <span className="italic text-gold-gradient">LawBid?</span>
          </>
        }
        sub="Clients post a case and choose from attorney offers. Attorneys get clients in their practice areas and states."
      />

      <div className="mt-10 flex justify-center">
        <div className="relative flex rounded-full border border-white/10 bg-white/[0.04] p-1">
          {(["client", "attorney"] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => {
                setRole(r);
                setActive(0);
              }}
              className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${role === r ? "text-ink-950" : "text-mist hover:text-ivory"}`}
            >
              {role === r && (
                <motion.span layoutId="role-pill" className="absolute inset-0 -z-10 rounded-full bg-gold-400" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
              )}
              {r === "client" ? "Client" : "Attorney · PRO"}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="sticky top-0 hidden h-svh items-center justify-center lg:flex">
          <div className="relative">
            <div className="absolute -inset-16 rounded-full bg-gold-500/15 blur-[90px]" />
            <Phone screen={steps[active].screen} className="relative" />
            <div className="absolute -right-14 top-1/2 flex -translate-y-1/2 flex-col gap-2">
              {steps.map((_, i) => (
                <span key={i} className={`h-8 w-1 rounded-full transition-all duration-500 ${i === active ? "bg-gold-400" : "bg-white/10"}`} />
              ))}
            </div>
          </div>
        </div>
        <div key={role}>
          {steps.map((s, i) => (
            <StepBlock key={s.title} step={s} index={i} onActive={() => setActive(i)} isActive={i === active} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepBlock({ step, index, onActive, isActive }: { step: Step; index: number; onActive: () => void; isActive: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onActive();
  }, [inView, onActive]);

  return (
    <div ref={ref} className="flex flex-col justify-center py-10 lg:min-h-[80svh] lg:py-0">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className={`transition-opacity duration-500 ${isActive ? "lg:opacity-100" : "lg:opacity-40"}`}
      >
        <span className="font-serif text-7xl italic text-gold-400/30">0{index + 1}</span>
        <h3 className="mt-2 font-serif text-4xl text-ivory sm:text-5xl">{step.title}</h3>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-mist">{step.body}</p>
        <div className="mt-8 flex justify-center lg:hidden">
          <Phone screen={step.screen} className="scale-90" />
        </div>
      </motion.div>
    </div>
  );
}
