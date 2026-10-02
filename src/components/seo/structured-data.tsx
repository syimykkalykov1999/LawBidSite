import type { FaqItem } from "@/content/faq";
import { plans } from "@/content/pricing";
import { site } from "@/lib/site";

/** Serializes JSON-LD safely: "<" is escaped so content can never close the script tag. */
function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** Organization and app details, rendered on the home page. */
export function StructuredData() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.name,
          url: site.url,
          logo: `${site.url}/images/lawbid-icon.png`,
          email: site.supportEmail,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          name: site.name,
          description: site.description,
          operatingSystem: "iOS, Android",
          applicationCategory: "BusinessApplication",
          offers: [
            { "@type": "Offer", name: "Client", price: "0", priceCurrency: "USD" },
            {
              "@type": "Offer",
              name: `Attorney ${plans.monthly.name}`,
              price: String(plans.monthly.price),
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: `Attorney ${plans.yearly.name}`,
              price: String(plans.yearly.price),
              priceCurrency: "USD",
            },
          ],
        }}
      />
    </>
  );
}

/** FAQPage markup. Render only where the same questions are visible. */
export function FaqStructuredData({ items }: { items: readonly FaqItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}
