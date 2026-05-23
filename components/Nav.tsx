"use client";

/*
  Sticky top navigation.
  - The CEIG logo on the left (solid black lockup).
  - Anchor links to each section.
  - CZ / EN language toggle on the right (black active pill).
  - Always white with a thin grey (#E5E5E5) bottom border; a soft shadow fades
    in once the page is scrolled for a little depth.
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_16px_rgba(0,0,0,0.05)]" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#top" aria-label="CEIG — home" className="flex items-center text-ink">
          <Logo />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
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
            className="flex items-center rounded-full border border-line text-xs font-semibold"
            aria-label="Toggle language / Přepnout jazyk"
          >
            <span
              className={`rounded-full px-3 py-1.5 transition-colors ${
                lang === "cs" ? "bg-ink text-white" : "text-faint"
              }`}
            >
              CZ
            </span>
            <span
              className={`rounded-full px-3 py-1.5 transition-colors ${
                lang === "en" ? "bg-ink text-white" : "text-faint"
              }`}
            >
              EN
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink md:hidden"
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
        <div className="border-t border-line bg-white md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {links.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm font-medium text-muted transition-colors hover:text-ink"
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
