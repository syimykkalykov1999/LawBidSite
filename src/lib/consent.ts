"use client";

import { useSyncExternalStore } from "react";

/** Key under which the visitor's cookie choice is kept in localStorage. */
export const CONSENT_KEY = "lawbid.consent";
const CHANGE_EVENT = "lawbid:consent-change";
export const OPEN_SETTINGS_EVENT = "lawbid:open-cookie-settings";

export type Consent = { v: 1; analytics: boolean; decidedAt: string };

/** True when the browser sends the Global Privacy Control signal. */
export function gpcEnabled(): boolean {
  try {
    return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
  } catch {
    return false;
  }
}

function parse(raw: string | null): Consent | null {
  if (!raw) return null;
  try {
    const c = JSON.parse(raw) as Partial<Consent>;
    return c && c.v === 1 && typeof c.analytics === "boolean" && typeof c.decidedAt === "string"
      ? (c as Consent)
      : null;
  } catch {
    return null;
  }
}

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

/** Saves a choice and tells every listener on the page. Storage may be blocked; the choice then lasts for this page view only. */
let memory: string | null = null;
export function saveConsent(analytics: boolean) {
  const value = JSON.stringify({ v: 1, analytics, decidedAt: new Date().toISOString() } satisfies Consent);
  memory = value;
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(cb: () => void) {
  window.addEventListener(CHANGE_EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(CHANGE_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

const getSnapshot = () => readRaw() ?? memory ?? "";
const getServerSnapshot = () => "unknown";

/**
 * Current consent. `ready` is false until the browser has been read (so the banner does not flash on
 * pages that were prerendered). `choice` is null while the visitor has not decided.
 * Analytics is on only after an explicit Accept; the Global Privacy Control signal keeps it off by default.
 */
export function useConsent(): { ready: boolean; choice: Consent | null; analytics: boolean } {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (raw === "unknown") return { ready: false, choice: null, analytics: false };
  const choice = parse(raw || null);
  return { ready: true, choice, analytics: choice?.analytics === true };
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
