import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

/** Heading and body block shared by the SEO landing pages. */
export function LandingSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-6 font-serif text-3xl text-ivory sm:text-4xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/** Wrapping list of links shown as pills. */
export function LinkPills({ items }: { items: readonly { href: string; label: string }[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((it) => (
        <li key={it.href}>
          <Link
            href={it.href}
            className="block rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-mist transition-colors hover:border-gold-400/40 hover:text-ivory"
          >
            {it.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Plain list of tags (no links). */
export function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((s) => (
        <li key={s} className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-mist">
          {s}
        </li>
      ))}
    </ul>
  );
}

const steps = [
  {
    title: "Post your case",
    text: "Pick the area of law, describe the situation and add documents or photos. It is free.",
  },
  {
    title: "Attorneys bid",
    text: "Independent attorneys who practice that area send bids with their price and approach.",
  },
  { title: "You choose", text: "Compare profiles and offers, chat or call, then hire the attorney you trust." },
];

export function HowItWorks({ subject }: { subject: string }) {
  return (
    <LandingSection title={`How LawBid works for ${subject}`}>
      <ol className="grid gap-4 sm:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-3xl border border-white/8 bg-white/[0.03] p-6">
            <span className="font-serif text-3xl text-gold-300">{i + 1}</span>
            <h3 className="mt-2 text-lg font-medium text-ivory">{s.title}</h3>
            <p className="mt-2 text-mist">{s.text}</p>
          </li>
        ))}
      </ol>
    </LandingSection>
  );
}

export function Breadcrumbs({ items }: { items: readonly { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="px-5">
      <ol className="mx-auto flex max-w-5xl flex-wrap gap-2 text-sm text-mist">
        {items.map((it, i) => (
          <li key={it.name} className="flex gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {it.href ? (
              <Link href={it.href} className="hover:text-ivory">
                {it.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-ivory">
                {it.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
