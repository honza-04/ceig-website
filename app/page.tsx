/*
  Single-page layout. Sections are stacked and linked via the anchor nav.
  All content is statically rendered (SSG) — no backend, CMS or database.
*/

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
