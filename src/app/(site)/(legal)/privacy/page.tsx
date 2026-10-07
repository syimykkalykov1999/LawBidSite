import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/ui/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

const retention: readonly { data: string; period: string }[] = [
  {
    data: "Account and profile data",
    period: "While your account is active, then deleted after a 14-day grace period",
  },
  { data: "Cases, bids, posts and reviews", period: "While your account is active; removed or anonymized on deletion" },
  {
    data: "Chat messages and call metadata",
    period: "Per the retention setting of the chat; deleted with the account",
  },
  { data: "Consents and audit records (Terms, SMS, license statements)", period: "5 years" },
  { data: "Notifications", period: "180 days" },
  { data: "Payment metadata", period: "As long as tax and accounting law requires (typically 7 years)" },
  { data: "Anti-fraud hashed identifiers", period: "365 days; 3 years for banned accounts" },
  { data: "Support messages", period: "3 years after the ticket is closed" },
];

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="October 5, 2026">
      {/* Draft expanded 2026-10-05 for attorney review */}
      <p>
        This policy explains what personal data SiMA LLC (doing business as LawBid) collects through the LawBid apps and
        website, how it is used, who it is shared with, and the choices you have. It is written to meet the California
        Consumer Privacy Act (CCPA/CPRA), the California Online Privacy Protection Act and similar state laws.
      </p>

      <h2>Who we are</h2>
      <p>
        SiMA LLC is an Illinois limited liability company doing business as LawBid. We are the “business” or controller
        for the data described here. Contact: {site.supportEmail}, SiMA LLC, [postal address].
      </p>

      <h2>Data we collect</h2>
      <ul>
        <li>
          <strong>Identifiers:</strong> name, email, phone number, account ID, Apple or Google sign-in ID, profile
          photo.
        </li>
        <li>
          <strong>Account data:</strong> role (client, attorney, assistant), language, settings, notification
          preferences, the version and time of each Terms acceptance.
        </li>
        <li>
          <strong>Attorney license data:</strong> state, bar or license number, firm, practice areas, years of
          experience, the result of registry checks and, if you submit them, a bar card or government ID for review.
        </li>
        <li>
          <strong>Case content:</strong> the description, category, state, budget and attachments of each case, plus
          bids and counter-offers. <strong>Warning:</strong> case descriptions often contain sensitive information about
          you or others (health, finances, family, immigration status, criminal matters). A public case is shown to
          every attorney who matches its practice area and state, so write only what you are comfortable sharing with
          them.
        </li>
        <li>
          <strong>Chats and calls:</strong> messages, voice notes, attachments, and call metadata (who, when, how long).
          We do not record call audio.
        </li>
        <li>
          <strong>Payments metadata:</strong> amounts, dates, subscription status and the last four digits of a card.
          Card numbers are collected and stored by Stripe, our payment processor, not by LawBid.
        </li>
        <li>
          <strong>Device and technical data:</strong> device type and OS, app version, push notification tokens, IP
          address, crash and server logs, approximate location derived from IP.
        </li>
        <li>
          <strong>Anti-fraud hashed identifiers:</strong> one-way hashes of your phone number, email, Apple or Google
          account ID, device identifier and IP address. The hashes cannot be turned back into the original values; we
          compare them with new sign-ups to stop banned users from returning. They are kept 365 days, or 3 years for
          banned accounts.
        </li>
        <li>
          <strong>Support messages:</strong> what you send us by email or in the app, and our replies.
        </li>
      </ul>

      <h2>Where the data comes from</h2>
      <ul>
        <li>You, when you create an account, post a case, bid, chat, pay or write to us.</li>
        <li>Your device, when the app runs.</li>
        <li>Other users, for example a client who reviews an attorney or reports an account.</li>
        <li>Public state bar and court registries, when we check an attorney license.</li>
        <li>Stripe, which tells us the status of payments and identity checks (but not card numbers).</li>
        <li>Apple and Google, when you sign in or subscribe through them.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To run the marketplace: show cases to matching attorneys, deliver bids, messages and calls.</li>
        <li>To keep the Service safe: verify attorneys, prevent fraud and abuse.</li>
        <li>To send notifications you asked for, and service emails.</li>
        <li>To send one-time verification codes by SMS to the mobile number you enter, when you request a code.</li>
        <li>To process subscriptions and in-app payments, and to keep the records tax law requires.</li>
        <li>To respond to support requests, reports and legal requests.</li>
        <li>To fix bugs, understand how the app is used in aggregate, and improve it.</li>
        <li>To enforce our Terms and protect the rights and safety of users, attorneys and LawBid.</li>
      </ul>
      <p>
        We do not use case content, chats or any other user content to train advertising models or to target
        advertising.
      </p>

      <h2>Sharing</h2>
      <p>
        We do not sell or share your SMS opt-in data or personal information with third parties for marketing purposes.
      </p>
      <p>
        We share data with the other party of a conversation or bid, and with service providers that host and operate
        the Service (cloud hosting, storage, video delivery, email). We do not sell personal data.
      </p>
      <ul>
        <li>
          <strong>Other users:</strong> attorneys see the cases that match them; clients see the profiles and bids of
          attorneys; both see what the other writes in a shared chat. Your phone number and email are not shown to other
          users unless you share them yourself.
        </li>
        <li>
          <strong>Service providers</strong> who work for us under contract and may use the data only to provide their
          service: cloud hosting and storage, video delivery, email delivery, SMS delivery, push notifications, payments
          (Stripe), customer support tools, and crash reporting or analytics if we add them (this page will list them).
        </li>
        <li>
          <strong>Legal requests:</strong> courts, regulators, state bars and law enforcement when the law requires it,
          to enforce our Terms, or to protect the safety of a person.
        </li>
        <li>
          <strong>Business transfers:</strong> a buyer or successor if LawBid is sold or merged, under this policy.
        </li>
      </ul>
      <p>
        <strong>No sale, no cross-context advertising.</strong> We do not sell personal information and we do not
        “share” it for cross-context behavioral advertising as those terms are defined by California law, and we have
        not done so in the past 12 months. We do not knowingly sell or share the personal information of anyone under
        16.
      </p>

      <h2>SMS messages</h2>
      <p>
        If you request a verification code in the app, we use your mobile number to send a one-time code by SMS. Message
        frequency: one message per request. Msg &amp; data rates may apply. Reply STOP to opt out, HELP for help, or
        contact {site.supportEmail}. Mobile numbers and SMS opt-in data are not shared with or sold to third parties or
        affiliates for marketing or promotional purposes. See{" "}
        <Link href="/sms-consent" className="text-gold-300 underline">
          SMS Verification Consent
        </Link>
        .
      </p>

      <h2>Retention</h2>
      <p>
        We keep data while your account is active and delete or anonymize it afterwards, unless the law requires
        otherwise. The table below shows the main periods.
      </p>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-ink-600 text-ivory">
            <th className="py-2 pr-4 font-semibold">Data</th>
            <th className="py-2 font-semibold">How long</th>
          </tr>
        </thead>
        <tbody>
          {retention.map((row) => (
            <tr key={row.data} className="border-b border-ink-600/60 align-top">
              <td className="py-2 pr-4 text-ivory">{row.data}</td>
              <td className="py-2">{row.period}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Backups are overwritten on a rolling schedule within 30 days of deletion. We may keep records longer when a
        legal claim, an investigation or a legal obligation requires it.
      </p>

      <h2>Your rights</h2>
      <p>
        You can access, correct or delete your data and close your account at any time from the app or by writing to{" "}
        {site.supportEmail}.
      </p>
      <ul>
        <li>
          <strong>Access and export:</strong> Settings → Privacy → Download my data gives you a copy of your account
          data, cases, bids, posts and messages in a machine-readable format.
        </li>
        <li>
          <strong>Correction:</strong> edit your profile and license data in the app, or ask us to correct anything
          else.
        </li>
        <li>
          <strong>Deletion:</strong> Settings → Account → Delete account. Deletion completes after a 14-day grace
          period. Some records stay for the periods in the table above (for example consents, payment records and
          anti-fraud hashes).
        </li>
        <li>
          <strong>Opt out of messages:</strong> change notification settings in the app, use the unsubscribe link in
          emails, or reply STOP to an SMS.
        </li>
      </ul>
      <p>
        <strong>California residents</strong> have the right to know what personal information we collect, use and
        disclose; to delete it; to correct it; to opt out of sale or sharing (we do neither); to limit the use of
        sensitive personal information (we use it only to provide the Service); and not to be discriminated against for
        exercising these rights. We will not deny you the Service, charge a different price or provide a different level
        of service because you exercised a right. You may use an authorized agent to make a request; we will ask the
        agent for written permission and may ask you to confirm your identity directly. To make a request, use the app
        or email {site.supportEmail}; we will verify the request by matching it to the email or phone number on your
        account and respond within 45 days. Residents of Colorado, Connecticut, Virginia, Texas, Oregon and other states
        with privacy laws have similar rights and may appeal a decision by replying to our response.
      </p>
      <p>
        <strong>Do Not Track and Global Privacy Control.</strong> We do not track users across third-party sites, so
        there is nothing for a “Do Not Track” signal to change and we do not respond to it. Where the law requires it,
        we treat a Global Privacy Control (GPC) signal from your browser as a request to opt out of sale or sharing;
        since we do neither, the signal does not change how we handle your data.
      </p>

      <h2>Security and breach notification</h2>
      <p>
        Data is encrypted in transit and at rest, access inside the company is limited to the people who need it, and
        card data never reaches our servers. No system is perfectly secure. If a breach affects your personal
        information, we will notify you and the regulators that state law requires, without unreasonable delay and in
        the manner the law of your state prescribes.
      </p>

      <h2>Children</h2>
      <p>
        The Service is for adults. We do not knowingly collect personal data from anyone under 18, and we delete the
        account of a minor when we learn of it. If you believe a minor has an account, write to {site.supportEmail}.
      </p>

      <h2>International users</h2>
      <p>
        The Service is operated from and hosted in the United States and is offered to US users. If you use it from
        elsewhere, your data is transferred to and processed in the United States, where privacy laws may differ from
        those of your country.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy. The date at the top shows the current version. For material changes we will notify
        you in the app or by email before they take effect.
      </p>

      <h2>Contact</h2>
      <p>
        Privacy questions and requests: {site.supportEmail}
        <br />
        SiMA LLC, [postal address]
      </p>
    </LegalPage>
  );
}
