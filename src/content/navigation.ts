export type NavLink = { href: string; label: string };

/** Top navigation. Every entry is a real page. */
export const mainNav: readonly NavLink[] = [
  { href: "/clients", label: "For clients" },
  { href: "/attorneys", label: "For attorneys" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

/** Extra links shown in the mobile menu after the main ones. */
export const moreNav: readonly NavLink[] = [
  { href: "/practice-areas", label: "Practice areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerNav: readonly { title: string; links: readonly NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/practice-areas", label: "Practice areas" },
      { href: "/pricing", label: "Pricing" },
      { href: "/download", label: "Download the app" },
    ],
  },
  {
    title: "Use LawBid",
    links: [
      { href: "/clients", label: "For clients" },
      { href: "/attorneys", label: "For attorneys" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/sms-consent", label: "SMS Terms" },
      { href: "/cookies", label: "Cookie Policy" },
      { href: "/dmca", label: "DMCA" },
      { href: "/accessibility", label: "Accessibility" },
    ],
  },
];
