import { site } from "@/lib/site";

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.54 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.24 2.73 2.2 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.41 1.2-2.47-.03-.01-2.3-.88-2.32-3.5zM14.2 6.13c.6-.74 1.01-1.75.9-2.77-.87.04-1.93.58-2.55 1.31-.56.64-1.05 1.68-.92 2.67.97.08 1.96-.49 2.57-1.21z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path d="M4.2 2.6c-.25.26-.4.67-.4 1.2v16.4c0 .53.15.94.4 1.2l9.1-9.4z" fill="#34c38a" />
      <path d="M16.3 15l-3-3 3-3 3.6 2.07c1.03.6 1.03 1.57 0 2.16z" fill="#e3c877" />
      <path d="M16.3 15l-3-3-9.1 9.4c.34.36.9.4 1.53.05z" fill="#ef6b6b" />
      <path d="M16.3 9L5.73 2.95c-.63-.36-1.19-.31-1.53.05l9.1 9z" fill="#6f8cff" />
    </svg>
  );
}

function StoreButton({ href, top, bottom, icon }: { href: string; top: string; bottom: string; icon: React.ReactNode }) {
  const live = href.length > 0;
  return (
    <a
      href={live ? href : "#download"}
      target={live ? "_blank" : undefined}
      rel={live ? "noopener noreferrer" : undefined}
      aria-label={live ? `${top} ${bottom}` : `${bottom}, coming soon`}
      className="group relative flex min-w-[178px] items-center gap-3 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-2.5 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/60 hover:bg-white/10"
    >
      <span className="text-ivory">{icon}</span>
      <span className="leading-tight">
        <span className="block text-[10px] uppercase tracking-[0.14em] text-mist">{live ? top : "Coming soon on"}</span>
        <span className="block text-[17px] font-semibold text-ivory">{bottom}</span>
      </span>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </a>
  );
}

export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <StoreButton href={site.appStoreUrl} top="Download on the" bottom="App Store" icon={<AppleGlyph />} />
      <StoreButton href={site.playStoreUrl} top="Get it on" bottom="Google Play" icon={<PlayGlyph />} />
    </div>
  );
}
