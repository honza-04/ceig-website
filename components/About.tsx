"use client";

/*
  About (O nás) — split layout.
  Text + key stats on the left; an abstract geometric graphic (light-grey card
  with fine line work) on the right.
*/

import { content, useLanguage } from "@/lib/i18n";
import FadeIn from "@/components/FadeIn";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-white py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text column */}
          <FadeIn>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-faint">
              {t(content.about.label)}
            </p>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              {t(content.about.heading)}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {t(content.about.body)}
            </p>

            {/* Stats */}
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {content.about.stats.map((stat) => (
                <div key={stat.value}>
                  <dt className="text-3xl font-bold text-ink sm:text-4xl">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-muted">{t(stat.label)}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          {/* Abstract geometric graphic */}
          <FadeIn delay={120} className="hidden lg:block">
            <div className="relative aspect-square w-full">
              <div className="absolute inset-0 rounded-2xl border border-line bg-surface" />
              <svg
                aria-hidden
                viewBox="0 0 400 400"
                className="absolute inset-0 h-full w-full p-8"
                fill="none"
              >
                <rect x="60" y="60" width="280" height="280" stroke="#111111" strokeWidth="1" opacity="0.16" />
                <rect x="110" y="110" width="180" height="180" stroke="#111111" strokeWidth="1" opacity="0.24" />
                <line x1="60" y1="60" x2="340" y2="340" stroke="#111111" strokeWidth="1" opacity="0.12" />
                <line x1="340" y1="60" x2="60" y2="340" stroke="#111111" strokeWidth="1" opacity="0.12" />
                <circle cx="200" cy="200" r="70" stroke="#111111" strokeWidth="1" opacity="0.3" />
                <circle cx="200" cy="200" r="6" fill="#111111" />
              </svg>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
