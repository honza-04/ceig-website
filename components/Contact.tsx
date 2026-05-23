"use client";

/*
  Contact (Kontakt) — split layout on a navy panel.
  Left: contact details. Right: a simple Name / Email / Message form.
  There is no backend — submitting composes a pre-filled email to
  info@ceig.cz via a `mailto:` link (opens the visitor's mail client).
*/

import { useState, type FormEvent } from "react";
import { content, useLanguage } from "@/lib/i18n";
import FadeIn from "@/components/FadeIn";

const EMAIL = "info@ceig.cz";
const WEBSITE = "www.ceig.cz";

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
    "w-full rounded-lg border border-warmwhite/15 bg-navy-700/60 px-4 py-3 text-warmwhite placeholder:text-warmwhite/35 outline-none transition-colors focus:border-gold";

  return (
    <section id="contact" className="bg-navy py-24 text-warmwhite sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Left: heading + details */}
          <FadeIn>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
              {t(content.contact.label)}
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              {t(content.contact.heading)}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-warmwhite/70">
              {t(content.contact.intro)}
            </p>

            <div className="mt-10 border-t border-warmwhite/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warmwhite/40">
                {t(content.contact.infoLabel)}
              </p>
              <ul className="mt-4 space-y-2 text-warmwhite/80">
                <li>
                  <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-gold">
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://${WEBSITE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold"
                  >
                    {WEBSITE}
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={120}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-warmwhite/80">
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
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-warmwhite/80">
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
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-warmwhite/80">
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-bright hover:shadow-[0_8px_30px_rgba(201,168,76,0.3)] sm:w-auto"
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
