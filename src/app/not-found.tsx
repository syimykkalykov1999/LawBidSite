"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Nav } from "@/components/layout/nav";
import { LogoMark } from "@/components/ui/logo";
import { ReferralLanding } from "@/components/referral/referral-landing";
import { basePath } from "@/lib/site";
import { referralCodeFromPath } from "@/lib/referral";

// The static export has no server, so GitHub Pages answers every unknown path with this page
// (out/404.html). Referral links lawbid.dev/r/<CODE> are not real pages: this component reads the
// path in the browser and renders the invitation landing for them instead of the 404 text.
const noop = () => () => {};
const readCode = () => referralCodeFromPath(window.location.pathname, basePath);

export default function NotFound() {
  const code = useSyncExternalStore(noop, readCode, () => null);

  return (
    <>
      <Nav />
      <main id="main" className={code ? "" : "grid min-h-svh place-items-center px-5 text-center"}>
        {code ? (
          <ReferralLanding code={code} />
        ) : (
          <div>
            <LogoMark className="mx-auto h-14 w-14" />
            <p className="mt-8 font-serif text-7xl text-gold-300">404</p>
            <h1 className="mt-4 font-serif text-4xl text-ivory">This page is out of balance.</h1>
            <p className="mx-auto mt-3 max-w-md text-mist">
              The link may be old or mistyped. Everything about LawBid is on the home page.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex rounded-[14px] bg-ivory px-6 py-3 font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
            >
              Back to home
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
