import type { Metadata } from "next";
import { Check, Minus } from "@phosphor-icons/react/ssr";
import { PageHero } from "@/components/ui/page-hero";
import { FaqList } from "@/components/ui/faq-list";
import { Reveal } from "@/components/ui/reveal";
import { Pricing } from "@/components/sections/pricing";
import { Download } from "@/components/sections/download";
import { comparison, plans } from "@/content/pricing";
import { faqGroups } from "@/content/faq";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Free for clients. Attorneys pay $399 a month plus $100 per assistant, or $9,590 a year for Prime with 6 assistants included. 7 days free for verified attorneys.",
  alternates: { canonical: "/pricing" },
};

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check size={18} className="mx-auto text-gold-400" aria-label="Included" />;
  if (value === false) return <Minus size={18} className="mx-auto text-white/25" aria-label="Not included" />;
  return <span className="text-sm text-ivory">{value}</span>;
}

export default function PricingPage() {
  const billing = faqGroups.find((g) => g.id === "billing")!;
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Free for clients. <span className="text-gold-gradient italic">Fair for attorneys.</span>
          </>
        }
        lead="Clients never pay to post a case or to receive bids. Attorneys pay one flat subscription and keep every dollar of their fee."
      />

      <Pricing heading={false} />

      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center font-serif text-[clamp(2rem,4vw,3rem)] text-ivory">Compare plans</h2>
          </Reveal>
          <Reveal delay={0.05} className="mt-10 overflow-x-auto rounded-3xl border border-white/8">
            <table className="w-full min-w-[640px] text-left">
              <caption className="sr-only">What each plan includes</caption>
              <thead>
                <tr className="border-b border-white/8 bg-white/[0.03] text-sm">
                  <th scope="col" className="px-6 py-4 font-medium text-mist">
                    Feature
                  </th>
                  <th scope="col" className="px-4 py-4 text-center font-semibold text-ivory">
                    Client
                    <div className="text-xs font-normal text-mist">Free</div>
                  </th>
                  <th scope="col" className="px-4 py-4 text-center font-semibold text-ivory">
                    {plans.monthly.name}
                    <div className="text-xs font-normal text-mist">${plans.monthly.price}/month</div>
                  </th>
                  <th scope="col" className="px-4 py-4 text-center font-semibold text-gold-300">
                    {plans.yearly.name}
                    <div className="text-xs font-normal text-mist">
                      ${plans.yearly.price.toLocaleString("en-US")}/year
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5 last:border-0">
                    <th scope="row" className="px-6 py-4 text-[15px] font-normal text-ivory">
                      {row.feature}
                    </th>
                    <td className="px-4 py-4 text-center">
                      <Cell value={row.client} />
                    </td>
                    <td className="px-4 py-4 text-center">
                      <Cell value={row.monthly} />
                    </td>
                    <td className="px-4 py-4 text-center">
                      <Cell value={row.prime} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center font-serif text-[clamp(2rem,4vw,3rem)] text-ivory">Billing questions</h2>
          </Reveal>
          <div className="mt-10">
            <FaqList items={billing.items} />
          </div>
        </div>
      </section>

      <Download />
    </>
  );
}
