"use client";

/*
  Hero — full-width white panel.
  Large black brand headline, the bilingual tagline in grey, and a black CTA
  that scrolls to the contact section. A faint grey geometric pattern sits
  behind the text for a restrained, airy feel.
*/

import { content, useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-white text-ink"
    >
      {/* Abstract geometric backdrop — soft grey lines on white */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70">
        <svg className="absolute -right-24 -top-24 h-[42rem] w-[42rem]" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="240" stroke="#E5E5E5" strokeWidth="1" />
          <circle cx="300" cy="300" r="180" stroke="#E5E5E5" strokeWidth="1" />
          <circle cx="300" cy="300" r="120" stroke="#E5E5E5" strokeWidth="1" />
        </svg>
        <svg className="absolute -bottom-32 -left-32 h-[36rem] w-[36rem]" viewBox="0 0 600 600" fill="none">
          <rect x="120" y="120" width="360" height="360" stroke="#E5E5E5" strokeWidth="1" transform="rotate(20 300 300)" />
          <rect x="180" y="180" width="240" height="240" stroke="#E5E5E5" strokeWidth="1" transform="rotate(20 300 300)" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32">
        <div className="max-w-3xl animate-[fade-in_0.8s_ease-out_both]">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-faint">
            {t(content.hero.eyebrow)}
          </p>
          <h1 className="text-4xl font-bold uppercase leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
            {content.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
            {t(content.hero.subline)}
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-80"
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
