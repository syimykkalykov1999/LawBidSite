import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/ui/legal-page";
import { company } from "@/lib/company";
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
  /**
   * Ids in the LawBid server's provider registry
   * (apps/api/src/common/secrets/provider-registry.ts) this entry covers. The
   * LawBid publish (seo-deploy.yml, scripts/seo/vendors-check.mjs) fails when
   * a registry provider that receives user data is missing here.
   */
  registry: readonly string[];
};

const TBC = "To be confirmed by owner: signed DPA not verified";
const WHEN_ON = "Only while LawBid has this provider switched on.";

// D1-52 (2026-11-13): rewritten from the LawBid server's provider registry.
const providers: Provider[] = [
  {
    name: "Amazon Web Services (AWS)",
    purpose:
      "Cloud hosting of the API and services; the primary database and its backups (Amazon RDS for PostgreSQL); private file storage for chats, case files and verification documents (Amazon S3, encrypted); email delivery (Amazon SES); image moderation and, for attorneys who consent, the selfie-to-ID photo comparison (Amazon Rekognition); street address suggestions (Amazon Location Service); the backup relay for in-app calls (our own TURN server on AWS); and, when switched on, the search engine (Amazon OpenSearch Service).",
    data: "Account, profile, case, bid, message, review and payment-reference records; files you upload; email addresses and message content; public photos for moderation; the attorney selfie and ID photo for the comparison; the address text you type; server logs and IP addresses.",
    where: "aws.amazon.com",
    agreement:
      "AWS Customer Agreement and AWS Data Processing Addendum. Owner to confirm the DPA is accepted for the account.",
    registry: ["storage", "ses", "aws_rekognition", "aws_location", "opensearch", "turn"],
  },
  {
    name: "Cloudflare, Inc.",
    purpose:
      "Storage and delivery of public media (avatars, post and review photos, stickers) on Cloudflare R2 at media.lawbid.dev; relays and the media server for in-app calls (Cloudflare Realtime TURN and SFU); the bot check on sign-up and sign-in forms (Turnstile).",
    data: "Public photos you upload; call audio and video in transit (encrypted) and the IP addresses of the call participants; browser and device signals for the bot check.",
    where: "cloudflare.com",
    agreement:
      "Cloudflare Self-Serve Subscription Agreement and Data Processing Addendum. Owner to confirm acceptance.",
    registry: ["cloudflare_r2", "cloudflare_turn", "cloudflare_sfu", "turnstile"],
  },
  {
    name: "Bunny.net (BunnyWay d.o.o.)",
    purpose: "Storage, processing and delivery of videos.",
    data: "Videos you upload, video metadata, viewer IP addresses and request logs.",
    where: "bunny.net",
    agreement: TBC,
    registry: ["bunny_stream"],
  },
  {
    name: "Stripe, Inc.",
    purpose:
      "Payments, subscriptions and payouts to attorneys (Stripe Connect), including identity verification of attorney payment accounts.",
    data: "Name, email, payment card or bank details (held by Stripe, not by LawBid), billing details, identity documents for attorney accounts, transaction records.",
    where: "stripe.com",
    agreement:
      "Stripe Services Agreement and Data Processing Agreement apply on acceptance of Stripe terms. Owner to confirm the account is covered.",
    registry: ["stripe"],
  },
  {
    name: "Twilio Inc.",
    purpose: "Sending one-time verification codes by SMS.",
    data: "Mobile phone number, message content (the code), delivery status.",
    where: "twilio.com",
    agreement: TBC,
    registry: ["twilio"],
  },
  {
    name: "Google LLC",
    purpose:
      "Push notifications (Firebase Cloud Messaging); optional sign-in with a Google account; machine translation when you press Translate (Cloud Translation); your Google Calendar when you connect it; and, when chosen by LawBid, address suggestions (Places API).",
    data: "Device push token and notification content; the sign-in token with your name, email and account identifier; the text to be translated; the calendar events you sync; the address text you type.",
    where: "firebase.google.com, cloud.google.com",
    agreement: "Google Cloud / Firebase terms and Data Processing and Security Terms. Owner to confirm acceptance.",
    registry: ["fcm", "google_signin", "google_translate", "google_calendar", "google_places"],
  },
  {
    name: "Apple Inc.",
    purpose: "Push notifications to iPhone (Apple Push Notification service) and optional Sign in with Apple.",
    data: "Device push token and notification content; the sign-in token with your name, email (or private relay email) and account identifier.",
    where: "apple.com",
    agreement: "Apple Developer Program License Agreement; LawBid receives only the token you authorize.",
    registry: ["apns", "apple_signin"],
  },
  {
    name: "Microsoft Corporation",
    purpose:
      "Your Outlook calendar when you connect it; matching public images against known child sexual abuse material (PhotoDNA Cloud Service).",
    data: "The calendar events you sync; public images you upload (compared as hashes).",
    where: "microsoft.com",
    agreement: TBC,
    registry: ["microsoft_calendar", "photodna"],
  },
  {
    name: "LiveKit, Inc.",
    purpose: `Media server for group and channel video calls. ${WHEN_ON}`,
    data: "Call audio and video in transit, participant names and IP addresses.",
    where: "livekit.io",
    agreement: TBC,
    registry: ["livekit"],
  },
  {
    name: "Persona Identities, Inc.",
    purpose: `Attorney identity checks (government ID and selfie). ${WHEN_ON}`,
    data: "Government ID images, the selfie, name and date of birth on the ID, and the check result.",
    where: "withpersona.com",
    agreement: TBC,
    registry: ["persona"],
  },
  {
    name: "MicroBilt Corporation and Surepass Technologies",
    purpose: `Attorney license status in states without a free public registry. ${WHEN_ON}`,
    data: "The attorney’s name, state and bar or license number.",
    where: "microbilt.com, surepass.io",
    agreement: TBC,
    registry: ["bar_vendor_microbilt", "bar_vendor_surepass"],
  },
  {
    name: "OpenAI, L.L.C.",
    purpose: `Automatic check of new posts and comments for harassment, hate, sexual and illegal content (omni-moderation). ${WHEN_ON}`,
    data: "The text of new posts and comments. OpenAI does not use API data to train its models.",
    where: "openai.com",
    agreement: TBC,
    registry: ["openai_moderation"],
  },
  {
    name: "Anthropic, PBC",
    purpose: `Quality checks of LawBid staff decisions (moderation and verification) for our team. ${WHEN_ON}`,
    data: "The content and record of the staff decision being checked.",
    where: "anthropic.com",
    agreement: TBC,
    registry: ["anthropic"],
  },
  {
    name: "Sentry (Functional Software, Inc.)",
    purpose: "Error and performance monitoring of the server, the apps and the admin.",
    data: "Technical error reports, request metadata, device and app identifiers; personal data and message text are scrubbed before sending.",
    where: "sentry.io",
    agreement: TBC,
    registry: ["sentry", "sentry_webhook"],
  },
  {
    name: "National Center for Missing & Exploited Children (NCMEC)",
    purpose: "Reports of apparent child sexual abuse material, as US law (18 U.S.C. §2258A) requires.",
    data: "The reported material and the account information the law requires.",
    where: "missingkids.org",
    agreement: "Required by law; not a commercial service.",
    registry: ["ncmec"],
  },
];

export default function ThirdPartyServices() {
  return (
    <LegalPage title="Third-Party Services" updated="November 13, 2026" version="1.1" effective="November 13, 2026">
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
        The list reflects the software the LawBid apps and servers use today. Providers marked “only while switched on”
        receive data only while LawBid uses them. Providers may process data in the United States and other countries
        where they operate. We update this page when we add or replace a provider.
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
