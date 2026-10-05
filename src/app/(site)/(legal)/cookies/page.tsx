import type { Metadata } from "next";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/consent/cookie-settings-button";
import { LegalPage } from "@/components/ui/legal-page";
import { company, legalVersion } from "@/lib/company";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Cookie Policy" };

const items = [
  {
    name: "lawbid.consent",
    kind: "Local storage (first party)",
    purpose: "Remembers your cookie choice (analytics yes or no, and the date) so we do not ask again.",
    category: "Essential",
    lasts: "Until you clear site data or change your choice",
  },
  {
    name: "lawbid.lang",
    kind: "Local storage (first party)",
    purpose: "Remembers the language you picked on the referral page (/r/…), English or Russian.",
    category: "Essential (a setting you chose)",
    lasts: "Until you clear site data",
  },
];

export default function Cookies() {
  return (
    <LegalPage title="Cookie Policy" updated="October 5, 2026" {...legalVersion}>
      <p>
        This policy explains what this website (lawbid.dev) stores in your browser. It is operated by{" "}
        {company.legalName}, doing business as LawBid. It covers the website only; how the mobile app and servers handle
        data is in our{" "}
        <Link href="/privacy" className="text-gold-300 underline">
          Privacy Policy
        </Link>
        .
      </p>

      <h2>What we use</h2>
      <p>
        The website sets <strong>no cookies</strong> of its own and loads{" "}
        <strong>no analytics, advertising or tracking scripts</strong>. It uses your browser&apos;s local storage only
        for the two items below. Fonts are hosted on our own domain, and there are no third-party embeds.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-ink-600 text-ivory">
              <th className="py-2 pr-4 font-semibold">Name</th>
              <th className="py-2 pr-4 font-semibold">Type</th>
              <th className="py-2 pr-4 font-semibold">Purpose</th>
              <th className="py-2 pr-4 font-semibold">Category</th>
              <th className="py-2 font-semibold">How long</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.name} className="border-b border-ink-700 align-top">
                <td className="py-2 pr-4 font-mono text-ivory">{i.name}</td>
                <td className="py-2 pr-4">{i.kind}</td>
                <td className="py-2 pr-4">{i.purpose}</td>
                <td className="py-2 pr-4">{i.category}</td>
                <td className="py-2">{i.lasts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Your choices</h2>
      <ul>
        <li>
          On your first visit a banner offers <strong>Accept all</strong>, <strong>Reject non-essential</strong> and{" "}
          <strong>Settings</strong>. The first two are equally easy to use, and nothing optional is switched on until
          you choose it.
        </li>
        <li>
          Analytics is the only optional category. We do not run any today. If we add one, it will load only after you
          allow it, and this page will list it.
        </li>
        <li>
          We honor the <strong>Global Privacy Control</strong> signal: if your browser sends it, we treat it as a choice
          to reject non-essential storage until you change it in Settings.
        </li>
        <li>
          You can change your mind at any time: <CookieSettingsButton className="text-gold-300 underline" /> (also in
          the page footer). You can also delete site data in your browser settings.
        </li>
      </ul>

      <h2>Mobile app</h2>
      <p>
        The mobile app does not use browser cookies. It stores a sign-in session and settings on your device and uses a
        push-notification token, as described in the Privacy Policy and on our{" "}
        <Link href="/third-party-services" className="text-gold-300 underline">
          Third-Party Services
        </Link>{" "}
        page.
      </p>

      <h2>Changes and contact</h2>
      <p>
        We will update this page when the storage we use changes. Questions: {site.supportEmail}, {company.legalName},{" "}
        {company.postalAddress}.
      </p>
    </LegalPage>
  );
}
