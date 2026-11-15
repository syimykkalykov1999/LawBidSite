// Owner row 172: pages must not ship the full Motion engine or Lenis up front.
// Pattern from motion.dev "Reduce bundle size": render `m.*` components from
// "motion/react-m" under one <LazyMotion strict> whose features load async;
// Lenis is imported only on demand, on devices that use smooth wheel scrolling.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("../..", import.meta.url).pathname;
const src = join(root, "src");

function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? files(join(dir, e.name)) : /\.(tsx?|mjs)$/.test(e.name) ? [join(dir, e.name)] : [],
  );
}
const sources = files(src).map((f) => ({ file: relative(root, f), text: readFileSync(f, "utf8") }));

test("no file renders the full-bundle motion.* components", () => {
  const offenders = sources
    .filter(
      ({ text }) =>
        /import\s*{[^}]*\bmotion\b[^}]*}\s*from\s*["']motion\/react["']/.test(text) || /<motion\./.test(text),
    )
    .map(({ file }) => file);
  assert.deepEqual(offenders, [], 'use `import * as m from "motion/react-m"` and <m.div> instead');
});

test("one strict LazyMotion loads the animation features asynchronously", () => {
  const providers = sources.find(({ file }) => file.endsWith("layout/providers.tsx"));
  assert.ok(providers, "providers.tsx exists");
  assert.match(providers.text, /<LazyMotion\b[^>]*\bstrict\b/);
  assert.match(providers.text, /features=\{loadFeatures\}/);
  assert.match(providers.text, /import\(["']@\/lib\/motion-features["']\)/);
  const statics = sources
    .filter(({ text }) => /^import[^;]*\bdom(Max|Animation)\b/m.test(text))
    .map(({ file }) => file);
  assert.deepEqual(
    statics,
    ["src/lib/motion-features.ts"],
    "only the lazily imported module may import the feature bundle",
  );
});

test("lenis is never imported statically", () => {
  const statics = sources
    .filter(({ text }) => /^import\s+(?!type\s)[^;]*["']lenis["']/m.test(text))
    .map(({ file }) => file);
  assert.deepEqual(statics, []);
  assert.ok(
    sources.some(({ text }) => /import\(["']lenis["']\)/.test(text)),
    "lenis loads through import()",
  );
});
