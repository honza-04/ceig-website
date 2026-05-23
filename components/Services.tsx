"use client";

/*
  Services (Naše služby) — a 2×3 card grid on white.
  Each card: a monochrome line icon, bilingual title and short description on a
  light-grey (#F5F5F5) surface. Cards lift gently on hover. The icons are plain
  black line art (replacing the original colour emoji) to keep the page strictly
  white / grey / black. Icon order matches content.services.items.
*/

import type { ReactNode } from "react";
import { content, useLanguage } from "@/lib/i18n";
import FadeIn from "@/components/FadeIn";

const iconProps = {
  width: 30,
  height: 30,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// One line icon per service, in the same order as content.services.items.
const icons: ReactNode[] = [
  // 1 — Construction & transport machinery (gear)
  <svg key="gear" {...iconProps}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
  </svg>,
  // 2 — Passenger & delivery vehicles (car)
  <svg key="car" {...iconProps}>
    <path d="M6 10l2-3h8l2 3" />
    <rect x="3" y="10" width="18" height="6" rx="1.5" />
    <circle cx="7.5" cy="16" r="1.5" />
    <circle cx="16.5" cy="16" r="1.5" />
  </svg>,
  // 3 — Trucks & buses (box truck)
  <svg key="truck" {...iconProps}>
    <rect x="2" y="8" width="11" height="8" rx="1" />
    <path d="M13 11h4l3 3v2h-7z" />
    <circle cx="6" cy="16.5" r="1.5" />
    <circle cx="17" cy="16.5" r="1.5" />
  </svg>,
  // 4 — Technology & machinery financing (chip)
  <svg key="chip" {...iconProps}>
    <rect x="7" y="7" width="10" height="10" rx="1.5" />
    <path d="M10 7V4M14 7V4M10 20v-3M14 20v-3M7 10H4M7 14H4M20 10h-3M20 14h-3" />
  </svg>,
  // 5 — Real estate & commercial properties (buildings)
  <svg key="building" {...iconProps}>
    <path d="M3 21h18" />
    <rect x="5" y="6" width="6" height="15" />
    <rect x="13" y="10" width="6" height="11" />
    <path d="M7 9h2M7 12h2M7 15h2M15 13h2M15 16h2" />
  </svg>,
  // 6 — Electromobility (bolt)
  <svg key="bolt" {...iconProps}>
    <path d="M13 2 6 13h5l-1 9 9-12h-5z" />
  </svg>,
];

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
                <div className="text-ink">{icons[i]}</div>
                <h3 className="mt-6 text-lg font-semibold leading-snug text-ink">{t(service.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t(service.desc)}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
