// Prices and plan names mirror the app's subscription screens (plans.*, prime.*,
// subscription.* strings). Update both together.
export const SEAT_PRICE = 100;
export const MONTHLY_PRICE = 399;
export const YEARLY_PRICE = 9590;
export const MAX_SEATS = 6;
export const TRIAL_DAYS = 7;
const yearlySavings = (MONTHLY_PRICE + SEAT_PRICE * MAX_SEATS) * 12 - YEARLY_PRICE;

export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export const plans = {
  monthly: {
    name: "Monthly",
    price: MONTHLY_PRICE,
    period: "month",
    note: `Plus ${usd(SEAT_PRICE)} a month for each assistant, up to ${MAX_SEATS}.`,
    seats: `Assistants at ${usd(SEAT_PRICE)} a month each, up to ${MAX_SEATS}`,
  },
  yearly: {
    name: "Prime",
    price: YEARLY_PRICE,
    period: "year",
    note: `The yearly plan. Saves ${usd(yearlySavings)} compared with Monthly and ${MAX_SEATS} assistants.`,
    seats: `All ${MAX_SEATS} assistant seats included`,
  },
} as const;

export const proFeatures: readonly string[] = [
  "Unlimited bids on cases",
  "Messaging and calls with clients",
  "No commission on your fees",
  "Profile, posts and news",
  "Planner and tasks",
];

export const clientFeatures: readonly string[] = [
  "Post cases in 42 practice categories",
  "Receive and compare attorney bids",
  "Chat and call attorneys in the app",
  "Read reviews before you hire",
];

export const billingFacts: readonly string[] = [
  `${TRIAL_DAYS} days free for verified attorneys`,
  "Pay on the secure Stripe page",
  "Cancel anytime, access stays until the period ends",
];

/** Rows for the plan comparison table on /pricing. */
export const comparison: readonly {
  feature: string;
  client: boolean | string;
  monthly: boolean | string;
  prime: boolean | string;
}[] = [
  { feature: "Post cases and receive bids", client: true, monthly: false, prime: false },
  { feature: "Chat, voice notes, files and calls", client: true, monthly: true, prime: true },
  { feature: "Reviews and ratings", client: true, monthly: true, prime: true },
  { feature: "Bid on cases in your areas and states", client: false, monthly: "Unlimited", prime: "Unlimited" },
  { feature: "Verified license badge", client: false, monthly: true, prime: true },
  { feature: "Profile, posts and news", client: false, monthly: true, prime: true },
  { feature: "Planner and tasks", client: false, monthly: true, prime: true },
  {
    feature: "Assistant team",
    client: false,
    monthly: `${usd(SEAT_PRICE)}/mo per seat`,
    prime: `${MAX_SEATS} seats included`,
  },
  { feature: "Commission on your fees", client: "None", monthly: "None", prime: "None" },
];
