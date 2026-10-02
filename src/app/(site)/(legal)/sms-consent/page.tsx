import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "SMS Verification Consent",
  description: "How LawBid users consent to receive one-time verification codes by SMS.",
};

const sampleMessages = [
  "LawBid: Your verification code is 123456. It expires in 10 minutes. Do not share this code. Reply STOP to opt out.",
  "LawBid: Use code 123456 to confirm your phone number and sign in. If you did not request this, ignore this message. Reply HELP for help, STOP to opt out.",
];

function ConsentText() {
  return (
    <>
      By tapping Get code you agree to receive a one-time verification SMS from LawBid. Msg &amp; data rates may apply.
      Reply STOP to opt out, HELP for help.{" "}
      <Link href="/privacy" className="text-gold-300 underline">
        Privacy Policy
      </Link>{" "}
      ·{" "}
      <Link href="/terms" className="text-gold-300 underline">
        Terms
      </Link>
    </>
  );
}

function PhoneFrame({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <figure className="mx-auto w-full max-w-[300px]">
      <div className="rounded-[2.75rem] border border-ink-600 bg-ink-900 p-3 shadow-2xl shadow-black/50">
        <div className="relative min-h-[480px] overflow-hidden rounded-[2.2rem] bg-app-bg px-6 pt-12 pb-8 text-left">
          <div className="absolute top-3 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
          <p className="text-center font-serif text-2xl text-gold-400">LawBid</p>
          {children}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-mist">{caption}</figcaption>
    </figure>
  );
}

/** Static mockups of the LawBid app sign-in flow: the form where consent is given, and the screen after submitting. */
function SignInMockups() {
  return (
    <div className="grid gap-10 sm:grid-cols-2">
      <PhoneFrame caption="Step 1. The sign-in form. The consent text sits directly below the Get code button.">
        <p className="mt-8 text-lg font-semibold text-app-text">Sign in with your phone</p>
        <p className="mt-1 text-xs text-app-muted">We will text you a one-time code.</p>
        <p className="mt-6 text-xs text-app-muted">Phone number</p>
        <div className="mt-1 flex items-center gap-2 rounded-xl border border-app-border bg-app-surface px-3 py-3 text-sm text-app-text">
          <span className="text-app-muted">US +1</span>
          <span>(555) 123-4567</span>
        </div>
        <div className="mt-4 rounded-xl bg-gold-400 py-3 text-center text-sm font-semibold text-ink-950">Get code</div>
        <p className="mt-4 text-[11px] leading-relaxed text-app-muted">
          <ConsentText />
        </p>
      </PhoneFrame>
      <PhoneFrame caption="Step 2. After tapping Get code: the code is sent and the user enters it.">
        <p className="mt-8 text-lg font-semibold text-app-text">Enter the code</p>
        <p className="mt-1 text-xs text-app-muted">We sent a 6-digit code by SMS to +1 (555) 123-4567.</p>
        <div className="mt-6 grid grid-cols-6 gap-2">
          {["1", "2", "3", "", "", ""].map((d, i) => (
            <div
              key={i}
              className="flex h-11 items-center justify-center rounded-lg border border-app-border bg-app-surface text-lg text-app-text"
            >
              {d}
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-gold-400 py-3 text-center text-sm font-semibold text-ink-950">Verify</div>
        <p className="mt-4 text-center text-xs text-app-muted">Resend code in 0:45</p>
        <div className="mt-6 rounded-2xl rounded-tl-sm bg-app-surface p-3 text-[11px] leading-relaxed text-app-text">
          LawBid: Your verification code is 123456. It expires in 10 minutes. Do not share this code. Reply STOP to opt
          out.
        </div>
        <p className="mt-1 text-[10px] text-app-muted">SMS received on the phone</p>
      </PhoneFrame>
    </div>
  );
}

export default function SmsConsent() {
  return (
    <article className="relative mx-auto max-w-3xl">
      <Link href="/" className="text-sm text-gold-300 hover:underline">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-serif text-5xl text-ivory sm:text-6xl">SMS Verification Consent</h1>
      <p className="mt-3 text-sm text-mist">Last updated: October 2, 2026</p>
      <div className="mt-10 space-y-6 leading-relaxed text-mist [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:text-ivory [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
        <p>
          SiMA LLC (doing business as LawBid) sends one-time verification codes by SMS only when a user requests one in
          the LawBid mobile app. We do not send marketing or promotional text messages.
        </p>

        <h2>How users opt in</h2>
        <p>
          To sign in or confirm a phone number, the user enters their mobile number on the sign-in screen and taps{" "}
          <strong className="text-ivory">Get code</strong>. The consent statement is shown directly below the button,
          before any message is sent. Tapping the button is the user&apos;s request for, and consent to, one
          verification SMS. No message is sent to a number unless a code is requested this way.
        </p>
        <div className="py-4">
          <SignInMockups />
        </div>
        <p>Consent text shown in the app:</p>
        <blockquote className="rounded-2xl border border-ink-600 bg-ink-850 p-5 text-ivory">
          <ConsentText />
        </blockquote>

        <h2>Sample messages</h2>
        <ul>
          {sampleMessages.map((m) => (
            <li key={m} className="text-ivory">
              {m}
            </li>
          ))}
        </ul>

        <h2>SMS terms</h2>
        <ul>
          <li>Message frequency: one message per request.</li>
          <li>Message and data rates may apply.</li>
          <li>Reply STOP to opt out at any time. Reply HELP for help.</li>
          <li>Support: {site.supportEmail}</li>
          <li>
            Mobile numbers and SMS opt-in data are not shared with or sold to third parties or affiliates for marketing
            or promotional purposes.
          </li>
          <li>Carriers are not liable for delayed or undelivered messages.</li>
        </ul>
        <p>
          See also our{" "}
          <Link href="/privacy" className="text-gold-300 underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-gold-300 underline">
            Terms of Service
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
