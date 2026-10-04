import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/ui/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service" };

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="October 4, 2026">
      <p>
        These Terms govern your use of the LawBid mobile apps and website (the “Service”), operated by SiMA LLC (doing
        business as LawBid). By creating an account or using the Service you agree to them.
      </p>
      <h2>1. What LawBid is</h2>
      <p>
        LawBid is a marketplace that lets clients publish legal matters and lets independent attorneys respond with
        bids. LawBid is not a law firm, does not provide legal advice and is not a party to any agreement between a
        client and an attorney.
      </p>
      <h2>2. Accounts</h2>
      <ul>
        <li>You must provide accurate information and keep your login details secure.</li>
        <li>Attorneys must hold a valid license for the jurisdictions and practice areas they list.</li>
        <li>We may suspend accounts that break these Terms or the law.</li>
      </ul>
      <h2>3. Attorney licenses (self-declared)</h2>
      <p>
        To act as an attorney on LawBid you enter the state and bar or license number of each license you hold and
        confirm, under penalty of perjury, that you are the attorney licensed under that number and that the license is
        active and in good standing. You must keep this information current and remove a license that lapses, is
        suspended or is revoked. We record the time, IP address and version of the statement you accepted.
      </p>
      <p>
        LawBid does not independently check this information with state bars or courts. Attorney licenses shown in the
        app are self-declared, and the attorney alone is responsible for their accuracy. Clients should confirm an
        attorney&apos;s license with the relevant state bar before hiring them.
      </p>
      <p>
        Anyone can report an account they believe is false. We may then ask the attorney for a government ID, a selfie
        or proof of license, and we may suspend or permanently ban any account that gives false license information.
      </p>
      <h2>4. Cases and bids</h2>
      <p>
        Clients are responsible for the information they publish. Bids are offers made by attorneys; an engagement is
        formed only when a client and an attorney agree to it. Fees, scope and outcomes are between the client and the
        attorney.
      </p>
      <h2>5. Subscriptions and payments</h2>
      <p>
        Paid features, if any, are described in the app together with their price and renewal terms before you purchase.
      </p>
      <h2>6. Content</h2>
      <p>
        You keep ownership of the content you post (posts, videos, messages) and give LawBid a license to host and
        display it in order to run the Service. Do not post unlawful, misleading or confidential third-party content.
      </p>
      <h2>7. Liability</h2>
      <p>
        The Service is provided “as is”. To the extent permitted by law, LawBid is not liable for the advice or services
        provided by attorneys or for indirect losses.
      </p>
      <h2>SMS Terms</h2>
      <p>
        SiMA LLC (doing business as LawBid) sends one-time verification codes by SMS. When you tap Get code in the app,
        you agree to receive a one-time verification SMS from LawBid. Message frequency: one message per request.
        Message and data rates may apply. Reply STOP to opt out, HELP for help, or contact {site.supportEmail}. Carriers
        are not liable for delayed or undelivered messages. Mobile numbers and SMS opt-in data are not shared with third
        parties for marketing. Details:{" "}
        <Link href="/sms-consent" className="text-gold-300 underline">
          SMS Verification Consent
        </Link>
        .
      </p>
      <h2>8. Contact</h2>
      <p>Questions about these Terms: {site.supportEmail}</p>
    </LegalPage>
  );
}
