// Pulls the plan prices set in the LawBid admin (GET /api/v1/pricing) into
// src/content/pricing.json before a build, so every page, the FAQ and the
// meta text show the current prices. Without PRICING_API_URL, or when the
// API cannot be reached, the committed prices are kept and the build goes on.
import { readFileSync, writeFileSync } from "node:fs";

const file = new URL("../src/content/pricing.json", import.meta.url);
const url = process.env.PRICING_API_URL;

if (!url) {
  console.log("[pricing] PRICING_API_URL not set, keeping the committed prices");
  process.exit(0);
}

const KEYS = ["monthlyCents", "seatCents", "yearlyCents", "maxSeats", "trialDays"];
const DISCOUNTS = ["monthlyDiscount", "yearlyDiscount"];

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(10_000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const body = await res.json();
  const p = body?.data ?? body;
  const current = JSON.parse(readFileSync(file, "utf8"));
  const next = { ...current };
  for (const k of KEYS) {
    if (Number.isInteger(p?.[k]) && p[k] > 0) next[k] = p[k];
  }
  // Owner 2026-10-07: the strikethrough old price; the API sends null
  // unless it is a real discount (old price above today's).
  for (const k of DISCOUNTS) {
    const d = p?.[k];
    next[k] =
      d && Number.isInteger(d.compareAtCents) && Number.isInteger(d.percent) && d.percent > 0
        ? { compareAtCents: d.compareAtCents, percent: d.percent }
        : null;
  }
  writeFileSync(file, `${JSON.stringify(next, null, 2)}\n`);
  console.log("[pricing] prices from the API:", JSON.stringify(next));
} catch (e) {
  console.warn(`[pricing] could not read ${url} (${e}), keeping the committed prices`);
}
