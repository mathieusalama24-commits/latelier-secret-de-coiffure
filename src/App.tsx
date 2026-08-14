import { Banniere } from "@/components/layout/banniere"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { MobileBar } from "@/components/layout/mobile-bar"
import { Hero } from "@/components/sections/hero"
import { Prestations } from "@/components/sections/prestations"
import { Transformations } from "@/components/sections/transformations"
import { SalonSection } from "@/components/sections/salon"
import { MarieeFormations } from "@/components/sections/mariee-formations"
import { Helene } from "@/components/sections/helene"
import { Faq } from "@/components/sections/faq"
import { Avis } from "@/components/sections/avis"
import { Contact } from "@/components/sections/contact"

export default function App() {
  return (
    <>
      <a
        href="#contenu"
        className="eyebrow sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-ink focus:px-5 focus:py-3 focus:text-ivory"
      >
        Aller au contenu
      </a>

      <Banniere />
      <Navbar />

      <main id="contenu">
        <Hero />
        <Prestations />
        <Transformations />
        <SalonSection />
        <Helene />
        <MarieeFormations />
        <Avis />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <MobileBar />
    </>
  )
}
