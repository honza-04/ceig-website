"use client";

/*
  Services (Naše služby) — a 2×3 card grid on white.
  Each card: bilingual title and short description on a light-grey (#F5F5F5)
  surface. Cards lift gently on hover. (Text-only — no icons.)
*/

import { content, useLanguage } from "@/lib/i18n";
import FadeIn from "@/components/FadeIn";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-white py-28 text-ink sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-faint">
            {t(content.services.label)}
          </p>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
            {t(content.services.heading)}
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.items.map((service, i) => (
            <FadeIn key={service.title.en} delay={i * 70}>
              <div className="group h-full rounded-2xl bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]">
                <h3 className="text-lg font-semibold leading-snug text-ink">{t(service.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t(service.desc)}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
