"use client";

/*
  Hero — full-width dark navy panel.
  Large brand headline, the bilingual tagline, and a CTA that scrolls to the
  contact section. A faint gold geometric pattern sits behind the text for a
  premium, restrained feel.
*/

import { content, useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy text-warmwhite"
    >
      {/* Abstract geometric backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <svg className="absolute -right-24 -top-24 h-[42rem] w-[42rem]" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="240" stroke="#C9A84C" strokeWidth="1" />
          <circle cx="300" cy="300" r="180" stroke="#C9A84C" strokeWidth="1" />
          <circle cx="300" cy="300" r="120" stroke="#C9A84C" strokeWidth="1" />
        </svg>
        <svg className="absolute -bottom-32 -left-32 h-[36rem] w-[36rem]" viewBox="0 0 600 600" fill="none">
          <rect x="120" y="120" width="360" height="360" stroke="#C9A84C" strokeWidth="1" transform="rotate(20 300 300)" />
          <rect x="180" y="180" width="240" height="240" stroke="#C9A84C" strokeWidth="1" transform="rotate(20 300 300)" />
        </svg>
      </div>
      {/* Subtle gradient to deepen the bottom edge */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32">
        <div className="max-w-3xl animate-[fade-in_0.8s_ease-out_both]">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            {t(content.hero.eyebrow)}
          </p>
          <h1 className="text-4xl font-bold uppercase leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            {content.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-warmwhite/70 sm:text-xl">
            {t(content.hero.subline)}
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-bright hover:shadow-[0_8px_30px_rgba(201,168,76,0.3)]"
            >
              {t(content.hero.cta)}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
