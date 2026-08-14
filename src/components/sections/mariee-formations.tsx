import { ArrowRight, Check } from "lucide-react"
import { mariee, formations } from "@/data/site-content"
import { Reveal } from "@/components/ui/reveal"

export function MarieeFormations() {
  return (
    <>
      <section className="bg-marble py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="eyebrow text-taupe">{mariee.eyebrow}</p>
            <h2 className="text-section mt-5">{mariee.titre}</h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-taupe">{mariee.texte}</p>

            <ul className="mt-8 space-y-3">
              {mariee.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-ink">
                  <Check className="mt-0.5 size-4 shrink-0 text-rose" strokeWidth={1.5} />
                  {point}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="eyebrow group mt-9 inline-flex items-center gap-2 text-ink transition-colors hover:text-rose-deep"
            >
              Réserver une date
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <img
              src={mariee.image.src}
              alt={mariee.image.alt}
              width={mariee.image.width}
              height={mariee.image.height}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section id="formations" className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
          <Reveal>
            <p className="eyebrow text-taupe">{formations.eyebrow}</p>
            <h2 className="text-section mt-5">
              Transmettre <span className="italic text-rose">le métier</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-taupe">
              {formations.texte}
            </p>
            <div className="rule-gold mx-auto mt-10 h-px w-24" />
            <a
              href={formations.cta.href}
              className="eyebrow mt-10 inline-block rounded-full border border-ink/20 px-7 py-4 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
            >
              {formations.cta.label}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
