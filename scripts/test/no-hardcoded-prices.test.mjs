// Every number that duplicates an admin price (plan price, assistant price,
// assistant cap, trial days, client badge price) must come from
// src/content/pricing.ts. Hard-coded copies went stale on lawbid.dev/pricing
// (owner 2026-11-04). Legal pages talk about other sums ($100 liability cap,
// 7 days to update a licence) and the phone mock-ups show illustrative fees.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../../src/", import.meta.url).pathname;
const SKIP = [
  /\/\(legal\)\//,
  /\/components\/phone\//,
  /\/components\/sections\/hero\.tsx$/,
  /\/content\/pricing\.(ts|json)$/,
];
const PATTERNS = [
  /\$\s?399\b/,
  /\$\s?9,?590\b/,
  /\$\s?100 a month/,
  /\$100\/mo/,
  /\b\d+ days free/i,
  /up to \d+\b/i,
  /\$\s?10\b(?!,000)/,
];

function* files(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* files(p);
    else if (/\.(ts|tsx)$/.test(name)) yield p;
  }
}

test("no page or content file carries a hard-coded admin price", () => {
  const hits = [];
  for (const f of files(root)) {
    if (SKIP.some((re) => re.test(f))) continue;
    const text = readFileSync(f, "utf8");
    for (const re of PATTERNS) {
      const m = re.exec(text);
      if (m) hits.push(`${f.slice(root.length)}: "${m[0]}"`);
    }
  }
  assert.deepEqual(hits, []);
});
