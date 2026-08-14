import { transformation, paires, galerie } from "@/data/site-content"
import { CompareSlider } from "@/components/ui/compare-slider"
import { Reveal } from "@/components/ui/reveal"

// seules les paires vérifiées sont publiées — voir le commentaire de `paires` dans site-content
const pairesPubliees = paires.filter((paire) => paire.confirme)

export function Transformations() {
  return (
    <section id="transformations" className="bg-ink py-20 text-ivory md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="eyebrow text-gold">{transformation.eyebrow}</p>
            <h2 className="text-section mt-5 text-ivory">{transformation.titre}</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-nude">
              {transformation.texte}
            </p>
            <p className="eyebrow mt-8 text-nude/80">
              Faites glisser le curseur — ou utilisez les flèches du clavier
            </p>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            {pairesPubliees.map((paire) => (
              <figure key={paire.avant.src}>
                <CompareSlider
                  avant={paire.avant}
                  apres={paire.apres}
                  className="aspect-[4/5] w-full sm:aspect-[3/2]"
                />
                <figcaption className="eyebrow mt-3 text-nude/80">{paire.legende}</figcaption>
              </figure>
            ))}
          </Reveal>
        </div>

        <div className="mt-20 md:mt-28">
          <Reveal className="flex items-end justify-between gap-6">
            <h3 className="font-display text-2xl text-ivory md:text-3xl">Réalisations</h3>
            <span className="eyebrow hidden text-nude/80 sm:block">Balayage · Ombré · Patine</span>
          </Reveal>

          {/* mosaïque en colonnes : chaque photo garde son cadrage d'origine, aucune n'est rognée */}
          <div className="mt-8 columns-2 gap-3 md:columns-3 md:gap-4">
            {galerie.map((photo, index) => (
              <Reveal key={photo.src} delay={(index % 3) * 0.06} className="mb-3 break-inside-avoid md:mb-4">
                <figure className="group relative overflow-hidden bg-ink-soft">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    decoding="async"
                    className="w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
