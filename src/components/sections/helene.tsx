import { helene } from "@/data/site-content"
import { Reveal } from "@/components/ui/reveal"

/**
 * Portrait d'Hélène, sans photo d'elle : il n'en existe aucune de publique. La section tient
 * donc par le texte et par une citation de sa propre présentation, plutôt que par un portrait
 * de banque d'images ou une photo de cliente détournée.
 */
export function Helene() {
  return (
    <section id="helene" className="bg-marble py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-taupe">{helene.eyebrow}</p>
          <h2 className="text-section mt-5">{helene.titre}</h2>

          {helene.paragraphes.map((paragraphe) => (
            <p key={paragraphe} className="mt-6 text-base leading-relaxed text-taupe">
              {paragraphe}
            </p>
          ))}

          <figure className="mt-10 border-l-2 border-rose pl-6">
            <blockquote className="font-display text-xl leading-snug text-ink italic md:text-2xl">
              « {helene.citation.texte} »
            </blockquote>
            <figcaption className="eyebrow mt-3 text-taupe">{helene.citation.source}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
