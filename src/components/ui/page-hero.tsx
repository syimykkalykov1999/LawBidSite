/**
 * Opening block of an inner page: eyebrow, serif title, lead text, optional actions and visual.
 * Everything renders in its final state in the HTML (no entrance fade), so the title is the
 * first thing painted and no script is needed to show it.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  visual,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  children?: React.ReactNode;
  visual?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-5 pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,#10255a_0%,#0a1a3f_40%,#0b0b0d_100%)]" />
      <div className="grid-lines absolute inset-0 -z-10" />
      <div
        className={`mx-auto grid max-w-6xl items-center gap-14 ${visual ? "lg:grid-cols-[1.1fr_0.9fr]" : "text-center"}`}
      >
        <div className={visual ? "" : "mx-auto max-w-3xl"}>
          <span className="mb-5 inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] text-gold-400 uppercase">
            <span className="h-px w-6 bg-gold-400/60" /> {eyebrow}
          </span>
          <h1 className="font-serif text-[clamp(2.6rem,6.5vw,5.2rem)] leading-[0.98] tracking-[-0.02em] text-balance text-ivory">
            {title}
          </h1>
          <p className={`mt-6 max-w-xl text-lg text-balance text-mist ${visual ? "" : "mx-auto"}`}>{lead}</p>
          {children && <div className={`mt-9 flex flex-wrap gap-3 ${visual ? "" : "justify-center"}`}>{children}</div>}
        </div>
        {visual && (
          <div className="relative flex justify-center lg:justify-end">
            <div className="glow-gold absolute top-1/2 left-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 opacity-60" />
            {visual}
          </div>
        )}
      </div>
    </section>
  );
}
