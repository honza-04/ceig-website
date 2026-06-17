"use client";

/*
  Lightweight bilingual (CZ / EN) i18n.
  No external library — a typed dictionary plus a React context that holds the
  active language. Czech is the default. The Nav exposes a CZ / EN toggle that
  flips the context value; every component reads its strings via `useLanguage`.
*/

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Lang = "cs" | "en";

/** A string that has both a Czech and an English variant. */
export type Bilingual = { cs: string; en: string };

export type ServiceItem = {
  icon: string;
  title: Bilingual;
  desc: Bilingual;
};

export type PartnerItem = {
  name: string;
  sector: Bilingual;
  /** Logo file in /public. */
  logo: string;
};

/** The full content dictionary for the site. */
export const content = {
  nav: {
    about: { cs: "O nás", en: "About" },
    services: { cs: "Služby", en: "Services" },
    partners: { cs: "Partneři", en: "Partners" },
    contact: { cs: "Kontakt", en: "Contact" },
  },
  hero: {
    eyebrow: {
      cs: "Investiční skupina od roku 1994",
      en: "An investment group since 1994",
    },
    title: "Central Europe Investment Group",
    subline: {
      cs: "Financujeme vše, co dává smysl",
      en: "We finance everything that makes sense",
    },
    cta: { cs: "Kontaktujte nás", en: "Get in Touch" },
  },
  about: {
    label: { cs: "O nás", en: "About Us" },
    heading: {
      cs: "Kapitál spojený s příležitostmi",
      en: "Capital connected with opportunity",
    },
    body: {
      cs: "Společnost CEIG (Central Europe Investment Group) působí na trhu od roku 1994 a v roce 2009 prošla rebrandingem na CEIG s.r.o. Tvoříme tým zkušených investorů a podnikatelů, kteří propojují kapitál s příležitostmi. Financujeme projekty napříč obory — od strojů a vozidel po nemovitosti a technologie — vždy s důrazem na zdravý úsudek a dlouhodobou hodnotu.",
      en: "CEIG (Central Europe Investment Group) has been active on the market since 1994 and rebranded to CEIG s.r.o. in 2009. We are a team of experienced investors and entrepreneurs who connect capital with opportunity. We finance projects across industries — from machinery and vehicles to real estate and technology — always with an emphasis on sound judgment and long-term value.",
    },
    stats: [
      { value: "1994", label: { cs: "Rok založení", en: "Founded" } },
      { value: "30+", label: { cs: "Let zkušeností", en: "Years of experience" } },
      { value: "5", label: { cs: "Sektorů financování", en: "Financing sectors" } },
    ] as { value: string; label: Bilingual }[],
  },
  services: {
    label: { cs: "Naše služby", en: "Our Services" },
    heading: {
      cs: "Co financujeme",
      en: "What we finance",
    },
    items: [
      {
        icon: "🏗",
        title: { cs: "Stavební a přepravní stroje", en: "Construction & Transport Machinery" },
        desc: {
          cs: "Financování stavebních, zemních a přepravních strojů pro firmy všech velikostí.",
          en: "Financing for construction, earth-moving and transport machinery for businesses of every size.",
        },
      },
      {
        icon: "🚗",
        title: { cs: "Osobní a dodávkové vozy", en: "Passenger & Delivery Vehicles" },
        desc: {
          cs: "Pořízení osobních a užitkových vozů s flexibilními podmínkami.",
          en: "Acquisition of passenger and light commercial vehicles with flexible terms.",
        },
      },
      {
        icon: "🚛",
        title: { cs: "Nákladní vozy a autobusy", en: "Trucks & Buses" },
        desc: {
          cs: "Financování nákladních vozidel a autobusů pro dopravu a logistiku.",
          en: "Financing of trucks and buses for transport and logistics operators.",
        },
      },
      {
        icon: "💡",
        title: { cs: "Financování technologií", en: "Technology & Machinery Financing" },
        desc: {
          cs: "Investice do výrobních technologií a strojního vybavení.",
          en: "Investment in production technology and industrial equipment.",
        },
      },
      {
        icon: "🏢",
        title: { cs: "Nemovitosti", en: "Real Estate & Commercial Properties" },
        desc: {
          cs: "Financování komerčních i rezidenčních nemovitostí a developerských projektů.",
          en: "Financing of commercial and residential real estate and development projects.",
        },
      },

    ] as ServiceItem[],
  },
  partners: {
    label: { cs: "Partneři", en: "Partners" },
    heading: {
      cs: "Společnosti, kterým důvěřujeme",
      en: "Companies we trust",
    },
    items: [
      { name: "MIP Transport", sector: { cs: "Doprava betonu", en: "Concrete transport" }, logo: "/MIP.png" },
      { name: "Czech Media", sector: { cs: "Nemovitosti", en: "Real estate" }, logo: "/CM.png" },
      { name: "Czech Press Group", sector: { cs: "Tisk a média", en: "Print & media" }, logo: "/CPG.png" },
      { name: "Dislog", sector: { cs: "Logistika a skladování", en: "Logistics & warehousing" }, logo: "/dislog.png" },
      { name: "Solidum", sector: { cs: "Monolitické konstrukce", en: "Monolithic structures" }, logo: "/solidum.png" },
      { name: "Ronex", sector: { cs: "Balicí stroje a materiály", en: "Packaging machines & materials" }, logo: "/ronex.png" },
    ] as PartnerItem[],
  },
  contact: {
    label: { cs: "Kontakt", en: "Contact" },
    heading: {
      cs: "Máte projekt, který dává smysl?",
      en: "Have a project that makes sense?",
    },
    intro: {
      cs: "Ozvěte se nám. Rádi probereme možnosti financování vašeho záměru.",
      en: "Get in touch. We are happy to discuss financing options for your plans.",
    },
    form: {
      name: { cs: "Jméno", en: "Name" },
      email: { cs: "E-mail", en: "Email" },
      message: { cs: "Zpráva", en: "Message" },
      submit: { cs: "Odeslat zprávu", en: "Send message" },
      namePlaceholder: { cs: "Vaše jméno", en: "Your name" },
      emailPlaceholder: { cs: "vas@email.cz", en: "you@email.com" },
      messagePlaceholder: { cs: "Napište nám…", en: "Write to us…" },
    },
    infoLabel: { cs: "Kontaktní údaje", en: "Contact details" },
    details: [
      {
        label: { cs: "Název subjektu", en: "Legal name" },
        value: { cs: "CEIG s.r.o.", en: "CEIG s.r.o." },
      },
      {
        label: { cs: "IČO", en: "Company ID (IČO)" },
        value: { cs: "61327832", en: "61327832" },
      },
      {
        label: { cs: "Spisová značka", en: "File number" },
        value: {
          cs: "C 7167 vedená u Krajského soudu v Ústí nad Labem",
          en: "C 7167, Regional Court in Ústí nad Labem",
        },
      },
      {
        label: { cs: "Den zápisu", en: "Registered" },
        value: { cs: "16. června 1994", en: "16 June 1994" },
      },
      {
        label: { cs: "Sídlo", en: "Registered office" },
        value: {
          cs: "Klíšská 1432/18, Ústí nad Labem-centrum, 400 01 Ústí nad Labem",
          en: "Klíšská 1432/18, Ústí nad Labem-centrum, 400 01 Ústí nad Labem",
        },
      },
      {
        label: { cs: "Tel", en: "Phone" },
        value: { cs: "+420 602 451 280", en: "+420 602 451 280" },
        href: "tel:+420602451280",
      },
      {
        label: { cs: "Email", en: "Email" },
        value: { cs: "info@ceig.cz", en: "info@ceig.cz" },
        href: "mailto:info@ceig.cz",
      },
      {
        label: { cs: "Web", en: "Web" },
        value: { cs: "www.ceig.cz", en: "www.ceig.cz" },
        href: "https://www.ceig.cz",
      },
    ] as { label: Bilingual; value: Bilingual; href?: string }[],
  },
  footer: {
    rights: {
      cs: "© 2026 CEIG s.r.o. | Central Europe Investment Group",
      en: "© 2026 CEIG s.r.o. | Central Europe Investment Group",
    },
  },
} as const;

/* ---------- Language context ---------- */

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** Resolve a Bilingual value to the active language. */
  t: (value: Bilingual) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("cs"); // Czech is the default

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((prev) => (prev === "cs" ? "en" : "cs")),
      t: (v) => v[lang],
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
