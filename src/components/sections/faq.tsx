import { SectionHeading } from "@/components/ui/section-heading";
import { FaqList } from "@/components/ui/faq-list";
import { MoreLink } from "@/components/ui/button-link";
import { topFaqs } from "@/content/faq";

export function Faq() {
  return (
    <section id="faq" className="relative px-5 py-28 sm:py-36">
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Questions, <span className="text-gold-gradient italic">answered.</span>
          </>
        }
      />
      <div className="mx-auto mt-14 max-w-3xl">
        <FaqList items={topFaqs} />
      </div>
      <p className="mt-8 text-center">
        <MoreLink href="/faq">See all questions</MoreLink>
      </p>
    </section>
  );
}
