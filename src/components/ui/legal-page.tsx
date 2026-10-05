import Link from "next/link";

export function LegalPage({
  title,
  updated,
  version,
  effective,
  children,
}: {
  title: string;
  updated: string;
  /** Document version, e.g. "1.0". Shown together with the effective date. */
  version?: string;
  effective?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="relative mx-auto max-w-3xl">
      <Link href="/" className="text-sm text-gold-300 hover:underline">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-serif text-5xl text-ivory sm:text-6xl">{title}</h1>
      <p className="mt-3 text-sm text-mist">
        {version ? `Version ${version} · ` : ""}
        {effective ? `Effective ${effective} · ` : ""}Last updated: {updated}
      </p>
      <p className="mt-2 text-sm text-gold-300">
        Draft prepared for review by a licensed US attorney; not legal advice.
      </p>
      <div className="mt-10 space-y-6 leading-relaxed text-mist [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:text-ivory [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
        {children}
      </div>
    </article>
  );
}
