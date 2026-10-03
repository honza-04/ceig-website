# CEIG — Central European Investment Group

Modern Czech-language corporate website for **CEIG s.r.o.**
(Central European Investment Group), an investment group active since 1994.

> _Financujeme vše, co dává smysl._

## Tech stack

- **[Next.js](https://nextjs.org)** (App Router) — statically generated, no backend
- **React** + **TypeScript**
- **Tailwind CSS v4** — CSS-based theme tokens (white / grey / black)
- **Inter** via `next/font`

## Design

Light, airy, minimal — white / grey / black only, no colour. Palette: white
`#FFFFFF`, surface `#F5F5F5`, border `#E5E5E5`, ink `#111111` (text + accent),
muted `#666666` (secondary text), faint `#999999` (labels). Generous whitespace,
subtle on-scroll fade-ins only — no flashy motion. Fully responsive, mobile-first.

## Project structure

```
app/
  layout.tsx      Root layout — Inter font, metadata
  page.tsx        Single-page composition of all sections
  globals.css     Tailwind v4 theme tokens + fade-in keyframes
  opengraph-image.png  Link preview image (also twitter-image.png)
components/
  Logo.tsx        CEIG logo image used in the nav
  Nav.tsx         Sticky nav, anchor links, mobile menu
  Hero.tsx        Full-width white hero with geometric backdrop
  About.tsx       Split text + abstract SVG graphic, key stats
  Services.tsx    Services card grid
  Partners.tsx    Partner logo wall (grayscale → colour on hover)
  EuFunding.tsx   Mandatory EU/NPO publicity for the Záruka Elektromobilita project
  Contact.tsx     Company details (IČO, sídlo, phone, email)
  Footer.tsx      Logo, Elektromobilita PDF link, copyright
  FadeIn.tsx      IntersectionObserver-based subtle reveal wrapper
lib/
  content.ts      All site copy (Czech) in one typed dictionary
```

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Content

All copy lives in `lib/content.ts`; edit text there, not in the components.

## Contact

**info@ceig.cz** · [www.ceig.cz](https://www.ceig.cz)

---

© 2026 CEIG s.r.o. | Central European Investment Group
