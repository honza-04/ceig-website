"use client";

/*
  Footer — logo, tagline and copyright line on the warm-white base.
*/

import Image from "next/image";
import { content, useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-navy/10 bg-warmwhite py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center sm:items-start">
          {/* Official CEIG logo, presented on a clean white card */}
          <span className="inline-flex rounded-lg bg-white p-3 shadow-sm ring-1 ring-navy/5">
            <Image
              src="/ceig-logo.avif"
              alt="CEIG — Central Europe Investment Group"
              width={610}
              height={120}
              className="h-8 w-auto"
            />
          </span>
          <p className="mt-3 text-sm text-navy/50">{t(content.footer.tagline)}</p>
        </div>
        <p className="text-sm text-navy/50">{t(content.footer.rights)}</p>
      </div>
    </footer>
  );
}
