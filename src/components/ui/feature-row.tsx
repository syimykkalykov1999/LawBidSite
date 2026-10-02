import { Check } from "@phosphor-icons/react/ssr";
import { Phone, type ScreenId } from "@/components/phone/phone";
import { Reveal } from "@/components/ui/reveal";

/** Text on one side, a phone showing the matching app screen on the other. */
export function FeatureRow({
  id,
  eyebrow,
  title,
  body,
  bullets,
  screen,
  reverse = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: readonly string[];
  screen: ScreenId;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-28 overflow-x-clip px-5 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className={reverse ? "lg:order-2" : ""}>
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] text-gold-400 uppercase">
            <span className="h-px w-6 bg-gold-400/60" /> {eyebrow}
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.02] tracking-[-0.015em] text-balance text-ivory">
            {title}
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-mist">{body}</p>
          <ul className="mt-7 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[15px] text-ivory">
                <Check size={18} className="mt-0.5 shrink-0 text-gold-400" /> {b}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className={`relative flex justify-center ${reverse ? "lg:order-1" : ""}`}>
          <div className="glow-gold absolute top-1/2 left-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 opacity-50" />
          <Phone screen={screen} />
        </Reveal>
      </div>
    </section>
  );
}
