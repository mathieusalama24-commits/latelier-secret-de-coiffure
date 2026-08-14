import { faq } from "@/data/site-content"
import { Reveal } from "@/components/ui/reveal"

/**
 * `<details>` natif plutôt qu'un accordéon maison : le clavier, le lecteur d'écran et la
 * recherche dans la page (Ctrl+F ouvre le bloc correspondant) fonctionnent sans une ligne de JS.
 */
export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-taupe">{faq.eyebrow}</p>
          <h2 className="text-section mt-5">{faq.titre}</h2>
        </Reveal>

        <div className="mt-12">
          {faq.items.map((item, index) => (
            <Reveal key={item.q} delay={index * 0.04}>
              <details className="group border-b border-nude/70">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-lg text-ink transition-colors hover:text-rose md:text-xl [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="relative size-4 shrink-0 before:absolute before:top-1/2 before:left-0 before:h-px before:w-4 before:-translate-y-1/2 before:bg-rose after:absolute after:top-1/2 after:left-0 after:h-px after:w-4 after:-translate-y-1/2 after:rotate-90 after:bg-rose after:transition-transform after:duration-300 group-open:after:rotate-0"
                  />
                </summary>
                <p className="pr-10 pb-6 text-sm leading-relaxed text-taupe">{item.r}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
