import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";

/** Primary (white) or secondary (outline) call-to-action link. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const style =
    variant === "primary"
      ? "bg-ivory text-ink-950 hover:scale-[1.03]"
      : "border border-white/15 text-ivory hover:bg-white/5";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-[14px] px-5 py-3 text-[15px] font-semibold transition-[transform,background-color] ${style}`}
    >
      {children}
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

/** Small inline "Learn more" style link in gold. */
export function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
    >
      {children}
      <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
