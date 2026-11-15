import { Marked } from "marked";

/**
 * D1-50 / D1-51 (2026-11-13): Markdown of a legal text published in the
 * LawBid admin → HTML, at build time (marked, MIT). Raw HTML inside the text is
 * shown as text, never run: only Markdown formatting reaches the page.
 */
const marked = new Marked({
  gfm: true,
  async: false,
  renderer: {
    html({ text }) {
      return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    },
  },
});

/** The text without its own top heading (the page draws the title). */
export function legalMarkdownToHtml(md: string): string {
  const body = md.replace(/^\s*#\s+[^\n]*\n/, "");
  return marked.parse(body) as string;
}
