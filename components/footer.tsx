import Link from "next/link";
import { Logo } from "./logo";
import { site } from "@/lib/site";

const cols = [
  {
    title: "Product",
    links: [
      ["How it works", "/#how"],
      ["Features", "/#features"],
      ["Download", "/#download"],
      ["FAQ", "/#faq"],
    ],
  },
  {
    title: "Attorneys",
    links: [
      ["Join LawBid", "/#attorneys"],
      ["How bidding works", "/#how"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Terms of Service", "/terms"],
      ["Privacy Policy", "/privacy"],
      ["Cookie Policy", "/cookies"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 px-5 pb-10 pt-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">{site.tagline}</p>
          <a href={`mailto:${site.supportEmail}`} className="mt-4 inline-block text-sm text-gold-300 hover:underline">
            {site.supportEmail}
          </a>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-ivory/60">{c.title}</div>
            <ul className="space-y-2.5">
              {c.links.map(([l, h]) => (
                <li key={l}>
                  <Link href={h} className="text-sm text-mist transition-colors hover:text-ivory">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-16 max-w-6xl border-t border-white/5 pt-6 text-xs leading-relaxed text-mist/70">
        <p>
          LawBid is a technology platform, not a law firm, and does not provide legal advice. Attorneys on LawBid are independent
          professionals responsible for their own services.
        </p>
        <p className="mt-2">© {new Date().getFullYear()} LawBid. All rights reserved.</p>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none mx-auto mt-10 max-w-6xl select-none text-center font-serif text-[22vw] leading-[0.8] text-transparent [-webkit-text-stroke:1px_rgba(226,188,110,0.18)] lg:text-[16rem]"
      >
        LawBid
      </div>
    </footer>
  );
}
