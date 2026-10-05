import { MAX_SEATS, MONTHLY_PRICE, SEAT_PRICE, YEARLY_PRICE, usd } from "./pricing";

export type FaqItem = { q: string; a: string };
export type FaqGroup = { id: string; title: string; items: readonly FaqItem[] };

export const faqGroups: readonly FaqGroup[] = [
  {
    id: "general",
    title: "General",
    items: [
      {
        q: "What is LawBid?",
        a: "LawBid is a mobile app where people post their legal case for free and independent attorneys send bids with their price and approach. You compare the offers, talk to the attorneys and hire the one that fits.",
      },
      {
        q: "Is LawBid a law firm?",
        a: "No. LawBid is a technology platform that connects clients with independent attorneys. It does not give legal advice; the attorney you hire does.",
      },
      {
        q: "Where is LawBid available?",
        a: "LawBid works with independent attorneys in the United States who state the bar licenses they hold. The app is available in English and Russian, on iPhone and Android.",
      },
      {
        q: "Which areas of law are covered?",
        a: "42 practice categories with their sub-specialties, from family, criminal defense and immigration to real estate, business, employment and tax. Attorneys choose the areas and states they cover, so your case reaches the right people.",
      },
    ],
  },
  {
    id: "clients",
    title: "For clients",
    items: [
      {
        q: "Is it free to post a case?",
        a: "Yes. Posting a case and receiving bids is free for clients. You only agree on a fee with the attorney you decide to hire.",
      },
      {
        q: "How does bidding work?",
        a: "When you publish a case, attorneys who practice in that area and state can see it. Each one can send a bid with a price and a short note on how they would handle it. You compare the bids and profiles and choose.",
      },
      {
        q: "Can I talk to an attorney before hiring?",
        a: "Yes. You can message attorneys in the in-app chat, send voice notes, documents and photos, and call them in the app to ask questions before you decide.",
      },
      {
        q: "How do I know an attorney is real?",
        a: "Attorneys enter their bar license and list the states and practice areas they cover. The badge next to a name shows what LawBid has been able to check against the public registry so far; licenses are self-declared, so confirm them with the state bar before hiring. You can also read reviews, posts and answers before you decide.",
      },
      {
        q: "Can I leave a review?",
        a: "Yes. You can rate an attorney and write a review with photos. Reviews about a case you worked on together are marked as confirmed by the case, and attorneys can reply publicly.",
      },
    ],
  },
  {
    id: "attorneys",
    title: "For attorneys",
    items: [
      {
        q: "I am an attorney. How do I join?",
        a: "Download the app, choose the attorney role, add your license and pick your practice areas and states. Matching cases appear in the Cases tab of your feed and you can start bidding.",
      },
      {
        q: "Can my assistants use LawBid too?",
        a: "Yes. Add up to 6 assistants to your team and choose what each one can do: answer calls and chats, send files, prepare bid drafts and posts for your approval, and work on tasks in the planner.",
      },
      {
        q: "Do you take a commission on my fees?",
        a: "No. You pay a flat subscription and keep the full fee you agree with your client.",
      },
      {
        q: "What can I post?",
        a: "Posts and legal news on your profile. They appear in the feed and help clients get to know you before they hire.",
      },
    ],
  },
  {
    id: "billing",
    title: "Pricing and billing",
    items: [
      {
        q: "How much does it cost?",
        a: `Clients use LawBid for free. Attorneys pay ${usd(MONTHLY_PRICE)} a month plus ${usd(SEAT_PRICE)} a month for each assistant, or choose Prime: ${usd(YEARLY_PRICE)} a year with all ${MAX_SEATS} assistant seats included.`,
      },
      {
        q: "Is there a free trial?",
        a: "Yes. Verified attorneys get 7 days free before the first charge.",
      },
      {
        q: "How do I pay and cancel?",
        a: "Payment runs on Stripe's secure page. You can update your card, see your payment history or cancel anytime in the app; access stays until the end of the paid period.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy and safety",
    items: [
      {
        q: "Who can see my case?",
        a: "Attorneys who cover the practice area and state of your case. Your contact details are not public, and you decide whom to talk to.",
      },
      {
        q: "Can I block or report someone?",
        a: "Yes. You can block any user and report posts, comments, reviews or messages that break the rules.",
      },
      {
        q: "Can I export or delete my data?",
        a: "Yes. In settings you can see your active devices and sign them out, download a copy of your data and delete your account.",
      },
    ],
  },
];

export const faqs: readonly FaqItem[] = faqGroups.flatMap((g) => g.items);

/** The short list shown on the home page. */
export const topFaqs: readonly FaqItem[] = [
  faqGroups[1].items[0],
  faqGroups[1].items[1],
  faqGroups[1].items[3],
  faqGroups[2].items[0],
  faqGroups[3].items[0],
  faqGroups[0].items[1],
];
