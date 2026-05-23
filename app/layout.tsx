import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

// Inter, exposed as a CSS variable consumed by the Tailwind --font-sans token.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ceig.cz"),
  title: "CEIG — Central Europe Investment Group",
  description:
    "CEIG (Central Europe Investment Group) — investiční skupina od roku 1994. Financujeme vše, co dává smysl. We finance everything that makes sense.",
  keywords: [
    "CEIG",
    "Central Europe Investment Group",
    "investice",
    "financování",
    "investment group",
  ],
  openGraph: {
    title: "CEIG — Central Europe Investment Group",
    description: "Financujeme vše, co dává smysl. / We finance everything that makes sense.",
    url: "https://www.ceig.cz",
    siteName: "CEIG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} antialiased`}>
      <head>
        {/* No-JS / non-JS-crawler fallback: keep on-scroll content visible
            if the IntersectionObserver reveal never runs. */}
        <noscript>
          <style>{`[data-fade]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
