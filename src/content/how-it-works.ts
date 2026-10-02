import type { ScreenId } from "@/components/phone/phone";

export type Step = { screen: ScreenId; title: string; body: string };

export const flows: Record<"client" | "attorney", Step[]> = {
  client: [
    {
      screen: "post",
      title: "Post your case",
      body: "Tap the gold + in the app, pick one of 42 practice categories and your state, explain what happened and, if you like, set a budget. Posting is free.",
    },
    {
      screen: "bids",
      title: "Receive bids",
      body: "Verified attorneys who cover that area and state send offers with their price, when they can start and how they would handle it. You can counter-offer.",
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
      screen: "cases",
      title: "Get cases that match you",
      body: "The Cases tab of your feed shows new cases for your practice areas and licensed states. No cold leads, no paid directories.",
    },
    {
      screen: "bid",
      title: "Send your bid",
      body: "Set your fee and explain your approach in a few lines. Clients compare offers transparently and pick on merit.",
    },
    {
      screen: "planner",
      title: "Run your practice",
      body: "Plan hearings, calls and meetings as tasks, give your assistants their own duties and approve their drafts, and talk to clients without leaving the app.",
    },
  ],
};
