"use client";

/*
  Partners (Partneři) — a logo wall built from styled text placeholders
  (no image assets needed). Tiles are muted/grayscale by default and warm into
  the navy + gold palette on hover, revealing the partner's sector.
*/

import { content, useLanguage } from "@/lib/i18n";
import FadeIn from "@/components/FadeIn";

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="bg-warmwhite py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            {t(content.partners.label)}
          </p>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-navy sm:text-4xl">
            {t(content.partners.heading)}
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.partners.items.map((partner, i) => (
            <FadeIn key={partner.name} delay={i * 60}>
              <div className="group flex h-full flex-col justify-between rounded-xl border border-navy/10 bg-white/40 p-7 transition-all duration-300 hover:border-gold/60 hover:bg-navy hover:shadow-[0_10px_40px_rgba(10,22,40,0.12)]">
                {/* Text-based logo placeholder */}
                <span className="text-xl font-bold tracking-tight text-navy/40 transition-colors duration-300 group-hover:text-warmwhite">
                  {partner.name}
                </span>
                <span className="mt-6 text-sm text-navy/50 transition-colors duration-300 group-hover:text-gold">
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
