// D1-50 / D1-51 (2026-11-13): the site's Privacy Policy is the text published
// in the LawBid admin (GET <api>/legal/documents/privacy?locale=en: public, no
// auth), so lawbid.dev/privacy and the in-app policy are one text, with the
// retention periods the admin set filled in by the API. Pure so it can be
// tested without the network; scripts/fetch-legal.mjs runs it before a build.

/** The document address from the API base (the value of WEB_SEO_API_URL). */
export function legalUrl(base, type, locale = "en") {
  const trimmed = String(base ?? "")
    .trim()
    .replace(/\/+$/, "");
  if (!trimmed) return null;
  return `${trimmed}/legal/documents/${type}?locale=${encodeURIComponent(locale)}`;
}

/** The API's `{ data: {...} }` envelope or a bare object → the fields the page
 * needs, or null when the answer is not a real published text. */
export function pickLegal(body) {
  const d = body && typeof body === "object" && "data" in body ? body.data : body;
  if (!d || typeof d !== "object") return null;
  if (typeof d.contentMd !== "string" || d.contentMd.trim().length < 200) return null;
  if (typeof d.version !== "string" || !d.version) return null;
  return {
    version: d.version,
    locale: typeof d.locale === "string" ? d.locale : "en",
    publishedAt: typeof d.publishedAt === "string" ? d.publishedAt : null,
    contentMd: d.contentMd,
  };
}

/** BIPA 740 ILCS 14/15(a): the public biometric retention schedule. */
export const BIOMETRIC_HEADING = /^##\s+(\d+\.\s+)?Biometric information/im;

export function hasBiometricSection(doc) {
  return Boolean(doc && BIOMETRIC_HEADING.test(doc.contentMd));
}

/**
 * The text for a build: the API answer, else the last successful one
 * (lastKnown), else null (the page then shows its own built-in text).
 * Returns { doc, source: "api" | "last-known" | "none", reason? }.
 */
export async function resolveLegal({ url, lastKnown = null, fetchImpl = fetch, timeoutMs = 10_000 }) {
  const fallback = (reason) => {
    const doc = pickLegal(lastKnown);
    return doc ? { doc, source: "last-known", reason } : { doc: null, source: "none", reason };
  };
  if (!url) return fallback("LEGAL_API_URL not set");
  try {
    const res = await fetchImpl(url, { signal: AbortSignal.timeout(timeoutMs) });
    if (!res.ok) return fallback(`HTTP ${res.status}`);
    const doc = pickLegal(await res.json());
    if (!doc) return fallback("answer without a published text");
    return { doc, source: "api" };
  } catch (e) {
    return fallback(e instanceof Error ? e.message : String(e));
  }
}
