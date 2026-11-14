/** Shared timing for scroll reveals: a short, small rise that plays once. */
export const revealEase = [0.16, 1, 0.3, 1] as const;

/** Distance in px a block rises (or slides) as it scrolls into view. */
export const REVEAL_OFFSET = 12;

export const revealViewport = { once: true, margin: "-60px" } as const;

export function revealTransition(delay = 0) {
  return { duration: 0.35, delay, ease: revealEase };
}
