import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/ui/legal-page";
import { company, legalVersion } from "@/lib/company";
import { site } from "@/lib/site";

import { TRIAL_DAYS } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "How to cancel a LawBid subscription, how trials work and when refunds are available.",
  alternates: { canonical: "/refunds" },
};

export default function Refunds() {
  return (
    <LegalPage title="Refund & Cancellation Policy" updated="October 5, 2026" {...legalVersion}>
      <p>
        This policy explains how to cancel paid plans from {company.legalName} (doing business as LawBid), how free
        trials work and when we give refunds. It is part of our{" "}
        <Link href="/terms" className="text-gold-300 underline">
          Terms of Service
        </Link>
        . Clients do not pay LawBid to post cases or receive bids. This policy covers LawBid&apos;s own charges:
        attorney subscriptions and any other paid plan, badge or feature that LawBid offers to clients, such as a client
        badge. It does not cover fees you pay an attorney for legal work, which are set by the attorney&apos;s
        engagement agreement.
      </p>

      <h2>1. Cancel anytime</h2>
      <ul>
        <li>
          <strong>In the app, in two taps:</strong> open Settings, then tap Subscription, then Cancel subscription. No
          call or email is needed. If you cannot use the app, email {site.supportEmail} and we will cancel for you.
        </li>
        <li>
          <strong>Access until the period ends.</strong> Cancelling stops the next renewal. You keep access to what you
          paid for until the end of the current billing period (monthly or yearly).
        </li>
        <li>
          <strong>Store subscriptions.</strong> If you subscribed through the App Store or Google Play, cancel in that
          store (Apple: Settings, your name, Subscriptions. Google Play: Payments &amp; subscriptions, Subscriptions).
          Deleting the app does not cancel a subscription.
        </li>
        <li>
          Closing your account does not by itself cancel a store subscription; cancel it first. Subscriptions paid
          through Stripe stop when you close your account, effective at the end of the current period.
        </li>
      </ul>

      <h2>2. Free trials</h2>
      <ul>
        <li>
          Eligible attorneys may get a free trial (currently {TRIAL_DAYS} days). We show its length and the price before
          you start. A trial is available once per person.
        </li>
        <li>
          If you do not cancel before the trial ends, it converts to the paid plan and your payment method is charged
          for the first period.
        </li>
        <li>
          Cancel at least 24 hours before the trial ends to avoid a charge (store subscriptions require this). If you
          cancel during the trial, you keep access until the trial ends and are not charged.
        </li>
        <li>We may end a trial that is abused, for example by repeated sign-ups.</li>
      </ul>

      <h2>3. Renewals and price changes</h2>
      <p>
        Plans renew automatically until cancelled, at the price shown when you subscribed. We tell you at least 30 days
        before a price increase takes effect; you can cancel before it applies. We send a receipt for each charge.
      </p>

      <h2>4. Refunds</h2>
      <ul>
        <li>
          Charges are generally non-refundable, and we do not give partial refunds for unused time after you cancel.
        </li>
        <li>
          We refund where the law requires it, for example if we charged you in error, charged you twice, or charged you
          after you cancelled in time. Consumers in some states have statutory rights that this policy does not limit.
        </li>
        <li>
          We may also refund, in whole or in part, at our discretion, for example if a technical problem on our side
          kept you from using the plan. A discretionary refund is not a promise of future refunds.
        </li>
        <li>
          Subscriptions bought through the App Store or Google Play are refunded only by that store, under its rules.
          Ask Apple (reportaproblem.apple.com) or Google Play support.
        </li>
        <li>
          LawBid cannot refund fees you paid an attorney. Ask the attorney, who receives that money directly through
          Stripe.
        </li>
      </ul>

      <h2>5. How to request a refund</h2>
      <p>
        Email {site.supportEmail} with the subject “Refund request”, the email or phone number of your account, the date
        and amount of the charge and the reason. We reply within 5 business days. Approved refunds go back to the
        original payment method, and your bank may take several business days to show it. Please contact us before
        opening a dispute with your bank so we can fix the problem faster.
      </p>

      <h2>6. Contact</h2>
      <p>
        {company.legalName}, {company.postalAddress}
        <br />
        {site.supportEmail}
      </p>
    </LegalPage>
  );
}
