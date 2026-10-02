"use client";

import { motion } from "motion/react";
import { Phone, type ScreenId } from "@/components/phone/phone";
import { StoreButtons } from "@/components/ui/store-buttons";
import { LogoMark } from "@/components/ui/logo";

export function Download({ screen = "bids" }: { screen?: ScreenId }) {
  return (
    <section id="download" className="relative px-5 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="grain relative mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-[40px] border border-gold-400/20 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 px-8 py-14 sm:px-14 lg:grid-cols-[1.2fr_1fr]"
      >
        <div className="glow-gold absolute -top-56 -right-56 h-[36rem] w-[36rem]" />
        <div className="glow-navy absolute -bottom-64 left-0 h-[32rem] w-[32rem]" />
        <div className="relative">
          <LogoMark className="mb-6 h-14 w-14" />
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-[1] text-ivory">
            Your next lawyer is <span className="text-gold-gradient italic">one bid away.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-mist">
            Get LawBid on iPhone and Android. Post your first case for free, or set up your attorney profile in minutes.
          </p>
          <StoreButtons className="mt-8" />
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative animate-float-slow">
            <Phone screen={screen} />
            <div className="absolute bottom-24 -left-16 hidden animate-bob rounded-2xl border border-white/10 bg-ink-850 px-4 py-3 shadow-2xl sm:block">
              <div className="text-xs text-mist">Posting a case</div>
              <div className="font-serif text-3xl text-mint">$0</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
