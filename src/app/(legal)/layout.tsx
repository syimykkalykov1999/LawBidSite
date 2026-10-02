import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main id="main" className="relative px-5 pt-36 pb-24">
        <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(201,162,74,0.14),transparent)]" />
        {children}
      </main>
      <Footer />
    </>
  );
}
