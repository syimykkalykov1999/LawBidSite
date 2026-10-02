import type { ScreenId } from "@/components/illustrations/phone-mockup";

export type Step = { screen: ScreenId; title: string; body: string };

export const flows: Record<"client" | "attorney", Step[]> = {
  client: [
    {
      screen: "post",
      title: "Describe your case",
      body: "Pick one of 42 practice categories and your state, explain what happened and, if you like, set a budget. Posting is free.",
    },
    {
      screen: "bids",
      title: "Receive bids",
      body: "Attorneys qualified in that area get notified and send offers with their price, experience and how they would handle it.",
    },
    {
      screen: "profile",
      title: "Compare and choose",
      body: "Open profiles, check ratings, qualifications and past work. Pick the offer that fits you, not the loudest ad.",
    },
    {
      screen: "chat",
      title: "Work together in one place",
      body: "Chat with read receipts, send voice notes and files, call in the app, and follow every step until the case is closed.",
    },
  ],
  attorney: [
    {
      screen: "verify",
      title: "Verify your license",
      body: "Licensed attorney or an attorney's assistant: add your license, the states you cover and your practice areas. Clients see a verified badge next to your name.",
    },
    {
      screen: "feed",
      title: "Get cases that match you",
      body: "New cases arrive in your feed only for your practice areas and states. No cold leads, no paid directories.",
    },
    {
      screen: "bid",
      title: "Send your bid",
      body: "Set your fee and explain your approach in a few lines. Clients compare offers transparently and pick on merit.",
    },
    {
      screen: "planner",
      title: "Run your practice",
      body: "Keep hearings and calls in the planner, assign tasks to your assistants and approve their work, and talk to clients without leaving the app.",
    },
  ],
};
