import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "",
  "/clients",
  "/attorneys",
  "/features",
  "/practice-areas",
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
  return routes.map((p) => ({ url: `${site.url}${p}` }));
}
