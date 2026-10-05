"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { OPEN_SETTINGS_EVENT, gpcEnabled, saveConsent, useConsent } from "@/lib/consent";

const button =
  "rounded-[14px] border border-white/20 bg-ivory px-5 py-3 text-[15px] font-semibold text-ink-950 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300";

/**
 * Cookie banner. "Accept all" and "Reject non-essential" are identical buttons. Nothing is pre-ticked.
 * The site sets no analytics or advertising scripts today; any that are added later must load only
 * when `useConsent().analytics` is true (see src/lib/consent.ts).
 */
export function CookieConsent() {
  const { ready, choice, analytics } = useConsent();
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [draftValue, setDraft] = useState<boolean | null>(null);
  const gpc = useSyncExternalStore(
    () => () => {},
    gpcEnabled,
    () => false,
  );
  const draft = draftValue ?? analytics;

  useEffect(() => {
    const reopen = () => {
      setShowSettings(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  if (!ready) return null;
  if (choice && !open) return null;

  const decide = (value: boolean) => {
    saveConsent(value);
    setOpen(false);
    setShowSettings(false);
    setDraft(null);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-3xl rounded-3xl border border-white/10 bg-ink-850 p-5 shadow-2xl sm:p-6"
    >
      <h2 id="cookie-consent-title" className="font-serif text-xl text-ivory">
        Your cookie choices
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-mist">
        We use essential storage that the site needs to work. We do not currently run analytics or advertising scripts;
        if we add analytics, it will load only if you allow it here. See our{" "}
        <Link href="/cookies" className="text-gold-300 underline">
          Cookie Policy
        </Link>
        .
      </p>
      {gpc && (
        <p className="mt-2 text-sm leading-relaxed text-mist">
          Your browser sends a Global Privacy Control signal. We treat it as a choice to reject non-essential storage
          unless you change it below.
        </p>
      )}
      {showSettings && (
        <fieldset className="mt-4 space-y-3 rounded-2xl border border-white/8 p-4">
          <legend className="px-2 text-xs tracking-[0.18em] text-ivory/60 uppercase">Categories</legend>
          <label className="flex items-start gap-3 text-sm text-mist">
            <input type="checkbox" checked disabled className="mt-1 size-4 accent-[#c9a24a]" />
            <span>
              <strong className="text-ivory">Essential</strong> (always on). Remembers this choice and your language
              setting. The site does not work as intended without it.
            </span>
          </label>
          <label className="flex items-start gap-3 text-sm text-mist">
            <input
              type="checkbox"
              checked={draft}
              onChange={(e) => setDraft(e.target.checked)}
              className="mt-1 size-4 accent-[#c9a24a]"
            />
            <span>
              <strong className="text-ivory">Analytics</strong> (off by default). Anonymous usage statistics. None are
              in use today.
            </span>
          </label>
        </fieldset>
      )}
      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" className={button} onClick={() => decide(true)}>
          Accept all
        </button>
        <button type="button" className={button} onClick={() => decide(false)}>
          Reject non-essential
        </button>
        {showSettings ? (
          <button type="button" className={button} onClick={() => decide(draft)}>
            Save my choices
          </button>
        ) : (
          <button type="button" className={button} onClick={() => setShowSettings(true)}>
            Settings
          </button>
        )}
      </div>
    </div>
  );
}
