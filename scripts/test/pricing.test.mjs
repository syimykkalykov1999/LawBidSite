import { test } from "node:test";
import assert from "node:assert/strict";
import { mergePricing, pricingUrl, resolvePricing } from "../lib/pricing.mjs";

const committed = {
  monthlyCents: 39900,
  seatCents: 10000,
  yearlyCents: 959000,
  maxSeats: 6,
  trialDays: 7,
  clientBadgeCents: 1000,
  monthlyDiscount: null,
  seatDiscount: null,
  yearlyDiscount: null,
  clientBadgeDiscount: null,
};
const api = {
  data: {
    currency: "usd",
    monthlyCents: 9900,
    seatCents: 2000,
    yearlyCents: 149900,
    maxSeats: 10,
    trialDays: 14,
    clientBadgeCents: 500,
    monthlyDiscount: { compareAtCents: 19900, percent: 50 },
    seatDiscount: null,
    yearlyDiscount: { compareAtCents: 299900, percent: 50 },
    clientBadgeDiscount: { compareAtCents: 2000, percent: 0 },
  },
};
const ok = (body) => async () => ({ ok: true, status: 200, json: async () => body });

test("pricingUrl: the API base (WEB_SEO_API_URL) and the full address both reach /pricing", () => {
  assert.equal(pricingUrl("https://api.lawbid.dev/api/v1"), "https://api.lawbid.dev/api/v1/pricing");
  assert.equal(pricingUrl("https://api.lawbid.dev/api/v1/"), "https://api.lawbid.dev/api/v1/pricing");
  assert.equal(pricingUrl("https://api.lawbid.dev/api/v1/pricing"), "https://api.lawbid.dev/api/v1/pricing");
  assert.equal(pricingUrl(""), null);
  assert.equal(pricingUrl(undefined), null);
});

test("mergePricing: every admin number lands, a zero-percent discount is no discount", () => {
  const next = mergePricing(committed, api);
  assert.equal(next.monthlyCents, 9900);
  assert.equal(next.seatCents, 2000);
  assert.equal(next.yearlyCents, 149900);
  assert.equal(next.maxSeats, 10);
  assert.equal(next.trialDays, 14);
  assert.equal(next.clientBadgeCents, 500);
  assert.deepEqual(next.monthlyDiscount, { compareAtCents: 19900, percent: 50 });
  assert.equal(next.seatDiscount, null);
  assert.equal(next.clientBadgeDiscount, null);
});

test("mergePricing: an answer without prices (wrong address answering 200) is not a success", () => {
  assert.equal(mergePricing(committed, { data: { ok: true } }), null);
  assert.equal(mergePricing(committed, "<html>"), null);
  assert.equal(mergePricing(committed, { data: { monthlyCents: 0, seatCents: -5 } }), null);
});

test("resolvePricing: the fetched values are used", async () => {
  const r = await resolvePricing({ url: "https://api.example.com/api/v1", committed, fetchImpl: ok(api) });
  assert.equal(r.source, "api");
  assert.equal(r.prices.monthlyCents, 9900);
  assert.equal(r.prices.trialDays, 14);
});

test("resolvePricing: API unreachable -> last known prices, never the committed ones", async () => {
  const lastKnown = { ...committed, monthlyCents: 12900, trialDays: 10 };
  const fail = async () => {
    throw new Error("ECONNREFUSED");
  };
  const r = await resolvePricing({ url: "https://api.example.com/api/v1", committed, lastKnown, fetchImpl: fail });
  assert.equal(r.source, "last-known");
  assert.equal(r.prices.monthlyCents, 12900);
  assert.equal(r.prices.trialDays, 10);
  assert.match(r.reason, /ECONNREFUSED/);
});

test("resolvePricing: HTTP 404 and no last known -> committed prices, with the reason", async () => {
  const r = await resolvePricing({
    url: "https://api.example.com/api/v1",
    committed,
    fetchImpl: async () => ({ ok: false, status: 404, json: async () => ({}) }),
  });
  assert.equal(r.source, "committed");
  assert.deepEqual(r.prices, committed);
  assert.equal(r.reason, "HTTP 404");
});

test("resolvePricing: no address -> committed prices", async () => {
  const r = await resolvePricing({ url: undefined, committed });
  assert.equal(r.source, "committed");
  assert.deepEqual(r.prices, committed);
});
