import type { Metadata } from "next";
import { Briefcase, Lifebuoy, Megaphone, ShieldCheck } from "@phosphor-icons/react/ssr";
import { PageHero } from "@/components/ui/page-hero";
import { MoreLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { CompanyBlock } from "@/components/ui/company-block";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get help with the LawBid app, attorney onboarding, press or privacy requests.",
  alternates: { canonical: "/contact" },
};

const topics = [
  {
    Icon: Lifebuoy,
    title: "Help with the app",
    body: "Questions about your account, a case, bids or payments.",
    subject: "Support request",
  },
  {
    Icon: Briefcase,
    title: "Attorneys and firms",
    body: "License checks, subscriptions, assistant teams and onboarding a firm.",
    subject: "Attorney onboarding",
  },
  {
    Icon: ShieldCheck,
    title: "Privacy and data",
    body: "Requests about your personal data, data export or account deletion.",
    subject: "Privacy request",
  },
  {
    Icon: Megaphone,
    title: "Press and partnerships",
    body: "Interviews, media kits and partnership ideas.",
    subject: "Press or partnership",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            We are here <span className="text-gold-gradient italic">to help.</span>
          </>
        }
        lead="Write to us and a real person will answer. Many questions are already answered in the FAQ."
      >
        <MoreLink href="/faq">Read the FAQ first</MoreLink>
      </PageHero>
      <section className="px-5 pb-28">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          {topics.map(({ Icon, title, body, subject }, i) => (
            <Reveal key={title} delay={(i % 2) * 0.06}>
              <a
                href={`mailto:${site.supportEmail}?subject=${encodeURIComponent(subject)}`}
                className="group flex h-full flex-col rounded-3xl border border-white/8 bg-white/[0.03] p-7 transition-colors hover:border-gold-400/40"
              >
                <Icon size={28} weight="light" className="text-gold-300" />
                <h2 className="mt-4 text-xl font-semibold text-ivory">{title}</h2>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-mist">{body}</p>
                <span className="mt-5 text-sm font-medium text-gold-300 group-hover:underline">
                  {site.supportEmail}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-mist">
          LawBid cannot give legal advice. If you need help with a legal matter, post your case in the app and attorneys
          will reply with their offers.
        </p>
        <CompanyBlock className="mx-auto mt-6 max-w-2xl text-center text-sm text-mist" />
      </section>
    </>
  );
}
