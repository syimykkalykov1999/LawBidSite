import type { MetadataRoute } from "next";
import { practiceAreas } from "@/content/practice-areas";
import { stateLandingAreas } from "@/content/seo-landing";
import { states } from "@/content/states";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "",
  "/clients",
  "/attorneys",
  "/features",
  "/practice-areas",
  "/lawyers",
  "/pricing",
  "/faq",
  "/about",
  "/contact",
  "/download",
  "/terms",
  "/privacy",
  "/delete-account",
  "/client-agreement",
  "/attorney-agreement",
  "/eula",
  "/refunds",
  "/third-party-services",
  "/cookies",
  "/sms-consent",
  "/dmca",
  "/accessibility",
];

// No lastModified: the site rebuilds every 6 hours, and a date that changes on every
// build without the page changing teaches Google to ignore it.
export default function sitemap(): MetadataRoute.Sitemap {
  const landing = [
    ...practiceAreas.map((a) => `/practice-areas/${a.slug}`),
    ...states.map((s) => `/lawyers/${s.slug}`),
    ...states.flatMap((s) => stateLandingAreas.map((a) => `/lawyers/${s.slug}/${a.slug}`)),
  ];
  return [...routes, ...landing].map((p) => ({ url: `${site.url}${p}` }));
}
