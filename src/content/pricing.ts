// Prices mirror the app's subscription settings. Update both together.
const SEAT_PRICE = 100;
const MONTHLY_PRICE = 399;
const YEARLY_PRICE = 9590;
const YEARLY_SEATS = 6;
const yearlySavings = (MONTHLY_PRICE + SEAT_PRICE * YEARLY_SEATS) * 12 - YEARLY_PRICE;

export const plans = {
  monthly: {
    price: MONTHLY_PRICE,
    note: `Plus $${SEAT_PRICE} per month for each assistant seat.`,
    seats: `Assistant seats at $${SEAT_PRICE} per month each`,
  },
  yearly: {
    price: YEARLY_PRICE,
    note: `Saves $${yearlySavings.toLocaleString("en-US")} a year compared with monthly billing and ${YEARLY_SEATS} assistant seats.`,
    seats: `${YEARLY_SEATS} assistant seats included`,
  },
} as const;

export const proFeatures: readonly string[] = [
  "Bid on cases in your practice areas and states",
  "Verified license badge on your profile",
  "Chat, voice notes, files and in-app calls",
  "Posts, legal news and followers",
  "Planner with tasks and approvals",
];

export const clientFeatures: readonly string[] = [
  "Post cases in 42 practice categories",
  "Receive and compare attorney bids",
  "Chat and call attorneys in the app",
  "Read reviews before you hire",
];
