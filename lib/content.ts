/*
  All site copy (Czech only) in one typed dictionary, so text edits never
  require touching the components.
*/

export type ServiceItem = {
  title: string;
  desc: string;
};

export type PartnerItem = {
  name: string;
  sector: string;
  /** Logo file in /public. */
  logo: string;
};

/** The full content dictionary for the site. */
export const content = {
  nav: {
    about: "O nás",
    services: "Služby",
    partners: "Partneři",
    contact: "Kontakt",
  },
  hero: {
    eyebrow: "Investiční skupina od roku 1994",
    title: "Central European Investment Group",
    subline: "Financujeme vše, co dává smysl",
    cta: "Kontaktujte nás",
  },
  about: {
    label: "O nás",
    heading: "Kapitál spojený s příležitostmi",
    body: "Společnost CEIG (Central European Investment Group) působí na trhu od roku 1994 a v roce 2009 prošla rebrandingem na CEIG s.r.o. Tvoříme tým zkušených investorů a podnikatelů, kteří propojují kapitál s příležitostmi. Financujeme projekty napříč obory — od strojů a vozidel po nemovitosti a technologie — vždy s důrazem na zdravý úsudek a dlouhodobou hodnotu.",
    stats: [
      { value: "1994", label: "Rok založení" },
      { value: "30+", label: "Let zkušeností" },
      { value: "5", label: "Sektorů financování" },
    ] as { value: string; label: string }[],
  },
  services: {
    label: "Naše služby",
    heading: "Co financujeme",
    items: [
      {
        title: "Stavební a přepravní stroje",
        desc: "Financování stavebních, zemních a přepravních strojů pro firmy všech velikostí.",
      },
      {
        title: "Osobní a dodávkové vozy",
        desc: "Pořízení osobních a užitkových vozů s flexibilními podmínkami.",
      },
      {
        title: "Nákladní vozy a autobusy",
        desc: "Financování nákladních vozidel a autobusů pro dopravu a logistiku.",
      },
      {
        title: "Financování technologií",
        desc: "Investice do výrobních technologií a strojního vybavení.",
      },
      {
        title: "Nemovitosti",
        desc: "Financování komerčních i rezidenčních nemovitostí a developerských projektů.",
      },
    ] as ServiceItem[],
  },
  partners: {
    label: "Partneři",
    heading: "Společnosti, kterým důvěřujeme",
    items: [
      { name: "MIP Transport", sector: "Doprava betonu", logo: "/MIP.avif" },
      { name: "Czech Media", sector: "Nemovitosti", logo: "/CM.avif" },
      { name: "Czech Press Group", sector: "Tisk a média", logo: "/CPG.avif" },
      { name: "Dislog", sector: "Logistika a skladování", logo: "/dislog.avif" },
      { name: "Solidum", sector: "Monolitické konstrukce", logo: "/solidum.avif" },
      { name: "Ronex", sector: "Balicí stroje a materiály", logo: "/ronex.avif" },
    ] as PartnerItem[],
  },
  contact: {
    label: "Kontakt",
    heading: "Máte projekt, který dává smysl?",
    intro: "Ozvěte se nám. Rádi probereme možnosti financování vašeho záměru.",
    infoLabel: "Kontaktní údaje",
    details: [
      {
        label: "Název subjektu",
        value: "CEIG s.r.o.",
      },
      {
        label: "IČO",
        value: "61327832",
      },
      {
        label: "Spisová značka",
        value: "C 7167 vedená u Krajského soudu v Ústí nad Labem",
      },
      {
        label: "Den zápisu",
        value: "16. června 1994",
      },
      {
        label: "Sídlo",
        value: "Klíšská 1432/18, Ústí nad Labem-centrum, 400 01 Ústí nad Labem",
      },
      {
        label: "Tel",
        value: "+420 602 451 280",
        href: "tel:+420602451280",
      },
      {
        label: "Email",
        value: "info@ceig.cz",
        href: "mailto:info@ceig.cz",
      },
    ] as { label: string; value: string; href?: string }[],
  },
  euFunding: {
    label: "Podpora EU",
    heading: "Záruka Elektromobilita",
    statement: "Projekt společnosti CEIG s.r.o. je financován Evropskou unií – NextGenerationEU prostřednictvím Národního plánu obnovy, v rámci programu Záruka Elektromobilita Národní rozvojové banky.",
    details: [
      {
        label: "Příjemce",
        value: "CEIG s.r.o.",
      },
      {
        label: "Popis a cíle projektu",
        value: "Pořízení bateriového elektromobilu (BEV) Tesla Model 3 a dobíjecí stanice umístěné v sídle společnosti.",
      },
      {
        label: "Výsledek realizace projektu",
        value: "Projekt je úspěšně dokončen.",
      },
    ] as { label: string; value: string }[],
    euLogoAlt: "Financováno Evropskou unií – NextGenerationEU",
    npoLogoAlt: "Národní plán obnovy",
    pdf: "Informační list projektu (PDF)",
  },
  footer: {
    rights: "© 2026 CEIG s.r.o. | Central European Investment Group",
  },
} as const;
