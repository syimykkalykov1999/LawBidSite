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
import { lowerName, practiceBySlug, practiceStateFaq, stateLandingAreas } from "@/content/seo-landing";
import { stateBySlug, states } from "@/content/states";

export const dynamicParams = false;

export function generateStaticParams() {
  return states.flatMap((s) => stateLandingAreas.map((a) => ({ state: s.slug, practice: a.slug })));
}

type Props = { params: Promise<{ state: string; practice: string }> };

async function resolve(params: Props["params"]) {
  const p = await params;
  const state = stateBySlug(p.state);
  const area = practiceBySlug(p.practice);
  if (!state || !area || !stateLandingAreas.includes(area)) return null;
  return { state, area };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = await resolve(params);
  if (!r) return {};
  const { state, area } = r;
  const n = lowerName(area.name);
  const path = `/lawyers/${state.slug}/${area.slug}`;
  const description = `Need a ${n} lawyer in ${state.name}? Post your case free on LawBid, get bids from attorneys who cover ${state.name}, compare, chat and hire. ${area.specialties.slice(0, 3).join(", ")} and more.`;
  return {
    title: `${area.name} lawyer in ${state.name}: get bids`,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${area.name} lawyer in ${state.name} on LawBid`, description, url: path },
  };
}

export default async function PracticeStatePage({ params }: Props) {
  const r = await resolve(params);
  if (!r) notFound();
  const { state, area } = r;
  const n = lowerName(area.name);
  const path = `/lawyers/${state.slug}/${area.slug}`;
  const faq = practiceStateFaq(area, state);
  const otherPractices = stateLandingAreas.filter((a) => a.slug !== area.slug);
  const otherStates = states.filter((s) => s.slug !== state.slug);
  return (
    <>
      <PageHero
        eyebrow={`${state.name} · ${area.name}`}
        title={
          <>
            {area.name} lawyer in <span className="text-gold-gradient italic">{state.name}.</span>
          </>
        }
        lead={`Post your ${n} case free. Attorneys who practice it and cover ${state.name} send bids, and you choose.`}
      >
        <ButtonLink href="/download">Get the app</ButtonLink>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Find a lawyer", href: "/lawyers" },
          { name: state.name, href: `/lawyers/${state.slug}` },
          { name: area.name },
        ]}
      />
      <LandingSection title={`${area.name} matters you can post`}>
        <TagList items={area.specialties} />
      </LandingSection>
      <HowItWorks subject={`${n} in ${state.name}`} />
      <LandingSection title="Questions">
        <FaqList items={faq} defaultOpen={null} />
      </LandingSection>
      <LandingSection title={`More legal help in ${state.name}`}>
        <LinkPills
          items={otherPractices.map((a) => ({
            href: `/lawyers/${state.slug}/${a.slug}`,
            label: `${a.name} lawyer in ${state.name}`,
          }))}
        />
      </LandingSection>
      <LandingSection title={`${area.name} lawyers in other states`}>
        <LinkPills items={otherStates.map((s) => ({ href: `/lawyers/${s.slug}/${area.slug}`, label: s.name }))} />
      </LandingSection>
      <Download />
      <LegalServiceStructuredData
        name={`LawBid: ${area.name} lawyers in ${state.name}`}
        description={`Post a ${n} case and receive bids from independent attorneys who cover ${state.name}.`}
        path={path}
        serviceType={area.name}
        state={state.name}
      />
      <FaqStructuredData items={faq} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Find a lawyer", path: "/lawyers" },
          { name: state.name, path: `/lawyers/${state.slug}` },
          { name: area.name, path },
        ]}
      />
    </>
  );
}
