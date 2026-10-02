// Building blocks of the LawBid app UI, drawn at the app's real sizes (dp = px) on a
// 390px-wide canvas. Values come from apps/mobile/lib/core/design_system.
import {
  Article,
  CaretLeft,
  ChatsCircle,
  DotsThree,
  Folder,
  MagnifyingGlass,
  Plus,
  SealCheck,
  SlidersHorizontal,
  User,
  type Icon,
} from "@phosphor-icons/react";
import { ScalesLogo } from "./scales-logo";

export type Tab = "feed" | "search" | "mine" | "profile";

/** Floating pill bottom navigation: Feed, Search, [+], Mine, Profile. */
export function BottomNav({ active }: { active?: Tab }) {
  const tab = (key: Tab, label: string, TabIcon: Icon) => {
    const selected = key === active;
    return (
      <div
        className={`mx-[2px] my-[5px] flex flex-1 flex-col items-center justify-center rounded-full ${selected ? "bg-app-gold-tint" : ""}`}
      >
        <TabIcon size={22} weight="light" className={selected ? "text-app-gold-dark" : "text-app-muted"} />
        <span
          className={`mt-[2px] text-[11px] leading-[1.5] ${selected ? "font-bold text-app-text" : "font-medium text-app-muted"}`}
        >
          {label}
        </span>
      </div>
    );
  };
  return (
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-app-bg via-app-bg/90 to-transparent px-[12px] pt-[4px] pb-[26px]">
      <div className="flex h-[60px] items-stretch rounded-full border border-app-border bg-app-surface px-[4px] shadow-[0_6px_18px_rgba(0,0,0,0.4)]">
        {tab("feed", "Feed", Article)}
        {tab("search", "Search", MagnifyingGlass)}
        <div className="flex items-center">
          <span className="mx-[4px] grid h-[42px] w-[42px] place-items-center rounded-full bg-gradient-to-br from-app-gold-light to-app-gold shadow-[0_3px_10px_rgba(201,162,74,0.35)]">
            <Plus size={24} weight="light" className="text-app-navy" />
          </span>
        </div>
        {tab("mine", "Mine", Folder)}
        {tab("profile", "Profile", User)}
      </div>
    </div>
  );
}

/** Small gold count pill used for unread chats and new bids. */
export function CountPill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`grid h-[20px] min-w-[20px] place-items-center rounded-full bg-app-gold px-[5px] text-[10.5px] font-semibold text-app-navy ${className}`}
    >
      {children}
    </span>
  );
}

export function ChatsButton({ count }: { count?: number }) {
  return (
    <span className="relative grid h-[44px] w-[44px] place-items-center text-app-text">
      <ChatsCircle size={24} weight="light" />
      {count ? <CountPill className="absolute top-[4px] right-0">{count}</CountPill> : null}
    </span>
  );
}

/** Feed header for clients: logo, "LawBid" wordmark, chats. */
export function FeedHeader({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex h-[52px] items-center border-b border-app-border bg-app-bg pr-[4px] pl-[8px]">
      <span className="grid w-[44px] place-items-center">
        <ScalesLogo width={children ? 44 : 40} />
      </span>
      {children ?? (
        <span className="flex-1 text-center font-serif text-[26px] font-semibold tracking-[0.4px] text-app-text">
          LawBid
        </span>
      )}
      <ChatsButton count={2} />
    </div>
  );
}

/** Segmented control (pill_tabs.dart): no fill, the selected label is bold. */
export function PillTabs({ items, selected }: { items: readonly string[]; selected: number }) {
  return (
    <div className="flex h-[44px] flex-1 overflow-hidden rounded-[12px] border border-app-border bg-app-surface">
      {items.map((label, i) => (
        <span
          key={label}
          className={`flex flex-1 items-center justify-center px-[10px] text-[15px] whitespace-nowrap ${
            i > 0 ? "border-l border-app-border" : ""
          } ${i === selected ? "font-bold text-app-text" : "font-medium text-app-muted"}`}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

/** Topic slider under the feed header. */
export function TopicBar({ topics }: { topics: readonly { label: string; Icon: Icon; weight?: "fill" }[] }) {
  return (
    <div className="flex h-[60px] items-center gap-[8px] overflow-hidden p-[8px]">
      <span className="grid h-[44px] w-[44px] shrink-0 place-items-center rounded-full border border-app-border bg-app-surface">
        <SlidersHorizontal size={20} weight="light" className="text-app-gold-dark" />
      </span>
      {topics.map(({ label, Icon: TopicIcon, weight }, i) => (
        <span
          key={label}
          className={`flex shrink-0 items-center gap-[6px] rounded-full px-[12px] py-[8px] text-[13px] font-semibold ${
            i === 0
              ? "border-[1.5px] border-app-gold bg-app-navy text-white"
              : "border border-app-border bg-app-surface text-app-text"
          }`}
        >
          <TopicIcon size={18} weight={weight ?? "light"} className={i === 0 ? "text-app-gold-light" : ""} />
          {label}
        </span>
      ))}
    </div>
  );
}

/** Navy avatar with gold initials; verified users get a gold gradient ring. */
export function Avatar({
  initials,
  size = 40,
  ring = false,
  online = false,
}: {
  initials: string;
  size?: number;
  ring?: boolean;
  online?: boolean;
}) {
  const inner = (
    <span
      className="grid shrink-0 place-items-center rounded-full border border-app-gold-stroke/55 bg-app-navy font-serif font-semibold text-app-gold-light"
      style={{ width: size, height: size, fontSize: size * 0.38 }}
    >
      {initials}
    </span>
  );
  return (
    <span className="relative inline-flex shrink-0">
      {ring ? (
        <span className="rounded-full bg-gradient-to-br from-app-gold-light via-app-gold to-app-gold-dark p-[2px]">
          {inner}
        </span>
      ) : (
        inner
      )}
      {online && (
        <span
          className="absolute right-0 bottom-0 rounded-full border-2 border-app-surface bg-app-gold"
          style={{ width: size * 0.26, height: size * 0.26 }}
        />
      )}
    </span>
  );
}

export function Verified({ size = 16 }: { size?: number }) {
  return <SealCheck size={size} weight="fill" className="shrink-0 text-app-info" />;
}

const tones = {
  gold: "bg-app-gold-tint text-app-gold-dark",
  info: "bg-app-info-tint text-app-info",
  success: "bg-app-success-tint text-app-success",
  warning: "bg-app-gold-tint text-app-warning",
} as const;

/** Case and bid status pill: dot plus label. */
export function StatusPill({ tone, children }: { tone: keyof typeof tones; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex items-center gap-[6px] rounded-full px-[10px] py-[4px] text-[10.5px] font-semibold whitespace-nowrap ${tones[tone]}`}
    >
      <span className="h-[6px] w-[6px] rounded-full bg-current" />
      {children}
    </span>
  );
}

/** AppChip: 36px pill, gold border when selected. */
export function Chip({ children, selected = false }: { children: React.ReactNode; selected?: boolean }) {
  return (
    <span
      className={`inline-flex h-[36px] shrink-0 items-center rounded-full bg-app-surface px-[12px] text-[13px] whitespace-nowrap text-app-text ${
        selected ? "border-[1.5px] border-app-gold" : "border border-app-border"
      }`}
    >
      {children}
    </span>
  );
}

/** 56px top bar with a back chevron, used on pushed screens. */
export function TopBar({ children, right }: { children: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div className="flex h-[56px] items-center gap-[4px] bg-app-bg pr-[8px]">
      <span className="grid h-[44px] w-[44px] place-items-center text-app-text">
        <CaretLeft size={22} weight="light" />
      </span>
      <div className="flex min-w-0 flex-1 items-center gap-[8px]">{children}</div>
      {right ?? (
        <span className="grid h-[44px] w-[44px] place-items-center text-app-text">
          <DotsThree size={20} weight="light" />
        </span>
      )}
    </div>
  );
}

/** Section heading on detail screens: serif title with a short gold bar. */
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="font-serif text-[17px] font-semibold text-app-text">{children}</div>
      <div className="mt-[4px] h-[2px] w-[24px] rounded-full bg-app-gold" />
    </div>
  );
}
