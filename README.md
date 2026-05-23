# CEIG — Central Europe Investment Group

Modern, bilingual (Czech / English) corporate website for **CEIG s.r.o.**
(Central Europe Investment Group), an investment group active since 1994.

> _Financujeme vše, co dává smysl. — We finance everything that makes sense._

## Tech stack

- **[Next.js](https://nextjs.org)** (App Router) — statically generated, no backend
- **React** + **TypeScript**
- **Tailwind CSS v4** — CSS-based theme tokens (navy / warm white / gold)
- **Inter** via `next/font`
- Lightweight, dependency-free **CZ / EN** i18n (React context + typed dictionary)

## Design

Light, airy, minimal — white / grey / black only, no colour. Palette: white
`#FFFFFF`, surface `#F5F5F5`, border `#E5E5E5`, ink `#111111` (text + accent),
muted `#666666` (secondary text), faint `#999999` (labels). Generous whitespace,
subtle on-scroll fade-ins only — no flashy motion. Fully responsive, mobile-first.

## Project structure

```
app/
  layout.tsx      Root layout — Inter font, metadata, LanguageProvider
  page.tsx        Single-page composition of all sections
  globals.css     Tailwind v4 theme tokens + fade-in keyframes
components/
  Nav.tsx         Sticky nav, anchor links, CZ/EN toggle, mobile menu
  Hero.tsx        Full-width white hero with geometric backdrop
  About.tsx       Split text + abstract SVG graphic, key stats
  Services.tsx    2×3 services card grid
  Partners.tsx    Logo wall (text placeholders, grayscale → color on hover)
  Contact.tsx     Form with mailto:info@ceig.cz fallback (no backend)
  Footer.tsx      Wordmark, tagline, copyright
  FadeIn.tsx      IntersectionObserver-based subtle reveal wrapper
lib/
  i18n.tsx        Bilingual content dictionary + language context
```

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Internationalization

Czech is the default language. The CZ / EN toggle in the navigation flips a
React context value; every component resolves its strings through the `t()`
helper from `lib/i18n.tsx`. All copy lives in the typed `content` dictionary —
add a new string by giving it both a `cs` and an `en` variant.

## Contact

**info@ceig.cz** · [www.ceig.cz](https://www.ceig.cz)

---

© 2025 CEIG s.r.o. | Central Europe Investment Group
