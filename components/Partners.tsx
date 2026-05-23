"use client";

/*
  Partners (Partneři) — a logo wall of grey placeholder boxes on white.
  Each tile is a light-grey (#F5F5F5) box standing in for a logo, labelled with
  the partner name (black) and sector (grey). The border deepens slightly on
  hover. No image assets needed.
*/

import { content, useLanguage } from "@/lib/i18n";
import FadeIn from "@/components/FadeIn";

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="bg-white py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-faint">
            {t(content.partners.label)}
          </p>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {t(content.partners.heading)}
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.partners.items.map((partner, i) => (
            <FadeIn key={partner.name} delay={i * 60}>
              <div className="group flex h-36 flex-col items-center justify-center rounded-xl border border-line bg-surface px-6 text-center transition-colors duration-300 hover:border-ink/25">
                {/* Text-based logo placeholder */}
                <span className="text-lg font-bold tracking-tight text-ink">{partner.name}</span>
                <span className="mt-2 text-xs uppercase tracking-[0.15em] text-faint">
                  {t(partner.sector)}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
