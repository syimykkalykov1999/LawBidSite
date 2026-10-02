import { Hero } from "@/components/sections/hero";
import { PracticeMarquee } from "@/components/sections/practice-marquee";
import { Statement } from "@/components/sections/statement";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { Attorneys } from "@/components/sections/attorneys";
import { Pricing } from "@/components/sections/pricing";
import { Download } from "@/components/sections/download";
import { Faq } from "@/components/sections/faq";
import { StructuredData } from "@/components/seo/structured-data";

export default function Home() {
  return (
    <>
      <Hero />
      <PracticeMarquee />
      <Statement />
      <HowItWorks />
      <Features />
      <Attorneys />
      <Pricing />
      <Download />
      <Faq />
      <StructuredData />
    </>
  );
}
