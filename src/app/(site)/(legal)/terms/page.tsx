import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/ui/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service", alternates: { canonical: "/terms" } };

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="October 5, 2026">
      {/* Draft expanded 2026-10-05 for attorney review */}
      <p>
        These Terms govern your use of the LawBid mobile apps and website (the “Service”), operated by SiMA LLC, an
        Illinois limited liability company doing business as LawBid (“LawBid”, “we”, “us”). By creating an account or
        using the Service you agree to them. They include a binding arbitration agreement and a class action waiver
        (section 20); please read that section carefully.
      </p>
      <h2>1. What LawBid is</h2>
      <p>
        LawBid is a marketplace that lets clients publish legal matters and lets independent attorneys respond with
        bids. LawBid is not a law firm, does not provide legal advice and is not a party to any agreement between a
        client and an attorney.
      </p>
      <p>
        Additional terms apply depending on how you use LawBid: the{" "}
        <Link href="/client-agreement" className="text-gold-300 underline">
          Client Agreement
        </Link>
        , the{" "}
        <Link href="/attorney-agreement" className="text-gold-300 underline">
          Attorney Services Agreement
        </Link>
        , the{" "}
        <Link href="/eula" className="text-gold-300 underline">
          App License Agreement (EULA)
        </Link>
        , the{" "}
        <Link href="/refunds" className="text-gold-300 underline">
          Refund &amp; Cancellation Policy
        </Link>{" "}
        and our{" "}
        <Link href="/third-party-services" className="text-gold-300 underline">
          list of third-party services
        </Link>
        . They are part of these Terms.
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
        Attorney licenses shown in the app are self-declared, and the attorney alone is responsible for their accuracy.
        Clients should confirm an attorney&apos;s license with the relevant state bar before hiring them; the app links
        to the public registry of each state where one exists.
      </p>
      <h3>Trust levels</h3>
      <p>
        Next to each attorney the app shows a trust level that says what LawBid has been able to confirm so far. It is
        an indicator, not a guarantee, a certification or legal advice:
      </p>
      <ul>
        <li>
          <strong>Self-declared</strong> (level 0): only the attorney&apos;s own statement about their license.
        </li>
        <li>
          <strong>Registry</strong> (level 1): the bar number and the name matched the public record of the state bar or
          court at the time of an automatic check, or a member of our staff confirmed the license by hand.
        </li>
        <li>
          <strong>Identity</strong> (level 2): the attorney&apos;s payment account passed the identity verification of
          our payment processor (Stripe) and the legal name on it matched the profile and the registry, or the attorney
          proved a link to the law firm whose account receives payments.
        </li>
        <li>
          <strong>Documents</strong> (level 3): in addition, our staff reviewed the attorney&apos;s bar card and a
          government ID.
        </li>
      </ul>
      <p>
        A check reflects the sources available on the day it ran; registries and licenses change, and automatic
        comparisons can be wrong. LawBid does not warrant that an attorney at any level is who they say they are, is in
        good standing or will perform. In-app payments are available only to attorneys who reached the level set in our
        platform rules, and LawBid may pause an attorney&apos;s bids or payments, delay their payouts or suspend the
        account when a complaint, a name mismatch, a duplicate license claim or a registry difference needs review.
      </p>
      <p>
        Anyone can report an account they believe is false. We may then ask the attorney for a government ID, a selfie
        or proof of license, and we may suspend or permanently ban any account that gives false license information.
      </p>

      <h2>4. Eligibility</h2>
      <ul>
        <li>You must be at least 18 years old to use the Service.</li>
        <li>
          The Service is currently offered in the United States only. You may use it only where doing so is lawful.
        </li>
        <li>
          To use the Service as an attorney you must be licensed to practice law and in good standing in every state you
          list on your profile.
        </li>
        <li>
          You may not use the Service if we previously suspended or banned you, or if you are acting for someone who
          was.
        </li>
      </ul>

      <h2>5. What LawBid is not</h2>
      <p>
        LawBid is a technology platform. It is <strong>not</strong> a law firm and does not practice law. Nothing in the
        Service, including posts, answers, legal news or messages from our team, is legal advice. Only the attorney you
        hire can give you legal advice, and only once you have engaged them.
      </p>
      <ul>
        <li>
          LawBid is not a lawyer referral service. We do not select, screen for suitability, recommend or endorse any
          attorney. Bids appear because an attorney chose to send one; ordering and filters are set by the client.
        </li>
        <li>
          LawBid is not a party to any engagement between a client and an attorney and does not guarantee that any
          engagement will be formed or performed.
        </li>
        <li>
          Attorneys are independent users of the Service. They are not employees, agents, partners or contractors of
          LawBid, and LawBid does not supervise their work.
        </li>
        <li>
          Using the Service does not create an attorney-client relationship with LawBid, and posting a case does not by
          itself create one with any attorney.
        </li>
      </ul>

      <h2>6. Attorney obligations</h2>
      <p>If you use the Service as an attorney, you agree that:</p>
      <ul>
        <li>
          You enter into your own engagement agreement with each client, on your own terms, before performing legal
          work. LawBid does not provide or approve engagement agreements.
        </li>
        <li>
          You are solely responsible for complying with the rules of professional conduct of every state where you are
          licensed and every state where your client is located, including rules on advertising, solicitation,
          competence, conflicts of interest and confidentiality.
        </li>
        <li>
          Your profile, posts and bids are your own advertising. Where a state requires it, you must label them
          “Attorney Advertising” or add any other required disclaimer, and you must not include claims that your rules
          prohibit (for example guarantees of outcomes or unverifiable comparisons).
        </li>
        <li>
          Any advance fee or retainer you collect, including through in-app payments, must be handled under the
          trust-account (IOLTA) rules that apply to you. LawBid does not hold client funds for you.
        </li>
        <li>
          LawBid does not share in your legal fees. Subscription fees are a flat charge for the use of the Service and
          do not vary with the fees you earn.
        </li>
        <li>
          All license information you provide must be accurate and current. You must update your profile within 7 days
          if any license lapses, is suspended, is revoked or changes status, or if you are subject to public discipline.
        </li>
        <li>You must not bid on a case in a state where you are not licensed, unless your rules permit it.</li>
        <li>
          Assistants and team members you add act under your supervision and responsibility. You are liable for their
          use of the Service.
        </li>
      </ul>

      <h2>7. Client obligations</h2>
      <p>If you use the Service as a client, you agree that:</p>
      <ul>
        <li>The information in your case is accurate and complete to the best of your knowledge.</li>
        <li>
          A public case is shown to every attorney who matches its practice area and state. Do not include anything you
          would not want those attorneys to see: no full names of other people, no account numbers, no documents under
          seal and nothing you consider privileged. Keep details for the private chat with the attorney you choose.
        </li>
        <li>
          You will confirm an attorney&apos;s license with the state bar before hiring them, and you will read and sign
          the attorney&apos;s own engagement agreement before any work begins.
        </li>
        <li>
          You will not post a case to collect free legal advice with no intention of hiring, to harass attorneys or to
          test the Service.
        </li>
      </ul>

      <h2>8. Cases and bids</h2>
      <p>
        Clients are responsible for the information they publish. Bids are offers made by attorneys; an engagement is
        formed only when a client and an attorney agree to it. Fees, scope and outcomes are between the client and the
        attorney.
      </p>
      <p>
        A bid can be withdrawn or countered until it is accepted. Accepting a bid in the app signals that both sides
        intend to work together; it does not replace the attorney&apos;s engagement agreement. LawBid may close cases
        that are inactive, duplicated or outside the scope of the Service.
      </p>

      <h2>9. Subscriptions and automatic renewal</h2>
      <ul>
        <li>
          Paid plans for attorneys are described in the app together with their price, billing period and what they
          include before you purchase. Clients do not pay to post cases or receive bids.
        </li>
        <li>
          <strong>Automatic renewal.</strong> A subscription renews automatically at the end of each billing period, at
          the price shown when you subscribed (or a price we announced to you in advance), until you cancel. Your
          payment method is charged at the start of each period.
        </li>
        <li>
          <strong>How to cancel.</strong> You can cancel at any time in the app (Settings → Subscription) or by emailing{" "}
          {site.supportEmail}. Cancellation takes effect at the end of the current period; you keep access until then.
          Subscriptions bought through the App Store or Google Play are cancelled in that store.
        </li>
        <li>
          <strong>Free trials.</strong> If a plan starts with a free trial, the trial converts into the paid plan and
          your payment method is charged when the trial ends, unless you cancel before that date. We tell you the trial
          length and the price before you start.
        </li>
        <li>
          <strong>Price changes.</strong> We will notify you at least 30 days before a price increase takes effect. If
          you do not cancel before the new price applies, you accept it.
        </li>
        <li>
          <strong>Refunds.</strong> Payments made through Stripe are generally non-refundable except where the law
          requires otherwise or we decide to refund at our discretion. Payments made through the App Store or Google
          Play are subject to that store&apos;s refund rules.
        </li>
        <li>
          Residents of California, New York and other states with automatic-renewal laws: the renewal terms above are
          presented to you again at checkout, we send a confirmation with the terms and how to cancel, and you can
          cancel online in the same way you subscribed.
        </li>
      </ul>

      <h2>10. Payments to attorneys</h2>
      <ul>
        <li>
          When a client pays an attorney through the app, the money goes directly to the attorney&apos;s own account
          with our payment processor, Stripe. LawBid does not receive, hold or control client funds and is not a money
          transmitter or escrow agent.
        </li>
        <li>LawBid takes no share of the attorney&apos;s fees.</li>
        <li>
          Attorneys who receive payments must accept the{" "}
          <a href="https://stripe.com/legal/connect-account" className="text-gold-300 underline" rel="noreferrer">
            Stripe Connected Account Agreement
          </a>
          , and clients who pay are subject to Stripe&apos;s terms for the payment itself.
        </li>
        <li>
          Any dispute about fees, refunds or the work performed is between the client and the attorney. LawBid may give
          the parties the payment records it holds but does not decide disputes or issue refunds on an attorney&apos;s
          behalf.
        </li>
      </ul>

      <h2>11. Partner and referral program</h2>
      <p>
        LawBid may offer rewards to partners and users who refer new users to the Service (the “Program”). If you take
        part:
      </p>
      <ul>
        <li>
          Rewards are paid by LawBid, from LawBid&apos;s own funds, for a referred user who creates an account and
          becomes active as defined in the Program rules shown in the app. Rewards are never paid for, and never depend
          on, a client hiring a particular attorney, and attorneys may not pay any part of a legal fee to a partner.
        </li>
        <li>
          You must clearly disclose that you may be paid by LawBid whenever you recommend the Service, in line with the
          FTC Endorsement Guides (for example “I may earn a reward if you join”).
        </li>
        <li>
          You may not promote the Service by unsolicited email, cold calls, text messages, automated messaging, fake
          reviews, misleading claims or anything that would break the law or the rules of professional conduct.
        </li>
        <li>
          LawBid may withhold, adjust or reclaim rewards for referrals that are fraudulent, self-referrals, duplicate
          accounts or obtained in breach of these rules, and may end the Program or change its terms at any time.
        </li>
        <li>
          Before any payout you must provide the tax information we request (for example an IRS Form W-9). You are
          responsible for any taxes on rewards.
        </li>
      </ul>

      <h2>12. Content and conduct</h2>
      <p>
        You keep ownership of the content you post (cases, bids, posts, videos, messages, reviews). You give LawBid a
        worldwide, non-exclusive, royalty-free license to host, store, reproduce, adapt for display and show that
        content as needed to run, secure and improve the Service. This license ends when you delete the content or your
        account, except for copies kept in backups for a limited time or where we must keep them by law.
      </p>
      <p>You must not post or do any of the following:</p>
      <ul>
        <li>
          Unlawful, defamatory, harassing, hateful or sexually explicit content, or content that targets a person.
        </li>
        <li>
          Confidential information of third parties, privileged material you are not allowed to share, or personal data
          of people who have not agreed to its publication.
        </li>
        <li>
          False or misleading statements, including false license claims, fake credentials, fake case postings or
          manipulated reviews.
        </li>
        <li>Spam, scraping, automated access, reverse engineering or attempts to bypass security or rate limits.</li>
        <li>Impersonating another person, firm or LawBid staff.</li>
      </ul>
      <p>
        <strong>Reviews</strong> must be written by a real client about a real engagement with that attorney. The app
        shows a review only when a shared case links the two accounts. Paid, traded, self-written or retaliatory reviews
        are prohibited and will be removed. Attorneys may reply publicly but must respect client confidentiality when
        they do.
      </p>
      <p>
        LawBid moderates content and may remove or hide any content, restrict features or suspend an account that, in
        our judgment, breaks these Terms, creates legal risk or harms other users. We are not obliged to pre-screen
        content and are not responsible for content posted by users.
      </p>

      <h2>13. Copyright (DMCA)</h2>
      <p>
        We respect copyright and respond to notices under the Digital Millennium Copyright Act. Our{" "}
        <Link href="/dmca" className="text-gold-300 underline">
          Copyright (DMCA) Policy
        </Link>{" "}
        explains how to send a takedown notice that meets 17 U.S.C. §512(c)(3), how to send a counter-notice, and our
        policy of terminating repeat infringers. Notices go to our designated agent: [DMCA agent — to be registered with
        the US Copyright Office], SiMA LLC, [postal address], {site.supportEmail}.
      </p>

      <h2>14. Reports and enforcement</h2>
      <p>
        Anyone can report a case, profile, post, review or message from inside the app or by email. We review reports,
        may ask either side for more information and may act without prior notice when the risk is serious. Depending on
        the situation we may remove content, add a warning, limit bidding or payments, suspend or ban an account, or
        report the matter to a state bar, a payment processor or law enforcement. We may keep records of enforcement
        actions as described in our Privacy Policy.
      </p>

      <h2>15. Privacy</h2>
      <p>
        How we handle personal data is explained in our{" "}
        <Link href="/privacy" className="text-gold-300 underline">
          Privacy Policy
        </Link>
        , which is part of these Terms.
      </p>

      <h2>16. Termination</h2>
      <ul>
        <li>
          You can close your account at any time in the app. Deletion is completed after a 14-day grace period during
          which you can change your mind.
        </li>
        <li>
          We may suspend or terminate your account, with or without notice, if you break these Terms or the law, if a
          license claim is false or cannot be confirmed, if required by a court or regulator, or if we discontinue the
          Service.
        </li>
        <li>
          Termination does not affect an engagement you already formed with a client or attorney; you remain responsible
          to each other under your own agreement.
        </li>
        <li>
          Sections that by their nature should survive (including content licenses for retained copies, disclaimers,
          limitation of liability, indemnification, dispute resolution and governing law) survive termination.
        </li>
      </ul>

      <h2>17. Disclaimers</h2>
      <p>
        The Service is provided “as is” and “as available”. To the fullest extent permitted by law, LawBid disclaims all
        warranties, express or implied, including merchantability, fitness for a particular purpose, non-infringement
        and any warranty arising from course of dealing.
      </p>
      <p>
        LawBid does not warrant the identity, qualifications, licensing, good standing, availability, competence or
        conduct of any attorney, the accuracy of any case, bid, review or trust level, or the outcome of any legal
        matter. You rely on attorneys and on information posted by users at your own risk. Some states do not allow some
        of these exclusions, so some may not apply to you.
      </p>

      <h2>18. Limitation of liability</h2>
      <p>
        To the extent permitted by law, LawBid and its members, managers, employees and suppliers will not be liable for
        any indirect, incidental, special, consequential or punitive damages, or for lost profits, lost data or
        reputational harm, arising out of or related to the Service, even if advised of the possibility.
      </p>
      <p>
        To the extent permitted by law, the total liability of LawBid for all claims relating to the Service is limited
        to the greater of (a) $100 and (b) the amount you paid LawBid in the 12 months before the event giving rise to
        the claim. These limits do not apply to liability that cannot be limited by law, including for fraud, gross
        negligence or willful misconduct.
      </p>

      <h2>19. Indemnification</h2>
      <p>
        You agree to defend, indemnify and hold harmless LawBid and its members, managers, employees and suppliers from
        any claim, loss, liability and expense (including reasonable attorney fees) arising from your content, your use
        of the Service, your breach of these Terms or of the law, or, if you are an attorney, your legal services and
        your compliance with professional rules. We will tell you promptly of any such claim and may take over its
        defense at our expense.
      </p>

      <h2>20. Dispute resolution and arbitration</h2>
      <p>
        <strong>Talk to us first.</strong> If you have a dispute with LawBid, send a written notice to{" "}
        {site.supportEmail} or to SiMA LLC, [postal address], describing the problem and what you want. We will do the
        same if we have a dispute with you. Both sides agree to try in good faith to resolve the dispute within 30 days
        of the notice before starting arbitration or a lawsuit.
      </p>
      <p>
        <strong>Binding individual arbitration.</strong> If the dispute is not resolved within 30 days, you and LawBid
        agree that it will be resolved by binding arbitration administered by the American Arbitration Association (AAA)
        under its Consumer Arbitration Rules, before a single arbitrator. The Federal Arbitration Act governs this
        section. The arbitrator may award the same remedies a court could award to you individually. Hearings may be
        held by video, and for claims under $10,000 you may choose a documents-only arbitration. AAA fees are allocated
        under the Consumer Rules; if the arbitrator finds your claim frivolous, the Rules on fee shifting apply.
      </p>
      <p>
        <strong>Class action waiver.</strong> You and LawBid agree to bring claims only in an individual capacity, not
        as a plaintiff or class member in any class, consolidated or representative proceeding. The arbitrator may not
        consolidate claims of different users. If this waiver is found unenforceable for a particular claim, that claim
        will proceed in court, not in arbitration.
      </p>
      <p>
        <strong>Exceptions.</strong> Either side may (a) bring an individual claim in small-claims court, and (b) seek
        injunctive relief in court to stop infringement or misuse of intellectual property or unauthorized access. Where
        the law of your state (for example California) does not allow a waiver of the right to seek public injunctive
        relief, a claim for such relief may be brought in court after the individual arbitration has concluded.
      </p>
      <p>
        <strong>30-day opt-out.</strong> You can reject this arbitration agreement by emailing {site.supportEmail}{" "}
        within 30 days after you first accept these Terms, with your name, the email or phone of your account and a
        statement that you opt out of arbitration. Opting out does not affect any other part of these Terms.
      </p>
      <p>
        <strong>Disputes between users.</strong> This section covers disputes between you and LawBid only. Disputes
        between a client and an attorney are governed by their own agreement.
      </p>

      <h2>21. Governing law and venue</h2>
      <p>
        These Terms are governed by the laws of the State of Illinois and applicable federal law, without regard to
        conflict-of-law rules. For any dispute that is not subject to arbitration, you and LawBid agree to the exclusive
        jurisdiction of the state and federal courts located in Cook County, Illinois, and waive any objection to venue
        there. If you are a consumer, nothing in this section takes away protections of the mandatory consumer law of
        the state where you live.
      </p>

      <h2>22. Changes to these Terms</h2>
      <p>
        We may update these Terms. Each version carries a date and a version number, and the current version is always
        available at this page. For material changes we will notify you in the app or by email at least 14 days before
        they take effect, and the app will ask you to accept the new version before you continue. If you do not accept,
        you may stop using the Service and close your account. Continued use after the effective date means you accept
        the changes, except that changes to the arbitration section do not apply to disputes that already began.
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

      <h2>23. General</h2>
      <ul>
        <li>
          These Terms, the Privacy Policy and the policies linked from them are the entire agreement between you and
          LawBid about the Service.
        </li>
        <li>If a provision is found unenforceable, the rest remains in effect.</li>
        <li>You may not assign these Terms; LawBid may assign them to a successor of the Service.</li>
        <li>Our failure to enforce a provision is not a waiver of it.</li>
      </ul>

      <h2>24. Contact</h2>
      <p>
        Questions about these Terms: {site.supportEmail}
        <br />
        SiMA LLC, [postal address]
      </p>
    </LegalPage>
  );
}
