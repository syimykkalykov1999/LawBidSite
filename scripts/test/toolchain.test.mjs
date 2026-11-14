// Owner rows 122/147: the site builds on the same Node major as production
// (LawBid builds it on Node 26.13.1), and the GitHub Pages workflow, which
// failed on every push/cron run because Pages is not enabled, runs on demand only.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const root = new URL("../..", import.meta.url);
const read = (p) => readFileSync(new URL(p, root), "utf8");

test(".nvmrc pins Node 26, matching production", () => {
  assert.match(read(".nvmrc").trim(), /^26\.\d+\.\d+$/);
});

test("package.json requires Node >=26", () => {
  assert.equal(JSON.parse(read("package.json")).engines.node, ">=26");
});

test("CI reads the Node version from .nvmrc", () => {
  for (const wf of [".github/workflows/ci.yml", ".github/workflows/pages.yml"]) {
    assert.match(read(wf), /node-version-file:\s*\.nvmrc/, wf);
  }
});

test("the Pages workflow has only a manual trigger", () => {
  const on = read(".github/workflows/pages.yml").match(/^on:\n((?:[ \t]+.*\n|\s*#.*\n)*)/m);
  assert.ok(on, "pages.yml has an on: block");
  const triggers = [...on[1].matchAll(/^ {2}(\w+):/gm)].map((m) => m[1]);
  assert.deepEqual(triggers, ["workflow_dispatch"]);
});
