"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  CasesScreen,
  ChatScreen,
  FeedScreen,
  InboxScreen,
  MineScreen,
  MyCaseScreen,
  PlannerScreen,
  PostCaseScreen,
  ProfileScreen,
} from "./screens";

export type ScreenId =
  "feed" | "post" | "cases" | "bid" | "bids" | "chat" | "inbox" | "profile" | "verify" | "planner" | "mine";

const CANVAS_W = 390;
const CANVAS_H = 856;

function Screen({ id }: { id: ScreenId }) {
  switch (id) {
    case "feed":
      return <FeedScreen />;
    case "post":
      return <PostCaseScreen />;
    case "cases":
      return <CasesScreen />;
    case "bid":
      return <CasesScreen bidPlaced />;
    case "bids":
      return <MyCaseScreen />;
    case "chat":
      return <ChatScreen />;
    case "inbox":
      return <InboxScreen />;
    case "profile":
      return <ProfileScreen />;
    case "verify":
      return <ProfileScreen own />;
    case "planner":
      return <PlannerScreen />;
    case "mine":
      return <MineScreen />;
  }
}

function StatusBar() {
  return (
    <div className="relative flex h-[47px] shrink-0 items-center justify-between bg-app-bg px-[32px] pt-[6px] text-app-text">
      <span className="text-[16px] font-semibold">9:41</span>
      <span className="flex items-center gap-[6px]">
        <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true" fill="currentColor">
          <path d="M8 2.2c2.4 0 4.6.9 6.2 2.5l1.3-1.3A10.7 10.7 0 0 0 8 .4 10.7 10.7 0 0 0 .5 3.4l1.3 1.3A8.8 8.8 0 0 1 8 2.2Zm0 3.6c1.4 0 2.7.5 3.7 1.4l1.3-1.3A7 7 0 0 0 8 4a7 7 0 0 0-5 1.9l1.3 1.3c1-.9 2.3-1.4 3.7-1.4Zm0 3.5c.5 0 1 .2 1.3.5L8 11.1 6.7 9.8c.3-.3.8-.5 1.3-.5Z" />
        </svg>
        <span className="flex items-center gap-[1px]">
          <span className="flex h-[12px] w-[25px] rounded-[4px] border border-app-text/40 p-[1.5px]">
            <span className="h-full w-[80%] rounded-[2px] bg-app-text" />
          </span>
          <span className="h-[4px] w-[1.5px] rounded-r bg-app-text/40" />
        </span>
      </span>
    </div>
  );
}

/**
 * iPhone-style frame showing one screen of the LawBid app. The screen is laid out at the
 * app's real size (390pt wide) and scaled to fit, so proportions match the device.
 */
export function Phone({
  screen,
  width = 280,
  className = "",
}: {
  screen: ScreenId;
  width?: number;
  className?: string;
}) {
  const inner = width - 20;
  const scale = inner / CANVAS_W;
  const innerHeight = Math.round(CANVAS_H * scale);
  return (
    <div
      className={`relative shrink-0 rounded-[46px] border border-white/15 bg-gradient-to-b from-ink-700 to-ink-900 p-[10px] shadow-[0_40px_120px_-30px_rgba(201,162,74,0.35),inset_0_0_0_1px_rgba(255,255,255,0.05)] ${className}`}
      style={{ width, height: innerHeight + 20 }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[37px] bg-app-bg">
        <div
          className="absolute top-0 left-0 origin-top-left font-sans"
          style={{ width: CANVAS_W, height: CANVAS_H, transform: `scale(${scale})` }}
          aria-hidden="true"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={screen}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col bg-app-bg"
            >
              <StatusBar />
              <div className="relative flex min-h-0 flex-1 flex-col">
                <Screen id={screen} />
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-[11px] left-1/2 z-10 h-[36px] w-[124px] -translate-x-1/2 rounded-full bg-black" />
          <div className="absolute bottom-[8px] left-1/2 z-10 h-[5px] w-[134px] -translate-x-1/2 rounded-full bg-white/80" />
        </div>
      </div>
    </div>
  );
}
