import { faqs } from "@/content/faq";
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
              name: "Attorney PRO monthly",
              price: String(plans.monthly.price),
              priceCurrency: "USD",
            },
            { "@type": "Offer", name: "Attorney PRO yearly", price: String(plans.yearly.price), priceCurrency: "USD" },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </>
  );
}
