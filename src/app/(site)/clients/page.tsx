import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChatsCircle, CurrencyDollar, HandCoins, SealCheck, ShieldCheck, Star } from "@phosphor-icons/react/ssr";
import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink, MoreLink } from "@/components/ui/button-link";
import { FeatureRow } from "@/components/ui/feature-row";
import { FaqList } from "@/components/ui/faq-list";
import { Reveal } from "@/components/ui/reveal";
import { Phone } from "@/components/phone/phone";
import { Download } from "@/components/sections/download";
import { clientBenefits, clientSteps } from "@/content/clients";
import { faqGroups } from "@/content/faq";
import { practiceAreas } from "@/content/practice-areas";
import { withBase } from "@/lib/site";

export const metadata: Metadata = {
  title: "For clients",
  description:
    "Post your legal case for free and let verified attorneys bid. Compare prices and profiles, talk in the app and hire with confidence.",
  alternates: { canonical: "/clients" },
};

const benefitIcons = [HandCoins, ChatsCircle, CurrencyDollar, SealCheck, Star, ShieldCheck];
const popular = [
  "family-law",
  "immigration",
  "criminal-defense",
  "personal-injury",
  "real-estate",
  "employment-and-labor",
  "landlord-and-tenant",
  "traffic-tickets",
];

export default function ClientsPage() {
  const clientFaq = faqGroups.find((g) => g.id === "clients")!;
  const tiles = popular.map((slug) => practiceAreas.find((a) => a.slug === slug)!).filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow="For clients"
        title={
          <>
            Post your case. <span className="text-gold-gradient italic">Let attorneys come to you.</span>
          </>
        }
        lead="Describe your situation once, for free. Verified attorneys send their price and approach, and you choose the one that fits."
        visual={<Phone screen="bids" width={290} />}
      >
        <ButtonLink href="/download">Post a case for free</ButtonLink>
        <ButtonLink href="/practice-areas" variant="secondary">
          Browse practice areas
        </ButtonLink>
      </PageHero>

      <section className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] text-gold-400 uppercase">
              <span className="h-px w-6 bg-gold-400/60" /> How it works
            </span>
            <h2 className="font-serif text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.02] text-ivory">
              From your first message to a closed case.
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
            {clientSteps.map((s, i) => (
              <li key={s.title} className="bg-ink-950 p-7 sm:p-8">
                <Reveal delay={(i % 3) * 0.06}>
                  <span className="font-serif text-5xl text-gold-400/40 italic">0{i + 1}</span>
                  <h3 className="mt-3 text-xl font-semibold text-ivory">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-mist">{s.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FeatureRow
        eyebrow="Talk before you hire"
        title="Ask anything. In writing, by voice or on a call."
        body="Every conversation is linked to your case, so nothing gets lost. Send documents and photos, record a voice note, or call the attorney right from the chat."
        bullets={["Read receipts and online status", "Voice notes, documents and photos", "In-app audio calls"]}
        screen="chat"
        reverse
      />

      <section className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-serif text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.02] text-ivory">
              Why people choose <span className="text-gold-gradient italic">LawBid.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clientBenefits.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <Reveal
                  key={b.title}
                  delay={(i % 3) * 0.06}
                  className="rounded-3xl border border-white/8 bg-white/[0.03] p-7"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-gold-400/25 bg-gold-400/10 text-gold-300">
                    <Icon size={22} weight="light" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ivory">{b.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-mist">{b.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl font-serif text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.02] text-ivory">
              Help with almost any legal matter.
            </h2>
            <MoreLink href="/practice-areas">All {practiceAreas.length} practice areas</MoreLink>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {tiles.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 4) * 0.05}>
                <Link
                  href={`/practice-areas#${a.slug}`}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-white/8"
                >
                  <Image
                    src={withBase(a.image)}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
                  <span className="absolute inset-x-4 bottom-3 text-sm font-semibold text-ivory">{a.name}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center font-serif text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.02] text-ivory">
              Questions from clients
            </h2>
          </Reveal>
          <div className="mt-10">
            <FaqList items={clientFaq.items} />
          </div>
          <p className="mt-8 text-center">
            <MoreLink href="/faq">See all questions</MoreLink>
          </p>
        </div>
      </section>

      <Download screen="feed" />
    </>
  );
}
