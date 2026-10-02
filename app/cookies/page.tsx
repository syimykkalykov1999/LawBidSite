import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function Cookies() {
  return (
    <LegalPage title="Cookie Policy" updated="October 2, 2026">
      <p>
        This website uses only the cookies and local storage needed for it to work. We do not use advertising cookies. If analytics
        are added later, this page will list them and ask for your consent where required.
      </p>
    </LegalPage>
  );
}
