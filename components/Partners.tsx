/*
  Partners (Partneři) — a logo wall on white.
  Each tile holds a real partner logo on a clean white card (thin grey border),
  shown grayscale + dimmed by default and easing to full colour on hover. Logos
  are placed in a fixed-height box with `object-contain`, so they all render at a
  consistent height, centred and proportional regardless of their aspect ratio.
  The sector sits beneath as a small caption.
*/

import Image from "next/image";
import { content } from "@/lib/content";
import FadeIn from "@/components/FadeIn";

export default function Partners() {
  return (
    <section id="partners" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-faint">
            {content.partners.label}
          </p>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {content.partners.heading}
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
                  {partner.sector}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
