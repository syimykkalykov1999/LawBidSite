// Store links and contact details. Set the env vars once the apps are live;
// until then the download buttons show "Coming soon".
export const site = {
  name: "LawBid",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lawbid.app",
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL ?? "",
  playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@lawbid.app",
  tagline: "Post your case. Attorneys bid. You choose.",
  description:
    "LawBid is the legal marketplace where clients post their case for free and verified attorneys compete with transparent bids. Compare, chat, call and hire in one app.",
};

export const practiceAreas = [
  "Family law",
  "Criminal defense",
  "Immigration",
  "Real estate",
  "Business & corporate",
  "Employment",
  "Personal injury",
  "Tax",
  "Intellectual property",
  "Civil litigation",
  "Contracts",
  "Inheritance & wills",
  "Consumer protection",
  "Administrative",
];
