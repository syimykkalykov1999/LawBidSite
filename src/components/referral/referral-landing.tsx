"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Copy, DeviceMobile } from "@phosphor-icons/react";
import { LogoMark } from "@/components/ui/logo";
import { AppStoreButton, PlayStoreButton } from "@/components/ui/store-buttons";
import { referralLinks } from "@/lib/referral";

type Lang = "en" | "ru";

const copy = {
  en: {
    eyebrow: "Invitation",
    title: "You are invited to LawBid",
    lead: "LawBid is the legal marketplace: clients post a case for free, licensed attorneys compete with transparent bids. Install the app and the invitation code below will be applied to your account.",
    codeLabel: "Your invitation code",
    copy: "Copy",
    copied: "Copied",
    openApp: "Open in the app",
    openAppHint: "Already installed? This opens LawBid straight at the invitation screen.",
    storesTitle: "Don't have the app yet?",
    appStore: { top: "Download on the", bottom: "App Store", comingSoon: "Coming soon on" },
    play: { top: "Get it on", bottom: "Google Play", comingSoon: "Coming soon on" },
    howTitle: "How it works",
    steps: [
      "Install LawBid from Google Play or the App Store.",
      "Sign up and choose your role: client or attorney.",
      "On Android the code is applied by itself after the install. On iPhone enter it when the app asks for an invitation code.",
    ],
    home: "About LawBid",
    langLabel: "Language",
  },
  ru: {
    eyebrow: "Приглашение",
    title: "Вас пригласили в LawBid",
    lead: "LawBid — это юридический маркетплейс: клиенты бесплатно публикуют дело, лицензированные адвокаты предлагают свои условия открыто. Установите приложение, и код приглашения ниже применится к вашему аккаунту.",
    codeLabel: "Ваш код приглашения",
    copy: "Скопировать",
    copied: "Скопировано",
    openApp: "Открыть в приложении",
    openAppHint: "Уже установлено? Эта кнопка откроет LawBid сразу на экране приглашения.",
    storesTitle: "Ещё нет приложения?",
    appStore: { top: "Загрузите в", bottom: "App Store", comingSoon: "Скоро в" },
    play: { top: "Доступно в", bottom: "Google Play", comingSoon: "Скоро в" },
    howTitle: "Как это работает",
    steps: [
      "Установите LawBid из Google Play или App Store.",
      "Зарегистрируйтесь и выберите роль: клиент или адвокат.",
      "На Android код применится сам после установки. На iPhone введите его, когда приложение спросит код приглашения.",
    ],
    home: "О LawBid",
    langLabel: "Язык",
  },
} as const;

const LANG_KEY = "lawbid.lang";

function detectLang(): Lang {
  try {
    const saved = window.localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ru") return saved;
  } catch {
    // Storage may be blocked; fall through to the browser language.
  }
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return languages.some((l) => /^ru\b/i.test(l ?? "")) ? "ru" : "en";
}

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Fall back to the selection API below.
  }
  try {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  } catch {
    return false;
  }
}

export function ReferralLanding({ code }: { code: string }) {
  // Rendered only in the browser (the 404 page swaps it in after reading the URL), so the
  // language can be picked right away instead of in an effect.
  const [lang, setLang] = useState<Lang>(() => (typeof window === "undefined" ? "en" : detectLang()));
  const [copied, setCopied] = useState(false);
  const t = copy[lang];
  const links = referralLinks(code);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  function chooseLang(next: Lang) {
    setLang(next);
    try {
      window.localStorage.setItem(LANG_KEY, next);
    } catch {
      // Not persisted; the toggle still works for this page view.
    }
  }

  return (
    <section lang={lang} className="relative overflow-hidden px-5 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,#10255a_0%,#0a1a3f_40%,#0b0b0d_100%)]" />
      <div className="grid-lines absolute inset-0 -z-10" />

      <div className="mx-auto max-w-2xl text-center">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] text-gold-400 uppercase">
            <span className="h-px w-6 bg-gold-400/60" /> {t.eyebrow}
          </span>
          <div
            role="group"
            aria-label={t.langLabel}
            className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-0.5 text-xs font-semibold"
          >
            {(["en", "ru"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => chooseLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-3 py-1.5 uppercase transition-colors ${
                  lang === l ? "bg-ivory text-ink-950" : "text-mist hover:text-ivory"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <LogoMark className="mx-auto mt-10 h-16 w-16" />
        <h1 className="mt-6 font-serif text-[clamp(2.4rem,6vw,4.4rem)] leading-[1] tracking-[-0.02em] text-balance text-ivory">
          {t.title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-balance text-mist">{t.lead}</p>

        <div className="grain relative mt-10 overflow-hidden rounded-[28px] border border-gold-400/25 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 px-6 py-8 sm:px-10">
          <div className="glow-gold absolute -top-40 -right-40 h-80 w-80 opacity-70" />
          <p className="relative text-xs font-medium tracking-[0.22em] text-gold-400 uppercase">{t.codeLabel}</p>
          <p className="relative mt-3 font-mono text-[clamp(1.9rem,7vw,3.2rem)] font-semibold tracking-[0.18em] break-all text-ivory select-all">
            {code}
          </p>
          <div className="relative mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={async () => {
                if (await copyText(code)) setCopied(true);
              }}
              aria-live="polite"
              className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-[14px] border border-white/15 px-5 py-3 text-[15px] font-semibold text-ivory transition-colors hover:bg-white/5"
            >
              {copied ? <Check size={18} className="text-mint" /> : <Copy size={18} />}
              {copied ? t.copied : t.copy}
            </button>
            <a
              href={links.app}
              className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-[14px] bg-ivory px-5 py-3 text-[15px] font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
            >
              <DeviceMobile size={18} />
              {t.openApp}
            </a>
          </div>
          <p className="relative mt-4 text-sm text-mist">{t.openAppHint}</p>
        </div>

        <h2 className="mt-12 text-sm font-medium tracking-[0.18em] text-mist uppercase">{t.storesTitle}</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <PlayStoreButton href={links.play} labels={t.play} />
          <AppStoreButton href={links.appStore} labels={t.appStore} />
        </div>

        <h2 className="mt-14 font-serif text-2xl text-ivory">{t.howTitle}</h2>
        <ol className="mt-5 grid gap-3 text-left sm:grid-cols-3">
          {t.steps.map((step, i) => (
            <li key={step} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
              <span className="font-serif text-3xl text-gold-400/50 italic">0{i + 1}</span>
              <p className="mt-2 text-[15px] leading-relaxed text-mist">{step}</p>
            </li>
          ))}
        </ol>

        <Link
          href="/"
          className="mt-12 inline-flex text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
        >
          {t.home} →
        </Link>
      </div>
    </section>
  );
}
