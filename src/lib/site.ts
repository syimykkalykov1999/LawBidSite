/** Accepts only absolute https URLs so a mistyped env var can never inject a javascript: link. */
function httpsUrl(value: string | undefined, fallback = ""): string {
  if (!value) return fallback;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : fallback;
  } catch {
    return fallback;
  }
}

function email(value: string | undefined, fallback: string): string {
  return value && /^[^\s@<>"]+@[^\s@<>"]+\.[a-z]{2,}$/i.test(value) ? value : fallback;
}

/** Sub-path the site is served from ("" at a domain root). Must match basePath in next.config.ts. */
export const basePath = /^\/[\w.-]+$/.test(process.env.NEXT_PUBLIC_BASE_PATH ?? "")
  ? (process.env.NEXT_PUBLIC_BASE_PATH as string)
  : "";

/** next/link adds the base path by itself, but a plain image or file URL needs it added by hand. */
export const withBase = (path: string) => `${basePath}${path}`;

// Store links and contact details. Set the env vars once the apps are live;
// until then the download buttons show "Coming soon".
export const site = {
  name: "LawBid",
  url: httpsUrl(process.env.NEXT_PUBLIC_SITE_URL, "https://lawbid.dev").replace(/\/$/, ""),
  appStoreUrl: httpsUrl(process.env.NEXT_PUBLIC_APP_STORE_URL),
  playStoreUrl: httpsUrl(process.env.NEXT_PUBLIC_PLAY_STORE_URL),
  supportEmail: email(process.env.NEXT_PUBLIC_SUPPORT_EMAIL, "support@lawbid.dev"),
  tagline: "Post your case. Attorneys bid. You choose.",
  description:
    "LawBid is the legal marketplace where clients post their case for free and independent US attorneys compete with transparent bids. Compare, chat, call and hire in one app.",
} as const;
