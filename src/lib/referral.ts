// Referral links (lawbid.dev/r/<CODE>) and the app identifiers they point at.
// Keep these in sync with apps/mobile (package / bundle id) and the API's APP_LINK_BASE_URL.

/** Android application id of the LawBid app (Google Play). */
export const ANDROID_PACKAGE = "com.lawbid.lawbid";

/**
 * Numeric App Store id of the LawBid iOS app, e.g. "6471234567".
 * Stays "TODO" until the app is published; the App Store button is shown as "coming soon" meanwhile.
 */
export const APP_STORE_ID = "TODO";

/** Custom URL scheme the mobile app registers for `lawbid://referral/<CODE>`. */
export const APP_SCHEME = "lawbid";

/** Shape of a referral code, same as the API validates (letters and digits, 4-24 characters). */
export const REFERRAL_CODE_RE = /^[A-Za-z0-9]{4,24}$/;

/** Matches `/r/<CODE>` (optionally under a base path and with a trailing slash). */
export function referralCodeFromPath(pathname: string, basePath = ""): string | null {
  const path = basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname;
  const match = /^\/r\/([A-Za-z0-9]{4,24})\/?$/.exec(path);
  return match ? match[1] : null;
}

export const appStoreReady = APP_STORE_ID !== "TODO" && /^\d+$/.test(APP_STORE_ID);

export function referralLinks(code: string) {
  return {
    /** Opens the installed app straight at the referral screen. */
    app: `${APP_SCHEME}://referral/${encodeURIComponent(code)}`,
    /** Google Play with the install referrer the app reads on first launch (`lawbid_ref=<CODE>`). */
    play: `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}&referrer=${encodeURIComponent(`lawbid_ref=${code}`)}`,
    /** App Store page; empty until APP_STORE_ID is filled in. */
    appStore: appStoreReady ? `https://apps.apple.com/app/id${APP_STORE_ID}` : "",
  };
}
