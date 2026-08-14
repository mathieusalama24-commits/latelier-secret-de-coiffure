import { produits } from "@/data/site-content"
import { Reveal } from "@/components/ui/reveal"

/** Bande produits — appuie la promesse « la fibre d'abord » avec ses propres photos de matériel. */
export function Produits() {
  return (
    <section className="bg-ink py-16 text-ivory md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold">{produits.eyebrow}</p>
          <h2 className="mt-4 font-display text-2xl text-ivory md:text-3xl">{produits.titre}</h2>
          <p className="mt-5 text-sm leading-relaxed text-nude">{produits.texte}</p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {produits.images.map((photo, index) => (
            <Reveal as="li" key={photo.src} delay={index * 0.06}>
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
                className="aspect-[3/2] w-full object-cover"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
