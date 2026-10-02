/**
 * Deterministic pseudo-random number in [0, 1) for index i.
 * Used for decorative layouts so server and client render identical markup.
 */
export function seeded(i: number): number {
  const x = Math.sin(i * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}
