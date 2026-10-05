import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { StoreButtons } from "@/components/ui/store-buttons";
import { Reveal } from "@/components/ui/reveal";
import { Phone } from "@/components/phone/phone";
import { TRIAL_DAYS } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Download the app",
  description: "Get LawBid on iPhone and Android. Free for clients, 7 days free for verified attorneys.",
  alternates: { canonical: "/download" },
};

const steps = [
  { title: "Install LawBid", body: "Download the app from the App Store or Google Play." },
  { title: "Choose your role", body: "Sign up as a client, or as an attorney and add your bar license." },
  { title: "Post or bid", body: "Clients post a case for free. Attorneys open the Cases tab and send bids." },
];

const facts = [
  "Free for clients",
  `${TRIAL_DAYS} days free for verified attorneys`,
  "English and Russian",
  "Dark and light themes",
];

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Download"
        title={
          <>
            Your next lawyer is <span className="text-gold-gradient italic">one bid away.</span>
          </>
        }
        lead="LawBid is a mobile app for iPhone and Android. Install it, choose your role and you are ready in a few minutes."
        visual={
          <div className="relative flex items-end justify-center">
            <Phone
              screen="chat"
              width={230}
              className="relative -mr-16 hidden translate-y-6 -rotate-6 opacity-90 sm:block"
            />
            <Phone screen="feed" width={280} className="relative z-10" />
            <Phone
              screen="cases"
              width={230}
              className="relative -ml-16 hidden translate-y-6 rotate-6 opacity-90 sm:block"
            />
          </div>
        }
      >
        <StoreButtons />
      </PageHero>

      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <ol className="grid gap-4 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <li className="h-full rounded-3xl border border-white/8 bg-white/[0.03] p-7">
                  <span className="font-serif text-5xl text-gold-400/40 italic">0{i + 1}</span>
                  <h2 className="mt-3 text-xl font-semibold text-ivory">{s.title}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-mist">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <ul className="mt-12 flex flex-wrap justify-center gap-3">
            {facts.map((f) => (
              <li key={f} className="rounded-full border border-white/10 px-4 py-2 text-sm text-mist">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
