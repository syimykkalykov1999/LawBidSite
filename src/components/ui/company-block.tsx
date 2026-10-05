import { company } from "@/lib/company";

/** Company identity required on every page: legal name, state, registration number, contact. */
export function CompanyBlock({ className = "" }: { className?: string }) {
  return (
    <address className={`not-italic ${className}`}>
      {company.legalName}, an {company.entityType} (registration no. {company.registrationNumber}), doing business as{" "}
      {company.doingBusinessAs}. {company.postalAddress}. Email:{" "}
      <a href={`mailto:${company.email}`} className="underline">
        {company.email}
      </a>
    </address>
  );
}
