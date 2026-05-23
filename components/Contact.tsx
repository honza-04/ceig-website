"use client";

/*
  Contact (Kontakt) — split layout on white.
  Left: heading, intro and the full company / registry details (label + value).
  Right: a simple Name / Email / Message form with light-grey inputs and a black
  submit button. There is no backend — submitting composes a pre-filled email to
  info@ceig.cz via a `mailto:` link (opens the visitor's mail client).
*/

import { useState, type FormEvent } from "react";
import { content, useLanguage } from "@/lib/i18n";
import FadeIn from "@/components/FadeIn";

const EMAIL = "info@ceig.cz";

export default function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = `CEIG — ${name || "Web"}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    // mailto fallback: hand off to the visitor's email client.
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  const inputClass =
    "w-full rounded-lg border border-line bg-surface px-4 py-3 text-ink placeholder:text-faint outline-none transition-colors focus:border-ink";

  return (
    <section id="contact" className="bg-white py-28 text-ink sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Left: heading, intro + company details */}
          <FadeIn>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-faint">
              {t(content.contact.label)}
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              {t(content.contact.heading)}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              {t(content.contact.intro)}
            </p>

            {/* Company / registry details — simple label + value list */}
            <div className="mt-10 border-t border-line pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-faint">
                {t(content.contact.infoLabel)}
              </p>
              <dl className="mt-5 space-y-3">
                {content.contact.details.map((detail) => {
                  const value = t(detail.value);
                  const external = detail.href?.startsWith("http");
                  return (
                    <div
                      key={detail.label.en}
                      className="flex flex-col gap-0.5 sm:flex-row sm:gap-4"
                    >
                      <dt className="text-sm text-faint sm:w-36 sm:shrink-0">{t(detail.label)}</dt>
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

          {/* Right: form */}
          <FadeIn delay={120}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                  {t(content.contact.form.name)}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t(content.contact.form.namePlaceholder)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                  {t(content.contact.form.email)}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t(content.contact.form.emailPlaceholder)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                  {t(content.contact.form.message)}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t(content.contact.form.messagePlaceholder)}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-80 sm:w-auto"
              >
                {t(content.contact.form.submit)}
                <span>→</span>
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
