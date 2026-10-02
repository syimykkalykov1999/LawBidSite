import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="October 2, 2026">
      <p>This policy explains what personal data LawBid collects, why, and the choices you have.</p>
      <h2>Data we collect</h2>
      <ul>
        <li>Account data: name, email, phone number, profile photo.</li>
        <li>Attorney data: license details, qualifications, experience.</li>
        <li>Content: cases, bids, posts, videos, chat messages and call metadata.</li>
        <li>Technical data: device type, app version, push notification tokens, logs.</li>
      </ul>
      <h2>How we use it</h2>
      <ul>
        <li>To run the marketplace: show cases to matching attorneys, deliver bids, messages and calls.</li>
        <li>To keep the Service safe: verify attorneys, prevent fraud and abuse.</li>
        <li>To send notifications you asked for, and service emails.</li>
      </ul>
      <h2>Sharing</h2>
      <p>
        We share data with the other party of a conversation or bid, and with service providers that host and operate the Service
        (cloud hosting, storage, video delivery, email). We do not sell personal data.
      </p>
      <h2>Your rights</h2>
      <p>
        You can access, correct or delete your data and close your account at any time from the app or by writing to{" "}
        {site.supportEmail}.
      </p>
      <h2>Retention</h2>
      <p>We keep data while your account is active and delete or anonymize it afterwards, unless the law requires otherwise.</p>
    </LegalPage>
  );
}
