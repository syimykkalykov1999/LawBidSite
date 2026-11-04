// Pulls the plan prices set in the LawBid admin (GET <api>/pricing) into
// src/content/pricing.json before a build, so every page, the FAQ and the
// meta text show the current prices.
//
//   PRICING_API_URL     the API base (https://api.example.com/api/v1) or the
//                       full /pricing address; unset = committed prices.
//   PRICING_LAST_KNOWN  optional file: the prices of the last successful build
//                       (kept in the web bucket by seo-deploy.yml). Written on
//                       success; read when the API cannot be reached, so an
//                       outage never brings back an old committed price.
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolvePricing } from "./lib/pricing.mjs";

const file = new URL("../src/content/pricing.json", import.meta.url);
const lastKnownFile = process.env.PRICING_LAST_KNOWN;

const readJson = (p) => {
  try {
    return JSON.parse(readFileSync(p, "utf8"));
  } catch {
    return null;
  }
};

const committed = JSON.parse(readFileSync(file, "utf8"));
const lastKnown = lastKnownFile && existsSync(lastKnownFile) ? readJson(lastKnownFile) : null;
const { prices, source, reason } = await resolvePricing({ url: process.env.PRICING_API_URL, committed, lastKnown });

const json = `${JSON.stringify(prices, null, 2)}\n`;
writeFileSync(file, json);
if (source === "api" && lastKnownFile) writeFileSync(lastKnownFile, json);

if (source === "api") console.log("[pricing] prices from the API:", JSON.stringify(prices));
else console.warn(`[pricing] ${reason}; using the ${source} prices:`, JSON.stringify(prices));
