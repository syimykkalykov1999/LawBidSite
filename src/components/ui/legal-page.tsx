import Link from "next/link";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <article className="relative mx-auto max-w-3xl">
      <Link href="/" className="text-sm text-gold-300 hover:underline">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-serif text-5xl text-ivory sm:text-6xl">{title}</h1>
      <p className="mt-3 text-sm text-mist">Last updated: {updated}</p>
      <div className="mt-6 rounded-2xl border border-gold-400/25 bg-gold-400/5 p-4 text-sm text-gold-200">
        Draft template. Have it reviewed by a lawyer in your jurisdiction before publishing.
      </div>
      <div className="mt-10 space-y-6 leading-relaxed text-mist [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:text-ivory [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
        {children}
      </div>
    </article>
  );
}
