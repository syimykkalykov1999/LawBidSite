import type { ScreenId } from "@/components/phone/phone";

export type FeatureSection = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: readonly string[];
  screen: ScreenId;
};

// Every feature here exists in the app today (apps/mobile/lib/features).
export const featureSections: readonly FeatureSection[] = [
  {
    id: "bids",
    eyebrow: "Cases and bids",
    title: "Post once. Compare every offer.",
    body: "Describe your situation in one of 42 practice categories. Verified attorneys who cover your state send bids with a price, a start date and how they would handle it.",
    bullets: [
      "Add photos and documents to your case",
      "Set a budget, or leave it to clarify later",
      "Up to three rounds of offers and counter-offers",
      "Sort bids by newest, lowest price or top rated",
    ],
    screen: "bids",
  },
  {
    id: "feed",
    eyebrow: "Feed",
    title: "Get to know attorneys before you need one.",
    body: "Attorneys share posts and legal news in your feed. Filter by topic, follow the people you trust and save what you want to read later.",
    bullets: [
      "Topics for every practice area, plus News",
      "Like, comment, share and save",
      "Verified attorneys carry the badge",
    ],
    screen: "feed",
  },
  {
    id: "cases",
    eyebrow: "For attorneys",
    title: "New cases that match your practice.",
    body: "The Cases tab shows open cases in your practice areas and licensed states, newest first, with the budget, views and how many bids are already in.",
    bullets: [
      "Filter by state and topic",
      "Pick up cases where the client is not sure of the area",
      "Save cases, discuss them in comments, share them",
    ],
    screen: "cases",
  },
  {
    id: "chat",
    eyebrow: "Chat and calls",
    title: "Talk it through without leaving the app.",
    body: "Every conversation is tied to its case. Send messages, voice notes, documents and photos, and call in the app when typing is not enough.",
    bullets: [
      "Read receipts, online status and typing",
      "Voice notes with playback speed",
      "In-app audio calls with call history",
    ],
    screen: "chat",
  },
  {
    id: "inbox",
    eyebrow: "Inbox",
    title: "One inbox, sorted for you.",
    body: "Folders keep conversations in order: primary chats, general ones, people waiting on you and new message requests. Pin, mute or block anyone.",
    bullets: [
      "Folders: Primary, General, Waiting, Requests",
      "Unread counts on every chat",
      "Pin and mute conversations",
    ],
    screen: "inbox",
  },
  {
    id: "profiles",
    eyebrow: "Profiles and reviews",
    title: "Everything you need to trust an attorney.",
    body: "Profiles show the firm, practice areas, licensed states and languages, with posts, legal news and reviews one tap away.",
    bullets: [
      "Verified license badge",
      "Reviews with photos, confirmed by a shared case",
      "Attorneys can reply to reviews publicly",
    ],
    screen: "profile",
  },
  {
    id: "mine",
    eyebrow: "Mine",
    title: "All your cases in one place.",
    body: "Open, in progress, completed and saved cases, each with its status and new bids at a glance. Search any of them by title.",
    bullets: [
      "New bid counts on every case",
      "Archive cases you no longer need",
      "A planner for your own appointments",
    ],
    screen: "mine",
  },
  {
    id: "planner",
    eyebrow: "Planner and team",
    title: "Run the practice, not just the case.",
    body: "Plan hearings, calls, meetings and filings as tasks with steps. Add up to six assistants, decide what each one may do and approve their drafts.",
    bullets: [
      "Task types for calls, meetings, court and documents",
      "Assistants answer calls and chats for you",
      "Bid drafts and posts go out only after your approval",
    ],
    screen: "planner",
  },
];

export const safetyFeatures: readonly { title: string; body: string }[] = [
  {
    title: "Block and report",
    body: "Block any user. Report posts, comments, reviews and messages that break the rules.",
  },
  { title: "Active devices", body: "See every device signed in to your account and sign out the ones you do not use." },
  { title: "Your data", body: "Download a copy of your data at any time, or delete your account for good." },
  { title: "Notifications", body: "Push and in-app alerts for bids, messages and calls, each one under your control." },
];
