import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/ui/legal-page";
import { company, legalVersion } from "@/lib/company";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Third-Party Services",
  description: "The service providers LawBid uses to run the Service, what they do and what data they receive.",
  alternates: { canonical: "/third-party-services" },
};

type Provider = {
  name: string;
  purpose: string;
  data: string;
  where: string;
  agreement: string;
};

const TBC = "To be confirmed by owner: signed DPA not verified";

// Listed only from what the LawBid code actually uses (apps/api and apps/mobile dependencies).
const providers: Provider[] = [
  {
    name: "Stripe, Inc.",
    purpose:
      "Payments, subscriptions and payouts to attorneys (Stripe Connect), including identity verification of attorney payment accounts.",
    data: "Name, email, payment card or bank details (held by Stripe, not by LawBid), billing details, identity documents for attorney accounts, transaction records.",
    where: "stripe.com",
    agreement:
      "Stripe Services Agreement and Data Processing Agreement apply on acceptance of Stripe terms. Owner to confirm the account is covered.",
  },
  {
    name: "Twilio Inc.",
    purpose: "Sending one-time verification codes by SMS.",
    data: "Mobile phone number, message content (the code), delivery status.",
    where: "twilio.com",
    agreement: TBC,
  },
  {
    name: "Amazon Web Services (AWS), including Amazon SES and Amazon S3",
    purpose:
      "Cloud hosting of the API and services, file storage, and email delivery (Amazon SES) for verification and notification emails.",
    data: "Account data, content and files you upload, email addresses and message content, server logs and IP addresses.",
    where: "aws.amazon.com",
    agreement:
      "AWS Customer Agreement and AWS Data Processing Addendum. Owner to confirm the DPA is accepted for the account.",
  },
  {
    name: "CockroachDB Cloud (Cockroach Labs, Inc.)",
    purpose: "Primary database and its backups.",
    data: "Account, profile, case, bid, message, review and payment-reference records.",
    where: "cockroachlabs.cloud",
    agreement: TBC,
  },
  {
    name: "Firebase Cloud Messaging (Google LLC)",
    purpose: "Push notifications to the mobile app.",
    data: "Device push token, notification content, device and app identifiers.",
    where: "firebase.google.com",
    agreement: "Firebase terms and Data Processing and Security Terms. Owner to confirm acceptance.",
  },
  {
    name: "Bunny.net (BunnyWay d.o.o.)",
    purpose: "Storage, processing and delivery of videos.",
    data: "Videos you upload, video metadata, viewer IP addresses and request logs.",
    where: "bunny.net",
    agreement: TBC,
  },
  {
    name: "Sentry (Functional Software, Inc.)",
    purpose: "Error and performance monitoring of the server software, when enabled by LawBid.",
    data: "Technical error reports, request metadata, server identifiers and IP addresses; no case or chat content is intended to be sent.",
    where: "sentry.io",
    agreement: TBC,
  },
  {
    name: "Google Cloud Translation (Google LLC)",
    purpose: "Machine translation of user content between English and Russian, when a user asks for it.",
    data: "The text to be translated.",
    where: "cloud.google.com",
    agreement: "Google Cloud terms and Data Processing Addendum. Owner to confirm acceptance.",
  },
  {
    name: "Google Sign-In and Sign in with Apple",
    purpose: "Optional sign-in using your Google or Apple account.",
    data: "A signed token with your name, email (or Apple private relay email) and account identifier.",
    where: "google.com, apple.com",
    agreement: "Provider terms; LawBid receives only the token you authorize.",
  },
];

export default function ThirdPartyServices() {
  return (
    <LegalPage title="Third-Party Services" updated="October 5, 2026" {...legalVersion}>
      <p>
        {company.legalName} (doing business as LawBid) uses the service providers below to run the Service. They are
        “service providers” or “processors” that may use personal data only to provide their service to us. This page
        lists them so you can see who may receive your data. How we handle personal data overall is explained in our{" "}
        <Link href="/privacy" className="text-gold-300 underline">
          Privacy Policy
        </Link>
        .
      </p>
      <p>
        The list reflects the software the LawBid apps and servers use today. Providers may process data in the United
        States and other countries where they operate. We update this page when we add or replace a provider.
      </p>

      <h2>Providers</h2>
      <div className="space-y-5">
        {providers.map((p) => (
          <section key={p.name} className="rounded-2xl border border-white/8 p-5">
            <h3 className="font-serif text-xl text-ivory">{p.name}</h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="font-semibold text-ivory">Purpose</dt>
                <dd>{p.purpose}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ivory">Data involved</dt>
                <dd>{p.data}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ivory">Website</dt>
                <dd>{p.where}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ivory">Data processing terms</dt>
                <dd>{p.agreement}</dd>
              </div>
            </dl>
          </section>
        ))}
      </div>

      <h2>Data processing agreements</h2>
      <p>
        We use each provider under its standard commercial terms, and a data processing agreement or addendum where the
        provider offers one. Entries marked “To be confirmed by owner” are items where a signed or accepted agreement
        has not yet been verified; this page will be updated once it has been.
      </p>

      <h2>What this website uses</h2>
      <p>
        This website loads no analytics, advertising or tracking scripts and no third-party fonts or embeds. See the{" "}
        <Link href="/cookies" className="text-gold-300 underline">
          Cookie Policy
        </Link>
        . The app stores and delivery networks (Apple App Store, Google Play) process data under their own policies when
        you download or buy through them.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about providers: {site.supportEmail}
        <br />
        {company.legalName}, {company.postalAddress}
      </p>
    </LegalPage>
  );
}
