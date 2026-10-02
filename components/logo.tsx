export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6e7c1" />
          <stop offset="0.5" stopColor="#e2bc6e" />
          <stop offset="1" stopColor="#b48632" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="9" fill="#0e1428" stroke="url(#lm-g)" strokeOpacity="0.6" />
      <g stroke="url(#lm-g)" strokeWidth="1.6" strokeLinecap="round" fill="none">
        <path d="M16 7v17" />
        <path d="M8 10.5h16" />
        <path d="M12 24h8" />
        <path d="M8 10.5l-3 7h6z" strokeLinejoin="round" />
        <path d="M24 10.5l-3 7h6z" strokeLinejoin="round" />
      </g>
      <circle cx="16" cy="7" r="1.6" fill="url(#lm-g)" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="text-[17px] font-semibold tracking-tight text-ivory">
        Law<span className="text-gold-400">Bid</span>
      </span>
    </span>
  );
}
