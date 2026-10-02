import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { FaqList } from "@/components/ui/faq-list";
import { Reveal } from "@/components/ui/reveal";
import { MoreLink } from "@/components/ui/button-link";
import { FaqStructuredData } from "@/components/seo/structured-data";
import { faqGroups, faqs } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about posting cases, bidding, verification, pricing, privacy and safety on LawBid.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Questions, <span className="text-gold-gradient italic">answered.</span>
          </>
        }
        lead="Everything people ask before they post their first case or send their first bid."
      />
      <div className="px-5 pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[220px_1fr]">
          <nav aria-label="FAQ topics" className="lg:sticky lg:top-28 lg:self-start">
            <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {faqGroups.map((g) => (
                <li key={g.id}>
                  <a
                    href={`#${g.id}`}
                    className="block rounded-full border border-white/10 px-4 py-2 text-sm text-mist transition-colors hover:text-ivory lg:rounded-xl lg:border-transparent lg:px-3 lg:hover:bg-white/5"
                  >
                    {g.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-16">
            {faqGroups.map((g) => (
              <section key={g.id} id={g.id} className="scroll-mt-28">
                <Reveal>
                  <h2 className="mb-6 font-serif text-3xl text-ivory sm:text-4xl">{g.title}</h2>
                </Reveal>
                <FaqList items={g.items} defaultOpen={null} />
              </section>
            ))}
            <p className="text-mist">
              Did not find your answer? <MoreLink href="/contact">Contact us</MoreLink>
            </p>
          </div>
        </div>
      </div>
      <FaqStructuredData items={faqs} />
    </>
  );
}
