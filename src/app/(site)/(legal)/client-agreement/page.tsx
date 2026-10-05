import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/ui/legal-page";
import { company, legalVersion } from "@/lib/company";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Agreement",
  description: "The agreement between LawBid and clients who post cases.",
  alternates: { canonical: "/client-agreement" },
};

export default function ClientAgreement() {
  return (
    <LegalPage title="Client Agreement" updated="October 5, 2026" {...legalVersion}>
      <p>
        This Client Agreement (the “Agreement”) is between {company.legalName}, an {company.entityType} doing business
        as LawBid (“LawBid”, “we”, “us”), and you as a client who posts a case or uses the LawBid apps or website to
        find an attorney. It supplements our{" "}
        <Link href="/terms" className="text-gold-300 underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-gold-300 underline">
          Privacy Policy
        </Link>
        . It includes a binding arbitration agreement and class action waiver (section 11).
      </p>

      <h2>1. LawBid is a platform, not a law firm</h2>
      <ul>
        <li>
          LawBid is a technology platform that lets you publish a legal matter and receive bids from independent
          attorneys. LawBid is not a law firm, does not practice law and is not a lawyer referral service.
        </li>
        <li>
          LawBid does not give legal advice. Posts, answers, news, trust levels and messages from our team are general
          information only.
        </li>
        <li>
          Using LawBid does not create an attorney-client relationship with LawBid, and posting a case does not by
          itself create one with any attorney.
        </li>
      </ul>

      <h2>2. Your relationship is with the attorney you choose</h2>
      <p>
        An attorney-client relationship begins only when you and an attorney agree to it, normally by signing that
        attorney&apos;s own engagement agreement. From then on the attorney, not LawBid, is responsible for the legal
        services, for their fees and for meeting their professional duties to you. Attorneys on LawBid are independent;
        they are not employees, agents or partners of LawBid. LawBid does not recommend, select or endorse any attorney,
        and a bid is an offer by that attorney only.
      </p>

      <h2>3. Check the attorney yourself</h2>
      <p>
        Attorney licenses shown in the app are self-declared by the attorney. A trust level shows what LawBid has been
        able to confirm so far; it is an indicator and not a guarantee. Before you hire anyone, verify the license with
        the state bar (the app links to the public registry of each state where one exists), read the attorney&apos;s
        engagement agreement, ask about fees and malpractice insurance, and decide whether the attorney is right for
        you. LawBid does not warrant that any attorney is qualified, in good standing, available or will achieve any
        result.
      </p>

      <h2>4. What you post, and confidentiality</h2>
      <ul>
        <li>
          A public case is shown to every attorney who matches its practice area and state. Do not include anything you
          want to keep private or that is privileged, such as full names of other people, account numbers, medical or
          financial details, or documents under seal. Share details only in the private chat with the attorney you
          choose.
        </li>
        <li>
          Messages you send to an attorney before an engagement may not be protected by attorney-client privilege.
          Attorneys have their own duties of confidentiality to prospective clients, but LawBid cannot guarantee how any
          attorney will treat your information.
        </li>
        <li>
          You are responsible for what you post. It must be accurate to the best of your knowledge, lawful and must not
          infringe anyone&apos;s rights. Do not post a case only to get free advice, to harass attorneys or to test the
          Service.
        </li>
        <li>
          You keep ownership of your content and give LawBid a license to host and display it to run the Service, as
          described in the Terms.
        </li>
        <li>
          If a deadline applies to your matter (for example a statute of limitations or a court date), act in time. A
          posted case or an unanswered bid does not protect your rights.
        </li>
      </ul>

      <h2>5. Cost to you and payments</h2>
      <ul>
        <li>Clients do not pay LawBid to post a case or to receive bids.</li>
        <li>
          If you pay an attorney through the app, the payment is processed by Stripe and goes directly to the
          attorney&apos;s own account. LawBid does not receive, hold or control your money and is not an escrow agent.
          Stripe&apos;s terms apply to the payment itself.
        </li>
        <li>
          The fee, scope and refund terms are set in the attorney&apos;s engagement agreement. Refunds of a payment to
          an attorney are for that attorney to decide; LawBid cannot issue them on the attorney&apos;s behalf.
        </li>
        <li>
          You are responsible for any fees your bank or card issuer charges. If you dispute a charge with your bank,
          tell us so we can pass the records to the parties.
        </li>
      </ul>

      <h2>6. Reviews and conduct</h2>
      <p>
        Reviews must be honest and written by you about a real engagement. Do not post unlawful, defamatory, harassing
        or misleading content. We may remove content and suspend accounts that break the Terms.
      </p>

      <h2>7. Disputes with an attorney</h2>
      <p>
        If you have a problem with an attorney&apos;s work or fee, raise it first with the attorney. You may also report
        the attorney to us in the app and, for professional misconduct, to the state bar. LawBid may review reports and
        act on the attorney&apos;s account, but does not decide fee or malpractice disputes, does not represent you and
        is not liable for the attorney&apos;s acts or omissions.
      </p>

      <h2>8. Disclaimer of warranties and limitation of liability</h2>
      <p>
        The Service is provided “as is” and “as available”. To the fullest extent permitted by law, LawBid disclaims all
        warranties, express or implied, and does not warrant the identity, qualifications, conduct or results of any
        attorney or the accuracy of any bid, review or trust level. To the extent permitted by law, LawBid is not liable
        for indirect, incidental, special, consequential or punitive damages, and its total liability for all claims is
        limited to the greater of $100 and the amount you paid LawBid in the 12 months before the claim arose. These
        limits do not apply to liability that cannot be limited by law, and some states do not allow some of these
        exclusions.
      </p>

      <h2>9. Termination</h2>
      <p>
        You can close your account at any time in the app. We may suspend or end your access if you break this
        Agreement, the Terms or the law. Engagements you already formed with an attorney continue under your own
        agreement.
      </p>

      <h2>10. Governing law</h2>
      <p>
        This Agreement is governed by the laws of the State of Illinois and applicable federal law. Nothing in it takes
        away protections of the mandatory consumer law of the state where you live.
      </p>

      <h2>11. Dispute resolution and arbitration</h2>
      <p>
        <strong>Talk to us first.</strong> Send a written notice of any dispute with LawBid to {site.supportEmail} or to{" "}
        {company.legalName}, {company.postalAddress}, and allow 30 days to try to resolve it before starting arbitration
        or a lawsuit.
      </p>
      <p>
        <strong>Binding individual arbitration and class action waiver.</strong> Any remaining dispute between you and
        LawBid will be resolved by binding individual arbitration administered by the American Arbitration Association
        under its Consumer Arbitration Rules, as set out in section 20 of our Terms of Service, which applies to this
        Agreement in full, including the class action waiver, the small-claims and injunctive-relief exceptions and the
        30-day opt-out. If you opted out of arbitration under the Terms, that opt-out applies here.
      </p>
      <p>This section covers disputes with LawBid only, not disputes between you and an attorney.</p>

      <h2>12. Changes</h2>
      <p>
        We may update this Agreement. For material changes we will notify you in the app or by email at least 14 days
        before they take effect. Continued use after the effective date means you accept them.
      </p>

      <h2>Contact</h2>
      <p>
        {company.legalName}, {company.postalAddress}
        <br />
        {site.supportEmail}
      </p>
    </LegalPage>
  );
}
