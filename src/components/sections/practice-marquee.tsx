import { practiceAreas } from "@/content/practice-areas";

export function PracticeMarquee() {
  const items = [...practiceAreas, ...practiceAreas];
  return (
    <section aria-label="Practice areas" className="relative border-y border-white/5 bg-ink-900/40 py-7">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
          {items.map((a, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-serif text-2xl whitespace-nowrap text-ivory/70 italic sm:text-3xl"
            >
              {a}
              <span className="text-base text-gold-400 not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
