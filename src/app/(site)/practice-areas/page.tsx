import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { PracticeGrid } from "@/components/sections/practice-grid";
import { Download } from "@/components/sections/download";
import { practiceAreas } from "@/content/practice-areas";

export const metadata: Metadata = {
  title: "Practice areas",
  description: `All ${practiceAreas.length} practice categories on LawBid, from family law and immigration to criminal defense, real estate and tax.`,
  alternates: { canonical: "/practice-areas" },
};

export default function PracticeAreasPage() {
  const specialties = practiceAreas.reduce((n, a) => n + a.specialties.length, 0);
  return (
    <>
      <PageHero
        eyebrow="Practice areas"
        title={
          <>
            {practiceAreas.length} areas of law. <span className="text-gold-gradient italic">One app.</span>
          </>
        }
        lead={`Every case is posted in one of ${practiceAreas.length} categories and ${specialties} sub-specialties, so it reaches attorneys who actually practice that kind of law.`}
      />
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-6xl">
          <PracticeGrid areas={practiceAreas} />
        </div>
      </section>
      <Download />
    </>
  );
}
