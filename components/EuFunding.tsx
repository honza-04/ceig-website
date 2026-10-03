"use client";

/*
  EU funding (Podpora EU) — mandatory publicity for the "Záruka Elektromobilita"
  project financed from the National Recovery Plan (NPO / NextGenerationEU).
  The rules require a short project description with its aims and a clear
  statement of EU support; the EU logo must be at least as visible as any other
  logo, so both logos share the same height and the EU one comes first.
*/

import Image from "next/image";
import { content, useLanguage } from "@/lib/i18n";
import FadeIn from "@/components/FadeIn";

export default function EuFunding() {
  const { t } = useLanguage();
  const eu = content.euFunding;

  return (
    <section id="eu-funding" className="bg-white py-28 text-ink sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-faint">
            {t(eu.label)}
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{t(eu.heading)}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t(eu.statement)}</p>

          <dl className="mt-10 space-y-3 border-t border-line pt-8">
            {eu.details.map((detail) => (
              <div key={detail.label.en} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
                <dt className="text-sm text-faint sm:w-56 sm:shrink-0">{t(detail.label)}</dt>
                <dd className="text-sm text-ink sm:flex-1">{t(detail.value)}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
            <Image
              src="/eu-nextgenerationeu.png"
              alt={t(eu.euLogoAlt)}
              width={596}
              height={160}
              className="h-12 w-auto sm:h-14"
            />
            <Image
              src="/npo-logo.png"
              alt={t(eu.npoLogoAlt)}
              width={591}
              height={160}
              className="h-12 w-auto sm:h-14"
            />
          </div>

          <a
            href="/Elektromobilita.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-4 hover:underline"
          >
            {t(eu.pdf)}
            <span aria-hidden>→</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
