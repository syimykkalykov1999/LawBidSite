import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { PracticeMarquee } from "@/components/marquee";
import { Statement } from "@/components/statement";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Attorneys } from "@/components/attorneys";
import { Download } from "@/components/download";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PracticeMarquee />
        <Statement />
        <HowItWorks />
        <Features />
        <Attorneys />
        <Download />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
