import type { Metadata } from "next";
import { Eye, HandCoins, Scales, ShieldCheck } from "@phosphor-icons/react/ssr";
import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { Download } from "@/components/sections/download";
import { practiceAreaCount } from "@/content/practice-areas";

export const metadata: Metadata = {
  title: "About",
  description: "Why we built LawBid: legal help should be easy to find, fairly priced and transparent for everyone.",
  alternates: { canonical: "/about" },
};

const principles = [
  { Icon: Eye, title: "Transparency", body: "Prices, profiles and reviews are visible before anyone commits." },
  {
    Icon: ShieldCheck,
    title: "License checks",
    body: "Attorneys state their license and the states they practice in; LawBid checks it against public registries where it can.",
  },
  { Icon: Scales, title: "Fair competition", body: "Attorneys win clients on merit and price, not on ad budgets." },
  { Icon: HandCoins, title: "Free for people", body: "Clients never pay to post a case or to receive offers." },
];

const numbers = [
  [String(practiceAreaCount), "practice areas"],
  ["50", "U.S. states"],
  ["2", "languages: English and Russian"],
  ["$0", "for clients, always"],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About LawBid"
        title={
          <>
            Legal help, <span className="text-gold-gradient italic">weighed fairly.</span>
          </>
        }
        lead="Finding a lawyer usually means calling around, guessing prices and hoping for the best. We built LawBid so the right attorneys come to you, with their price on the table."
      >
        <ButtonLink href="/contact">Contact us</ButtonLink>
      </PageHero>

      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {numbers.map(([n, l]) => (
            <div key={l} className="bg-ink-950 p-8 text-center">
              <div className="font-serif text-6xl text-gold-300">{n}</div>
              <div className="mt-2 text-sm text-mist">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-serif text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.02] text-ivory">Our mission</h2>
          </Reveal>
          <Reveal delay={0.05} className="space-y-5 text-lg leading-relaxed text-mist">
            <p>
              Everyone deserves a good lawyer at a fair price. Yet most people only learn what a case costs after the
              first consultation, and good attorneys spend their time and budgets chasing clients.
            </p>
            <p>
              LawBid turns this around. A client describes the case once. Attorneys who practice that kind of law, in
              that state, answer with a clear offer. Both sides talk, decide and work together in one app.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-serif text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.02] text-ivory">
              What we stand for
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.06} className="rounded-3xl border border-white/8 bg-white/[0.03] p-7">
                <Icon size={28} weight="light" className="text-gold-300" />
                <h3 className="mt-4 text-lg font-semibold text-ivory">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-mist">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-24">
        <Reveal className="mx-auto max-w-3xl rounded-3xl border border-gold-400/25 bg-gold-400/5 p-8 text-center">
          <h2 className="font-serif text-3xl text-ivory">LawBid is not a law firm</h2>
          <p className="mt-3 leading-relaxed text-mist">
            LawBid is a technology platform. We do not give legal advice and we are not a party to the agreement between
            a client and an attorney. Attorneys on LawBid are independent professionals responsible for their own
            services.
          </p>
        </Reveal>
      </section>

      <Download />
    </>
  );
}
