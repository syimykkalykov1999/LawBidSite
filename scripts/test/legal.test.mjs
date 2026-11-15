import { test } from "node:test";
import assert from "node:assert/strict";
import { hasBiometricSection, legalUrl, pickLegal, resolveLegal } from "../lib/legal.mjs";

const text = `# Privacy Policy\n\n${"Some text. ".repeat(30)}\n\n## 6. Biometric information (attorney identity check)\n\nKept 45 days.`;
const api = {
  data: { version: "2026-11-13.1", locale: "en", publishedAt: "2026-11-13T10:00:00.000Z", contentMd: text },
};
const ok = (body) => async () => ({ ok: true, status: 200, json: async () => body });

test("legalUrl: from the API base", () => {
  assert.equal(
    legalUrl("https://api.lawbid.dev/api/v1/", "privacy"),
    "https://api.lawbid.dev/api/v1/legal/documents/privacy?locale=en",
  );
  assert.equal(legalUrl("", "privacy"), null);
});

test("the API text is used, with its version and date", async () => {
  const r = await resolveLegal({ url: "u", fetchImpl: ok(api) });
  assert.equal(r.source, "api");
  assert.equal(r.doc.version, "2026-11-13.1");
  assert.ok(hasBiometricSection(r.doc));
});

test("an outage or a junk answer falls back to the last known text, then to none", async () => {
  const down = async () => {
    throw new Error("down");
  };
  const last = (await resolveLegal({ url: "u", fetchImpl: down, lastKnown: api.data })).doc;
  assert.equal(last.version, "2026-11-13.1");
  assert.equal((await resolveLegal({ url: "u", fetchImpl: ok({ data: { contentMd: "short" } }) })).source, "none");
  assert.equal((await resolveLegal({ url: null })).source, "none");
  assert.equal(pickLegal({ data: { version: "1", contentMd: 42 } }), null);
});

test("a text without the biometric section is flagged", () => {
  assert.equal(hasBiometricSection({ contentMd: "# Privacy\n\n## Data" }), false);
});
