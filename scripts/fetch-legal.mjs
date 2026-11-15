// Pulls the Privacy Policy published in the LawBid admin into
// src/content/legal/privacy.json before a build (D1-50 / D1-51, 2026-11-13).
//
//   LEGAL_API_URL     the API base (https://api.example.com/api/v1); unset =
//                     the last known text, else the page's built-in text.
//   LEGAL_LAST_KNOWN  optional file: the text of the last successful build
//                     (kept in the web bucket by seo-deploy.yml). Written on
//                     success; read when the API cannot be reached.
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { hasBiometricSection, legalUrl, resolveLegal } from "./lib/legal.mjs";

const file = new URL("../src/content/legal/privacy.json", import.meta.url);
const lastKnownFile = process.env.LEGAL_LAST_KNOWN;

const readJson = (p) => {
  try {
    return JSON.parse(readFileSync(p, "utf8"));
  } catch {
    return null;
  }
};

const lastKnown = lastKnownFile && existsSync(lastKnownFile) ? readJson(lastKnownFile) : null;
const { doc, source, reason } = await resolveLegal({
  url: legalUrl(process.env.LEGAL_API_URL, "privacy", "en"),
  lastKnown,
});

const json = `${JSON.stringify(doc, null, 2)}\n`;
writeFileSync(file, json);
if (source === "api" && lastKnownFile) writeFileSync(lastKnownFile, json);

if (source === "api") console.log(`[legal] privacy ${doc.version} from the API`);
else
  console.warn(
    `[legal] ${reason}; using ${source === "none" ? "the built-in page text" : `the last known ${doc.version}`}`,
  );
if (doc && !hasBiometricSection(doc)) {
  console.log(
    "::warning::The published Privacy Policy has no «Biometric information» section (BIPA 740 ILCS 14/15(a)); publish it in the admin before face matching is switched on.",
  );
}
