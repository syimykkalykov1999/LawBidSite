import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "LawBid's accessibility statement and how to report a barrier.",
};

export default function Accessibility() {
  return (
    <LegalPage title="Accessibility" updated="October 5, 2026">
      {/* Draft expanded 2026-10-05 for attorney review */}
      <p>
        SiMA LLC (doing business as LawBid) wants everyone to be able to post a case, compare bids and work with an
        attorney, whatever their abilities or the technology they use.
      </p>

      <h2>Our standard</h2>
      <p>
        We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA for this website and the LawBid
        apps for iPhone and Android. This includes readable contrast, keyboard navigation, labels for screen readers,
        support for system text sizes and reduced motion, and captions or transcripts for video where we provide them.
      </p>

      <h2>Where we are</h2>
      <p>
        We test with VoiceOver, TalkBack and keyboard-only navigation and fix what we find. Some parts of the Service,
        in particular user-uploaded videos and images, may not yet fully meet the standard because we do not control
        their content. We are working to improve them.
      </p>

      <h2>Report a barrier</h2>
      <p>
        If something on LawBid is hard to use with assistive technology, or you need information in another format,
        write to {site.supportEmail} with the subject “Accessibility”. Tell us what you were trying to do, the page or
        screen and the device or software you used. We reply within 5 business days and aim to fix reported barriers
        quickly.
      </p>
    </LegalPage>
  );
}
