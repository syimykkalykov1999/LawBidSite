// The plan prices the public site shows come from the LawBid admin
// (GET <api>/pricing: public, no auth, Cache-Control 5 min). This module is
// pure so it can be tested without the network; scripts/fetch-pricing.mjs
// runs it before each build.

/** Whole-number keys copied from the API when present and > 0. */
export const PRICE_KEYS = ["monthlyCents", "seatCents", "yearlyCents", "maxSeats", "trialDays", "clientBadgeCents"];
/** Strikethrough old prices (null unless the API sends a real discount). */
export const DISCOUNT_KEYS = ["monthlyDiscount", "seatDiscount", "yearlyDiscount", "clientBadgeDiscount"];

/**
 * The /pricing address from what the workflow passes. Accepts the API base
 * (https://api.example.com/api/v1, the value of WEB_SEO_API_URL) as well as
 * the full address; before 2026-11-04 the base was fetched as is, got a 404
 * and the committed prices stayed on the site.
 */
export function pricingUrl(base) {
  const trimmed = String(base ?? "")
    .trim()
    .replace(/\/+$/, "");
  if (!trimmed) return null;
  return /\/pricing$/.test(trimmed) ? trimmed : `${trimmed}/pricing`;
}

/** The API's `{ data: {...} }` envelope or a bare object. */
export function unwrap(body) {
  return body && typeof body === "object" && "data" in body ? body.data : body;
}

/**
 * [current] merged with the API answer: a key is taken only when it is a
 * positive integer, a discount only when it is a real one. Returns null when
 * the answer holds no usable price at all (a wrong address answering 200
 * must not look like a success).
 */
export function mergePricing(current, body) {
  const p = unwrap(body);
  if (!p || typeof p !== "object") return null;
  const next = { ...current };
  let taken = 0;
  for (const k of PRICE_KEYS) {
    if (Number.isInteger(p[k]) && p[k] > 0) {
      next[k] = p[k];
      taken += 1;
    }
  }
  if (taken === 0) return null;
  for (const k of DISCOUNT_KEYS) {
    const d = p[k];
    next[k] =
      d && Number.isInteger(d.compareAtCents) && Number.isInteger(d.percent) && d.percent > 0
        ? { compareAtCents: d.compareAtCents, percent: d.percent }
        : null;
  }
  return next;
}

/**
 * Resolves the prices for a build.
 *   url        the API base or /pricing address (PRICING_API_URL); none = committed prices
 *   committed  src/content/pricing.json as checked in
 *   lastKnown  the prices of the last successful build (PRICING_LAST_KNOWN), or null
 * Returns { prices, source } where source is "api" | "last-known" | "committed".
 * The API is never trusted blindly: an error, a non-2xx answer or an answer
 * without prices falls back to the last known prices, then the committed ones.
 */
export async function resolvePricing({ url, committed, lastKnown = null, fetchImpl = fetch, timeoutMs = 10_000 }) {
  const fallback = () =>
    lastKnown && mergePricing(committed, lastKnown)
      ? { prices: mergePricing(committed, lastKnown), source: "last-known" }
      : { prices: { ...committed }, source: "committed" };
  const target = pricingUrl(url);
  if (!target) return { ...fallback(), reason: "PRICING_API_URL not set" };
  try {
    const res = await fetchImpl(target, { signal: AbortSignal.timeout(timeoutMs) });
    if (!res.ok) return { ...fallback(), reason: `HTTP ${res.status}` };
    const merged = mergePricing(committed, await res.json());
    if (!merged) return { ...fallback(), reason: "answer without prices" };
    return { prices: merged, source: "api" };
  } catch (e) {
    return { ...fallback(), reason: e instanceof Error ? e.message : String(e) };
  }
}
