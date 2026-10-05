// Screens of the LawBid app recreated from apps/mobile (dark theme). Every screen is a
// flex column on a 390x856 canvas; the phone frame scales it down.
import Image from "next/image";
import {
  AirplaneTakeoff,
  Bank,
  Bell,
  BookmarkSimple,
  Buildings,
  Car,
  CaretDown,
  CaretLeft,
  CaretRight,
  ChatTeardrop,
  Check,
  Checks,
  DotsThree,
  Export,
  Eye,
  FileText,
  Gavel,
  GearSix,
  GlobeHemisphereWest,
  Heart,
  MagnifyingGlass,
  MapPin,
  Microphone,
  Money,
  Newspaper,
  Paperclip,
  PaperPlaneTilt,
  Phone,
  Play,
  Plus,
  PushPin,
  Question,
  Scales,
  SlidersHorizontal,
  SquaresFour,
  Star,
  Translate,
  User,
  UserPlus,
  UsersThree,
  X,
  type Icon,
} from "@phosphor-icons/react";
import {
  Avatar,
  BottomNav,
  Chip,
  CountPill,
  FeedHeader,
  PillTabs,
  SectionTitle,
  StatusPill,
  TopBar,
  TopicBar,
  Verified,
} from "./app-ui";
import { withBase } from "@/lib/site";
import { ScalesLogo } from "./scales-logo";

const practiceImage = (slug: string) => withBase(`/images/practice/${slug}.webp`);

function Photo({ slug, sizes = "260px" }: { slug: string; sizes?: string }) {
  return <Image src={practiceImage(slug)} alt="" fill sizes={sizes} className="object-cover" unoptimized />;
}

const feedTopics = [
  { label: "All", Icon: SquaresFour },
  { label: "News", Icon: Newspaper },
  { label: "Immigration", Icon: AirplaneTakeoff },
  { label: "Family Law", Icon: UsersThree },
  { label: "Traffic Tickets", Icon: Car },
] as const;

const caseTopics = [
  { label: "All", Icon: SquaresFour },
  { label: "Not sure of the qualification", Icon: Question },
  { label: "Family Law", Icon: UsersThree },
] as const;

function IconCount({ Icon: I, count, weight = "light" }: { Icon: Icon; count?: string; weight?: "light" | "fill" }) {
  return (
    <span className="flex items-center">
      <span className={`grid h-[44px] w-[44px] place-items-center ${weight === "fill" ? "" : "text-app-text"}`}>
        <I size={26} weight={weight} />
      </span>
      {count && <span className="-ml-[6px] pr-[8px] text-[14px] font-medium text-app-text">{count}</span>}
    </span>
  );
}

/** Keeps the end of a card clear of the floating bottom nav, like the app's list padding. */
function NavSpacer() {
  return <div className="h-[92px] shrink-0" />;
}

/* ------------------------------------------------------------------ Feed (client) */

export function FeedScreen() {
  return (
    <>
      <FeedHeader />
      <TopicBar topics={feedTopics} />
      <article className="flex min-h-0 flex-1 flex-col border-y border-app-border bg-app-surface">
        <div className="flex shrink-0 items-center pt-[12px] pr-[4px] pb-[12px] pl-[16px]">
          <Avatar initials="SK" ring />
          <div className="ml-[12px] min-w-0 flex-1">
            <div className="flex items-center gap-[4px] text-[14px] font-semibold text-app-text">
              Sarah Klein <Verified />
            </div>
            <div className="text-[11px] text-app-muted">Attorney · Registry match</div>
          </div>
          <span className="flex h-[36px] items-center gap-[4px] rounded-full bg-white px-[16px] text-[14px] font-semibold text-app-bg">
            <UserPlus size={20} weight="light" /> Follow
          </span>
          <span className="grid h-[44px] w-[44px] place-items-center text-app-text">
            <DotsThree size={20} weight="light" />
          </span>
        </div>
        <div className="flex shrink-0 flex-wrap gap-[8px] px-[16px] pb-[8px]">
          <span className="flex items-center gap-[6px] rounded-full bg-app-navy px-[12px] py-[6px] text-[11px] font-semibold text-white">
            <AirplaneTakeoff size={15} weight="light" className="text-app-gold-light" /> Immigration
          </span>
          {["Green Card", "Marriage"].map((t) => (
            <span
              key={t}
              className="rounded-full bg-app-muted/10 px-[12px] py-[6px] text-[11px] font-medium text-app-muted"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="line-clamp-3 shrink-0 px-[16px] text-[24px] leading-[1.25] font-bold text-app-text">
          Marriage green card: 5 mistakes that delay the interview
        </h3>
        <p className="mt-[8px] line-clamp-3 shrink-0 px-[16px] text-[14px] leading-[1.45] text-app-text">
          Most delays come from thin evidence of a real marriage. Here is what officers ask for and how to prepare your
          file before the interview.
        </p>
        <span className="mt-[8px] flex shrink-0 items-center px-[16px] text-[14px] font-semibold text-app-gold-dark">
          Read more <CaretRight size={20} weight="light" />
        </span>
        <div className="relative mt-[12px] min-h-0 flex-1">
          <Photo slug="immigration" />
        </div>
        <div className="flex shrink-0 items-center px-[4px]">
          <span className="text-app-danger">
            <IconCount Icon={Heart} weight="fill" count="248" />
          </span>
          <IconCount Icon={ChatTeardrop} count="36" />
          <IconCount Icon={PaperPlaneTilt} count="12" />
          <span className="flex flex-1 items-center justify-end gap-[8px] text-[11px] text-app-muted">
            56 min ago <GlobeHemisphereWest size={14} weight="light" />
          </span>
          <IconCount Icon={BookmarkSimple} />
        </div>
        <div className="h-[4px]" />
      </article>
      <NavSpacer />
      <BottomNav active="feed" />
    </>
  );
}

/* ------------------------------------------------------- Cases tab (attorney) */

export function CasesScreen({ bidPlaced = false }: { bidPlaced?: boolean }) {
  return (
    <>
      <FeedHeader>
        <span className="mr-[8px] ml-[12px] flex flex-1">
          <PillTabs items={["Posts", "Cases"]} selected={1} />
        </span>
      </FeedHeader>
      <TopicBar topics={caseTopics} />
      <article className="flex min-h-0 flex-1 flex-col border-y border-app-gold/55 bg-app-surface shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
        <div className="shrink-0 px-[16px] pt-[16px] pb-[12px]">
          <div className="flex items-center gap-[8px]">
            <span className="flex items-center gap-[6px] rounded-full border border-app-gold/70 bg-app-gold-tint px-[10px] py-[5px] text-[11px] font-semibold text-app-text">
              <UsersThree size={15} weight="light" className="text-app-gold-dark" /> Family Law
            </span>
            <span className="flex items-center gap-[6px] rounded-full border border-app-border bg-app-surface/60 px-[10px] py-[5px] text-[11px] text-app-muted">
              <MapPin size={14} weight="light" /> Austin, TX
            </span>
            <span className="ml-auto text-[11px] font-bold text-app-gold-dark">NEW</span>
          </div>
          <h3 className="mt-[12px] line-clamp-3 text-[24px] leading-[1.25] font-bold text-app-text">
            Custody change after my ex moved to another state
          </h3>
          <p className="mt-[8px] line-clamp-3 text-[14px] leading-[1.45] text-app-text">
            She moved to Colorado with our daughter without notice. I need to modify the custody order and keep my
            visitation schedule.
          </p>
          <div className="mt-[12px] flex items-center">
            <Money size={20} weight="light" className="text-app-gold-dark" />
            <span className="ml-[4px] flex-1 text-[14px] font-semibold text-app-text">$2,500</span>
            <span className="flex items-center gap-[4px] text-[13px] text-app-muted">
              <Eye size={16} weight="light" /> 143
            </span>
            <span className="ml-[12px] flex items-center gap-[4px] text-[13px] text-app-muted">
              <Gavel size={16} weight="light" /> {bidPlaced ? 5 : 4}
            </span>
          </div>
          {bidPlaced && (
            <div className="mt-[8px]">
              <StatusPill tone="gold">You placed a bid</StatusPill>
            </div>
          )}
        </div>
        <div className="relative min-h-0 flex-1">
          <Photo slug="family-law" />
        </div>
        <div className="flex shrink-0 items-center px-[4px]">
          <IconCount Icon={ChatTeardrop} count="3" />
          <IconCount Icon={PaperPlaneTilt} count="1" />
          <span className="flex-1 text-right text-[11px] text-app-muted">12 min ago</span>
          <span className={bidPlaced ? "text-app-gold" : ""}>
            <IconCount Icon={BookmarkSimple} weight={bidPlaced ? "fill" : "light"} />
          </span>
        </div>
      </article>
      <NavSpacer />
      <BottomNav active="feed" />
    </>
  );
}

/* ------------------------------------------------------ My case: bids (client) */

const bids = [
  {
    initials: "SK",
    name: "Sarah Klein",
    rating: "4.9 · 27 reviews",
    price: "$1,500",
    status: { tone: "gold", label: "Your move" },
    start: "Can start now",
    message: "I have handled 40+ interstate custody cases. We file in Texas first, since it is the home state.",
    round: 1,
  },
  {
    initials: "DO",
    name: "Daniel Ortiz",
    rating: "4.8 · 15 reviews",
    price: "$250/hr",
    status: { tone: "info", label: "Waiting for the attorney" },
    start: "Within a week",
    message: "Former family court mediator. I can try mediation before we go to court.",
    round: 2,
  },
  {
    initials: "AH",
    name: "Amira Hassan",
    rating: "5.0 · 41 reviews",
    price: "Free consultation",
    status: { tone: "gold", label: "Your move" },
    start: "Can start now",
    message: "Let us talk for 30 minutes first, then I will send a fixed fee.",
    round: 1,
  },
] as const;

export function MyCaseScreen() {
  return (
    <>
      <TopBar>
        <span className="font-serif text-[24px] font-semibold text-app-text">My case</span>
      </TopBar>
      <div className="min-h-0 flex-1 overflow-hidden px-[22px] pt-[16px]">
        <div className="flex items-center gap-[6px] text-[13px] font-semibold text-app-gold-dark">
          <Scales size={16} weight="light" /> Family Law
        </div>
        <h3 className="mt-[8px] font-serif text-[26px] leading-[1.2] font-semibold text-app-text">
          Custody change after my ex moved to another state
        </h3>
        <div className="mt-[12px] flex items-center gap-[8px]">
          <StatusPill tone="info">Open</StatusPill>
          <span className="text-[13px] text-app-muted">Published Sep 28, 2026</span>
        </div>
        <div className="mt-[24px]">
          <SectionTitle>Bids · 3</SectionTitle>
        </div>
        <div className="mt-[12px] flex gap-[8px]">
          <Chip selected>Newest</Chip>
          <Chip>Lowest price</Chip>
          <Chip>Top rated</Chip>
        </div>
        <div className="mt-[12px] flex flex-col gap-[12px]">
          {bids.map((b) => (
            <div
              key={b.name}
              className="rounded-[16px] border border-app-border bg-app-surface p-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-[12px]">
                <Avatar initials={b.initials} />
                <div>
                  <div className="flex items-center gap-[4px] text-[14px] font-semibold text-app-text">
                    {b.name} <Verified />
                  </div>
                  <div className="flex items-center gap-[2px] text-[11px] text-app-muted">
                    <Star size={14} weight="fill" className="text-app-gold" /> {b.rating}
                  </div>
                </div>
              </div>
              <div className="mt-[12px] flex items-center justify-between gap-[8px]">
                <span className="font-serif text-[17px] font-semibold text-app-text tabular-nums">{b.price}</span>
                <StatusPill tone={b.status.tone}>{b.status.label}</StatusPill>
              </div>
              <div className="mt-[4px] text-[11px] text-app-muted">{b.start}</div>
              <p className="mt-[8px] line-clamp-2 text-[14px] leading-[1.45] text-app-text">{b.message}</p>
              <div className="mt-[12px] flex items-center gap-[4px]">
                {[1, 2, 3].map((r) => (
                  <span
                    key={r}
                    className={`h-[4px] w-[12px] rounded-full ${r <= b.round ? "bg-app-gold" : "bg-app-border"}`}
                  />
                ))}
                <span className="ml-[4px] text-[11px] text-app-muted">Round {b.round} of 3</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ---------------------------------------------------------------- Chat thread */

function Bubble({
  mine = false,
  time,
  seen = false,
  children,
}: {
  mine?: boolean;
  time: string;
  seen?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[78%] px-[12px] pt-[8px] pb-[4px] text-[14px] leading-[1.35] ${
          mine
            ? "rounded-[18px] rounded-br-[4px] bg-app-gold text-app-bg"
            : "rounded-[18px] rounded-bl-[4px] border border-app-border bg-app-surface text-app-text"
        }`}
      >
        {children}
        <div className="mt-[2px] flex items-center justify-end gap-[3px] text-[11px] opacity-70">
          {time}
          {mine && (seen ? <Checks size={14} weight="light" /> : <Check size={14} weight="light" />)}
        </div>
      </div>
    </div>
  );
}

const wave = [
  6, 10, 16, 12, 20, 26, 18, 12, 8, 14, 22, 28, 20, 14, 10, 16, 24, 18, 12, 8, 12, 18, 26, 20, 14, 10, 8, 12, 16, 22,
  18, 12, 10, 14, 20, 16, 12, 8, 10, 14, 18, 12, 8, 6, 10, 8, 6, 4,
];

export function ChatScreen() {
  return (
    <>
      <TopBar
        right={
          <span className="flex">
            <span className="grid h-[44px] w-[44px] place-items-center text-app-text">
              <Phone size={20} weight="light" />
            </span>
            <span className="grid h-[44px] w-[36px] place-items-center text-app-text">
              <DotsThree size={20} weight="light" />
            </span>
          </span>
        }
      >
        <Avatar initials="SK" size={36} ring />
        <div className="min-w-0">
          <div className="flex items-center gap-[4px] text-[14px] font-semibold text-app-text">
            Sarah Klein <Verified size={14} />
          </div>
          <div className="truncate text-[11px]">
            <span className="font-semibold text-app-gold">online</span>
            <span className="text-app-muted"> · </span>
            <span className="text-app-gold-dark">Custody change</span>
          </div>
        </div>
      </TopBar>
      <div className="flex min-h-0 flex-1 flex-col justify-end gap-[6px] overflow-hidden px-[22px] py-[12px]">
        <div className="my-[6px] flex items-center gap-[10px] text-[11px] text-app-muted">
          <span className="h-px flex-1 bg-app-border" /> Today <span className="h-px flex-1 bg-app-border" />
        </div>
        <div className="flex justify-center">
          <span className="flex items-center gap-[6px] rounded-full border border-app-gold-stroke bg-app-gold-tint px-[12px] py-[8px] text-[11px] font-semibold text-app-text">
            <Gavel size={14} weight="light" className="text-app-gold-dark" /> Offer accepted · $1,500
          </span>
        </div>
        <Bubble time="9:12 AM">Thanks for choosing me, Michael. Could you send the current custody order?</Bubble>
        <Bubble mine seen time="9:14 AM">
          Sure, here it is. She moved on September 3.
        </Bubble>
        <div className="flex">
          <div className="w-[240px] rounded-[18px] rounded-bl-[4px] border border-app-border bg-app-surface px-[12px] pt-[8px] pb-[6px]">
            <div className="flex items-center gap-[8px]">
              <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full bg-app-gold">
                <Play size={26} weight="fill" className="text-app-navy" />
              </span>
              <span className="flex h-[28px] flex-1 items-center gap-[2px] overflow-hidden">
                {wave.map((h, i) => (
                  <span
                    key={i}
                    className={`w-[2px] shrink-0 rounded-full ${i < 14 ? "bg-app-gold" : "bg-app-text/35"}`}
                    style={{ height: h }}
                  />
                ))}
              </span>
            </div>
            <div className="mt-[2px] flex items-center gap-[6px] pl-[50px] text-[11px] text-app-text/80">
              0:12 <span className="h-[6px] w-[6px] rounded-full bg-app-gold" />
              <span className="ml-auto text-app-text/70">9:20 AM</span>
            </div>
          </div>
        </div>
        <Bubble mine seen time="9:21 AM">
          When can we file?
        </Bubble>
        <Bubble time="9:22 AM">This week. I will send you the draft motion by Thursday.</Bubble>
      </div>
      <div className="flex items-center gap-[4px] bg-app-surface pt-[8px] pr-[8px] pb-[30px] pl-[4px]">
        <span className="grid h-[44px] w-[44px] place-items-center text-app-gold-dark">
          <Paperclip size={20} weight="light" />
        </span>
        <span className="flex h-[46px] flex-1 items-center rounded-[24px] border border-app-border bg-app-bg px-[12px] text-[14px] text-app-muted">
          Message…
        </span>
        <span className="ml-[4px] grid h-[48px] w-[48px] place-items-center rounded-full bg-app-gold">
          <Microphone size={24} weight="fill" className="text-app-navy" />
        </span>
      </div>
    </>
  );
}

/* ------------------------------------------------------------ Attorney profile */

function ChipRow({ Icon: I, chips }: { Icon: Icon; chips: readonly React.ReactNode[] }) {
  return (
    <div className="flex items-center gap-[8px]">
      <I size={20} weight="light" className="shrink-0 text-app-gold-dark" />
      <div className="flex gap-[4px] overflow-hidden">
        {chips.map((c, i) => (
          <Chip key={i}>{c}</Chip>
        ))}
      </div>
    </div>
  );
}

const gridTiles = ["family-law", null, "estate-planning-and-probate", "elder-law", "civil-litigation", "real-estate"];

export function ProfileScreen({ own = false }: { own?: boolean }) {
  return (
    <>
      {own ? (
        <div className="flex h-[56px] items-center bg-app-bg px-[8px]">
          <span className="grid w-[44px] place-items-center">
            <ScalesLogo width={40} />
          </span>
          <span className="flex-1 text-center font-serif text-[24px] font-bold text-app-text">@sarahklein</span>
          <span className="grid h-[44px] w-[44px] place-items-center text-app-text">
            <GearSix size={24} weight="light" />
          </span>
        </div>
      ) : (
        <TopBar>
          <span className="flex-1 pr-[40px] text-center font-serif text-[24px] font-bold text-app-text">
            @sarahklein
          </span>
        </TopBar>
      )}
      <div className="min-h-0 flex-1 overflow-hidden px-[22px] pt-[8px]">
        <div className="flex items-center gap-[12px]">
          <span className="rounded-full bg-gradient-to-br from-app-gold-light via-app-gold to-app-gold-dark p-[3px]">
            <span className="block rounded-full border-2 border-app-bg">
              <Avatar initials="SK" size={84} />
            </span>
          </span>
          {[
            ["128", "Posts"],
            ["2.4K", "Followers"],
            ["87", "Following"],
          ].map(([v, l]) => (
            <div key={l} className="flex flex-1 flex-col items-center">
              <span className="text-[14px] font-bold text-app-text">{v}</span>
              <span className="text-[11px] text-app-muted">{l}</span>
            </div>
          ))}
        </div>
        <div className="mt-[8px] flex items-center gap-[4px] text-[14px] font-bold text-app-text">
          Sarah Klein <Verified size={20} />
        </div>
        <p className="mt-[8px] text-[13px] leading-[1.4] text-app-text">
          Family law attorney in Austin. Custody, divorce and adoption. First consultation is free.
        </p>
        <div className="mt-[12px] flex flex-col gap-[8px]">
          <ChipRow Icon={Buildings} chips={["Klein Family Law"]} />
          <ChipRow
            Icon={Gavel}
            chips={[
              <span key="f" className="flex items-center gap-[2px]">
                Family Law · 3 <CaretDown size={16} weight="light" />
              </span>,
              "Estate Planning",
            ]}
          />
          <ChipRow Icon={Bank} chips={["Texas", "California"]} />
          <ChipRow Icon={Translate} chips={["English", "Español"]} />
        </div>
        <div className="mt-[8px] flex gap-[8px]">
          {own ? (
            <span className="flex h-[44px] flex-1 items-center justify-center rounded-[12px] border border-app-border bg-app-surface text-[14px] font-semibold text-app-text">
              Edit
            </span>
          ) : (
            <>
              <span className="flex h-[44px] flex-1 items-center justify-center gap-[4px] rounded-[12px] bg-white text-[14px] font-semibold text-app-bg">
                <UserPlus size={20} weight="light" /> Follow
              </span>
              <span className="flex h-[44px] flex-1 items-center justify-center rounded-[12px] border border-app-border bg-app-surface text-[14px] font-semibold text-app-text">
                Message
              </span>
            </>
          )}
          <span className="grid h-[44px] w-[44px] place-items-center rounded-[12px] border border-app-border bg-app-surface text-app-text">
            <Export size={20} weight="light" />
          </span>
        </div>
        <div className="relative -mx-[22px] mt-[12px] flex h-[44px] border-b border-app-border">
          {[SquaresFour, Newspaper, Star].map((I, i) => (
            <span key={i} className={`grid flex-1 place-items-center ${i === 0 ? "text-app-text" : "text-app-muted"}`}>
              <I size={24} weight="light" />
            </span>
          ))}
          <span className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-app-gold" />
        </div>
        <div className="-mx-[22px] mt-[2px] grid grid-cols-3 gap-[2px]">
          {gridTiles.map((slug, i) =>
            slug ? (
              <div key={i} className="relative aspect-square">
                <Photo slug={slug} sizes="90px" />
              </div>
            ) : (
              <div
                key={i}
                className="aspect-square overflow-hidden bg-app-gold-tint p-[8px] text-[11px] leading-[1.4] text-app-text"
              >
                Moving out of state with your child? The court has to approve it first. Here is how.
              </div>
            ),
          )}
        </div>
      </div>
      {own && <BottomNav active="profile" />}
    </>
  );
}

/* ------------------------------------------------------- Planner (attorney Mine) */

const tasks = [
  {
    kind: "COURT",
    Icon: Gavel,
    time: "10:30 AM",
    title: "Preliminary hearing, Walker case",
    line: { Icon: MapPin, text: "Travis County Courthouse, Room 4B" },
    who: "My task",
    done: false,
  },
  {
    kind: "CALL",
    Icon: Phone,
    time: "1:00 PM",
    title: "Confirm the hearing date with Ms. Diaz",
    line: { Icon: User, text: "Maria Diaz" },
    who: "Emma Reed",
    done: false,
  },
  {
    kind: "DOCUMENTS",
    Icon: FileText,
    time: "4:15 PM",
    title: "Draft the motion to modify custody",
    line: { Icon: Scales, text: "Custody change" },
    who: "My task",
    done: true,
  },
] as const;

export function PlannerScreen() {
  return (
    <>
      <div className="flex px-[22px] py-[8px]">
        <PillTabs items={["Planner", "My bids"]} selected={0} />
      </div>
      <div className="min-h-0 flex-1 overflow-hidden px-[22px] pt-[4px]">
        <div className="flex items-center gap-[8px]">
          <Chip selected>Active</Chip>
          <Chip>Done</Chip>
          <span className="ml-auto flex h-[40px] items-center gap-[4px] rounded-full bg-white px-[14px] text-[13px] font-bold text-app-bg">
            <Plus size={20} weight="light" /> Add a task
          </span>
        </div>
        <p className="mt-[8px] text-[11px] text-app-muted">Double-tap a task to mark it done. Tap for details.</p>
        <div className="mt-[12px] flex items-baseline gap-[6px]">
          <span className="text-[14px] font-bold text-app-text">Today</span>
          <span className="text-[11px] text-app-muted">3</span>
        </div>
        <div className="mt-[8px] flex flex-col gap-[12px]">
          {tasks.map((t) => (
            <div
              key={t.title}
              className="rounded-[16px] border border-app-border bg-app-surface px-[16px] py-[12px] shadow-[0_4px_14px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-[12px]">
                <span className="grid h-[40px] w-[40px] place-items-center rounded-[12px] border border-app-gold/55 bg-app-navy text-app-gold">
                  <t.Icon size={20} weight="light" />
                </span>
                <span className="flex-1 text-[11px] font-bold tracking-[1.1px] text-app-gold-dark">{t.kind}</span>
                <span className="font-serif text-[22px] font-semibold text-app-text">{t.time}</span>
              </div>
              <div className="mt-[12px] text-[14px] font-bold text-app-text">{t.title}</div>
              <div className="mt-[4px] flex items-center gap-[6px] text-[13px] text-app-muted">
                <t.line.Icon size={15} weight="light" className="text-app-gold-dark" /> {t.line.text}
              </div>
              <div className="mt-[10px] flex items-center border-t border-app-border pt-[10px]">
                <User size={14} weight="light" className="text-app-muted" />
                <span className="ml-[4px] flex-1 text-[11px] text-app-muted">{t.who}</span>
                <span className="mr-[8px] text-[11px] font-semibold text-app-muted">{t.done ? "Done" : "Waiting"}</span>
                {t.done ? (
                  <span className="grid h-[24px] w-[24px] place-items-center rounded-full bg-app-gold text-app-navy">
                    <Check size={16} weight="light" />
                  </span>
                ) : (
                  <span className="h-[24px] w-[24px] rounded-full border-[1.8px] border-app-gold-dark/70" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav active="mine" />
    </>
  );
}

/* ------------------------------------------------------------ Mine (client grid) */

const mineTiles = [
  { slug: "family-law", title: "Custody change after a move", bids: 3 },
  { slug: "landlord-and-tenant", title: "Deposit not returned", bids: 1 },
  { slug: "traffic-tickets", title: "Speeding ticket in Dallas", bids: 0 },
  { slug: "immigration", title: "Work visa for my spouse", bids: 5 },
  { slug: "employment-and-labor", title: "Unpaid overtime", bids: 2 },
  { slug: "personal-injury", title: "Rear-ended at a light", bids: 4 },
  { slug: "real-estate", title: "Closing delayed by the seller", bids: 2 },
  { slug: "consumer-protection", title: "Car dealer refuses a refund", bids: 1 },
  { slug: "estate-planning-and-probate", title: "Will for my parents", bids: 3 },
] as const;

export function MineScreen() {
  return (
    <>
      <div className="flex px-[22px] py-[8px]">
        <PillTabs items={["Planner", "Open", "In progress"]} selected={1} />
      </div>
      <div className="mx-[22px] flex h-[44px] shrink-0 items-center gap-[10px] rounded-full border border-app-border bg-app-surface px-[14px]">
        <SlidersHorizontal size={20} weight="light" className="text-app-text" />
        <span className="flex-1 text-[14px] text-app-muted">Search by title</span>
        <MagnifyingGlass size={20} weight="light" className="text-app-gold-dark" />
      </div>
      <div className="flex gap-[8px] px-[22px] py-[12px]">
        <Chip selected>Open</Chip>
        <Chip>Archive</Chip>
      </div>
      <div className="grid min-h-0 flex-1 auto-rows-min grid-cols-3 content-start gap-[2px] overflow-hidden">
        {mineTiles.map((t) => (
          <div key={t.title} className="relative aspect-square overflow-hidden">
            <Photo slug={t.slug} sizes="90px" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-35% to-app-navy/80" />
            <span className="absolute top-[6px] left-[6px] flex items-center gap-[4px] rounded-full bg-app-navy/70 px-[6px] py-[2px] text-[10px] text-white">
              <span className="h-[6px] w-[6px] rounded-full bg-app-info" /> Open
            </span>
            {t.bids > 0 && <CountPill className="absolute top-[6px] right-[6px]">{t.bids}</CountPill>}
            <span className="absolute inset-x-[6px] bottom-[6px] line-clamp-2 text-[11px] font-bold text-white">
              {t.title}
            </span>
          </div>
        ))}
      </div>
      <BottomNav active="mine" />
    </>
  );
}

/* ------------------------------------------------------------------- Chats inbox */

const conversations = [
  {
    initials: "SK",
    name: "Sarah Klein",
    preview: "This week. I will send you the draft motion by Thursday.",
    unread: 2,
    caseTitle: "Custody change",
    time: "9:22 AM",
    online: true,
    pinned: true,
  },
  {
    initials: "DO",
    name: "Daniel Ortiz",
    preview: "You: Thank you, I will think about mediation.",
    unread: 0,
    caseTitle: "Custody change",
    time: "Yesterday",
    online: false,
    pinned: false,
  },
  {
    initials: "JP",
    name: "James Park",
    preview: "🎤 Voice message 0:24",
    unread: 1,
    caseTitle: "Deposit not returned",
    time: "Mon",
    online: true,
    pinned: false,
  },
  {
    initials: "LM",
    name: "Lena Morales",
    preview: "You: Here are the photos of the damage.",
    unread: 0,
    caseTitle: "Rear-ended at a light",
    time: "Sep 26",
    online: false,
    pinned: false,
  },
] as const;

export function InboxScreen() {
  return (
    <>
      <div className="flex h-[56px] items-center px-[8px]">
        <span className="grid h-[44px] w-[44px] place-items-center text-app-text">
          <CaretLeft size={22} weight="light" />
        </span>
        <div className="flex flex-1 justify-center">
          <span className="flex rounded-full border border-app-border bg-app-surface p-[2px]">
            <span className="flex h-[36px] w-[88px] items-center justify-center gap-[4px] rounded-full border border-app-gold-stroke bg-app-gold text-[11px] font-bold text-app-bg">
              Chats
              <span className="grid h-[16px] min-w-[16px] place-items-center rounded-full bg-app-navy px-[4px] text-[10px] font-bold text-app-gold-light">
                3
              </span>
            </span>
          </span>
        </div>
        <span className="grid h-[44px] w-[44px] place-items-center text-app-text">
          <Bell size={28} weight="light" />
        </span>
      </div>
      <div className="flex gap-[8px] overflow-hidden px-[22px] py-[4px]">
        {["All", "Primary", "General", "Waiting", "Requests"].map((f, i) => (
          <span
            key={f}
            className={`flex h-[36px] shrink-0 items-center rounded-full px-[12px] text-[13px] font-semibold ${
              i === 0
                ? "border border-app-gold bg-app-navy text-app-text"
                : "border border-app-border bg-app-surface text-app-text"
            }`}
          >
            {f}
          </span>
        ))}
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-[12px] overflow-hidden px-[22px] pt-[8px]">
        {conversations.map((c) => (
          <div
            key={c.name}
            className={`flex gap-[12px] rounded-[16px] border bg-app-surface p-[12px] ${
              c.unread ? "border-app-gold-stroke" : "border-app-border"
            }`}
          >
            <Avatar initials={c.initials} size={52} ring online={c.online} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-[4px]">
                <span className={`text-[14px] text-app-text ${c.unread ? "font-bold" : "font-semibold"}`}>
                  {c.name}
                </span>
                <Verified size={14} />
                {c.pinned && <PushPin size={14} weight="fill" className="text-app-gold-dark" />}
                <DotsThree size={18} weight="light" className="ml-auto text-app-muted" />
              </div>
              <div className="mt-[2px] flex items-center gap-[6px]">
                {c.preview.startsWith("You:") && <Checks size={16} weight="light" className="shrink-0 text-app-gold" />}
                <span className={`flex-1 truncate text-[13px] ${c.unread ? "text-app-text" : "text-app-muted"}`}>
                  {c.preview}
                </span>
                {c.unread > 0 && <CountPill>{c.unread}</CountPill>}
              </div>
              <div className="mt-[4px] flex items-center">
                <span className="flex min-w-0 items-center gap-[4px] rounded-full bg-app-gold-tint px-[8px] py-[2px] text-[11px] text-app-gold-dark">
                  <Scales size={12} weight="light" /> <span className="truncate">{c.caseTitle}</span>
                </span>
                <span className={`ml-auto pl-[8px] text-[11px] ${c.unread ? "text-app-gold-dark" : "text-app-muted"}`}>
                  {c.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ------------------------------------------------------ New case wizard (client) */

const caseMatches = [
  { label: "Child Custody", caption: "Family Law", selected: true },
  { label: "Child Support", caption: "Family Law" },
  { label: "Relocation with Children", caption: "Family Law" },
  { label: "Indian Child Welfare", caption: "Native American and Tribal Law" },
] as const;

/** "New case" wizard, step 1 of 5: the client searches the practice tree and picks an area. */
export function PostCaseScreen() {
  return (
    <>
      <div className="flex h-[56px] shrink-0 items-center gap-[4px] bg-app-bg pr-[8px]">
        <span className="grid h-[44px] w-[44px] place-items-center text-app-text">
          <X size={24} weight="light" />
        </span>
        <span className="font-serif text-[24px] font-semibold text-app-text">New case</span>
      </div>
      <div className="shrink-0 px-[22px]">
        <div className="flex gap-[4px]">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={`h-[4px] flex-1 rounded-full ${i === 0 ? "bg-app-gold" : "bg-app-border"}`} />
          ))}
        </div>
        <div className="mt-[8px] text-[11px] leading-[1.5] text-app-muted">Step 1 of 5</div>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden px-[22px] pt-[16px]">
        <div className="font-serif text-[26px] leading-[1.2] font-semibold text-app-text">What is your case about?</div>
        <p className="mt-[8px] text-[14px] leading-[1.5] text-app-muted">
          Choose the area of law. Only attorneys who practice it will see the case.
        </p>
        <div className="mt-[24px] text-[13px] leading-[1.45] text-app-muted">Search</div>
        <div className="mt-[8px] flex h-[52px] items-center rounded-[12px] border-[1.5px] border-app-gold bg-app-surface px-[12px]">
          <MagnifyingGlass size={22} weight="light" className="text-app-muted" />
          <span className="ml-[6px] text-[16px] text-app-text">child</span>
          <span className="ml-[1px] h-[20px] w-[1.5px] bg-app-gold" />
        </div>
        <div className="mt-[16px] flex flex-col gap-[8px]">
          {caseMatches.map((m) => {
            const selected = "selected" in m;
            return (
              <div
                key={m.label}
                className={`flex min-h-[48px] items-center rounded-[12px] px-[12px] py-[12px] ${selected ? "border-[1.5px] border-app-gold bg-app-gold-tint" : "border border-app-border bg-app-surface"}`}
              >
                <div className="min-w-0 flex-1">
                  <div className="text-[14px] leading-[1.5] text-app-text">{m.label}</div>
                  <div className="text-[11px] leading-[1.5] text-app-muted">{m.caption}</div>
                </div>
                {selected && (
                  <span className="grid h-[20px] w-[20px] place-items-center rounded-full bg-app-gold text-app-navy">
                    <Check size={13} weight="bold" />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="shrink-0 border-t border-app-border bg-app-bg px-[22px] pt-[12px] pb-[46px]">
        <div className="flex gap-[8px]">
          <span className="grid h-[50px] flex-1 place-items-center rounded-[14px] border border-app-border bg-app-surface text-[15px] font-semibold text-app-text opacity-45">
            Back
          </span>
          <span className="grid h-[50px] flex-1 place-items-center rounded-[14px] bg-app-gold text-[15px] font-semibold text-app-bg">
            Next
          </span>
        </div>
      </div>
    </>
  );
}
