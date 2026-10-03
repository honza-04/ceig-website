import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Light theme: white browser chrome on mobile.
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

// Inter, exposed as a CSS variable consumed by the Tailwind --font-sans token.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ceig.cz"),
  title: "CEIG — Central European Investment Group",
  description:
    "CEIG (Central European Investment Group) — investiční skupina od roku 1994. Financujeme vše, co dává smysl.",
  keywords: [
    "CEIG",
    "Central European Investment Group",
    "investice",
    "financování",
  ],
  openGraph: {
    title: "CEIG — Central European Investment Group",
    description: "Financujeme vše, co dává smysl.",
    locale: "cs_CZ",
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
        {children}
      </body>
    </html>
  );
}
