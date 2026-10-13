import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/page-hero";
import { FaqList } from "@/components/ui/faq-list";
import { ButtonLink } from "@/components/ui/button-link";
import { Download } from "@/components/sections/download";
import { Breadcrumbs, HowItWorks, LandingSection, LinkPills, TagList } from "@/components/seo/landing";
import {
  BreadcrumbStructuredData,
  FaqStructuredData,
  LegalServiceStructuredData,
} from "@/components/seo/structured-data";
import { practiceAreas } from "@/content/practice-areas";
import { lowerName, practiceBySlug, practiceFaq, stateLandingSlugs } from "@/content/seo-landing";
import { states } from "@/content/states";

export const dynamicParams = false;

export function generateStaticParams() {
  return practiceAreas.map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = practiceBySlug((await params).slug);
  if (!area) return {};
  const n = lowerName(area.name);
  const description = `Find a ${n} lawyer. Post your ${n} case free on LawBid, get bids from independent US attorneys, compare, chat and hire. ${area.specialties.slice(0, 4).join(", ")} and more.`;
  return {
    title: `${area.name} lawyers: post your case and get bids`,
    description,
    alternates: { canonical: `/practice-areas/${area.slug}` },
    openGraph: { title: `${area.name} lawyers on LawBid`, description, url: `/practice-areas/${area.slug}` },
  };
}

export default async function PracticeAreaPage({ params }: Props) {
  const area = practiceBySlug((await params).slug);
  if (!area) notFound();
  const n = lowerName(area.name);
  const path = `/practice-areas/${area.slug}`;
  const faq = practiceFaq(area);
  const byState = stateLandingSlugs.includes(area.slug as (typeof stateLandingSlugs)[number]);
  return (
    <>
      <PageHero
        eyebrow="Practice area"
        title={
          <>
            {area.name} <span className="text-gold-gradient italic">lawyers.</span>
          </>
        }
        lead={`Post your ${n} case for free. Independent US attorneys who practice it send bids, and you choose.`}
      >
        <ButtonLink href="/download">Get the app</ButtonLink>
      </PageHero>
      <Breadcrumbs items={[{ name: "Practice areas", href: "/practice-areas" }, { name: area.name }]} />
      <LandingSection title={`What ${area.name} covers on LawBid`}>
        <TagList items={area.specialties} />
      </LandingSection>
      <HowItWorks subject={n} />
      {byState && (
        <LandingSection title={`Find a ${n} lawyer by state`}>
          <LinkPills
            items={states.map((s) => ({
              href: `/lawyers/${s.slug}/${area.slug}`,
              label: `${area.name} lawyer in ${s.name}`,
            }))}
          />
        </LandingSection>
      )}
      <LandingSection title="Questions">
        <FaqList items={faq} defaultOpen={null} />
      </LandingSection>
      <Download />
      <LegalServiceStructuredData
        name={`LawBid: ${area.name} lawyers`}
        description={`Post a ${n} case and receive bids from independent US attorneys.`}
        path={path}
        serviceType={area.name}
      />
      <FaqStructuredData items={faq} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Practice areas", path: "/practice-areas" },
          { name: area.name, path },
        ]}
      />
    </>
  );
}
