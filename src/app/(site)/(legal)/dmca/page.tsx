import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/ui/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Copyright (DMCA) Policy",
  description: "How to send a copyright takedown notice or counter-notice to LawBid.",
  alternates: { canonical: "/dmca" },
};

export default function Dmca() {
  return (
    <LegalPage title="Copyright (DMCA) Policy" updated="October 5, 2026">
      {/* Draft expanded 2026-10-05 for attorney review */}
      <p>
        SiMA LLC (doing business as LawBid) respects the intellectual property of others and expects users to do the
        same. We respond to notices of claimed copyright infringement that comply with the Digital Millennium Copyright
        Act (DMCA), 17 U.S.C. §512.
      </p>

      <h2>Designated agent</h2>
      <p>
        Send notices and counter-notices to our designated agent:
        <br />
        [DMCA agent — to be registered with the US Copyright Office]
        <br />
        SiMA LLC, [postal address]
        <br />
        Email: {site.supportEmail} (subject “DMCA notice”)
      </p>

      <h2>How to send a takedown notice</h2>
      <p>
        If you believe content on LawBid infringes your copyright, send a written notice that includes all of the
        elements required by 17 U.S.C. §512(c)(3):
      </p>
      <ul>
        <li>Your physical or electronic signature, or that of a person authorized to act for the copyright owner.</li>
        <li>
          Identification of the copyrighted work you claim has been infringed (or a representative list if several).
        </li>
        <li>
          Identification of the material you claim is infringing and enough information for us to find it, such as the
          link to the post, profile or case and the user name.
        </li>
        <li>Your name, postal address, telephone number and email address.</li>
        <li>
          A statement that you have a good-faith belief that the use is not authorized by the copyright owner, its agent
          or the law.
        </li>
        <li>
          A statement, made under penalty of perjury, that the information in the notice is accurate and that you are
          the copyright owner or authorized to act on the owner&apos;s behalf.
        </li>
      </ul>
      <p>
        When we receive a complete notice we remove or disable access to the material, tell the user who posted it and
        give them a copy of the notice (including your contact details).
      </p>

      <h2>Counter-notice</h2>
      <p>
        If your content was removed and you believe the removal was a mistake or a misidentification, you can send a
        counter-notice to the designated agent that includes:
      </p>
      <ul>
        <li>Your physical or electronic signature.</li>
        <li>Identification of the material that was removed and where it appeared before removal.</li>
        <li>
          A statement, under penalty of perjury, that you have a good-faith belief the material was removed as a result
          of mistake or misidentification.
        </li>
        <li>
          Your name, address and telephone number, and a statement that you consent to the jurisdiction of the federal
          district court for the district where your address is located (or, if you live outside the United States, the
          Northern District of Illinois), and that you will accept service of process from the person who sent the
          original notice or their agent.
        </li>
      </ul>
      <p>
        We forward the counter-notice to the person who sent the original notice. Unless they tell us within 10 business
        days that they have filed a court action to restrain the user, we may restore the material within 10 to 14
        business days after we receive the counter-notice.
      </p>

      <h2>Repeat infringers</h2>
      <p>
        We terminate, in appropriate circumstances, the accounts of users who are repeat infringers. As a rule, an
        account that receives three valid takedown notices that are not answered by a successful counter-notice within
        12 months is closed. We may also close an account sooner for clear or serious infringement.
      </p>

      <h2>Misrepresentation</h2>
      <p>
        Under 17 U.S.C. §512(f), anyone who knowingly and materially misrepresents that material is infringing, or that
        it was removed by mistake, can be liable for damages, including costs and attorney fees, incurred by the user,
        the copyright owner or LawBid. Consider whether a use is fair use or otherwise authorized before you send a
        notice. If you are unsure, consult an attorney.
      </p>

      <h2>Other complaints</h2>
      <p>
        This policy covers copyright only. For trademark, defamation, privacy or other complaints about content, use the
        report button in the app or write to {site.supportEmail}. See also our{" "}
        <Link href="/terms" className="text-gold-300 underline">
          Terms of Service
        </Link>
        .
      </p>
    </LegalPage>
  );
}
