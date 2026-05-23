"use client";

/*
  Services (Naše služby) — a 2×3 card grid.
  Each card: emoji icon, bilingual title, short description. Cards lift slightly
  and reveal a gold top edge on hover.
*/

import { content, useLanguage } from "@/lib/i18n";
import FadeIn from "@/components/FadeIn";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-navy py-24 text-warmwhite sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            {t(content.services.label)}
          </p>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
            {t(content.services.heading)}
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-warmwhite/10 bg-warmwhite/10 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.items.map((service, i) => (
            <FadeIn key={service.title.en} delay={i * 70}>
              <div className="group relative h-full bg-navy p-8 transition-colors hover:bg-navy-700">
                {/* Gold top edge on hover */}
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
                <div className="text-3xl">{service.icon}</div>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{t(service.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warmwhite/60">{t(service.desc)}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
