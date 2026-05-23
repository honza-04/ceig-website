"use client";

/*
  Partners (Partneři) — a logo wall on white.
  Each tile holds a real partner logo on a clean white card (thin grey border),
  shown grayscale + dimmed by default and easing to full colour on hover. Logos
  are placed in a fixed-height box with `object-contain`, so they all render at a
  consistent height, centred and proportional regardless of their aspect ratio.
  The sector sits beneath as a small caption.
*/

import Image from "next/image";
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
              <div className="group flex h-40 flex-col items-center justify-center gap-5 rounded-xl border border-line bg-white px-8 transition-shadow duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.07)]">
                {/* Fixed-height box keeps every logo the same height + centred */}
                <div className="relative h-12 w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 35vw, 220px"
                    className="object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <span className="text-xs uppercase tracking-[0.15em] text-faint">
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
