import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/ui/legal-page";
import { company, legalVersion } from "@/lib/company";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Attorney Services Agreement",
  description: "The agreement between LawBid and attorneys who use the platform.",
  alternates: { canonical: "/attorney-agreement" },
};

export default function AttorneyAgreement() {
  return (
    <LegalPage title="Attorney Services Agreement" updated="October 5, 2026" {...legalVersion}>
      <p>
        This Attorney Services Agreement (the “Agreement”) is between {company.legalName}, an {company.entityType} doing
        business as LawBid (“LawBid”, “we”, “us”), and the attorney or law firm that creates an attorney account
        (“you”). It supplements our{" "}
        <Link href="/terms" className="text-gold-300 underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-gold-300 underline">
          Privacy Policy
        </Link>
        . If they conflict on a point about your use of the Service as an attorney, this Agreement controls. It includes
        a binding arbitration agreement and class action waiver (section 14).
      </p>

      <h2>1. Independent attorneys; LawBid is not a law firm</h2>
      <ul>
        <li>
          LawBid is a technology platform. It is not a law firm, does not practice law, does not give legal advice and
          is not a lawyer referral service.
        </li>
        <li>
          You are an independent professional, not an employee, partner, agent or contractor of LawBid. You decide which
          cases to bid on, what to charge and how to do the work.
        </li>
        <li>
          No attorney-client relationship exists between a client and LawBid. Any relationship exists only between you
          and the client, and only on the terms of your own engagement agreement.
        </li>
        <li>LawBid does not supervise, direct or control your legal services and does not endorse you.</li>
      </ul>

      <h2>2. Your sole responsibility for your services</h2>
      <p>You alone are responsible for:</p>
      <ul>
        <li>
          <strong>Legal services.</strong> The quality, timeliness, outcome and cost of the services you provide, and
          for every statement you make to a client.
        </li>
        <li>
          <strong>Licensure.</strong> Holding an active license in good standing in each jurisdiction you list, and
          practicing only where you are authorized to. You must update your profile within 7 days if a license lapses,
          is suspended, is revoked or you are publicly disciplined.
        </li>
        <li>
          <strong>Malpractice insurance.</strong> Carrying professional liability (malpractice) insurance that is
          adequate for your practice and required by the rules that apply to you, and providing proof on request.
        </li>
        <li>
          <strong>Engagement agreements.</strong> Entering into a written engagement agreement with each client before
          you perform legal work. LawBid does not provide or approve engagement agreements.
        </li>
        <li>
          <strong>Profile accuracy.</strong> The accuracy and completeness of your profile, license details,
          credentials, experience, prices and reviews responses. You confirm that what you enter is true and not
          misleading.
        </li>
      </ul>

      <h2>3. Professional ethics</h2>
      <p>
        You must comply with the rules of professional conduct of every state where you are licensed and every state
        where a client is located. In particular:
      </p>
      <ul>
        <li>
          <strong>No fee splitting.</strong> LawBid does not share in your legal fees. Subscription fees are a flat
          charge for use of the Service and do not depend on the fees you earn or the cases you win. You may not agree
          to pay anyone a share of your fee for a referral from the Service.
        </li>
        <li>
          <strong>Advertising.</strong> Your profile, posts, videos and bids are your advertising. You must add any
          label (for example “Attorney Advertising”) and disclaimer your state requires, and must not make claims your
          rules prohibit, such as guarantees of results or unverifiable comparisons.
        </li>
        <li>
          <strong>Solicitation.</strong> You must follow the rules on contacting prospective clients. Bidding on a case
          a client published is your own communication and your responsibility.
        </li>
        <li>
          <strong>Conflict checks.</strong> You must check for conflicts of interest before you bid on, accept or advise
          on a matter, and decline or withdraw when a conflict exists.
        </li>
        <li>
          <strong>Confidentiality and competence.</strong> You must protect client information, including anything
          shared in chat or video, and take only matters you are competent to handle.
        </li>
        <li>
          <strong>Client funds.</strong> Any advance fee or retainer you collect must be handled under the trust account
          (IOLTA) rules that apply to you. LawBid does not hold client funds.
        </li>
      </ul>

      <h2>4. No guarantee of clients or income</h2>
      <p>
        LawBid does not guarantee that you will receive any case, bid acceptance, client, payment, review or income.
        Visibility, ordering and trust levels depend on factors that include your profile, your license checks and
        client choices. We may change, suspend or remove features at any time.
      </p>

      <h2>5. License checks and trust levels</h2>
      <p>
        You confirm that the license information you submit is yours and accurate. We may check it against public
        registries and may ask for a government ID, a bar card or other proof. A trust level shown next to your name is
        an indicator, not a guarantee or an endorsement. We may pause your bids or payments, delay payouts, or suspend
        or ban your account when a complaint, a mismatch or a registry difference needs review.
      </p>

      <h2>6. Payments through Stripe Connect</h2>
      <ul>
        <li>
          Client payments to you are processed by Stripe through a Stripe Connect account in your name. The money goes
          directly to you. LawBid does not receive, hold or control client funds, is not a money transmitter and is not
          an escrow agent.
        </li>
        <li>
          You must accept and follow the{" "}
          <a href="https://stripe.com/legal/connect-account" className="text-gold-300 underline" rel="noreferrer">
            Stripe Connected Account Agreement
          </a>
          , complete Stripe&apos;s identity verification and keep your account details current. Stripe, not LawBid,
          decides on account approval, holds, reserves and payouts under its own terms.
        </li>
        <li>
          You are responsible for payment-processing fees charged by Stripe, chargebacks, refunds you agree to, sales or
          other taxes and your income taxes. LawBid does not provide tax advice.
        </li>
        <li>
          Disputes about fees, refunds or work performed are between you and the client. LawBid may give the parties the
          payment records it holds but does not decide those disputes.
        </li>
      </ul>

      <h2>7. Subscription fees</h2>
      <p>
        Attorney plans are described in the app with price and billing period. They renew automatically until you
        cancel. See our{" "}
        <Link href="/refunds" className="text-gold-300 underline">
          Refund &amp; Cancellation Policy
        </Link>
        .
      </p>

      <h2>8. Your content and our license</h2>
      <p>
        You keep ownership of your profile, posts, videos and messages. You grant LawBid a worldwide, non-exclusive,
        royalty-free license to host, store, reproduce and display them to run, secure and improve the Service, as
        described in the Terms. You confirm you have the right to post them and that they do not infringe anyone&apos;s
        rights or breach a duty of confidentiality.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        You will defend, indemnify and hold harmless LawBid and its members, managers, employees and suppliers from any
        claim, loss, liability, damage and expense (including reasonable attorney fees) arising out of or related to:
        (a) your legal services or any act or omission in your dealings with a client; (b) your profile, content or
        advertising; (c) your breach of this Agreement, the Terms or the law or of any rule of professional conduct; (d)
        your failure to carry required insurance; or (e) any claim by a client, bar, regulator or other third party
        about your conduct. We will tell you promptly of any claim and may take over its defense at our expense.
      </p>

      <h2>10. Disclaimer of warranties</h2>
      <p>
        The Service is provided “as is” and “as available”. To the fullest extent permitted by law, LawBid disclaims all
        warranties, express or implied, including merchantability, fitness for a particular purpose and
        non-infringement. LawBid does not warrant that the Service will be uninterrupted or error-free, or that any
        client is genuine, solvent or will pay.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        To the extent permitted by law, LawBid and its members, managers, employees and suppliers will not be liable for
        indirect, incidental, special, consequential or punitive damages, or for lost profits, lost clients, lost data
        or reputational harm, arising out of or related to the Service or this Agreement. LawBid&apos;s total liability
        for all claims is limited to the greater of $100 and the subscription fees you paid LawBid in the 12 months
        before the event giving rise to the claim. These limits do not apply to liability that cannot be limited by law.
      </p>

      <h2>12. Term and termination</h2>
      <p>
        This Agreement lasts while you have an attorney account. You may close your account at any time. We may suspend
        or terminate your account or access, with or without notice, if you breach this Agreement, the Terms or the law,
        if a license claim is false or cannot be confirmed, if required by a regulator or court, or if we discontinue
        the Service. Termination does not affect your duties to clients under engagements already formed. Sections that
        by their nature should survive (including sections 2, 3, 9 to 11, 13 and 14) survive.
      </p>

      <h2>13. Governing law</h2>
      <p>
        This Agreement is governed by the laws of the State of Illinois and applicable federal law, without regard to
        conflict-of-law rules. Subject to section 14, the state and federal courts located in Cook County, Illinois have
        exclusive jurisdiction.
      </p>

      <h2>14. Dispute resolution and arbitration</h2>
      <p>
        <strong>Talk to us first.</strong> Send a written notice of any dispute to {site.supportEmail} or to{" "}
        {company.legalName}, {company.postalAddress}, and allow 30 days to try to resolve it before starting arbitration
        or a lawsuit.
      </p>
      <p>
        <strong>Binding individual arbitration.</strong> Any dispute between you and LawBid arising out of or relating
        to this Agreement or the Service will be resolved by binding arbitration administered by the American
        Arbitration Association under its Commercial Arbitration Rules (and, where you are an individual using the
        Service mainly for personal purposes, its Consumer Arbitration Rules), before a single arbitrator. The Federal
        Arbitration Act governs this section. Hearings may be held by video.
      </p>
      <p>
        <strong>Class action waiver.</strong> Claims may be brought only in an individual capacity, not as a plaintiff
        or class member in any class, collective, consolidated or representative proceeding.
      </p>
      <p>
        <strong>Exceptions.</strong> Either side may bring an individual claim in small-claims court and may seek
        injunctive relief in court to stop infringement or misuse of intellectual property or unauthorized access.
      </p>
      <p>
        <strong>30-day opt-out.</strong> You may reject this arbitration agreement by emailing {site.supportEmail}{" "}
        within 30 days after you first accept this Agreement, with your name, account email and a statement that you opt
        out of arbitration.
      </p>
      <p>
        This section does not cover disputes between you and a client, which are governed by your engagement agreement.
      </p>

      <h2>15. Changes</h2>
      <p>
        We may update this Agreement. For material changes we will notify you in the app or by email at least 14 days
        before they take effect and ask you to accept the new version. If you do not accept, you may close your account.
        Changes to section 14 do not apply to disputes that already began.
      </p>

      <h2>16. General</h2>
      <ul>
        <li>This Agreement, the Terms and the policies linked from them are the entire agreement on this subject.</li>
        <li>If a provision is unenforceable, the rest remains in effect.</li>
        <li>You may not assign this Agreement; LawBid may assign it to a successor of the Service.</li>
        <li>Our failure to enforce a provision is not a waiver of it.</li>
      </ul>

      <h2>Contact</h2>
      <p>
        {company.legalName}, {company.postalAddress}
        <br />
        {site.supportEmail}
      </p>
    </LegalPage>
  );
}
