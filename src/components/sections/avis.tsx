import { Star } from "lucide-react"
import { avis } from "@/data/site-content"
import { Reveal } from "@/components/ui/reveal"

export function Avis() {
  return (
    <section id="avis" className="bg-ink py-20 text-ivory md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow text-gold">Avis</p>
            <h2 className="text-section mt-5 text-ivory">
              Ce que disent <span className="italic text-gold">ses clientes</span>
            </h2>
          </div>

          <div className="shrink-0">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-4 fill-gold text-gold" strokeWidth={1} />
              ))}
            </div>
            <p className="mt-3 text-sm text-nude">
              <span className="font-display text-2xl text-ivory">{avis.note}</span> / 5 — moyenne
              sur <strong className="font-normal text-ivory">{avis.nombre} avis</strong> {avis.source}
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {avis.items.map((item, index) => (
            <Reveal
              as="li"
              key={item.texte}
              delay={(index % 3) * 0.07}
              className="flex flex-col border border-ivory/12 p-7 transition-colors duration-300 hover:border-gold/50"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-nude">
                « {item.texte} »
              </blockquote>
              <footer className="eyebrow mt-6 text-ivory/70">
                Cliente vérifiée · {item.date}
              </footer>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={avis.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow rounded-full border border-ivory/25 px-6 py-3.5 text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              Voir les {avis.nombre} avis sur {avis.source}
            </a>
            <p className="max-w-md text-xs leading-relaxed text-ivory/65">
              Avis retranscrits sans modification. La plateforme les publie de façon anonyme.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
