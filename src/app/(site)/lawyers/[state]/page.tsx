import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/page-hero";
import { FaqList } from "@/components/ui/faq-list";
import { ButtonLink } from "@/components/ui/button-link";
import { Download } from "@/components/sections/download";
import { Breadcrumbs, HowItWorks, LandingSection, LinkPills } from "@/components/seo/landing";
import {
  BreadcrumbStructuredData,
  FaqStructuredData,
  LegalServiceStructuredData,
} from "@/components/seo/structured-data";
import { lowerName, stateFaq, stateLandingAreas } from "@/content/seo-landing";
import { stateBySlug, states } from "@/content/states";

export const dynamicParams = false;

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

type Props = { params: Promise<{ state: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const state = stateBySlug((await params).state);
  if (!state) return {};
  const description = `Find a lawyer in ${state.name}. Post your case free on LawBid, get bids from independent attorneys, compare, chat and hire: divorce, DUI, injury, immigration and more.`;
  return {
    title: `Lawyers in ${state.name}: post your case and get bids`,
    description,
    alternates: { canonical: `/lawyers/${state.slug}` },
    openGraph: { title: `Lawyers in ${state.name} on LawBid`, description, url: `/lawyers/${state.slug}` },
  };
}

export default async function StatePage({ params }: Props) {
  const state = stateBySlug((await params).state);
  if (!state) notFound();
  const path = `/lawyers/${state.slug}`;
  const faq = stateFaq(state);
  return (
    <>
      <PageHero
        eyebrow={state.name}
        title={
          <>
            Find a lawyer in <span className="text-gold-gradient italic">{state.name}.</span>
          </>
        }
        lead={`Post your case free. Attorneys who cover ${state.name} send bids, you compare and choose.`}
      >
        <ButtonLink href="/download">Get the app</ButtonLink>
      </PageHero>
      <Breadcrumbs items={[{ name: "Find a lawyer", href: "/lawyers" }, { name: state.name }]} />
      <LandingSection title={`Popular legal help in ${state.name}`}>
        <LinkPills
          items={stateLandingAreas.map((a) => ({
            href: `/lawyers/${state.slug}/${a.slug}`,
            label: `${a.name} lawyer in ${state.name}`,
          }))}
        />
      </LandingSection>
      <HowItWorks subject={state.name} />
      <LandingSection title="Questions">
        <FaqList items={faq} defaultOpen={null} />
      </LandingSection>
      <Download />
      <LegalServiceStructuredData
        name={`LawBid: lawyers in ${state.name}`}
        description={`Post a case and receive bids from independent attorneys who cover ${state.name}: ${stateLandingAreas
          .slice(0, 5)
          .map((a) => lowerName(a.name))
          .join(", ")} and more.`}
        path={path}
        state={state.name}
      />
      <FaqStructuredData items={faq} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Find a lawyer", path: "/lawyers" },
          { name: state.name, path },
        ]}
      />
    </>
  );
}
