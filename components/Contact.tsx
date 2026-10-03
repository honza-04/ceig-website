import { content } from "@/lib/content";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-faint">
            {content.contact.label}
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            {content.contact.heading}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            {content.contact.intro}
          </p>

          <div className="mt-10 border-t border-line pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-faint">
              {content.contact.infoLabel}
            </p>
            <dl className="mt-5 space-y-3">
              {content.contact.details.map((detail) => {
                const value = detail.value;
                const external = detail.href?.startsWith("http");
                return (
                  <div
                    key={detail.label}
                    className="flex flex-col gap-0.5 sm:flex-row sm:gap-4"
                  >
                    <dt className="text-sm text-faint sm:w-36 sm:shrink-0">{detail.label}</dt>
                    <dd className="text-sm text-ink sm:flex-1">
                      {detail.href ? (
                        <a
                          href={detail.href}
                          {...(external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="underline-offset-4 transition-colors hover:underline"
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
