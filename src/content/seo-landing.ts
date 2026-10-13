import type { FaqItem } from "@/content/faq";
import { practiceAreas, type PracticeArea } from "@/content/practice-areas";
import type { UsState } from "@/content/states";

/**
 * Practice areas that also get a page per state ("divorce lawyer Texas"). They are the ones people
 * search for by state; the other practice areas keep their own page without a state variant, so the
 * site does not publish hundreds of near-empty pages.
 */
export const stateLandingSlugs = [
  "family-law",
  "dui-and-dwi",
  "personal-injury",
  "criminal-defense",
  "immigration",
  "workers-compensation",
  "bankruptcy-and-debt",
  "estate-planning-and-probate",
  "employment-and-labor",
  "real-estate",
  "landlord-and-tenant",
  "traffic-tickets",
  "medical-malpractice",
  "social-security-disability",
] as const;

export const stateLandingAreas: readonly PracticeArea[] = stateLandingSlugs
  .map((slug) => practiceAreas.find((a) => a.slug === slug))
  .filter((a): a is PracticeArea => a !== undefined);

export const practiceBySlug = (slug: string) => practiceAreas.find((a) => a.slug === slug);

/** "Family Law" -> "family law"; acronyms such as DUI and DWI stay as they are. */
export function lowerName(name: string): string {
  return name.replace(/\b([A-Z])([a-z])/g, (_, a: string, b: string) => a.toLowerCase() + b);
}

export function practiceFaq(area: PracticeArea): FaqItem[] {
  const n = lowerName(area.name);
  return [
    {
      q: `How do I find a ${n} lawyer?`,
      a: `Post your case on LawBid for free and choose ${area.name} as the area of law. Independent attorneys who practice ${n} see it and send bids with their price and approach. You compare them, chat or call, and hire the one you trust.`,
    },
    {
      q: `Is it free to post a ${n} case?`,
      a: "Yes. Posting a case is free for clients. Any fee is agreed directly with the attorney you choose before you hire.",
    },
    {
      q: "Does LawBid give legal advice?",
      a: "No. LawBid is a marketplace that connects clients with independent attorneys. It is not a law firm and does not give legal advice; the attorney you hire does.",
    },
  ];
}

export function practiceStateFaq(area: PracticeArea, state: UsState): FaqItem[] {
  const n = lowerName(area.name);
  return [
    {
      q: `How do I find a ${n} lawyer in ${state.name}?`,
      a: `Post your case on LawBid for free and choose ${area.name} as the area of law. Attorneys who practice ${n} and cover ${state.name} can see it and send bids. You compare the offers, talk to the attorneys and choose.`,
    },
    {
      q: `Is it free to post a ${n} case in ${state.name}?`,
      a: "Yes. Posting a case is free for clients. Any fee is agreed directly with the attorney you choose before you hire.",
    },
    {
      q: "Does LawBid give legal advice?",
      a: "No. LawBid is a marketplace that connects clients with independent attorneys. It is not a law firm and does not give legal advice; the attorney you hire does.",
    },
  ];
}

export function stateFaq(state: UsState): FaqItem[] {
  return [
    {
      q: `How do I find a lawyer in ${state.name}?`,
      a: `Post your case on LawBid for free and pick the area of law. Attorneys who cover ${state.name} and practice that area can see it and send bids. You compare them and hire the one you prefer.`,
    },
    {
      q: `Can attorneys in ${state.name} join LawBid?`,
      a: `Yes. Attorneys add the bar licenses they hold, choose their practice areas and states, and bid on matching cases.`,
    },
    {
      q: "Does LawBid give legal advice?",
      a: "No. LawBid is a marketplace that connects clients with independent attorneys. It is not a law firm and does not give legal advice.",
    },
  ];
}
