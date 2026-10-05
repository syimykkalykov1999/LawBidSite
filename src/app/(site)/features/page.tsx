import type { Metadata } from "next";
import { BellRinging, DeviceMobile, DownloadSimple, Prohibit } from "@phosphor-icons/react/ssr";
import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { FeatureRow } from "@/components/ui/feature-row";
import { Reveal } from "@/components/ui/reveal";
import { Phone } from "@/components/phone/phone";
import { Download } from "@/components/sections/download";
import { featureSections, safetyFeatures } from "@/content/features";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Cases and bids, a feed of legal posts, chat with voice notes and calls, attorney profiles with license badges and reviews, and a planner for attorneys and their teams.",
  alternates: { canonical: "/features" },
};

const safetyIcons = [Prohibit, DeviceMobile, DownloadSimple, BellRinging];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title={
          <>
            Everything a case needs, <span className="text-gold-gradient italic">in one app.</span>
          </>
        }
        lead="From the first post to the final review: bids, chat, calls, profiles and a planner, built for clients and attorneys alike."
        visual={<Phone screen="feed" width={290} />}
      >
        <ButtonLink href="/download">Get the app</ButtonLink>
        <ButtonLink href="/pricing" variant="secondary">
          See pricing
        </ButtonLink>
      </PageHero>

      <nav aria-label="Features on this page" className="px-5">
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2">
          {featureSections.map((f) => (
            <li key={f.id}>
              <a
                href={`#${f.id}`}
                className="block rounded-full border border-white/10 px-4 py-2 text-sm text-mist transition-colors hover:border-gold-400/40 hover:text-ivory"
              >
                {f.eyebrow}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {featureSections.map((f, i) => (
        <FeatureRow key={f.id} {...f} reverse={i % 2 === 1} />
      ))}

      <section className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-serif text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.02] text-ivory">
              Privacy and safety, <span className="text-gold-gradient italic">built in.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {safetyFeatures.map((s, i) => {
              const Icon = safetyIcons[i];
              return (
                <Reveal
                  key={s.title}
                  delay={i * 0.06}
                  className="rounded-3xl border border-white/8 bg-white/[0.03] p-6"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-gold-400/25 bg-gold-400/10 text-gold-300">
                    <Icon size={22} weight="light" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ivory">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-mist">{s.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Download screen="post" />
    </>
  );
}
