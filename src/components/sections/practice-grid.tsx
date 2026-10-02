"use client";

import { useDeferredValue, useState } from "react";
import Image from "next/image";
import { MagnifyingGlass } from "@phosphor-icons/react";
import type { PracticeArea } from "@/content/practice-areas";
import { withBase } from "@/lib/site";

/** Searchable grid of every practice area with the app's category art. */
export function PracticeGrid({ areas }: { areas: readonly PracticeArea[] }) {
  const [query, setQuery] = useState("");
  const q = useDeferredValue(query.trim().toLowerCase());
  const shown = q
    ? areas.filter((a) => a.name.toLowerCase().includes(q) || a.specialties.some((s) => s.toLowerCase().includes(q)))
    : areas;

  return (
    <div>
      <label className="mx-auto flex max-w-xl items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3.5 focus-within:border-gold-400/60">
        <MagnifyingGlass size={20} className="text-gold-400" />
        <span className="sr-only">Search practice areas</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search, e.g. custody, visa, DUI"
          maxLength={60}
          autoComplete="off"
          className="w-full bg-transparent text-ivory placeholder:text-mist/70 focus:outline-none"
        />
      </label>
      <p className="mt-4 text-center text-sm text-mist" aria-live="polite">
        {shown.length === areas.length ? `${areas.length} practice areas` : `${shown.length} of ${areas.length} match`}
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((a) => {
          const rest = a.specialties.length - 4;
          return (
            <li
              key={a.slug}
              id={a.slug}
              className="group scroll-mt-28 overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] transition-colors hover:border-gold-400/30"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={withBase(a.image)}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
                <h2 className="absolute inset-x-5 bottom-3 font-serif text-2xl text-ivory">{a.name}</h2>
              </div>
              <div className="flex flex-wrap gap-1.5 p-5">
                {a.specialties.slice(0, 4).map((s) => (
                  <span key={s} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-mist">
                    {s}
                  </span>
                ))}
                {rest > 0 && <span className="rounded-full px-2.5 py-1 text-xs text-gold-300">+{rest} more</span>}
              </div>
            </li>
          );
        })}
      </ul>
      {shown.length === 0 && (
        <p className="mt-10 text-center text-mist">
          Nothing matches yet. In the app you can still post your case and say you are not sure of the area.
        </p>
      )}
    </div>
  );
}
