"use client";

/*
  Footer — logo, tagline and copyright line on the light-grey (#F5F5F5) base.
*/

import Image from "next/image";
import { content, useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line bg-surface py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center sm:items-start">
          {/* Official CEIG logo, presented on a clean white card */}
          <span className="inline-flex rounded-lg border border-line bg-white p-3">
            <Image
              src="/ceig-logo.avif"
              alt="CEIG — Central Europe Investment Group"
              width={610}
              height={120}
              className="h-8 w-auto"
            />
          </span>
          <p className="mt-3 text-sm text-muted">{t(content.footer.tagline)}</p>
        </div>
        <p className="text-sm text-muted">{t(content.footer.rights)}</p>
      </div>
    </footer>
  );
}
