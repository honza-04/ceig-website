"use client";

/*
  Sticky top navigation.
  - The CEIG logo on the left.
  - Anchor links to each section.
  - CZ / EN language toggle on the right (gold active pill).
  - Transparent over the dark hero, then turns into a warm-white bar with a thin
    gold bottom border once the page is scrolled. Logo + links invert colour to
    stay legible against whichever background is behind them.
  - Collapses into a hamburger menu on mobile.
*/

import { useEffect, useState } from "react";
import { content, useLanguage } from "@/lib/i18n";
import Logo from "@/components/Logo";

const links = [
  { href: "#about", key: "about" },
  { href: "#services", key: "services" },
  { href: "#partners", key: "partners" },
  { href: "#contact", key: "contact" },
] as const;

export default function Nav() {
  const { lang, toggle, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When solid (scrolled) the bar sits on warm white → dark content.
  // When transparent (top, over the navy hero) → light content.
  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-warmwhite/90 backdrop-blur-md border-b border-gold/60 shadow-[0_1px_20px_rgba(10,22,40,0.06)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo — wordmark colour follows the bar theme; mark stays gold */}
        <a
          href="#top"
          aria-label="CEIG — home"
          className={`flex items-center transition-colors duration-300 ${
            solid ? "text-navy" : "text-warmwhite"
          }`}
        >
          <Logo />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  solid
                    ? "text-navy/70 hover:text-navy"
                    : "text-warmwhite/80 hover:text-warmwhite"
                }`}
              >
                {t(content.nav[link.key])}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            type="button"
            onClick={toggle}
            className={`flex items-center rounded-full border text-xs font-semibold transition-colors ${
              solid ? "border-navy/15" : "border-warmwhite/30"
            }`}
            aria-label="Toggle language / Přepnout jazyk"
          >
            <span
              className={`rounded-full px-3 py-1.5 transition-colors ${
                lang === "cs"
                  ? "bg-gold text-navy"
                  : solid
                    ? "text-navy/55"
                    : "text-warmwhite/70"
              }`}
            >
              CZ
            </span>
            <span
              className={`rounded-full px-3 py-1.5 transition-colors ${
                lang === "en"
                  ? "bg-gold text-navy"
                  : solid
                    ? "text-navy/55"
                    : "text-warmwhite/70"
              }`}
            >
              EN
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className={`flex h-9 w-9 items-center justify-center rounded-md transition-colors md:hidden ${
              solid ? "text-navy" : "text-warmwhite"
            }`}
            aria-label="Toggle menu / Otevřít menu"
            aria-expanded={menuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="border-t border-navy/10 bg-warmwhite md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {links.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm font-medium text-navy/80"
                >
                  {t(content.nav[link.key])}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
