import { MoreLink } from "@/components/ui/button-link";
import { practiceAreaCount, practiceAreaNames } from "@/content/practice-areas";

export function PracticeMarquee() {
  const items = [...practiceAreaNames, ...practiceAreaNames];
  return (
    <section aria-label="Practice areas" className="relative border-y border-white/5 bg-ink-900/40 py-7">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div
          className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]"
          style={{ animationDuration: "160s" }}
        >
          {items.map((a, i) => (
            <span
              key={i}
              aria-hidden={i >= practiceAreaNames.length}
              className="flex items-center gap-10 font-serif text-2xl whitespace-nowrap text-ivory/70 italic sm:text-3xl"
            >
              {a}
              <span className="text-base text-gold-400 not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>
      <p className="mt-5 text-center">
        <MoreLink href="/practice-areas">Browse all {practiceAreaCount} practice areas</MoreLink>
      </p>
    </section>
  );
}
