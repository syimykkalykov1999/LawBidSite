import type { Metadata } from "next";
import {
  ChatsCircle,
  FileText,
  Gavel,
  ListChecks,
  NotePencil,
  Paperclip,
  Phone as PhoneIcon,
  UserCircle,
} from "@phosphor-icons/react/ssr";
import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink, MoreLink } from "@/components/ui/button-link";
import { FeatureRow } from "@/components/ui/feature-row";
import { FaqList } from "@/components/ui/faq-list";
import { Reveal } from "@/components/ui/reveal";
import { Phone } from "@/components/phone/phone";
import { Download } from "@/components/sections/download";
import { assistantDuties, attorneySteps } from "@/content/attorneys";
import { faqGroups } from "@/content/faq";
import { MAX_SEATS, TRIAL_DAYS, plans, usd } from "@/content/pricing";

export const metadata: Metadata = {
  title: "For attorneys",
  description:
    "Get real cases in your practice areas and states, bid with your own fee, and run your practice with a planner and an assistant team. 7 days free for verified attorneys.",
  alternates: { canonical: "/attorneys" },
};

const dutyIcons = [PhoneIcon, ChatsCircle, Paperclip, Gavel, NotePencil, FileText, UserCircle, ListChecks];

export default function AttorneysPage() {
  const faq = [
    ...faqGroups.find((g) => g.id === "attorneys")!.items,
    ...faqGroups.find((g) => g.id === "billing")!.items,
  ];

  return (
    <>
      <PageHero
        eyebrow="For attorneys"
        title={
          <>
            Clients who already <span className="text-gold-gradient italic">need you.</span>
          </>
        }
        lead="No ads, no directories, no commission. People with real cases post them on LawBid, and you decide which ones to bid on."
        visual={<Phone screen="inbox" width={290} />}
      >
        <ButtonLink href="/download">Start {TRIAL_DAYS} days free</ButtonLink>
        <ButtonLink href="/pricing" variant="secondary">
          See pricing
        </ButtonLink>
      </PageHero>

      <section className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] text-gold-400 uppercase">
              <span className="h-px w-6 bg-gold-400/60" /> Getting started
            </span>
            <h2 className="font-serif text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.02] text-ivory">
              From sign-up to your first client.
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-5">
            {attorneySteps.map((s, i) => (
              <li key={s.title} className="bg-ink-950 p-7">
                <Reveal delay={i * 0.05}>
                  <span className="font-serif text-5xl text-gold-400/40 italic">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold text-ivory">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-mist">{s.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FeatureRow
        eyebrow="Cases tab"
        title="Only cases you can actually take."
        body="Your feed has a Cases tab with open cases in your practice areas and licensed states. See the budget, how many attorneys already bid, and how fresh the case is."
        bullets={[
          "Filter by state and topic",
          "Budget, views and bid count on every card",
          "Save cases and come back later",
        ]}
        screen="cases"
      />
      <FeatureRow
        eyebrow="Bidding"
        title="Your fee. Your approach. Your call."
        body="Send a fixed fee, an hourly rate or a free consultation, with your start date and a short note. The client can accept, decline or counter, for up to three rounds."
        bullets={["Unlimited bids on cases", "No commission on your fees", "Chat with the client before and after"]}
        screen="bid"
        reverse
      />
      <FeatureRow
        eyebrow="Profile"
        title="A profile that does the selling."
        body="Your verified badge, firm, practice areas, licensed states and languages, plus posts, legal news and reviews. Clients see all of it before they accept your bid."
        bullets={[
          "Posts and legal news in the feed",
          "Reviews confirmed by shared cases",
          "Reply to reviews in public",
        ]}
        screen="verify"
      />
      <FeatureRow
        eyebrow="Planner"
        title="Hearings, calls and deadlines in one plan."
        body="Create tasks for calls, meetings, court hearings and documents, each with its own steps, place and people. Assign them to yourself or to an assistant."
        bullets={[
          "Today, tomorrow and overdue at a glance",
          "Steps inside each task",
          "Double-tap to mark a task done",
        ]}
        screen="planner"
        reverse
      />

      <section className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.02] text-ivory">
              A team of up to {MAX_SEATS} assistants.
            </h2>
            <p className="mt-5 text-lg text-mist">
              Choose exactly what each assistant may do. Anything that speaks for you, like bids, posts and profile
              edits, waits for your approval.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {assistantDuties.map((d, i) => {
              const Icon = dutyIcons[i];
              return (
                <Reveal
                  key={d.title}
                  delay={(i % 4) * 0.05}
                  className="rounded-3xl border border-white/8 bg-white/[0.03] p-6"
                >
                  <Icon size={24} weight="light" className="text-gold-300" />
                  <h3 className="mt-4 font-semibold text-ivory">{d.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-mist">{d.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:py-28">
        <Reveal className="mx-auto grid max-w-5xl gap-8 rounded-[32px] border border-gold-400/25 bg-gradient-to-br from-navy to-ink-900 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="font-serif text-4xl leading-tight text-ivory sm:text-5xl">One flat plan. No commission.</h2>
            <p className="mt-4 text-lg text-mist">
              {TRIAL_DAYS} days free for verified attorneys, then pay monthly or yearly on Stripe&apos;s secure page.
              Cancel anytime.
            </p>
            <div className="mt-6">
              <MoreLink href="/pricing">Compare plans</MoreLink>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="rounded-2xl border border-white/10 bg-ink-950/60 p-5">
              <div className="text-sm text-mist">{plans.monthly.name}</div>
              <div className="mt-1 font-serif text-3xl text-ivory">
                {usd(plans.monthly.price)}
                <span className="text-base text-mist"> / month</span>
              </div>
              <div className="mt-1 text-sm text-mist">{plans.monthly.seats}</div>
            </div>
            <div className="rounded-2xl border border-gold-400/40 bg-ink-950/60 p-5">
              <div className="text-sm text-gold-300">{plans.yearly.name} · yearly</div>
              <div className="mt-1 font-serif text-3xl text-ivory">
                {usd(plans.yearly.price)}
                <span className="text-base text-mist"> / year</span>
              </div>
              <div className="mt-1 text-sm text-mist">{plans.yearly.seats}</div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center font-serif text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.02] text-ivory">
              Questions from attorneys
            </h2>
          </Reveal>
          <div className="mt-10">
            <FaqList items={faq} />
          </div>
        </div>
      </section>

      <Download screen="mine" />
    </>
  );
}
