/*
  Footer — logo, Elektromobilita PDF link and copyright line on the light-grey (#F5F5F5) base.
*/

import Image from "next/image";
import { content } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center sm:items-start">
          {/* Official CEIG logo, presented on a clean white card */}
          <span className="inline-flex rounded-lg border border-line bg-white p-3">
            <Image
              src="/ceig-logo.png"
              alt="CEIG — Central European Investment Group"
              width={800}
              height={200}
              className="h-8 w-auto"
            />
          </span>

        </div>
        <div className="flex flex-col items-center gap-2 sm:items-end">
          <a
            href="/Elektromobilita.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            Elektromobilita
          </a>
          <p className="text-sm text-muted">{content.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
