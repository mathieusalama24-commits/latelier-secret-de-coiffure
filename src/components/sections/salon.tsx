import { salonSection, pourquoi } from "@/data/site-content"
import { Reveal } from "@/components/ui/reveal"

export function SalonSection() {
  return (
    <section id="salon" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {salonSection.images.map((photo, index) => (
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                  className={
                    index === 0
                      ? "aspect-[3/4] w-full object-cover"
                      : "mt-8 aspect-[3/4] w-full object-cover md:mt-12"
                  }
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="order-1 lg:order-2">
            <p className="eyebrow text-taupe">{salonSection.eyebrow}</p>
            <h2 className="text-section mt-5">{salonSection.titre}</h2>

            {salonSection.paragraphes.map((paragraphe) => (
              <p key={paragraphe} className="mt-6 text-base leading-relaxed text-taupe">
                {paragraphe}
              </p>
            ))}

            <figure className="mt-9 border-l-2 border-rose pl-6">
              <blockquote className="font-display text-xl leading-snug text-ink italic md:text-2xl">
                « {salonSection.citation.texte} »
              </blockquote>
              <figcaption className="eyebrow mt-3 text-taupe">
                {salonSection.citation.source}
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <ul className="mt-20 grid gap-px bg-nude/60 sm:grid-cols-2 lg:grid-cols-4">
          {pourquoi.map((item, index) => (
            <Reveal as="li" key={item.titre} delay={index * 0.06} className="bg-ivory p-7 md:p-8">
              <span className="font-display text-sm text-rose-deep">0{index + 1}</span>
              <h3 className="mt-4 font-display text-xl text-ink">{item.titre}</h3>
              <p className="mt-3 text-sm leading-relaxed text-taupe">{item.texte}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
