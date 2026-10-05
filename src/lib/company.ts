import { site } from "@/lib/site";

/** Company details shown in the footer, on /about and /contact, and in the legal pages. */
export const company = {
  legalName: "SiMA LLC",
  doingBusinessAs: "LawBid",
  entityType: "Illinois limited liability company",
  state: "Illinois",
  registrationNumber: "14558764",
  /** Owner must replace this before launch; it is shown verbatim on the site. */
  postalAddress: "[postal address — to be filled in by owner]",
  email: site.supportEmail,
} as const;

/** Version and effective date shared by the agreements added on 2026-10-05. */
export const legalVersion = { version: "1.0", effective: "October 5, 2026" } as const;
