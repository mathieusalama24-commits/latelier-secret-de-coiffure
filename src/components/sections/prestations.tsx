import { prestations } from "@/data/site-content"
import { Reveal } from "@/components/ui/reveal"
import { cn } from "@/lib/utils"

export function Prestations() {
  return (
    <section id="prestations" className="bg-marble py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-taupe">Prestations</p>
          <h2 className="text-section mt-5">
            La couleur, <span className="italic text-rose">d'abord</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-taupe">
            Tarifs indicatifs, confirmés lors de la prise de rendez-vous : une couleur se chiffre
            après avoir vu la longueur et l'état du cheveu.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px bg-nude/60 sm:grid-cols-2 lg:grid-cols-3">
          {prestations.map((famille, index) => {
            // la dernière famille occupe la cellule restante pour ne pas laisser de trou
            const large = index === prestations.length - 1
            return (
            <Reveal
              key={famille.famille}
              as="article"
              delay={index * 0.06}
              className={cn(
                "flex flex-col bg-marble p-7 transition-colors duration-300 md:p-9",
                famille.marque ? "bg-ink text-ivory" : "hover:bg-ivory",
                large && "sm:col-span-2",
              )}
            >
              <h3
                className={cn(
                  "font-display text-2xl md:text-[1.7rem]",
                  famille.marque ? "text-ivory" : "text-ink",
                )}
              >
                {famille.famille}
              </h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed",
                  famille.marque ? "text-nude" : "text-taupe",
                )}
              >
                {famille.intro}
              </p>

              <ul
                className={cn(
                  "mt-7 space-y-4 border-t pt-6",
                  famille.marque ? "border-ivory/15" : "border-nude",
                  large && "sm:grid sm:grid-cols-2 sm:gap-x-10 sm:space-y-0 sm:gap-y-4",
                )}
              >
                {famille.lignes.map((ligne) => (
                  <li key={ligne.nom} className="flex items-baseline justify-between gap-4">
                    <span className="text-sm leading-snug">
                      {ligne.nom}
                      {ligne.duree && (
                        <span
                          className={cn(
                            "mt-0.5 block text-xs",
                            famille.marque ? "text-nude/85" : "text-taupe",
                          )}
                        >
                          {ligne.duree}
                        </span>
                      )}
                    </span>
                    <span
                      className={cn(
                        "shrink-0 font-display text-lg",
                        famille.marque ? "text-gold" : "text-ink",
                      )}
                    >
                      {ligne.prix}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
