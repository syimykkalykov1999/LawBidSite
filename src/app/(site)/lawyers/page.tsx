import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Download } from "@/components/sections/download";
import { Breadcrumbs, LandingSection, LinkPills } from "@/components/seo/landing";
import { BreadcrumbStructuredData } from "@/components/seo/structured-data";
import { states } from "@/content/states";

export const metadata: Metadata = {
  title: "Find a lawyer in your state",
  description:
    "Find a lawyer in any US state. Post your case free on LawBid, get bids from independent attorneys, compare, chat and hire.",
  alternates: { canonical: "/lawyers" },
};

export default function LawyersIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="By state"
        title={
          <>
            Find a lawyer in <span className="text-gold-gradient italic">your state.</span>
          </>
        }
        lead="Pick your state, then your area of law. Post the case once and attorneys come to you with bids."
      />
      <Breadcrumbs items={[{ name: "Find a lawyer" }]} />
      <LandingSection title="All states">
        <LinkPills items={states.map((s) => ({ href: `/lawyers/${s.slug}`, label: `Lawyers in ${s.name}` }))} />
      </LandingSection>
      <Download />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Find a lawyer", path: "/lawyers" },
        ]}
      />
    </>
  );
}
