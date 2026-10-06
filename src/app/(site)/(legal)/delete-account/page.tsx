import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/ui/legal-page";
import { company } from "@/lib/company";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description: "How to delete your LawBid account and data, in the app or by email.",
  alternates: { canonical: "/delete-account" },
};

// Store release 2026-10-06: Google Play asks for a web page where users of the
// LawBid app can request account deletion without reinstalling the app.
export default function DeleteAccount() {
  return (
    <LegalPage title="Delete Your Account" updated="October 6, 2026">
      <p>
        You can delete your LawBid account and the data linked to it at any time. LawBid is operated by{" "}
        {company.legalName}.
      </p>

      <h2>In the app</h2>
      <ul>
        <li>Open the LawBid app and sign in.</li>
        <li>Go to Settings → Account → Delete account.</li>
        <li>Confirm with Face ID, fingerprint or a one-time code.</li>
      </ul>
      <p>
        Your profile is hidden at once. The account and its data are deleted after a 14-day grace period; signing in
        again during those 14 days cancels the deletion.
      </p>

      <h2>Without the app</h2>
      <p>
        Email{" "}
        <a href={`mailto:${site.supportEmail}?subject=Delete%20my%20LawBid%20account`} className="text-gold-300 underline">
          {site.supportEmail}
        </a>{" "}
        from the email address on your account, or tell us the phone number you sign in with. We confirm the request
        with a one-time code and delete the account within 30 days.
      </p>

      <h2>What is deleted and what is kept</h2>
      <ul>
        <li>Deleted: your profile, photo, contact details, cases, bids, posts, videos, chats and uploaded files.</li>
        <li>
          Kept for a limited time because the law requires it: payment and tax records (typically 7 years), records of
          the Terms you accepted (5 years), and support messages (3 years after the ticket is closed).
        </li>
        <li>Reviews you wrote may stay without your name.</li>
      </ul>
      <p>
        Details are in our{" "}
        <Link href="/privacy" className="text-gold-300 underline">
          Privacy Policy
        </Link>
        .
      </p>
    </LegalPage>
  );
}
