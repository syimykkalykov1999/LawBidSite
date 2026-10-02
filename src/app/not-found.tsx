import Link from "next/link";
import { Nav } from "@/components/layout/nav";
import { LogoMark } from "@/components/ui/logo";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="grid min-h-svh place-items-center px-5 text-center">
        <div>
          <LogoMark className="mx-auto h-14 w-14" />
          <p className="mt-8 font-serif text-7xl text-gold-300">404</p>
          <h1 className="mt-4 font-serif text-4xl text-ivory">This page is out of balance.</h1>
          <p className="mx-auto mt-3 max-w-md text-mist">
            The link may be old or mistyped. Everything about LawBid is on the home page.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-[14px] bg-ivory px-6 py-3 font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
          >
            Back to home
          </Link>
        </div>
      </main>
    </>
  );
}
